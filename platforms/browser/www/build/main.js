webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_Symptom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PointProvider = /** @class */ (function () {
    function PointProvider(storage) {
        var _this = this;
        this.storage = storage;
        this.points = [];
        this.storage.get('points').then(function (points) {
            _this.points = points !== null ? points : [];
        });
    }
    PointProvider.prototype.save = function (point) {
        this.points.push(point);
        this.storage.set('points', this.points);
    };
    PointProvider.prototype.getAll = function () {
        var _this = this;
        return this.storage.get('points').then(function (points) {
            _this.points = points !== null ? points : [];
            _this.points.sort(function (a, b) { return a.millis - b.millis; });
            _this.points = _this.points.map(function (point) {
                var res = new __WEBPACK_IMPORTED_MODULE_1__domain_Symptom__["b" /* Point */](point.millis, point.y, point.valueId);
                res.millisEnd = point.millisEnd;
                return res;
            });
            return _this.points.slice();
        });
    };
    PointProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PointProvider);
    return PointProvider;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_add__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_chart__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values_list_values_list__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__chart_chart__["a" /* ChartPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__add_add__["a" /* AddPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__values_list_values_list__["a" /* ValuesListPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\correlia\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="2">\n  <ion-tab tabIcon="beer"></ion-tab>\n  <ion-tab [root]="tab1Root" tabIcon="stats"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="add-circle"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="flask"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\correlia\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_note_note__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_point_point__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_value_valueProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, toastCtrl, noteProvider, pointProvider, valueProvider) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.noteProvider = noteProvider;
        this.pointProvider = pointProvider;
        this.valueProvider = valueProvider;
        this.ValueType = __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */];
        this.now = __WEBPACK_IMPORTED_MODULE_2_moment__().format('YYYY-MM-DDTHH:mmZ');
        this.values = [];
        this.grouped = {};
        this.selectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__().format('YYYY-MM-DDTHH:mmZ');
    }
    AddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.valueProvider.getAll().then(function (values) {
            _this.values = values;
        });
    };
    AddPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.selectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__().format('YYYY-MM-DDTHH:mmZ');
        this.valueProvider.getAll().then(function (values) {
            _this.values = _this.values.concat(values.filter(function (newVal) { return !_this.values.find(function (v) { return v.id === newVal.id; }); }));
            _this.values = _this.values.filter(function (deletedVal) { return values.find(function (v) { return v.id === deletedVal.id; }); });
            _this.grouped.intensities = _this.values.filter(function (val) { return val.type == __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].intensity; });
            _this.grouped.events = _this.values.filter(function (val) { return val.type == __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].event; });
            _this.grouped.intervals = _this.values.filter(function (val) { return val.type == __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].interval; });
        });
    };
    AddPage.prototype.add = function () {
        var _this = this;
        var wasAdded = false;
        var date = __WEBPACK_IMPORTED_MODULE_2_moment__(this.selectedDate).toDate().valueOf();
        var note = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["a" /* Note */](date);
        this.values.forEach(function (value) {
            if (value.type === __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].intensity || value.type === __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].event) {
                if (!isNaN(value.tempIntensity) && value.tempIntensity != null) {
                    var point = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](date, value.tempIntensity, value.id);
                    _this.pointProvider.save(point);
                    wasAdded = true;
                    note.points.push(point);
                    value.tempIntensity = null;
                }
            }
            if (value.type === __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].interval) {
                if (value.tempIntervalStart && value.tempIntervalEnd) {
                    var point = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](__WEBPACK_IMPORTED_MODULE_2_moment__(value.tempIntervalStart).toDate().valueOf(), 1, value.id);
                    point.millisEnd = __WEBPACK_IMPORTED_MODULE_2_moment__(value.tempIntervalEnd).toDate().valueOf();
                    _this.pointProvider.save(point);
                    wasAdded = true;
                    note.points.push(point);
                    value.tempIntervalStart = null;
                    value.tempIntervalEnd = null;
                }
            }
        });
        if (wasAdded) {
            this.noteProvider.save(note);
            var toast = this.toastCtrl.create({
                message: 'Note was added successfully',
                duration: 1500,
                position: 'top'
            });
            toast.present();
        }
    };
    AddPage.prototype.toggleEvent = function (value) {
        value.tempIntensity = value.tempIntensity ? null : 1;
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"E:\correlia\src\pages\add\add.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Correlia</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding style="height: 100%;">\n  <ion-card>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>\n          <ion-icon name="calendar"></ion-icon>\n        </ion-label>\n        <ion-datetime displayFormat="D MMMM YYYY HH:mm" pickerFormat="D MMMM YYYY HH:mm"\n                      [(ngModel)]="selectedDate"></ion-datetime>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button>Unread</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-card>\n\n  <ion-card *ngIf="grouped.intensities?.length > 0">\n    <ion-card-header>Values:</ion-card-header>\n    <ion-card-content>\n      <ion-list *ngFor="let value of grouped.intensities">\n        <ion-item *ngIf="value.type === ValueType.intensity" style="position:relative;" no-lines\n                  [style.backgroundColor]="value.tempIntensity || value.tempIntensity === 0 ? \'#ebeee5\' : \'\'">\n          <ion-label [style.color]="value.color" style="position:absolute;"><b>{{value.name}}</b></ion-label>\n          <ion-range pin [min]="value.range.min" [max]="value.range.max" step="1"\n                     [snaps]="value.range.max - value.range.min <= 20" [color]="\'dark\'"\n                     [(ngModel)]="value.tempIntensity">\n            <div style="width: 20px;" range-left>\n              <ion-icon [style.color]="value.color" small\n                        [name]="value.tempIntensity || value.tempIntensity === 0 ? \'trash\' : \'body\'"\n                        (click)="value.tempIntensity = undefined"></ion-icon>\n            </div>\n            <b [style.color]="value.color" style="width: 20px;" range-right>\n              {{value.tempIntensity}}\n            </b>\n          </ion-range>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="grouped.events?.length > 0">\n    <ion-card-header>Events:</ion-card-header>\n    <ion-card-content>\n    <span *ngFor="let value of grouped.events">\n  <ion-chip\n    style="border: 1px solid lightgrey;"\n    [style.backgroundColor]="value.tempIntensity || value.tempIntensity === 0 ? \'#ebeee5\' : \'white\'"\n    *ngIf="value.type === ValueType.event"\n    (click)="toggleEvent(value)">\n      <ion-icon [style.color]="value.color"\n                [name]="value.tempIntensity === 1 ? \'checkmark-circle\' : \'radio-button-off\'"></ion-icon>\n      <span style="margin-right: 15px;" [style.color]="value.color"><b>{{value.name}}</b></span>\n    </ion-chip>\n  </span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="grouped.intervals?.length > 0">\n    <ion-card-header>Intervals:</ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row *ngFor="let value of grouped.intervals">\n          <ion-col col-12 *ngIf="value.type === ValueType.interval" style="text-align: center">\n            <span [style.color]="value.color"><b>{{value.name}}</b></span>\n          </ion-col>\n          <ion-col [style.backgroundColor]="value.tempIntervalStart ? \'#ebeee5\' : \'\'" col-6\n                   *ngIf="value.type === ValueType.interval" style="border-bottom: 1px solid lightgrey;">\n            <ion-datetime displayFormat="D.MM.YY HH:mm" pickerFormat="D MMMM YYYY HH:mm"\n                          [ngModel]="value.tempIntervalStart || now"\n                          [(ngModel)]="value.tempIntervalStart"></ion-datetime>\n          </ion-col>\n          <ion-col [style.backgroundColor]="value.tempIntervalEnd ? \'#ebeee5\' : \'\'" col-6\n                   *ngIf="value.type === ValueType.interval" style="border-bottom: 1px solid lightgrey;">\n            <ion-datetime displayFormat="D.MM.YY HH:mm" pickerFormat="D MMMM YYYY HH:mm"\n                          [ngModel]="value.tempIntervalEnd || now"\n                          [(ngModel)]="value.tempIntervalEnd"></ion-datetime>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngIf="values.length === 0" class="text-md-light hint">\n    <b>Add some values first</b>\n    <br>\n    <b>:)</b>\n  </div>\n\n</ion-content>\n\n<ion-footer no-border>\n  <button [disabled]="values.length === 0" ion-button block large (click)="add()">\n    add note\n  </button>\n</ion-footer>\n'/*ion-inline-end:"E:\correlia\src\pages\add\add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_note_note__["a" /* NoteProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_point_point__["a" /* PointProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_value_valueProvider__["a" /* ValueProvider */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteProvider = /** @class */ (function () {
    function NoteProvider(storage) {
        var _this = this;
        this.storage = storage;
        this.notes = [];
        this.storage.get('notes').then(function (notes) {
            _this.notes = notes !== null ? notes : [];
        });
    }
    NoteProvider.prototype.save = function (value) {
        this.notes.push(value);
        this.storage.set('notes', this.notes);
    };
    NoteProvider.prototype.getAll = function () {
        var _this = this;
        return this.storage.get('notes').then(function (notes) {
            _this.notes = notes !== null ? notes : [];
            return _this.notes.slice();
        });
    };
    NoteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], NoteProvider);
    return NoteProvider;
}());

