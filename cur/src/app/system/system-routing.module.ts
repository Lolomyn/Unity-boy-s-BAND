import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {StudentPageComponent} from './student-page/student-page.component';
import {PrepodPageComponent} from './prepod-page/prepod-page.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AuthGuard} from './shared/auth/auth.guard';

const routes: Routes = [
  {path: 'system', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'student', component: StudentPageComponent},
      {path: 'prepod', component: PrepodPageComponent},
      {path: 'admin', component: AdminPageComponent}
    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
