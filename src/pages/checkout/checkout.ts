import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Product} from "../../models/product.model";

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  product: Product;

  ionViewWillEnter() {
    this.product = this.navParams.get('item');
    console.log(this.product);
  }
}
