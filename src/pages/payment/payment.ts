import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OneClickService} from "../../services/oneclick";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private oneClickService: OneClickService,
  ) {}

  url: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  addCard = function() {
    this.oneClickService.innitInscription()
      .subscribe(
        url => {
          this.url = url;
          console.log(url)
        },
        error => console.log(error)
      )
  };

}
