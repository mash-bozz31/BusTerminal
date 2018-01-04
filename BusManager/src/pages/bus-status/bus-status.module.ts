import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusStatusPage } from './bus-status';

@NgModule({
  declarations: [
    BusStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(BusStatusPage),
  ],
})
export class BusStatusPageModule {}
