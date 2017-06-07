

import {LoadingController} from "ionic-angular";
import {Injectable} from "@angular/core";

@Injectable()
export class Loader {

  constructor(public loadingCtrl: LoadingController) {

  }
  loader: any =  this.loadingCtrl.create({
    content: 'Loading.'
  });

  present(){
    this.loader.present()
  }

  hide() {
    this.loader.hide()
  }

}
