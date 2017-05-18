import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Event} from "../models/events.model";
import {baseUrl} from "../app/constants";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";

@Injectable()
export class EventsService {
  constructor(private http: Http) {

  }


  getEvents(): Observable<Event[]> {
    return this.http.get(baseUrl + 'events')
      .map(this.extractEvents)
  }

  getEventProducts(event_id): Observable<Product[]> {
    let data = {id_evento: event_id};
    console.log(data);
    return this.http.post(baseUrl + 'products', data).map(this.extractProducts)
  }

  private extractProducts(res: Response) {
    console.log(res.json());
    let body = res.json();
    let products: Product[] = body[0].get_carta_byid;
    return products || [];
  }


  private extractEvents(res: Response) {
    let body = res.json();
    let response = body.data || body || {};
    let events: Event[] = [];

    for (let i = response.length - 1; i >= 0; i--) {
      events.push(response[i].get_eventos)
    }

    return events
  }
}
