import { Component, OnInit } from '@angular/core';
import {AddUserModel} from '../shared/models/adduser.model';
import {User} from '../shared/models/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {AddService} from '../shared/services/add.service';
import {StudyingService} from '../shared/services/studying.service';
import {UsersService} from '../shared/services/users.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  form: FormGroup;
  user = this.studyingService.getUser();
  constructor(private addService: AddService, private studyingService: StudyingService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      login: new FormControl(),
      password: new FormControl(),
      type: new FormControl(),
    });
  }
  onSubmit1() {
    const formData = this.form.value;
    const name = String(formData.Name);
    const login = String(formData.Login);
    const password = String(formData.Password);
    const type = String(formData.Type);
    const user = new User(name, login, password, type);
    this.addService.User(user)
      .subscribe(() => {
        alert('Добавлено!');
      });
  }
}