//# sourceMappingURL=note.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\correlia\src\pages\contact\contact.html"*/'<div style="height: 100%; display: flex !important; justify-content: center !important; align-items: center !important; ">\n  <button disabled ion-button icon-start [color]="\'white\'"> <ion-icon name="logo-google"></ion-icon>sign in with google</button>\n</div>\n'/*ion-inline-end:"E:\correlia\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// // import {AngularFireDatabase} from "angularfire2/database";
// // import {FirebaseAuth} from 'angularfire2';
// import * as firebase from 'firebase';
// import {FirebaseAuth} from '@firebase/auth-types';
//
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authService.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* unused harmony export Dataset */
/* unused harmony export ChartType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_zoom__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chartjs_plugin_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_point_point__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_value_valueProvider__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChartPage = /** @class */ (function () {
    function ChartPage(navCtrl, pointProvider, actionSheetCtrl, valueProvider) {
        this.navCtrl = navCtrl;
        this.pointProvider = pointProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.valueProvider = valueProvider;
        this.chartView = ChartType.overall;
        this.points = [];
        this.values = [];
        this.datasets = [];
        this.segmentButtons = [
            ChartType.overall,
            ChartType.day,
            ChartType.week,
            ChartType.month,
            ChartType.year
        ];
    }
    ChartPage.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_chart_js__["defaults"].global.elements.point.hitRadius = 5;
        __WEBPACK_IMPORTED_MODULE_2_chart_js__["defaults"].global.elements.point.radius = 1;
        this.ctx = 'myChart';
        this.myChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__(this.ctx, {
            type: 'line',
            options: {
                // @ts-ignore
                pan: {
                    // Boolean to enable panning
                    enabled: true,
                    // Panning directions. Remove the appropriate direction to disable
                    // Eg. 'y' would only allow panning in the y direction
                    mode: 'x'
                },
                // Container for zoom options
                zoom: {
                    // Boolean to enable zooming
                    enabled: true,
                    // Zooming directions. Remove the appropriate direction to disable
                    // Eg. 'y' would only allow zooming in the y direction
                    mode: 'x',
                },
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 15
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        filter: function (legendItem) {
                            return !legendItem.text.includes('(trend)') && !legendItem.text.includes('(event)') &&
                                !legendItem.text.includes('(intervalTop)') && !legendItem.text.includes('(intervalBottom)');
                        },
                    },
                    onClick: function (e, legendItem) {
                        var index = legendItem.datasetIndex;
                        var ci = _this.myChart;
                        var value = _this.values.find(function (val) { return val.id === ci.data.datasets[index].data[0].valueId; });
                        var valueProvider = _this.valueProvider;
                        var actionSheet = _this.actionSheetCtrl.create({
                            title: "" + value.name,
                            buttons: [
                                {
                                    text: value.hidden ? 'Show' : 'Hide',
                                    handler: function () {
                                        value.hidden = !value.hidden;
                                        valueProvider.update(value).then(function () {
                                            _this.updateDatasets();
                                            ci.update();
                                        });
                                    }
                                },
                                {
                                    text: value.isFilled ? "Don't fill" : 'Fill',
                                    handler: function () {
                                        value.isFilled = !value.isFilled;
                                        valueProvider.update(value).then(function () {
                                            _this.updateDatasets();
                                            ci.update();
                                        });
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                }
                            ]
                        });
                        actionSheet.present();
                    }
                },
                tooltips: {
                    mode: 'nearest',
                    displayColors: false,
                    callbacks: {
                        title: function (tooltips, data) {
                            return __WEBPACK_IMPORTED_MODULE_4_moment__(tooltips[0].xLabel).format('D MMMM YYYY HH:mm');
                        }
                    }
                },
                scales: {
                    xAxes: [{
                            gridLines: {
                                display: true
                            },
                            type: 'time',
                            time: {
                                minUnit: 'minute'
                            },
                            ticks: {
                                display: true,
                                maxRotation: 0,
                                minRotation: 0
                            }
                        }],
                    yAxes: [
                        {
                            id: 'intensity',
                            position: 'left',
                            gridLines: {
                                display: false,
                                drawTicks: false
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'intensity'
                            },
                            ticks: {
                                display: false,
                            }
                        },
                        {
                            id: 'negative',
                            position: 'left',
                            gridLines: {
                                display: false,
                                drawTicks: false
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'negative'
                            },
                            ticks: {
                                display: false
                            }
                        },
                        {
                            id: 'natural',
                            position: 'left',
                            gridLines: {
                                display: false,
                                drawTicks: false
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'natural'
                            },
                            ticks: {
                                display: false,
                                beginAtZero: true
                            }
                        },
                        {
                            id: 'event',
                            position: 'left',
                            gridLines: {
                                display: false
                            },
                            scaleLabel: {
                                display: false,
                                fontSize: 9,
                                labelString: 'event'
                            },
                            ticks: {
                                display: false
                            }
                        },
                        {
                            id: 'zero',
                            position: 'left',
                            gridLines: {
                                display: true
                            },
                            scaleLabel: {
                                display: false,
                                fontSize: 9,
                            },
                            ticks: {
                                display: true
                            }
                        }
                    ]
                },
            }
        });
        this.myChart.options.scales.yAxes[0].ticks.suggestedMin = -10;
        this.myChart.options.scales.yAxes[0].ticks.suggestedMax = 10;
        this.myChart.options.scales.yAxes[0].ticks.stepSize = 1;
        this.myChart.options.scales.yAxes[1].ticks.suggestedMin = -10;
        this.myChart.options.scales.yAxes[1].ticks.suggestedMax = 10;
        this.myChart.options.scales.yAxes[1].ticks.stepSize = 1;
        this.myChart.options.scales.yAxes[3].ticks.suggestedMin = 1;
        this.myChart.options.scales.yAxes[3].ticks.suggestedMax = 2;
        this.myChart.options.scales.yAxes[4].ticks.suggestedMin = -10;
        this.myChart.options.scales.yAxes[4].ticks.suggestedMax = 10;
        this.myChart.options.scales.yAxes[4].ticks.stepSize = 1;
        this.datasets.forEach(function (dataset) {
            _this.myChart.data.datasets.push({
                label: dataset.value.name,
                data: dataset.points,
                backgroundColor: [
                    dataset.value.color
                ],
                borderColor: [
                    dataset.value.color
                ],
                fill: dataset.value.isFilled,
                borderWidth: 1,
                yAxisID: dataset.value.range.name,
                hidden: dataset.value.hidden
            });
        });
        // this.drawPointLabels();
    };
    ChartPage.prototype.updateDatasets = function () {
        var _this = this;
        var unit = null;
        var displayFormat = {
            millisecond: 'hh:mm',
            second: 'hh:mm',
            minute: 'hh:mm',
            hour: 'hh:mm',
            day: 'D MMM YY',
            week: 'D MMM YY',
            month: 'MMM YYYY',
            year: 'YYYY'
        };
        this.datasets = [];
        this.pointProvider.getAll().then(function (points) {
            _this.points = points;
            _this.valueProvider.getAll().then(function (values) {
                _this.values = values;
                _this.points.forEach(function (point) {
                    var dataset = _this.datasets.find(function (dataset) { return dataset.value.id === point.valueId; });
                    if (!dataset) {
                        dataset = new Dataset('points');
                        var value = _this.values.find(function (val) { return val.id === point.valueId; });
                        if (value) {
                            dataset.value = value;
                            _this.datasets.push(dataset);
                        }
                    }
                    switch (_this.chartView.value) {
                        case ChartType.overall.value:
                            break;
                        case ChartType.day.value:
                            point.millis = __WEBPACK_IMPORTED_MODULE_4_moment__({ hour: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).hour(), minute: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).minute() }).valueOf();
                            unit = 'hour';
                            displayFormat['hour'] = 'HH:mm';
                            break;
                        case ChartType.week.value:
                            point.millis = __WEBPACK_IMPORTED_MODULE_4_moment__({
                                day: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).day(),
                                hour: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).hour(),
                                minute: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).minute()
                            }).valueOf();
                            unit = 'day';
                            displayFormat['day'] = 'ddd';
                            break;
                        case ChartType.month.value:
                            point.millis = __WEBPACK_IMPORTED_MODULE_4_moment__({ day: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).date() }).valueOf();
                            unit = 'day';
                            displayFormat['day'] = 'D';
                            break;
                        case ChartType.year.value:
                            point.millis = __WEBPACK_IMPORTED_MODULE_4_moment__({
                                month: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).month(),
                                day: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).date(),
                                hour: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).hour(),
                                minute: __WEBPACK_IMPORTED_MODULE_4_moment__(point.x).minute()
                            }).valueOf();
                            unit = 'month';
                            displayFormat['month'] = 'MMM';
                            break;
                    }
                    dataset.points.push(point);
                });
                _this.myChart.data.datasets = [];
                _this.datasets.forEach(function (dataset) {
                    dataset.points.sort(function (a, b) { return a.millis - b.millis; });
                    _this.myChart.data.datasets.push({
                        label: dataset.value.name,
                        data: dataset.points,
                        backgroundColor: [
                            dataset.value.color
                        ],
                        borderColor: [
                            dataset.value.color
                        ],
                        borderWidth: 1,
                        showLine: dataset.value.isStepped,
                        steppedLine: dataset.value.isStepped,
                        fill: dataset.value.isFilled,
                        pointRadius: dataset.value.type === __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].event || dataset.value.type === __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].interval ? 0 : 2,
                        yAxisID: dataset.value.range.name,
                        hidden: dataset.value.hidden
                    });
                });
                _this.createMovingAverageDatasets();
                _this.drawEvents();
                if (_this.chartView === ChartType.overall) {
                    _this.drawIntervals();
                }
                _this.myChart.options.scales.xAxes[0].time.unit = unit;
                if (_this.chartView.value !== ChartType.overall.value) {
                    _this.myChart.options.scales.xAxes[0].time.stepSize = 1;
                }
                else {
                    _this.myChart.options.scales.xAxes[0].time.stepSize = null;
                }
                _this.myChart.options.scales.xAxes[0].time.displayFormats = displayFormat;
                for (var i = 0; i < _this.myChart.data.datasets.length; i++) {
                    _this.myChart.getDatasetMeta(i).hidden = _this.myChart.data.datasets[i].hidden;
                }
                _this.myChart.update();
            });
        });
    };
    ChartPage.prototype.createMovingAverageDatasets = function () {
        var _this = this;
        if (this.chartView === ChartType.month) {
            this.datasets.filter(function (dataset) { return dataset.value.type === __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].intensity; }).forEach(function (dataset) {
                var averagePoints = new Map();
                dataset.points.forEach(function (point) {
                    var dailyPoints = averagePoints.get(point.x.getDate());
                    if (dailyPoints) {
                        dailyPoints.push(point.y);
                    }
                    else {
                        averagePoints.set(point.x.getDate(), [point.y]);
                    }
                });
                dataset.points = [];
                averagePoints.forEach(function (v, k) {
                    dataset.points.push(new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](__WEBPACK_IMPORTED_MODULE_4_moment__({ date: k }).valueOf(), v.reduce(function (a, b) { return a + b; }, 0) / v.length, dataset.value.id));
                });
                dataset.points.sort(function (a, b) { return a.millis - b.millis; });
            });
        }
        this.datasets.filter(function (dataset) { return dataset.value.type === __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].intensity && !dataset.value.isStepped; }).forEach(function (dataset) {
            var mADataset = new Dataset('MA');
            dataset.points.forEach(function (point, index, array) {
                mADataset.value = dataset.value;
                if (index !== 0) {
                    var mAMiddlePoint = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millis, point.y, point.valueId);
                    mAMiddlePoint.y = (array[index - 1].y + array[index].y) / 2;
                    mAMiddlePoint.millis = (array[index - 1].millis + array[index].millis) / 2;
                    mADataset.points.push(mAMiddlePoint);
                }
                if (index === 0 || index === array.length - 1) {
                    var mAPoint = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millis, point.y, point.valueId);
                    mADataset.points.push(mAPoint);
                }
            });
            _this.myChart.data.datasets.push({
                label: mADataset.value.name + " (trend)",
                data: mADataset.points,
                backgroundColor: [
                    _this.hexToRgba(mADataset.value.color, 0.3)
                ],
                borderColor: [
                    _this.hexToRgba(mADataset.value.color, 0.5)
                ],
                pointRadius: 0,
                fill: dataset.value.isFilled,
                borderWidth: 1,
                yAxisID: dataset.value.range.name,
                hidden: dataset.value.hidden
            });
            // fake third one
            _this.myChart.data.datasets.push({
                label: mADataset.value.name + " (trend)2",
                data: mADataset.points,
                backgroundColor: [
                    _this.hexToRgba(mADataset.value.color, 0.3)
                ],
                borderColor: [
                    _this.hexToRgba(mADataset.value.color, 0.5)
                ],
                pointRadius: 0,
                fill: dataset.value.isFilled,
                borderWidth: 1,
                yAxisID: dataset.value.range.name,
                hidden: dataset.value.hidden
            });
        });
        this.myChart.data.datasets.sort(function (d1, d2) { return d1.label < d2.label ? -1 : 1; });
        for (var i = 0; i < this.myChart.data.datasets.length; i++) {
            this.myChart.getDatasetMeta(i).hidden = this.myChart.data.datasets[i].hidden;
        }
        this.myChart.update();
    };
    ChartPage.prototype.drawEvents = function () {
        var _this = this;
        var pointDatasets = this.datasets.filter(function (dataset) { return dataset.value.type === __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].event; });
        pointDatasets.forEach(function (dataset, datasetIndex) {
            var eventDataset = new Dataset('Events');
            dataset.points.forEach(function (point, index, array) {
                eventDataset.value = dataset.value;
                var evPoint = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millis, point.y + datasetIndex / pointDatasets.length, point.valueId);
                eventDataset.points.push(evPoint);
                evPoint = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millis, point.y + (datasetIndex + 1) / pointDatasets.length, point.valueId);
                eventDataset.points.push(evPoint);
                eventDataset.points.push(new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millis, null, point.valueId));
            });
            _this.myChart.data.datasets.push({
                label: eventDataset.value.name + " (event)",
                data: eventDataset.points,
                backgroundColor: [
                    _this.hexToRgba(eventDataset.value.color, 0.3)
                ],
                borderColor: [
                    _this.hexToRgba(eventDataset.value.color, 0.8)
                ],
                pointRadius: 0,
                yAxisID: dataset.value.range.name,
                hidden: dataset.value.hidden
            });
            // fake third one
            _this.myChart.data.datasets.push({
                label: eventDataset.value.name + " (event)2",
                data: eventDataset.points,
                backgroundColor: [
                    _this.hexToRgba(eventDataset.value.color, 0.3)
                ],
                borderColor: [
                    _this.hexToRgba(eventDataset.value.color, 0.8)
                ],
                pointRadius: 0,
                yAxisID: dataset.value.range.name,
                hidden: dataset.value.hidden
            });
        });
        this.myChart.data.datasets.sort(function (d1, d2) { return d1.label < d2.label ? -1 : 1; });
        this.myChart.update();
    };
    ChartPage.prototype.drawIntervals = function () {
        var _this = this;
        var intervalDatasets = this.datasets.filter(function (dataset) { return dataset.value.type === __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["e" /* ValueType */].interval; });
        intervalDatasets.forEach(function (dataset, datasetIndex) {
            var intervalTopDataset = new Dataset('Intervals');
            var intervalBottomDataset = new Dataset('Intervals');
            dataset.points.forEach(function (point, index, array) {
                intervalBottomDataset.value = dataset.value;
                intervalTopDataset.value = dataset.value;
                var intervalBottomPoint = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millis, point.y + datasetIndex / intervalDatasets.length, point.valueId);
                intervalBottomDataset.points.push(intervalBottomPoint);
                intervalBottomPoint = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millisEnd, point.y + datasetIndex / intervalDatasets.length, point.valueId);
                intervalBottomDataset.points.push(intervalBottomPoint);
                intervalBottomDataset.points.push(new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millisEnd, null, point.valueId));
                var intervalTopPoint = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millis, point.y + (datasetIndex + 1) / intervalDatasets.length, point.valueId);
                intervalTopDataset.points.push(intervalTopPoint);
                intervalTopPoint = new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millisEnd, point.y + (datasetIndex + 1) / intervalDatasets.length, point.valueId);
                intervalTopDataset.points.push(intervalTopPoint);
                intervalTopDataset.points.push(new __WEBPACK_IMPORTED_MODULE_6__domain_Symptom__["b" /* Point */](point.millisEnd, null, point.valueId));
            });
            _this.myChart.data.datasets.push({
                label: intervalTopDataset.value.name + " (intervalTop)",
                data: intervalTopDataset.points,
                backgroundColor: [
                    _this.hexToRgba(intervalTopDataset.value.color, 0.3)
                ],
                borderColor: [
                    _this.hexToRgba(intervalTopDataset.value.color, 0.8)
                ],
                pointRadius: 0,
                borderWidth: 0.1,
                fill: '-1',
                yAxisID: dataset.value.range.name,
                hidden: dataset.value.hidden
            });
            _this.myChart.data.datasets.push({
                label: intervalBottomDataset.value.name + " (intervalBottom)",
                data: intervalBottomDataset.points,
                backgroundColor: [
                    _this.hexToRgba(intervalBottomDataset.value.color, 0.3)
                ],
                borderColor: [
                    _this.hexToRgba(intervalBottomDataset.value.color, 0.8)
                ],
                borderWidth: 0.1,
                pointRadius: 0,
                fill: '+1',
                yAxisID: dataset.value.range.name
            });
        });
        this.myChart.data.datasets.sort(function (d1, d2) { return d1.label < d2.label ? -1 : 1; });
        this.myChart.update();
    };
    ChartPage.prototype.drawPointLabels = function () {
        __WEBPACK_IMPORTED_MODULE_2_chart_js__["plugins"].register({
            afterDatasetsDraw: function (chart) {
                var ctx = chart.ctx;
                chart.data.datasets.forEach(function (dataset, i) {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function (element, index) {
                            if (element._yScale.id == 'dosage') {
                                // Draw the text in black, with the specified font
                                ctx.fillStyle = 'rgb(0, 0, 0)';
                                var fontSize = 9;
                                var fontStyle = 'bold';
                                var fontFamily = 'Helvetica Neue';
                                ctx.font = __WEBPACK_IMPORTED_MODULE_2_chart_js__["helpers"].fontString(fontSize, fontStyle, fontFamily);
                                // Just naively convert to string for now
                                var dataString = dataset.data[index].y.toString();
                                // Make sure alignment settings are correct
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                // let padding = 5;
                                var padding = 4;
                                var position = element.tooltipPosition();
                                ctx.fillStyle = element._model.backgroundColor;
                                // ctx.fillRect(position.x - 7, position.y - 7, 14, 14);
                                // ctx.arc(position.x, position.y, 8, 0, 2 * Math.PI, true);
                                // ctx.fillStyle = 'rgb(0, 0, 0)';
                                ctx.fillText(dataString, position.x - (fontSize / 2) - padding, position.y - (fontSize / 2) - padding);
                                // ctx.fillText(dataString, position.x, position.y);
                            }
                        });
                    }
                });
            }
        });
    };
    ChartPage.prototype.hexToRgba = function (hex, alpha) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
        var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
        var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
        if (alpha) {
            return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }
        else {
            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }
    };
    ChartPage.prototype.ionViewWillEnter = function () {
        this.updateDatasets();
    };
    ChartPage.prototype.resetZoom = function () {
        this.updateDatasets();
        this.myChart.resetZoom();
    };
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"E:\correlia\src\pages\chart\chart.html"*/'<ion-content style="height: 100%;" padding>\n\n  <ion-segment [(ngModel)]="chartView">\n\n    <ng-container *ngFor="let button of segmentButtons">\n\n      <ion-segment-button [disabled]="button.value !== \'overall\'" [value]="button" (click)="updateDatasets()">\n\n        {{button.value}}\n\n      </ion-segment-button>\n\n    </ng-container>\n\n  </ion-segment>\n\n  <div>\n\n    <ion-fab right>\n\n      <button color="light" ion-fab mini (click)="resetZoom()">\n\n        <ion-icon md-name="youtube_searched_for"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n  </div>\n\n  <div class="chart-container" style="height:80%; width:100%">\n\n    <canvas id="myChart"></canvas>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\correlia\src\pages\chart\chart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_point_point__["a" /* PointProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_value_valueProvider__["a" /* ValueProvider */]])
    ], ChartPage);
    return ChartPage;
}());

