// Moduls
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { LayoutComponent } from './components/layout/layout.component';

// HTTP

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNaviComponent } from './components/navi/top-navi/top-navi.component';
import { HeadlineComponent } from './components/headline/headline.component';

// Interceptors


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopNaviComponent,
    HeadlineComponent,
    PageNotFoundPageComponent,
       LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    TopNaviComponent,
    HeadlineComponent
  ]
})
export class CoreModule { }
