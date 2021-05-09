import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from '@angular/router';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {UsersService} from './system/shared/services/users.service';
import {AuthService} from './system/shared/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SystemModule} from './system/system.module';
import {AuthGuard} from './system/shared/auth/auth.guard';
import {AddService} from './system/shared/services/add.service';
import {PatientService} from './system/shared/services/patient.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
   AppRoutingModule,
    AuthModule,
    FormsModule,
    SystemModule,
  ],
  providers: [UsersService, AuthService, AuthGuard, AddService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
