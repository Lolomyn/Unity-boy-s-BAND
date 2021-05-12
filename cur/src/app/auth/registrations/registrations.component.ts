import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../system/shared/services/users.service';
import {User} from '../../system/shared/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      name: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    const {email, password, name, type} = this.form.value;
    const user = new User(email, password, name, type);
    this.usersService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
            queryParams: {
              nowCanLogin: true
            }
          }
        );
      });
  }

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUserByLogin(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({forbiddenEmails: true});
          } else {
            resolve(null);
          }
        });
    });
  }
}
