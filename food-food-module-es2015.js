(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-food-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/food/add-food/add-food.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food/add-food/add-food.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-card class=\"w-90 m-auto\">\r\n    <h2 style=\"text-align: center;\">Add New Food</h2>\r\n    <form class=\"w-90 m-auto\" nz-form [formGroup]=\"foodForm\" (ngSubmit)=\"submitForm(foodForm.value)\">\r\n        <nz-form-item>\r\n            <nz-form-label nzRequired nzFor=\"name\">Food Name</nz-form-label>\r\n            <nz-form-control [nzErrorTip]=\"nameErrorTpl\">\r\n                <input class=\"p-20\" id=\"name\" nz-input formControlName=\"name\" placeholder=\"Food Name\">\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label nzRequired nzFor=\"description\">Food Description</nz-form-label>\r\n            <nz-form-control [nzErrorTip]=\"descriptionTpl\">\r\n                <textarea rows=\"6\" id=\"description\" nz-input formControlName=\"description\" placeholder=\"Food Description\"></textarea>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-label nzRequired nzFor=\"popularInList\">Popular In</nz-form-label>\r\n            <nz-form-control nzErrorTip=\"Popular in is required!\">\r\n                <nz-select nzMode=\"multiple\" nzPlaceHolder=\"Popular In\" formControlName=\"popularInList\" [compareWith]=\"compareFn\">\r\n                    <nz-option *ngFor=\"let option of countryList\" [nzLabel]=\"option.name\" [nzValue]=\"option\"></nz-option>\r\n                </nz-select>\r\n            </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n            <nz-form-control>\r\n                <nz-spin *ngIf=\"isLoadingFlag\" class=\"m-b-5\" nzSimple></nz-spin>\r\n                <button [disabled]=\"isLoadingFlag\" nz-button class=\"float-right\" nzType=\"primary\" nzSize=\"large\">Save Food</button>\r\n            </nz-form-control>\r\n        </nz-form-item>          \r\n    </form>\r\n</nz-card>\r\n<ng-template #nameErrorTpl let-control>\r\n    <ng-container *ngIf=\"control.hasError('required')\">food name is required!</ng-container>\r\n    <ng-container *ngIf=\"control.hasError('minlength')\">Minimum length should be 3!</ng-container>\r\n    <ng-container *ngIf=\"control.hasError('maxlength')\">Maximum length should be 30!</ng-container>\r\n</ng-template>\r\n<ng-template #descriptionTpl let-control>\r\n    <ng-container *ngIf=\"control.hasError('required')\">Description is required!</ng-container>\r\n    <ng-container *ngIf=\"control.hasError('minlength')\">Minimum length should be 300!</ng-container>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/food/all-foods/all-foods.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food/all-foods/all-foods.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-90 m-auto\">\r\n    <nz-table\r\n        #tableRef\r\n        nzShowPagination\r\n        [nzData]=\"foodList\"\r\n    >\r\n        <thead>\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Added By</th>\r\n                <th>Action</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let data of tableRef.data\">\r\n                <td>{{ data.name }}</td>\r\n                <td>{{ data.addedByName }}</td>\r\n                <td>\r\n                    <a routerLink=\"/food/view-food/{{data.id}}\" class=\"m-r-10\">View</a>\r\n                    <a routerLink=\"/food/edit-food/{{data.id}}\" class=\"m-r-10\">Edit</a>\r\n                    <a  nz-popconfirm\r\n                        nzPopconfirmTitle=\"Are you sure delete this food?\"\r\n                        (nzOnConfirm)=\"deleteConfirm(data.id)\"\r\n                        nzPopconfirmPlacement=\"left\"\r\n                    >\r\n                        Delete\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n    <button class=\"m-t-20\" nz-button nzType=\"primary\" nzSize=\"large\" routerLink=\"/food/add-food\">+ Add New Food</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/food/food.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food/food.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout>\r\n    <nz-header>\r\n        <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\">\r\n            <li nz-menu-item [nzSelected]=\"true\">\r\n                <a routerLink='/food/all-foods'>Home</a>\r\n            </li>\r\n            <li nz-nz-menu-item class=\"float-right cursor-pointer\">\r\n                <nz-avatar\r\n                    nz-popover\r\n                    [nzPopoverContent]=\"userTemplate\"\r\n                    nzPopoverPlacement=\"bottomRight\"\r\n                    nzPopoverTrigger=\"click\"\r\n                    nzIcon=\"user\"\r\n                >\r\n                </nz-avatar>\r\n            </li>\r\n        </ul>\r\n        <ng-template #userTemplate>\r\n            <ul style=\"width: 150px;\" nz-list>\r\n                <li *ngIf=\"!isLogin\" nz-list-item>\r\n                    <a class=\"w-100\" routerLink=\"/auth/sign-up\"> Sign Up</a>\r\n                </li>\r\n                <li *ngIf=\"!isLogin\"  nz-list-item>\r\n                    <a class=\"w-100\" routerLink=\"/auth/login\">Login</a>\r\n                </li>\r\n                <li *ngIf=\"name\"  nz-list-item>\r\n                    <p class=\"w-100\">{{name}}</p>\r\n                </li>\r\n                <li *ngIf=\"isLogin\" (click)=\"logout()\" nz-list-item>\r\n                    <a class=\"w-100\">Logout</a>\r\n                </li>\r\n            </ul>\r\n          </ng-template>\r\n    </nz-header>\r\n    <router-outlet></router-outlet>\r\n    <nz-footer></nz-footer>\r\n</nz-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/food/view-food/view-food.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food/view-food/view-food.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-90 m-auto\">\r\n    <nz-card [nzTitle]=\"selectedFood?.name\">\r\n        <h4>Written By: {{selectedFood?.addedByName}}</h4>\r\n        <h5> {{selectedFood?.addedAt}} | date</h5>\r\n        <p>{{selectedFood?.description}}</p>\r\n        <h5>Popular In: </h5>\r\n        <nz-tag class=\"m-l-10\" *ngFor=\"let item of selectedFood?.popularInList\">{{item.name}}</nz-tag>\r\n    </nz-card>\r\n</div>");

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/app/food/add-food/add-food.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/food/add-food/add-food.component.ts ***!
  \*****************************************************/
