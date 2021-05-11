import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';

import {StudentPageComponent} from './student-page/student-page.component';

import {PrepodPageComponent} from './prepod-page/prepod-page.component';
import {PlanningPageComponent} from './planning-page/planning-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AuthGuard} from './shared/auth/auth.guard';
import {ProfilePageComponent} from './profile-page/profile-page.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'student', component: StudentPageComponent},
      {path: 'prepod', component: PrepodPageComponent},
      {path: 'planning', component: PlanningPageComponent},
      {path: 'admin', component: AdminPageComponent}
      // {path: 'profile', component: ProfilePageComponent}
    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
