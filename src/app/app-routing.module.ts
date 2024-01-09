import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:brand',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
