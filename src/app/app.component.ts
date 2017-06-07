import {Component, ViewChild} from '@angular/core';
import {Platform, NavController, MenuController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import firebase from 'firebase';



import {HomePage} from '../pages/home/home';
import {EventsPage} from "../pages/events/events";
import {PaymentPage} from "../pages/payment/payment";
import {OrdersPage} from "../pages/orders/orders";
import {ProfilePage} from "../pages/profile/profile";
import {AuthService} from "../services/auth";
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = HomePage;
    @ViewChild('nav') nav: NavController;
    eventsPage = EventsPage;
    paymentPage = PaymentPage;
    ordersPage = OrdersPage;
    profilePage = ProfilePage;

    isAuthenticated = false;
    userProfile: {};


    constructor(private menuCtrl: MenuController,
                private authService: AuthService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

        firebase.initializeApp({
            apiKey: "AIzaSyAqSgFAVim7JyJMiC2FUJXjtN2zte4m_sw",
            authDomain: "ionic2-recipe-71e43.firebaseapp.com",
            databaseURL: "https://ionic2-recipe-71e43.firebaseio.com",
            storageBucket: "ionic2-recipe-71e43.appspot.com",
            messagingSenderId: "1083249277286"
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.isAuthenticated = true;
                this.rootPage = EventsPage;
                this.userProfile = user;
                console.log(user);


            } else {
                this.isAuthenticated = false;
                this.rootPage = HomePage;
            }
        });

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });

    }

    onLoad(page: any) {
        this.nav.setRoot(page);
        this.menuCtrl.close()

    }

    onLogout() {
        this.authService.logout().then(response => {
            console.log(response);

            this.menuCtrl.close();
            this.nav.setRoot(HomePage)

        }).catch((err => console.log(err)));


    }
}

