
import {Product} from "./product.interface";
export interface Promotion {

  id:number;
  price:number;
  name:string;
  products: Product[];
}
