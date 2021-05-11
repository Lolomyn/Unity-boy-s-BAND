import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { StudentPageComponent } from './student-page/student-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PrepodPageComponent } from './prepod-page/prepod-page.component';
import {SystemComponent} from './system.component';
import {DropdownDirective} from './shared/direcrives/dropdown.directive';
import {HeaderComponent} from './shared/component/header.component';
import {SidebarComponent} from './shared/component/sidebar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
 imports: [CommonModule,
   SharedModule,
 SystemRoutingModule],
 declarations: [StudentPageComponent, PlanningPageComponent, AdminPageComponent, PrepodPageComponent, SystemComponent, DropdownDirective,
   HeaderComponent, SidebarComponent, ProfilePageComponent]
})
export class SystemModule {}
