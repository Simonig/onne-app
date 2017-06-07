
export interface CreditCard {

  id_medio_pago:number;
  id_usuario:number;
  ult_cuatro_digitos_medio_pago:string;
  token:string;
  url_webpay: string;
  id_user_transbank: string;
  marca_tarjeta: string;
  nombre: string;
  codigo_respuesta: string;
  codigo_autorizacion: string;
  estado_medio_pago: boolean;
}

