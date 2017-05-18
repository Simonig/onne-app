import {Insumo} from "./insumo.interface";
export class Product {
  constructor(public id_productocarta: number,
              public id_evento: number,
              public id_promocion: number,
              public id_tipo_producto: number,
              public precio_descuento: number,
              public precio: number,
              public id_marca_productocarta: number,
              public id_tipo_producto_padre: number,
              public nombre_producto_carta: string,
              public nombre_tipo_producto_padre: string,
              public nombre_promocion: [Insumo],
              public nombre_tipo_producto: string
          ) {

  }
}
