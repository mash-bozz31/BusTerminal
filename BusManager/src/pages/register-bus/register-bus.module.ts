import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterBusPage } from './register-bus';

@NgModule({
  declarations: [
    RegisterBusPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterBusPage),
  ],
})
export class RegisterBusPageModule {}
