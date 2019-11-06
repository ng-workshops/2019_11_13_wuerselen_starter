import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { Impressum2Component } from './impressum2/impressum2.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'home/impressum', component: ImpressumComponent },
  { path: 'home/impressum2', component: Impressum2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
