import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BusPage } from '../pages/bus/bus';
import { DriverListPage } from '../pages/driver-list/driver-list';
import { BusStatusPage } from '../pages/bus-status/bus-status';
import { DestinationPage } from '../pages/destination/destination';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BusPage,
    DriverListPage,
    BusStatusPage,
    DestinationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BusPage,
    DriverListPage,
    BusStatusPage,
    DestinationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