/*! exports provided: AddFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFoodComponent", function() { return AddFoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/service/auth.service */ "./src/shared/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service_food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/service/food.service */ "./src/shared/service/food.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");







let AddFoodComponent = class AddFoodComponent {
    constructor(fb, foodService, authService, messageSerive, router, activatedRoute) {
        this.fb = fb;
        this.foodService = foodService;
        this.authService = authService;
        this.messageSerive = messageSerive;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.foodForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(30)]],
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(300)]],
            popularInList: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        this.countryList = this.foodService.getCountries();
        this.activatedRoute.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.selectedFood = this.foodService.getFood(id);
                if (this.selectedFood) {
                    this.setCurrentValue();
                }
                else {
                    this.messageSerive.error('No food found!');
                    this.router.navigate(['food/all-foods']);
                }
            }
        });
    }
    setCurrentValue() {
        this.foodForm.patchValue(this.selectedFood);
    }
    compareFn(c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
    makeFormDirty(form) {
        Object.keys(form.controls).forEach(key => {
            const control = form.controls[key];
            control.markAsDirty();
            control.updateValueAndValidity();
        });
    }
    submitForm(formValue) {
        this.makeFormDirty(this.foodForm);
        if (this.foodForm.valid) {
            this.isLoadingFlag = true;
            if (this.selectedFood) {
                formValue.id = this.selectedFood.id;
                const status = this.foodService.editFood(formValue);
                if (status) {
                    this.messageSerive.success('Successfully updated!');
                    this.router.navigate(['food/all-foods']);
                }
                else {
                    this.messageSerive.error('Unable to update food. Please register again!');
                    this.authService.logOut();
                    this.router.navigate(['auth/sign-up']);
                }
            }
            else {
                const status = this.foodService.addFood(formValue);
                if (status) {
                    this.messageSerive.success('Successfully added!');
                    this.router.navigate(['food/all-foods']);
                }
                else {
                    this.messageSerive.error('Unable to add food. Please register again!');
                    this.authService.logOut();
                    this.router.navigate(['auth/sign-up']);
                }
            }
            this.isLoadingFlag = false;
        }
    }
};
AddFoodComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _shared_service_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"] },
    { type: src_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddFoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-add-food',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-food.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/food/add-food/add-food.component.html")).default
    })
], AddFoodComponent);



