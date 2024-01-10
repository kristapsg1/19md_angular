import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailsComponent } from './card-details/card-details.component';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
  },
  {
    path: 'add',
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
  {
    path: ':id',
    component: CardDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
