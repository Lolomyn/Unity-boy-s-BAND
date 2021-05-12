import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../system/shared/services/users.service';
import {User} from '../../system/shared/models/user.model';
import {Message} from '../../system/shared/models/message.model';
import {AuthService} from '../../system/shared/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required, Validators.maxLength (30)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    });
    this.message = new Message('danger', '');
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
    this.message = new Message('danger', '');
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params.nowCanLogin) {
          this.showMessage({
            text: 'Теперь можете войти в систему',
            type: 'success'
          });
        } else if (params.accessDenied) {
          this.showMessage({
            text: 'Авторизуйтесь, чтобы продолжить',
            type: 'warning'
          });
        }
      });
  }

  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByLogin(formData.login)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            switch (user.type) {
              case ('Администратор'): this.router.navigate(['/system', 'admin']); break;
              case ('Студент'): this.router.navigate(['/system', 'student']); break;
              case ('Преподаватель'): this.router.navigate(['/system', 'prepod']); break;
            }
            // this.router.navigate(['/system', 'student']);
          } else {
            alert('Введен неверный пароль!');
            this.showMessage
            ({
              text: 'Пароль не верный',
              type: 'danger'
            });
          }
        } else {
          alert('Такого пользователя не существует!');
          this.showMessage
          ({
            text: 'Такого пользователя не существует',
            type: 'danger'
          });
        }
      });
  }
}