/***/ }),

/***/ "./src/app/food/all-foods/all-foods.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/food/all-foods/all-foods.component.ts ***!
  \*******************************************************/
/*! exports provided: AllFoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFoodsComponent", function() { return AllFoodsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _shared_service_food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/food.service */ "./src/shared/service/food.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AllFoodsComponent = class AllFoodsComponent {
    constructor(foodService, messageService) {
        this.foodService = foodService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.foodList = this.foodService.getAllFoods();
    }
    deleteConfirm(id) {
        const status = this.foodService.deleteFood(id);
        if (status) {
            this.messageService.success('Successfully deleted!');
            this.foodList = this.foodList.filter(x => x.id !== id);
        }
        else {
            this.messageService.error('Please login to delete!');
        }
    }
};
AllFoodsComponent.ctorParameters = () => [
    { type: _shared_service_food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"] }
];
AllFoodsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-foods',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-foods.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/food/all-foods/all-foods.component.html")).default
    })
], AllFoodsComponent);



/***/ }),

/***/ "./src/app/food/food-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/food/food-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FoodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRoutingModule", function() { return FoodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _view_food_view_food_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-food/view-food.component */ "./src/app/food/view-food/view-food.component.ts");
/* harmony import */ var _food_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food.component */ "./src/app/food/food.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/guard/auth.guard */ "./src/shared/guard/auth.guard.ts");
/* harmony import */ var _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-food/add-food.component */ "./src/app/food/add-food/add-food.component.ts");
/* harmony import */ var _all_foods_all_foods_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-foods/all-foods.component */ "./src/app/food/all-foods/all-foods.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");








const routes = [
    {
        path: '',
        component: _food_component__WEBPACK_IMPORTED_MODULE_2__["FoodComponent"],
        children: [
            {
                path: '',
                redirectTo: 'all-foods',
                pathMatch: 'full'
            },
            {
                path: 'all-foods',
                component: _all_foods_all_foods_component__WEBPACK_IMPORTED_MODULE_5__["AllFoodsComponent"]
            },
            {
                path: 'add-food',
                component: _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_4__["AddFoodComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'edit-food/:id',
                component: _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_4__["AddFoodComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: 'view-food/:id',
                component: _view_food_view_food_component__WEBPACK_IMPORTED_MODULE_1__["ViewFoodComponent"],
            }
        ]
    }
];
let FoodRoutingModule = class FoodRoutingModule {
};
FoodRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], FoodRoutingModule);



/***/ }),

/***/ "./src/app/food/food.component.ts":
/*!****************************************!*\
  !*** ./src/app/food/food.component.ts ***!
  \****************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/service/auth.service */ "./src/shared/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let FoodComponent = class FoodComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.isLogin = this.authService.isLoggedin();
        this.name = this.authService.getUserName();
    }
    logout() {
        this.authService.logOut();
        this.isLogin = false;
        this.name = null;
    }
};
FoodComponent.ctorParameters = () => [
    { type: _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
FoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-food',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/food/food.component.html")).default
    })
], FoodComponent);



/***/ }),

/***/ "./src/app/food/food.module.ts":
/*!*************************************!*\
  !*** ./src/app/food/food.module.ts ***!
  \*************************************/
/*! exports provided: FoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodModule", function() { return FoodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/guard/auth.guard */ "./src/shared/guard/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _food_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-routing.module */ "./src/app/food/food-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _all_foods_all_foods_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-foods/all-foods.component */ "./src/app/food/all-foods/all-foods.component.ts");
/* harmony import */ var _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-food/add-food.component */ "./src/app/food/add-food/add-food.component.ts");
/* harmony import */ var _food_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./food.component */ "./src/app/food/food.component.ts");
/* harmony import */ var _view_food_view_food_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-food/view-food.component */ "./src/app/food/view-food/view-food.component.ts");














