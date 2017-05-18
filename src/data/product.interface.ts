
import {Ingredient} from "./ingredient.interface";
export interface Product {

  id:number;
  precio:number;
  name:string;
  options: Ingredient[];
  photo: string;
}
