import {Component, OnInit} from '@angular/core';
import {NavParams} from "ionic-angular";
import {Promotion} from "../../data/promotion.interface";


@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html'
})
export class PromotionPage implements OnInit {
  promo: Promotion;
  products: {}[] = [];


  constructor(private navParams: NavParams) {
  }



  onCheckOut() {
    //console.log(new Item(this.product.id, this.quantity, this.ingSelected) )
  }


  ngOnInit() {
    this.promo = this.navParams.data;
    for (let i = this.promo.products.length - 1; i >= 0; i--) {
      this.products.push({
        id: this.promo.products[i].id,
        quantity: 1,
        ingredient: {name: "", photo: ""},
        options: this.promo.products[i].options,
        name: this.promo.products[i].name
      })

    }

  }

}