var Dataset = /** @class */ (function () {
    function Dataset(type) {
        this.points = [];
        this.type = type;
    }
    return Dataset;
}());

var ChartType = /** @class */ (function () {
    function ChartType(value, title) {
        this.value = value;
        this.title = title;
    }
    ChartType.overall = new ChartType('overall', 'Overall');
    ChartType.day = new ChartType('day', 'Average per day');
    ChartType.week = new ChartType('week', 'Average per week');
    ChartType.month = new ChartType('month', 'Average per month');
    ChartType.year = new ChartType('year', 'Average per year');
    return ChartType;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_value_add_value__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_value_valueProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__domain_Symptom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_event_or_interval_add_event_or_interval__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ValuesListPage = /** @class */ (function () {
    function ValuesListPage(navCtrl, navParams, toastCtrl, valueProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.valueProvider = valueProvider;
        this.ValueType = __WEBPACK_IMPORTED_MODULE_4__domain_Symptom__["e" /* ValueType */];
        this.values = [];
    }
    ValuesListPage.prototype.ionViewWillEnter = function () {
        this.updateList();
    };
    ValuesListPage.prototype.addValue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_value_add_value__["a" /* AddValuePage */]);
    };
    ValuesListPage.prototype.addEventOrInterval = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_event_or_interval_add_event_or_interval__["a" /* AddEventOrIntervalPage */]);
    };
    ValuesListPage.prototype.remove = function (value) {
        var _this = this;
        if (confirm('Rilie?')) {
            var tempName_1 = value.name;
            this.valueProvider.remove(value.id).then(function () {
                _this.updateList().then(function () {
                    var toast = _this.toastCtrl.create({
                        message: "Value " + tempName_1 + " was successfully deleted",
                        duration: 1500,
                        position: 'top'
                    });
                    toast.present();
                });
            });
        }
    };
    ValuesListPage.prototype.updateList = function () {
        var _this = this;
        return this.valueProvider.getAll().then(function (values) {
            _this.values = values;
        });
    };
    ValuesListPage.prototype.edit = function (value) {
        if (value.type === __WEBPACK_IMPORTED_MODULE_4__domain_Symptom__["e" /* ValueType */].intensity) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_value_add_value__["a" /* AddValuePage */], { value: value });
        }
    };
    ValuesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-values-list',template:/*ion-inline-start:"E:\correlia\src\pages\values-list\values-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Values</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let value of values">\n      <ion-item [style.color]="value.color">\n        <b>{{ value.name }}</b>\n        <span *ngIf="value.type === ValueType.intensity">[{{ value.range.min }} ... {{value.range.max}}]</span>\n        <span *ngIf="value.type === ValueType.event || value.type === ValueType.interval">[{{value.type}}]</span>\n      </ion-item>\n      <ion-item-options side="left">\n        <button icon-only color="secondary" ion-button (click)="edit(value)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button icon-only [color]="\'danger\'" ion-button (click)="remove(value)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n<div *ngIf="values.length === 1" class="text-md-light hint swipe-hint">\n  <b>Swipe to</b>\n  <br>\n  <b>edit </b><ion-icon name="arrow-forward"></ion-icon>\n  <br>\n  <ion-icon name="arrow-back"></ion-icon><b> delete</b>\n</div>\n\n<div *ngIf="values.length === 0" class="text-md-light hint add-hint">\n  <b>Tap <ion-icon name="add-circle"></ion-icon> to add new value</b>\n</div>\n\n  <ion-fab bottom right>\n    <button ion-fab>\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list side="left">\n      <button ion-button (click)="addValue()">\n        Value\n      </button>\n      <button disabled ion-button (click)="addEventOrInterval()">\n        Event/Interval\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"E:\correlia\src\pages\values-list\values-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_value_valueProvider__["a" /* ValueProvider */]])
    ], ValuesListPage);
    return ValuesListPage;
}());

