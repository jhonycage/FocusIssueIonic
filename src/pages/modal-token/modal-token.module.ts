import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTokenPage } from './modal-token';

@NgModule({
  declarations: [
    ModalTokenPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTokenPage),
  ],
})
export class ModalTokenPageModule {}
