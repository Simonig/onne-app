import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {baseUrl} from "../app/constants";
import {Observable} from "rxjs";

@Injectable()
export class OneClickService {
  constructor(private http: Http) {

  }

  url = 'oneclick';

  innitInscription(): Observable<any> {

    const data = {
      email: "simon.ig13@gmail.com",
      username: "Simon Iribarren",
      responseURL: "http://onne.cl:10010/v1/oneclick/finishInscription"
    };
    return this.http.post(baseUrl + this.url + '/initInscription', data)
      .map(res => {
        const response = res.json();
        console.log(response);
        return response
      })
  }

  getCards(): Observable<any> {
    const userId = 1;
    return this.http.get(baseUrl + 'users/' + userId + '/getCards')
      .map(res => {
        const response = res.json()
        console.log(response);
        return response
      })
  }


  payProduct(products): Observable<any> {



    return this.http.post(baseUrl + this.url + '/authorize', products)
      .map(url => {
        return url.json().body
      })
  }


}
