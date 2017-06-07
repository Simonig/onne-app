import {Ingredient} from "./ingredient.interface";
export interface Product {

  id: number;
  precio: number;
  name: string;
  options: Ingredient[];
  photo: string;
}


export interface CheckoutProduct {

  amount: number;
  buyOrder: number;
  tbkUser: string;
  username: string;

}
