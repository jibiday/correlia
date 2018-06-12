import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthService} from "../../services/authService";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public authService: AuthService
              ) {

  }

  googleSignIn() {
    this.authService.login();
  }
}
