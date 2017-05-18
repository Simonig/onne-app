import {Component} from '@angular/core';
import {ProductsPage} from "../products/products";
import {PromotionsPage} from "../promotions/promotions";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'

})

export class EventPage {
  productsPage = ProductsPage;
  promotionsPage = PromotionsPage;

  id_evento: number;


  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.id_evento= this.navParams.get('id_evento');
    console.log(this.id_evento);

  }


}
