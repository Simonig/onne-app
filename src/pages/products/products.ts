import {Component, OnInit} from '@angular/core';
import {ProductPage} from "../product/product";
import {EventsService} from "../../services/events";
import {Product} from "../../models/product.model";
import {NavController, NavParams} from "ionic-angular";


@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage implements OnInit {
  products: Product[];
  productPage = ProductPage;
  event_id: number;


  constructor(public navParams: NavParams,
              private eventsService: EventsService,
              public navCtrl: NavController) {
  }

  ngOnInit() {
    this.event_id= this.navParams.data;
    console.log(this.event_id);
    this.getProducts(this.event_id)

  }



  getProducts(event_id) {

    this.eventsService.getEventProducts(event_id)
      .subscribe(
        products => {
          this.products = products;
          console.log(products)
        },
        error => console.log(error)
      )
  };


}
