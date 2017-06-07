import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Product, CheckoutProduct} from "../../data/product.interface";
import {Ingredient} from "../../data/ingredient.interface";
import {CheckoutPage} from "../checkout/checkout";
import {OneClickService} from "../../services/oneclick";

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage implements OnInit {
  constructor(private navParams: NavParams, private navCtrl: NavController, private oneCLickService: OneClickService) {
  }

  ingSelected: Ingredient[] = [{name: "", photo: ""}];
  productChk: CheckoutProduct;

  onAddItem() {
    const newProduct = Object.assign({}, this.product);
    this.products.push(newProduct);
    this.price += newProduct.precio;
  }

  deleteProduct(index: number, list: Ingredient[]) {
    if (this.ingSelected.length > 1) {
      this.price -= this.products[index].precio;
      list.splice(index, 1)
    }
  }

  onCheckOut() {
    //const item = new Item(this.product.id);
    this.productChk = {
      "amount": this.price,
      "buyOrder": 1,
      "tbkUser": "string",
      "username": "string"
    };

    this.oneCLickService.payProduct(this.productChk).subscribe(
      res => {
        alert(res);
        this.navCtrl.push(CheckoutPage)
      }
    )
  }


  products: Product[] = [];
  product: Product;
  price: number;

  ngOnInit() {
    let product = this.navParams.data;
    this.product = Object.assign({}, product);
    this.products.push(product);
    this.price = product.precio;
    console.log(product)
  }


}
