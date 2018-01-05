import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterBusPage } from '../register-bus/register-bus';
import { BusPage } from '../bus/bus';


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

}
