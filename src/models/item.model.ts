import {Ingredient} from "../data/ingredient.interface";

export class Item {
  constructor(public id: number,
              public quantity: number,
              public option: Ingredient[]) {

  }
}

export class ItemPromo {
  constructor(public id: number,
              public products: Item[]) {
  }
}