//# sourceMappingURL=values-list.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddValuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_value_valueProvider__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddValuePage = /** @class */ (function () {
    function AddValuePage(navCtrl, navParams, toastCtrl, valueProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.valueProvider = valueProvider;
        this.color = '#0af';
        this.min = 0;
        this.max = 10;
        this.range = __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__["c" /* Range */].intensity;
        this.ranges = __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__["c" /* Range */].all();
        this.isStepped = false;
        this.isFilled = false;
        if (this.navParams.get('value')) {
            this.editValue = this.navParams.get('value');
            this.name = this.editValue.name;
            this.color = this.editValue.color;
            this.isStepped = this.editValue.isStepped;
            this.isFilled = this.editValue.isFilled;
        }
    }
    AddValuePage.prototype.ionViewDidLoad = function () {
    };
    AddValuePage.prototype.save = function () {
        var _this = this;
        var value = this.editValue || new __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__["d" /* Value */]();
        value.id = this.editValue ? this.editValue.id : new Date().valueOf();
        value.name = this.name;
        value.color = this.color;
        value.range = this.range;
        value.type = __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__["e" /* ValueType */].intensity;
        value.isStepped = this.isStepped;
        value.isFilled = this.isFilled;
        this.valueProvider.update(value).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Value was saved successfully',
                duration: 1500,
                position: 'top'
            });
            toast.present();
            _this.navCtrl.pop();
        });
    };
    AddValuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-value',template:/*ion-inline-start:"E:\correlia\src\pages\add-value\add-value.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add new value</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>\n      Name:\n    </ion-label>\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n  </ion-item>\n  <button ion-item\n          [cpPosition]="\'bottom\'"\n          [(colorPicker)]="color">\n    <ion-icon name="square" item-end large [style.color]="color"></ion-icon>\n    <ion-label>\n      Color: {{color}}\n    </ion-label>\n  </button>\n  <ion-item>\n    <ion-label>Range</ion-label>\n    <ion-select [(ngModel)]="range" interface="popover">\n      <ion-option *ngFor="let r of ranges" [value]="r"><b>{{r.min}}</b> ... <b>{{r.max}}</b></ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Stepped</ion-label>\n    <ion-checkbox item-end [(ngModel)]="isStepped"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Filled</ion-label>\n    <ion-checkbox item-end [(ngModel)]="isFilled"></ion-checkbox>\n  </ion-item>\n  <ion-footer no-border>\n    <button ion-button block large (click)="save()">save value</button>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"E:\correlia\src\pages\add-value\add-value.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_value_valueProvider__["a" /* ValueProvider */]])
    ], AddValuePage);
    return AddValuePage;
}());

