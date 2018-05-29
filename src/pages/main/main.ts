import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions, Modal } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  launch(){
    this.showToken(false);
  }

  public showToken(retry: boolean, origin?: string) {
    const modalOptions: ModalOptions = {
        enableBackdropDismiss: false,
        cssClass: "token-modal"
    };
    const modal: Modal = this.modalCtrl.create('ModalTokenPage', { retry, origin }, modalOptions);
    modal.present();
}

}
