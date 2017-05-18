import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SignupPage} from '../signup/signup'
import {SigninPage} from '../signin/signin'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  signupPage = SignupPage
  signinPage = SigninPage

  constructor(public navCtrl: NavController) {

  }

  onLoad(page:any){
    this.navCtrl.push(page)
  }

}
