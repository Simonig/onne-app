import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {EventsPage} from "../pages/events/events";
import {EventPage} from "../pages/event/event";
import {ProductsPage} from "../pages/products/products";
import {PromotionsPage} from "../pages/promotions/promotions";
import {PromotionPage} from "../pages/promotion/promotion";
import {ProductPage} from "../pages/product/product";
import {SignupPage} from "../pages/signup/signup";
import {SigninPage} from "../pages/signin/signin";
import {ProfilePage} from "../pages/profile/profile";
import {OrdersPage} from "../pages/orders/orders";
import {PaymentPage} from "../pages/payment/payment";
import {EventInfoPage} from "../pages/event-info/event-info";
import {CheckoutPage} from "../pages/checkout/checkout";
import {OneClickService} from "../services/oneclick";
import {EventsService} from "../services/events";
import {AuthService} from "../services/auth";
import {HttpModule} from "@angular/http";
import {Facebook} from "@ionic-native/facebook";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    EventPage,
    ProductsPage,
    PromotionsPage,
    PromotionPage,
    ProductPage,
    SignupPage,
    SigninPage,
    ProfilePage,
    OrdersPage,
    PaymentPage,
    EventInfoPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    EventPage,
    ProductsPage,
    PromotionsPage,
    ProductPage,
    SignupPage,
    SigninPage,
    PromotionPage,
    ProfilePage,
    OrdersPage,
    PaymentPage,
    EventInfoPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    EventsService,
    OneClickService,
    InAppBrowser
  ]
})
export class AppModule {
}