//# sourceMappingURL=add-value.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventOrIntervalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_value_valueProvider__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEventOrIntervalPage = /** @class */ (function () {
    function AddEventOrIntervalPage(navCtrl, navParams, toastCtrl, valueProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.valueProvider = valueProvider;
        this.type = __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__["e" /* ValueType */].event;
        this.types = [__WEBPACK_IMPORTED_MODULE_2__domain_Symptom__["e" /* ValueType */].event, __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__["e" /* ValueType */].interval];
        this.color = '#0af';
    }
    AddEventOrIntervalPage.prototype.ionViewDidLoad = function () {
    };
    AddEventOrIntervalPage.prototype.save = function () {
        var value = new __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__["d" /* Value */]();
        value.id = new Date().valueOf();
        value.name = this.name;
        value.color = this.color;
        value.type = this.type;
        value.range = __WEBPACK_IMPORTED_MODULE_2__domain_Symptom__["c" /* Range */].event;
        this.valueProvider.save(value);
        var toast = this.toastCtrl.create({
            message: this.type + " was saved successfully",
            duration: 1500,
            position: 'top'
        });
        toast.present();
        this.navCtrl.pop();
    };
    AddEventOrIntervalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-event-or-interval',template:/*ion-inline-start:"E:\correlia\src\pages\add-event-or-interval\add-event-or-interval.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add new event or interval</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>\n      Name:\n    </ion-label>\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n  </ion-item>\n  <button ion-item\n          [cpPosition]="\'bottom\'"\n          [(colorPicker)]="color">\n    <ion-icon name="square" item-end large [style.color]="color"></ion-icon>\n    <ion-label>\n      Color: {{color}}\n    </ion-label>\n  </button>\n  <ion-list radio-group [(ngModel)]="type" *ngFor="let t of types">\n    <ion-item>\n      <ion-label>{{t}}</ion-label>\n      <ion-radio [value]="t"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-footer no-border>\n    <button ion-button block large (click)="save()">save</button>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"E:\correlia\src\pages\add-event-or-interval\add-event-or-interval.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_value_valueProvider__["a" /* ValueProvider */]])
    ], AddEventOrIntervalPage);
    return AddEventOrIntervalPage;
}());

