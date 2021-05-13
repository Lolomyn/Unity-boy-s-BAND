import {Component, Input, OnInit} from '@angular/core';
import {AddUserModel} from '../shared/models/adduser.model';
import {User} from '../shared/models/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {AddService} from '../shared/services/add.service';
import {StudyingService} from '../shared/services/studying.service';
import {UsersService} from '../shared/services/users.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-records-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  form: FormGroup;
  user = this.studyingService.getUser();
  constructor(private addService: AddService, private studyingService: StudyingService, private  usersService: UsersService) { }
  // @Input() userr: User;
  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      login: new FormControl(),
      password: new FormControl(),
      type: new FormControl(),
      group: new FormControl()
    });
  }
  deleteThisUser(deleteUser: User): void {
    this.usersService.deleteUserById(deleteUser).subscribe(() => {
      alert('Пользователь удален!');
    });
  }

  edit() {
    document.getElementById('edit_id').style.display = 'block';
    document.getElementById('add_id').style.display = 'none';
  }
  //
  add() {
    document.getElementById('edit_id').style.display = 'none';
    document.getElementById('add_id').style.display = 'block';
  }
  //
  update(): void {
    const formData = this.form.value;
    //
    const id = Number(formData.id);
    const name = String(formData.name);
    const login = String(formData.login);
    const password = String(formData.password);
    const type = String(formData.type);
    const group = String(formData.group);
    const user = new User(name, login, password, type, group, id);
    this.usersService.updateUser(user).subscribe();
    alert('Изменения сохранены!');
  }
  //
  onSubmit1() {
    const formData = this.form.value;
    const name = String(formData.name);
    const login = String(formData.login);
    const password = String(formData.password);
    const type = String(formData.type);
    const group = String(formData.group);
    const user = new User(name, login, password, type, group);
    this.addService.User(user)
      .subscribe(() => {
        alert('Пользователь добавлен!');
      });
  }
}
