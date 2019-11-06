import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { Impressum2Component } from './impressum2/impressum2.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, TranslateModule],
  declarations: [HomeComponent, ImpressumComponent, Impressum2Component]
})
export class HomeModule {}
