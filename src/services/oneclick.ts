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
            .map(url => {
                return url
            })
    }

    payProduct(products):Observable<any>{

      return this.http.post(baseUrl + this.url + '/initInscription', products)
        .map(url => {
          return url
        })
    }


}
