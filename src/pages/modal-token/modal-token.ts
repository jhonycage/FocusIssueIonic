import { Component, ViewChild, ElementRef } from '@angular/core';
import { Events, IonicPage, ModalController, NavController, NavParams, ViewController, ModalOptions, Modal, LoadingController, App, TextInput } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-modal-token',
  templateUrl: 'modal-token.html',
})
export class ModalTokenPage {

  @ViewChild('token') tokenRef: TextInput;
  private tokenForm: FormGroup;
  retry: boolean;
  title: string;
  message: string;
  imgUrl: string;
  origin: string;
  lengthIsValid: boolean;

  constructor(
    public navCtrl: NavController,
    private appCtrl: App,
    public navParams: NavParams,
    public view: ViewController,
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private event: Events
  ) {
    this.tokenForm = this.formBuilder.group({
      token: ['']
    });
  }

  ionViewDidLoad() {
    this.retry = this.navParams.get('retry');
    this.origin = this.navParams.get('origin');
    this.title = this.retry ? 'Token incorrecto' : 'Código Token';
    this.message = this.retry ? 'Para realizar este proceso, vuelve a ingresar el código de Token Móvil o físico ' :
      'Para realizar este proceso, ingresa el código de Token Móvil o físico ';
    this.imgUrl = this.retry ? 'assets/imgs/group-4.svg' : 'assets/imgs/group-19.svg';
    //this.tokenRef.setFocus();
  } 

  ionViewWillEnter() {
    this.tokenRef.setFocus();
    console.log(this.tokenRef);
  }

  ionViewDidEnter(){
  }

  closeModal() {
    this.view.dismiss();
  }

  validateToken() {
    let loading = this.loadingCtrl.create({
      content: ''
    });
    const pin = this.tokenForm.get('token').value;
    loading.present().then(() => {
      if(pin === 1234){
        loading.dismiss();
      }
    });
  }

  validateLength() {
    const pin = this.tokenForm.get('token').value;
    if (pin.length === 6) {
      this.lengthIsValid = true;
    } else {
      this.lengthIsValid = false;
    } 
  }
}
