webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTokenPageModule", function() { return ModalTokenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_token__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalTokenPageModule = /** @class */ (function () {
    function ModalTokenPageModule() {
    }
    ModalTokenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_token__["a" /* ModalTokenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_token__["a" /* ModalTokenPage */]),
            ],
        })
    ], ModalTokenPageModule);
    return ModalTokenPageModule;
}());

//# sourceMappingURL=modal-token.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTokenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalTokenPage = /** @class */ (function () {
    function ModalTokenPage(navCtrl, appCtrl, navParams, view, modalCtrl, formBuilder, loadingCtrl, event) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.event = event;
        this.tokenForm = this.formBuilder.group({
            token: ['']
        });
    }
    ModalTokenPage.prototype.ionViewDidLoad = function () {
        this.retry = this.navParams.get('retry');
        this.origin = this.navParams.get('origin');
        this.title = this.retry ? 'Token incorrecto' : 'Código Token';
        this.message = this.retry ? 'Para realizar este proceso, vuelve a ingresar el código de Token Móvil o físico ' :
            'Para realizar este proceso, ingresa el código de Token Móvil o físico ';
        this.imgUrl = this.retry ? 'assets/imgs/group-4.svg' : 'assets/imgs/group-19.svg';
        //this.tokenRef.setFocus();
    };
    ModalTokenPage.prototype.ionViewWillEnter = function () {
        this.tokenRef.setFocus();
        console.log(this.tokenRef);
    };
    ModalTokenPage.prototype.ionViewDidEnter = function () {
    };
    ModalTokenPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalTokenPage.prototype.validateToken = function () {
        var loading = this.loadingCtrl.create({
            content: ''
        });
        var pin = this.tokenForm.get('token').value;
        loading.present().then(function () {
            if (pin === 1234) {
                loading.dismiss();
            }
        });
    };
    ModalTokenPage.prototype.validateLength = function () {
        var pin = this.tokenForm.get('token').value;
        if (pin.length === 6) {
            this.lengthIsValid = true;
        }
        else {
            this.lengthIsValid = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('token'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* TextInput */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* TextInput */]) === "function" && _a || Object)
    ], ModalTokenPage.prototype, "tokenRef", void 0);
    ModalTokenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-token',template:/*ion-inline-start:"/Users/jhonycage/Documents/workspace/ionic/focusIssue/src/pages/modal-token/modal-token.html"*/'<ion-content no-padding>\n  <div class="top">\n    <div class="icon-container">\n      <img [src]="imgUrl">\n    </div>\n    <div class="title">\n      {{title}}\n    </div>\n    <div class="message">\n      {{message}}\n    </div>\n    <form [formGroup]="tokenForm">\n      <div>\n        <ion-input (ionChange)="validateLength()" class="input-token" id="token" type="text" maxlength="6" formControlName="token" #token></ion-input>\n      </div>\n    </form>\n    <div class="close-img" (click)="closeModal()">\n      <img src="assets/imgs/closeicon_token.svg">\n    </div>\n    <button [disabled]="!lengthIsValid" hidden-md-down ion-button full id="btnValidate" class="modal-btn" (click)="validateToken()">Continuar</button>\n  </div>\n</ion-content>\n<ion-footer hidden-lg-up>\n  <button [hidden]="!lengthIsValid" ion-button full id="btnValidate" class="modal-btn" (click)="validateToken()">Continuar</button>\n</ion-footer>'/*ion-inline-end:"/Users/jhonycage/Documents/workspace/ionic/focusIssue/src/pages/modal-token/modal-token.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _j || Object])
    ], ModalTokenPage);
    return ModalTokenPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=modal-token.js.map

/***/ })

});
//# sourceMappingURL=0.js.map