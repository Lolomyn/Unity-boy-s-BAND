import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from './shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { BillPageComponent } from './bill-page/bill-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import {SystemComponent} from './system.component';
import {DropdownDirective} from './shared/direcrives/dropdown.directive';
import {HeaderComponent} from './shared/component/header.component';
import {SidebarComponent} from './shared/component/sidebar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
 imports: [CommonModule,
   SharedModule,
 SystemRoutingModule],
 declarations: [BillPageComponent, PlanningPageComponent, RecordsPageComponent, HistoryPageComponent, SystemComponent, DropdownDirective,
   HeaderComponent, SidebarComponent, ProfilePageComponent]
})
export class SystemModule {}