//# sourceMappingURL=add-event-or-interval.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_add_add__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chart_chart__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authService__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_value_add_value__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_values_list_values_list__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_color_picker__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_value_valueProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_note_note__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_point_point__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_event_or_interval_add_event_or_interval__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ionic2_material_icons__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_value_add_value__["a" /* AddValuePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_event_or_interval_add_event_or_interval__["a" /* AddEventOrIntervalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_values_list_values_list__["a" /* ValuesListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition'
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_19_ionic2_material_icons__["a" /* MaterialIconsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_color_picker__["a" /* ColorPickerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_value_add_value__["a" /* AddValuePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_event_or_interval_add_event_or_interval__["a" /* AddEventOrIntervalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_values_list_values_list__["a" /* ValuesListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_authService__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_value_valueProvider__["a" /* ValueProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_note_note__["a" /* NoteProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_point_point__["a" /* PointProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Range; });
var Note = /** @class */ (function () {
    function Note(date) {
        this.points = [];
        this.date = date;
    }
    return Note;
}());

var Value = /** @class */ (function () {
    function Value() {
        this.isStepped = false;
        this.isFilled = false;
        this.hidden = null;
    }
    return Value;
}());

var ValueType;
(function (ValueType) {
    ValueType["intensity"] = "Intensity";
    ValueType["event"] = "Event";
    ValueType["interval"] = "Interval";
})(ValueType || (ValueType = {}));
var Point = /** @class */ (function () {
    function Point(millis, y, valueId) {
        this.millis = millis;
        this.y = y;
        this.valueId = valueId;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return new Date(this.millis);
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());

var Range = /** @class */ (function () {
    function Range(name, min, max) {
        this.name = name;
        this.min = min;
        this.max = max;
    }
    Range.all = function () {
        return [Range.intensity, Range.negative, Range.natural];
    };
    Range.intensity = new Range('intensity', 0, 10);
    Range.negative = new Range('negative', -5, 5);
    Range.natural = new Range('natural', 0, 1000000);
    Range.event = new Range('event', 1, 2);
    return Range;
}());

// export class Line {
//   name: string;
//
//   public static linear = new Line('linear');
//   public static stepped = new Line('stepped');
//
//   static all() {
//     return [Line.linear, Line.stepped];
//   }
//
//   constructor(name: string) {
//     this.name = name;
//   }
// }
//# sourceMappingURL=Symptom.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValueProvider = /** @class */ (function () {
    function ValueProvider(storage) {
        var _this = this;
        this.storage = storage;
        this.values = [];
        this.storage.get('values').then(function (values) {
            _this.values = values !== null ? values : [];
        });
    }
    ValueProvider.prototype.save = function (value) {
        this.values.push(value);
        this.storage.set('values', this.values);
    };
    ValueProvider.prototype.update = function (value) {
        var _this = this;
        return this.remove(value.id).then(function () {
            _this.save(value);
        });
    };
    ValueProvider.prototype.getAll = function () {
        var _this = this;
        return this.storage.get('values').then(function (values) {
            _this.values = values !== null ? values : [];
            return _this.values.slice();
        });
    };
    ValueProvider.prototype.getById = function (id) {
        return this.storage.get('values').then(function (values) {
            return values.slice().find(function (v) { return v.id === id; });
        });
    };
    ValueProvider.prototype.remove = function (id) {
        this.values = this.values.filter(function (value) { return value.id !== id; });
        return this.storage.set('values', this.values);
    };
    ValueProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], ValueProvider);
    return ValueProvider;
}());

