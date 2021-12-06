import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Moduls
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsDemoPageComponent } from './pages/components-demo-page/components-demo-page.component';

// Components

@NgModule({
  declarations: [
    ComponentsDemoPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class ComponentsDemoModule { }
