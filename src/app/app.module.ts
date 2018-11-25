import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";

import {AddPage} from "../pages/add/add";
import {ContactPage} from "../pages/contact/contact";
import {ChartPage} from "../pages/chart/chart";
import {TabsPage} from "../pages/tabs/tabs";

import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {IonicStorageModule} from "@ionic/storage";
import {AuthService} from "../services/authService";
import {AddValuePage} from "../pages/add-value/add-value";
import {ValuesListPage} from "../pages/values-list/values-list";
import {ColorPickerModule} from "ngx-color-picker";
import {ValueProvider} from "../providers/value/valueProvider";
import {NoteProvider} from "../providers/note/note";
import {PointProvider} from "../providers/point/point";
import {AddEventOrIntervalPage} from "../pages/add-event-or-interval/add-event-or-interval";
import {MaterialIconsModule} from "ionic2-material-icons";

@NgModule({
  declarations: [
    MyApp,
    AddPage,
    AddValuePage,
    AddEventOrIntervalPage,
    ValuesListPage,
    ContactPage,
    ChartPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
    MaterialIconsModule,
    ColorPickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPage,
    ContactPage,
    ChartPage,
    AddValuePage,
    AddEventOrIntervalPage,
    ValuesListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ValueProvider,
    NoteProvider,
    PointProvider
  ]
})
export class AppModule {}
