import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterBusPage } from '../register-bus/register-bus';
import { BusPage } from '../bus/bus';
import { DriverListPage } from '../driver-list/driver-list';
import { BusStatusPage } from '../bus-status/bus-status';
import { DestinationPage } from '../destination/destination';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  //this is method register
  Register(){
    this.navCtrl.push(BusPage);
  }
  driver(){
    this.navCtrl.push(DriverListPage);
  }
status(){
  this.navCtrl.push(BusStatusPage);
}
destination(){
  this.navCtrl.push(DestinationPage);
}
}
