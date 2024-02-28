import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { CustomNavigationSegmentsComponent } from './components/custom-navigation-segments/custom-navigation-segments.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    CustomHeaderComponent,
    CustomNavigationSegmentsComponent,
    CustomFooterComponent,
  ]
})
export class HomePageModule {}
