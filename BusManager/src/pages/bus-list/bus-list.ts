import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusPage } from '../bus/bus';
/**
 * Generated class for the BusListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-list',
  templateUrl: 'bus-list.html',
})
export class BusListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  register(){
    this.navCtrl.push(BusPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BusListPage');
  }

}