//# sourceMappingURL=valueProvider.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\correlia\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\correlia\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 209,
	"./af.js": 209,
	"./ar": 210,
	"./ar-dz": 211,
	"./ar-dz.js": 211,
	"./ar-kw": 212,
	"./ar-kw.js": 212,
	"./ar-ly": 213,
	"./ar-ly.js": 213,
	"./ar-ma": 214,
	"./ar-ma.js": 214,
	"./ar-sa": 215,
	"./ar-sa.js": 215,
	"./ar-tn": 216,
	"./ar-tn.js": 216,
	"./ar.js": 210,
	"./az": 217,
	"./az.js": 217,
	"./be": 218,
	"./be.js": 218,
	"./bg": 219,
	"./bg.js": 219,
	"./bm": 220,
	"./bm.js": 220,
	"./bn": 221,
	"./bn.js": 221,
	"./bo": 222,
	"./bo.js": 222,
	"./br": 223,
	"./br.js": 223,
	"./bs": 224,
	"./bs.js": 224,
	"./ca": 225,
	"./ca.js": 225,
	"./cs": 226,
	"./cs.js": 226,
	"./cv": 227,
	"./cv.js": 227,
	"./cy": 228,
	"./cy.js": 228,
	"./da": 229,
	"./da.js": 229,
	"./de": 230,
	"./de-at": 231,
	"./de-at.js": 231,
	"./de-ch": 232,
	"./de-ch.js": 232,
	"./de.js": 230,
	"./dv": 233,
	"./dv.js": 233,
	"./el": 234,
	"./el.js": 234,
	"./en-au": 235,
	"./en-au.js": 235,
	"./en-ca": 236,
	"./en-ca.js": 236,
	"./en-gb": 237,
	"./en-gb.js": 237,
	"./en-ie": 238,
	"./en-ie.js": 238,
	"./en-il": 239,
	"./en-il.js": 239,
	"./en-nz": 240,
	"./en-nz.js": 240,
	"./eo": 241,
	"./eo.js": 241,
	"./es": 242,
	"./es-do": 243,
	"./es-do.js": 243,
	"./es-us": 244,
	"./es-us.js": 244,
	"./es.js": 242,
	"./et": 245,
	"./et.js": 245,
	"./eu": 246,
	"./eu.js": 246,
	"./fa": 247,
	"./fa.js": 247,
	"./fi": 248,
	"./fi.js": 248,
	"./fo": 249,
	"./fo.js": 249,
	"./fr": 250,
	"./fr-ca": 251,
	"./fr-ca.js": 251,
	"./fr-ch": 252,
	"./fr-ch.js": 252,
	"./fr.js": 250,
	"./fy": 253,
	"./fy.js": 253,
	"./gd": 254,
	"./gd.js": 254,
	"./gl": 255,
	"./gl.js": 255,
	"./gom-latn": 256,
	"./gom-latn.js": 256,
	"./gu": 257,
	"./gu.js": 257,
	"./he": 258,
	"./he.js": 258,
	"./hi": 259,
	"./hi.js": 259,
	"./hr": 260,
	"./hr.js": 260,
	"./hu": 261,
	"./hu.js": 261,
	"./hy-am": 262,
	"./hy-am.js": 262,
	"./id": 263,
	"./id.js": 263,
	"./is": 264,
	"./is.js": 264,
	"./it": 265,
	"./it.js": 265,
	"./ja": 266,
	"./ja.js": 266,
	"./jv": 267,
	"./jv.js": 267,
	"./ka": 268,
	"./ka.js": 268,
	"./kk": 269,
	"./kk.js": 269,
	"./km": 270,
	"./km.js": 270,
	"./kn": 271,
	"./kn.js": 271,
	"./ko": 272,
	"./ko.js": 272,
	"./ky": 273,
	"./ky.js": 273,
	"./lb": 274,
	"./lb.js": 274,
	"./lo": 275,
	"./lo.js": 275,
	"./lt": 276,
	"./lt.js": 276,
	"./lv": 277,
	"./lv.js": 277,
	"./me": 278,
	"./me.js": 278,
	"./mi": 279,
	"./mi.js": 279,
	"./mk": 280,
	"./mk.js": 280,
	"./ml": 281,
	"./ml.js": 281,
	"./mn": 282,
	"./mn.js": 282,
	"./mr": 283,
	"./mr.js": 283,
	"./ms": 284,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 284,
	"./mt": 286,
	"./mt.js": 286,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 290,
	"./nl-be": 291,
	"./nl-be.js": 291,
	"./nl.js": 290,
	"./nn": 292,
	"./nn.js": 292,
	"./pa-in": 293,
	"./pa-in.js": 293,
	"./pl": 294,
	"./pl.js": 294,
	"./pt": 295,
	"./pt-br": 296,
	"./pt-br.js": 296,
	"./pt.js": 295,
	"./ro": 297,
	"./ro.js": 297,
	"./ru": 298,
	"./ru.js": 298,
	"./sd": 299,
	"./sd.js": 299,
	"./se": 300,
	"./se.js": 300,
	"./si": 301,
	"./si.js": 301,
	"./sk": 302,
	"./sk.js": 302,
	"./sl": 303,
	"./sl.js": 303,
	"./sq": 304,
	"./sq.js": 304,
	"./sr": 305,
	"./sr-cyrl": 306,
	"./sr-cyrl.js": 306,
	"./sr.js": 305,
	"./ss": 307,
	"./ss.js": 307,
	"./sv": 308,
	"./sv.js": 308,
	"./sw": 309,
	"./sw.js": 309,
	"./ta": 310,
	"./ta.js": 310,
	"./te": 311,
	"./te.js": 311,
	"./tet": 312,
	"./tet.js": 312,
	"./tg": 313,
	"./tg.js": 313,
	"./th": 314,
	"./th.js": 314,
	"./tl-ph": 315,
	"./tl-ph.js": 315,
	"./tlh": 316,
	"./tlh.js": 316,
	"./tr": 317,
	"./tr.js": 317,
	"./tzl": 318,
	"./tzl.js": 318,
	"./tzm": 319,
	"./tzm-latn": 320,
	"./tzm-latn.js": 320,
	"./tzm.js": 319,
	"./ug-cn": 321,
	"./ug-cn.js": 321,
	"./uk": 322,
	"./uk.js": 322,
	"./ur": 323,
	"./ur.js": 323,
	"./uz": 324,
	"./uz-latn": 325,
	"./uz-latn.js": 325,
	"./uz.js": 324,
	"./vi": 326,
	"./vi.js": 326,
	"./x-pseudo": 327,
	"./x-pseudo.js": 327,
	"./yo": 328,
	"./yo.js": 328,
	"./zh-cn": 329,
	"./zh-cn.js": 329,
	"./zh-hk": 330,
	"./zh-hk.js": 330,
	"./zh-tw": 331,
	"./zh-tw.js": 331
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 424;

/***/ })

},[348]);
//# sourceMappingURL=main.js.map