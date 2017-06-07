import {Component} from '@angular/core';
import {NavParams, LoadingController} from 'ionic-angular';
import {OneClickService} from "../../services/oneclick";
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {CreditCard} from "../../models/creditcard.interface";


/*
 Generated class for the Payment page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(private iab: InAppBrowser, public navParams: NavParams, private oneClickService: OneClickService, public loadingCtrl: LoadingController) {
  }

  token: string;
  creditCards: {};

  loader: any =  this.loadingCtrl.create({
    content: 'Loading.'
  });



  ionViewWillEnter() {
    console.log('obetener tarjetas');
    this.getCards()
  }


  getCards = function () {
    this.loader.present();
    this.oneClickService.getCards().subscribe(data => {
      this.creditCards = data;
      this.loader.dismiss();
    })
  };


  addCard = function () {
    const me = this;

    this.loader.present();
    this.oneClickService.innitInscription()
      .subscribe(
        data => {
          console.log(data);

          const pageContent = '<html><head></head><body><form name="frmGoWebpay" action="' + data.urlWebpay + '" method="post" id="loginForm" target="_self">' +
            '<input type="hidden" id="TBK_TOKEN" name="TBK_TOKEN" value="' + data.token + '">' +
            '</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';

          const pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);

          const browser = this.iab.create(pageContentUrl, "_blank", "hidden=no,location=no,clearsessioncache=yes,clearcache=yes");

          browser.on('loadstop').subscribe(function (event) {
            me.loader.dismiss()
          });

          browser.on('exit').subscribe(function (event) {
            console.log(event);

            me.getCards()
          });


        },
        error => console.log(error)
      )
  };

}
