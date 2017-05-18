import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController} from 'ionic-angular';
import {AuthService} from "../../services/auth";
import {EventsPage} from "../events/events";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private authService: AuthService,
              private alertCtrl: AlertController) {

  }

  facebookLogin() {
    const loading = this.loadingCtrl.create({
      content: 'Iniciando sesion...'
    });
    loading.present();
    this.authService.facebookSign().then((data) => {
      console.log(data);
      loading.dismiss();
      this.navCtrl.setRoot(EventsPage)
    }).catch((error) => {
      console.log("Firebase failure: ", error);
      loading.dismiss()

    });

  }


  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss()
      })
      .catch(err => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin failed',
          message: err.message,
          buttons: ['Ok']
        });
        alert.present()
      })
  }
}



