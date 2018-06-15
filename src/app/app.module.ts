import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {AddPage} from '../pages/add/add';
import {ContactPage} from '../pages/contact/contact';
import {ChartPage} from '../pages/chart/chart';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DatasetService} from '../services/datasetService';
import {IonicStorageModule} from "@ionic/storage";
import {AngularFireModule} from "angularfire2";
import {config} from "./app.firebaseconfig";
import {AuthService} from "../services/authService";
import {AngularFireAuth} from "angularfire2/auth";
import {AddValuePage} from "../pages/add-value/add-value";
import {ValuesListPage} from "../pages/values-list/values-list";
import {ColorPickerModule} from "ngx-color-picker";

@NgModule({
  declarations: [
    MyApp,
    AddPage,
    AddValuePage,
    ValuesListPage,
    ContactPage,
    ChartPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    ColorPickerModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPage,
    ContactPage,
    ChartPage,
    AddValuePage,
    ValuesListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatasetService,
    AuthService,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
