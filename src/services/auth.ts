import {Injectable} from "@angular/core";
import firebase from 'firebase';
import 'rxjs/Rx';
import {baseUrl} from "../app/constants";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {Facebook} from "@ionic-native/facebook";

@Injectable()
export class AuthService {

    constructor(private http: Http, private fb: Facebook) {
    }

    appID: number = 575325395996476;


    signup(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    signin(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password)

    }

    facebookSign() {
        return this.fb.login(['email', 'public_profile']).then((response) => {
            return this.SendFbToken(response).subscribe(response => {
                console.log("response sendFbToken", response);
                return response
            }, error => {
                console.log(error)
            })

        }).catch((error) => {
            console.log(error);
        });
    }

    SendFbToken(data): Observable<any> {
        console.log("SEND FB TOKEN");
        console.log(data);
        return this.http.post(baseUrl + 'users', data).map(this.extractInfo)
    }

    private extractInfo(res: Response) {
        let body = res.json();
        console.log(res.json());
        return body
    }


    logout() {
        return this.fb.logout()
    }
}


