import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// PAGES
import { ComponentsDemoPageComponent } from 'src/app/components-demo/pages/components-demo-page/components-demo-page.component';
import { LayoutComponent } from 'src/app/core/components/layout/layout.component';
import { PageNotFoundPageComponent } from 'src/app/core/pages/page-not-found-page/page-not-found-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'modul/dashboard', pathMatch: 'full' },
  { path: 'componentsdemo', component: ComponentsDemoPageComponent },
  {
    path: 'modul',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { path: '**', component: PageNotFoundPageComponent }
    ]
  },
  { path: '**', component: PageNotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
