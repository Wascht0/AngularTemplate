// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';

// Components
import { DashboardComponent } from 'src/app/dashboard/pages/dashboard/dashboard.component';
import { DashboardContentComponent } from 'src/app/dashboard/components/dashboard-content/dashboard-content.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContentComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    SharedModule
  ],
  exports: [
  ]
})

export class DashboardModule { }