let FoodModule = class FoodModule {
};
FoodModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _all_foods_all_foods_component__WEBPACK_IMPORTED_MODULE_8__["AllFoodsComponent"],
            _add_food_add_food_component__WEBPACK_IMPORTED_MODULE_9__["AddFoodComponent"],
            _food_component__WEBPACK_IMPORTED_MODULE_10__["FoodComponent"],
            _view_food_view_food_component__WEBPACK_IMPORTED_MODULE_11__["ViewFoodComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _food_routing_module__WEBPACK_IMPORTED_MODULE_6__["FoodRoutingModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzFormModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzGridModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSpinModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMenuModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzPopoverModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzListModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzUploadModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTableModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzTagModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzPopconfirmModule"]
        ],
        providers: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    })
], FoodModule);



/***/ }),

/***/ "./src/app/food/view-food/view-food.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/food/view-food/view-food.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewFoodComponent", function() { return ViewFoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service_food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/service/food.service */ "./src/shared/service/food.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");





let ViewFoodComponent = class ViewFoodComponent {
    constructor(foodService, activatedRoute, router, messageService) {
        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            const foodId = params.get('id');
            if (foodId) {
                this.selectedFood = this.foodService.getFood(foodId);
                if (!this.selectedFood) {
                    this.messageService.error('No food found!');
                    this.router.navigate(['food/all-foods']);
                }
            }
        });
    }
};
ViewFoodComponent.ctorParameters = () => [
    { type: _shared_service_food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
];
ViewFoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view-food',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-food.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/food/view-food/view-food.component.html")).default
    })
], ViewFoodComponent);



/***/ }),

/***/ "./src/shared/guard/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/shared/guard/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/auth.service */ "./src/shared/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.authService.isLoggedin()) {
            this.router.navigate(['auth/login'], { queryParams: { redirectURL: state.url } });
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/shared/service/food.service.ts":
/*!********************************************!*\
  !*** ./src/shared/service/food.service.ts ***!
  \********************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/service/auth.service */ "./src/shared/service/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);




let FoodService = class FoodService {
    constructor(authService) {
        this.authService = authService;
        this.foodList = [];
        this.countryList = [];
        const food1 = {
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
            name: 'Fuchka',
            // tslint:disable-next-line: max-line-length
            description: 'Fuska is the most popular street food in Bangladesh. I bet that every Bangladeshi, who lives in abroad, misses its unique spicy, sour, crispy taste. But we can easily make it at home and enjoy the deshi flavour in abroad. It is a bit long process, if you make the Fuska shell before, it will be less hustle. Only one thing (Talmakhana) will be hard to get in abroad.You can bring it from Bangladesh. Even you can buy readymade Fuska shells from Indian grocery. But I always prefer homemade one.',
            popularInList: this.countryList,
            addedByName: 'Tomal',
            addedAt: new Date('2020-07-31')
        };
        this.foodList.push(food1);
        const country1 = {
            id: 1,
            name: 'Bangladesh'
        };
        const country2 = {
            id: 2,
            name: 'Nepal'
        };
        const country3 = {
            id: 3,
            name: 'Srilanka'
        };
        this.countryList.push(country1);
        this.countryList.push(country2);
        this.countryList.push(country3);
    }
    getCountries() {
        return this.countryList;
    }
    getAllFoods() {
        return this.foodList;
    }
    getFood(id) {
        return this.foodList.find(x => x.id === id);
    }
    addFood(model) {
        const name = this.authService.getUserName();
        if (name) {
            model.id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])();
            model.addedByName = name;
            model.addedAt = new Date();
            this.foodList.push(model);
            return true;
        }
        return false;
    }
    editFood(model) {
        const index = this.foodList.findIndex(x => x.id === model.id);
        if (index >= 0) {
            this.foodList[index] = model;
            return true;
        }
        return false;
    }
    deleteFood(id) {
        const isLoggedIn = this.authService.isLoggedin();
        if (isLoggedIn) {
            const index = this.foodList.findIndex(x => x.id === id);
            if (index >= 0) {
                this.foodList.splice(index, 1);
                return true;
            }
        }
        return false;
    }
};
FoodService.ctorParameters = () => [
    { type: src_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
FoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], FoodService);



/***/ })

}]);
//# sourceMappingURL=food-food-module-es2015.js.map