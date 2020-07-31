function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/confirm-success/confirm-success.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/confirm-success/confirm-success.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationConfirmSuccessConfirmSuccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container bg\">\r\n    <nz-card class=\"form-card\">\r\n        <h2> Success! </h2>\r\n        <p>Please <a routerLink=\"../login\">Login</a> to continue.</p>\r\n    </nz-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/forgot-password/forgot-password.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/forgot-password/forgot-password.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container bg\">\r\n    <nz-card class=\"form-card\">\r\n        <h2> Forgot Password </h2>\r\n        <form nz-form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"submitForm()\">\r\n            <nz-spin *ngIf=\"isLoadingFlag\" class=\"m-b-5\" nzSimple></nz-spin>\r\n            <nz-alert *ngIf=\"errorMessage\" nzType=\"error\" [nzMessage]=\"errorMessage\" nzShowIcon></nz-alert>\r\n            <nz-alert *ngIf=\"isSuccessMessage\" nzType=\"success\" nzMessage=\"A password reset link has been sent to your email. Please check\" nzShowIcon></nz-alert>\r\n            <nz-form-item>\r\n                <nz-form-control [nzErrorTip]=\"emailErrorTpl\">\r\n                    <nz-form-label nzNoColon nzFor=\"email\">Email</nz-form-label>\r\n                    <nz-input-group nzPrefixIcon=\"mail\">\r\n                        <input class=\"p-20\" id=\"email\" nz-input formControlName=\"email\" placeholder=\"Email\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <span>Back to <a routerLink=\"../login\">Sign In</a></span>\r\n                <nz-form-control>\r\n                    <button [disabled]=\"isLoadingFlag\" nz-button class=\"float-right\" nzType=\"primary\">Send Reset Link</button>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <ng-template #emailErrorTpl let-control>\r\n                <ng-container *ngIf=\"control.hasError('email')\">The input is not valid E-mail!</ng-container>\r\n                <ng-container *ngIf=\"control.hasError('required')\">Please input your E-mail!</ng-container>\r\n            </ng-template>            \r\n        </form>\r\n    </nz-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container bg\">\r\n    <nz-card class=\"form-card\">\r\n        <h2> Sign In </h2>\r\n        <form nz-form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\">\r\n            <nz-spin *ngIf=\"isLoadingFlag\" class=\"m-b-5\" nzSimple></nz-spin>\r\n            <nz-alert *ngIf=\"errorMessage\" nzType=\"error\" [nzMessage]=\"errorMessage\" nzShowIcon></nz-alert>\r\n            <nz-form-item>\r\n                <nz-form-label nzNoColon nzFor=\"email\">Email</nz-form-label>\r\n                <nz-form-control [nzErrorTip]=\"emailErrorTpl\">\r\n                    <nz-input-group nzPrefixIcon=\"mail\">\r\n                        <input class=\"p-20\" id=\"email\" nz-input formControlName=\"email\" placeholder=\"Email\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <div class=\"display-flex justify-content-between\">\r\n                    <nz-form-label nzNoColon nzFor=\"password\">Password</nz-form-label>\r\n                    <nz-form-label nzNoColon>\r\n                        <a class=\"float-right\" routerLink=\"../forgot-password\">Forgot password?</a>\r\n                    </nz-form-label>\r\n                </div>\r\n                <nz-form-control nzErrorTip=\"Please input your Password!\">\r\n                    <nz-input-group nzPrefixIcon=\"lock\">\r\n                        <input class=\"p-20\" id=\"password\" type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <span>Don't have any accout? <a routerLink=\"../sign-up\">Sign Up</a> now!</span>\r\n                <nz-form-control>\r\n                    <button [disabled]=\"isLoadingFlag\" nz-button class=\"float-right\" nzType=\"primary\">Sign In</button>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <ng-template #emailErrorTpl let-control>\r\n                <ng-container *ngIf=\"control.hasError('email')\">The input is not valid E-mail!</ng-container>\r\n                <ng-container *ngIf=\"control.hasError('required')\">Please input your E-mail!</ng-container>\r\n            </ng-template>            \r\n        </form>\r\n    </nz-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/registraion-success/registraion-success.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/registraion-success/registraion-success.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationRegistraionSuccessRegistraionSuccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container bg\">\r\n    <nz-card class=\"form-card\">\r\n        <h2> Succesfully Registered! </h2>\r\n        <p>Please <a routerLink=\"../login\">Login</a> to continue.</p>\r\n    </nz-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/reset-password/reset-password.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/reset-password/reset-password.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container bg\">\r\n    <nz-card class=\"form-card\">\r\n        <h2> Reset Password </h2>\r\n        <form nz-form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"submitForm()\">\r\n            <nz-spin *ngIf=\"isLoadingFlag\" class=\"m-b-5\" nzSimple></nz-spin>\r\n            <nz-alert *ngIf=\"isErrorMesage\" nzType=\"error\" nzMessage=\"Can't reset your password, please try again.\" nzShowIcon></nz-alert>\r\n            <nz-form-item>\r\n                <nz-form-label nzRequired nzNoColon nzFor=\"password\">Password</nz-form-label>\r\n                <nz-form-control [nzErrorTip]=\"passwordErrorTpl\">\r\n                    <nz-input-group nzPrefixIcon=\"lock\">\r\n                        <input class=\"p-20\" id=\"password\" type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <nz-form-label nzRequired nzNoColon nzFor=\"confirmPassword\">Confirm Password</nz-form-label>\r\n                <nz-form-control [nzErrorTip]=\"confirmPasswordErrorTpl\">\r\n                    <nz-input-group nzPrefixIcon=\"lock\">\r\n                        <input class=\"p-20\" id=\"confirmPassword\" type=\"password\" nz-input formControlName=\"confirmPassword\" placeholder=\"Confirm Password\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <nz-form-control>\r\n                    <button [disabled]=\"isLoadingFlag\" nz-button class=\"float-right\" nzType=\"primary\">Reset Password</button>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <ng-template #passwordErrorTpl let-control>\r\n                <ng-container *ngIf=\"control.hasError('required')\">Please input your password!</ng-container>\r\n                <ng-container *ngIf=\"control.hasError('minlength')\">Minimum length should be 8!</ng-container>\r\n                <ng-container *ngIf=\"control.hasError('maxlength')\">Maximum length should be 30!</ng-container>\r\n            </ng-template>\r\n            <ng-template #confirmPasswordErrorTpl let-control>\r\n                <ng-container *ngIf=\"control.hasError('required')\">Please input your confirm password!</ng-container>\r\n                <ng-container *ngIf=\"control.hasError('confirm')\">Password doesn't match!</ng-container>\r\n            </ng-template>\r\n        </form>\r\n    </nz-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-up/sign-up.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-up/sign-up.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container bg\">\r\n    <nz-card class=\"form-card\">\r\n        <h2> Sign Up </h2>\r\n        <form nz-form [formGroup]=\"signUpForm\" (ngSubmit)=\"submitForm(signUpForm.value)\">\r\n            <nz-spin *ngIf=\"isLoadingFlag\" class=\"m-b-5\" nzSimple></nz-spin>\r\n            <nz-alert *ngIf=\"errorMessage\" nzType=\"error\" [nzMessage]=\"errorMessage\" nzShowIcon></nz-alert>\r\n            <nz-form-item>\r\n                <nz-form-label nzRequired nzNoColon nzFor=\"name\">Name</nz-form-label>\r\n                <nz-form-control [nzErrorTip]=\"nameErrorTpl\">\r\n                    <nz-input-group nzPrefixIcon=\"user\">\r\n                        <input class=\"p-20\" id=\"name\" nz-input formControlName=\"name\" placeholder=\"Name\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <nz-form-label nzRequired nzNoColon nzFor=\"email\">Email</nz-form-label>\r\n                <nz-form-control [nzErrorTip]=\"emailErrorTpl\">\r\n                    <nz-input-group nzPrefixIcon=\"mail\">\r\n                        <input class=\"p-20\" id=\"email\" nz-input formControlName=\"email\" placeholder=\"Email\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <nz-form-label nzRequired nzNoColon nzFor=\"password\">Password</nz-form-label>\r\n                <nz-form-control [nzErrorTip]=\"passwordErrorTpl\">\r\n                    <nz-input-group nzPrefixIcon=\"lock\">\r\n                        <input class=\"p-20\" id=\"password\" type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <nz-form-label nzRequired nzNoColon nzFor=\"confirmPassword\">Confirm Password</nz-form-label>\r\n                <nz-form-control [nzErrorTip]=\"confirmPasswordErrorTpl\">\r\n                    <nz-input-group nzPrefixIcon=\"lock\">\r\n                        <input class=\"p-20\" id=\"confirmPassword\" type=\"password\" nz-input formControlName=\"confirmPassword\" placeholder=\"Confirm Password\" />\r\n                    </nz-input-group>\r\n                </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n                <span>Already have an accout? <a routerLink=\"../login\">Sign In</a></span>\r\n                <nz-form-control>\r\n                    <button [disabled]=\"isLoadingFlag\" nz-button class=\"float-right\" nzType=\"primary\">Sign Up</button>\r\n                </nz-form-control>\r\n            </nz-form-item>          \r\n        </form>\r\n    </nz-card>\r\n</div>\r\n<ng-template #nameErrorTpl let-control>\r\n    <ng-container *ngIf=\"control.hasError('required')\">Please input your name!</ng-container>\r\n    <ng-container *ngIf=\"control.hasError('minlength')\">Minimum length should be 6!</ng-container>\r\n    <ng-container *ngIf=\"control.hasError('maxlength')\">Maximum length should be 30!</ng-container>\r\n</ng-template>\r\n<ng-template #emailErrorTpl let-control>\r\n    <ng-container *ngIf=\"control.hasError('email')\">The input is not valid E-mail!</ng-container>\r\n    <ng-container *ngIf=\"control.hasError('required')\">Please input your E-mail!</ng-container>\r\n</ng-template>\r\n<ng-template #passwordErrorTpl let-control>\r\n    <ng-container *ngIf=\"control.hasError('required')\">Please input your password!</ng-container>\r\n    <ng-container *ngIf=\"control.hasError('minlength')\">Minimum length should be 8!</ng-container>\r\n    <ng-container *ngIf=\"control.hasError('maxlength')\">Maximum length should be 30!</ng-container>\r\n</ng-template>\r\n<ng-template #confirmPasswordErrorTpl let-control>\r\n    <ng-container *ngIf=\"control.hasError('required')\">Please input your confirm password!</ng-container>\r\n    <ng-container *ngIf=\"control.hasError('confirm')\">Password doesn't match!</ng-container>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./src/app/authentication/authentication-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/authentication/authentication-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AuthenticationRoutingModule */

  /***/
  function srcAppAuthenticationAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
      return AuthenticationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/authentication/reset-password/reset-password.component.ts");
    /* harmony import */


    var _registraion_success_registraion_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./registraion-success/registraion-success.component */
    "./src/app/authentication/registraion-success/registraion-success.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/authentication/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/authentication/sign-up/sign-up.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _confirm_success_confirm_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./confirm-success/confirm-success.component */
    "./src/app/authentication/confirm-success/confirm-success.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'sign-up',
      component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    }, {
      path: 'forgot-password',
      component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
    }, {
      path: 'reset-password/:token',
      component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_1__["ResetPasswordComponent"]
    }, {
      path: 'registration-success',
      component: _registraion_success_registraion_success_component__WEBPACK_IMPORTED_MODULE_2__["RegistraionSuccessComponent"]
    }, {
      path: 'confirm-success',
      component: _confirm_success_confirm_success_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmSuccessComponent"]
    }, {
      path: '',
      redirectTo: 'login'
    }];

    var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
      _classCallCheck(this, AuthenticationRoutingModule);
    };

    AuthenticationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })], AuthenticationRoutingModule);
    /***/
  },

  /***/
  "./src/app/authentication/authentication.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/authentication.module.ts ***!
    \*********************************************************/

  /*! exports provided: AutheticationModule */

  /***/
  function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutheticationModule", function () {
      return AutheticationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/authentication/login/login.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/authentication/sign-up/sign-up.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/authentication/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentication-routing.module */
    "./src/app/authentication/authentication-routing.module.ts");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _registraion_success_registraion_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./registraion-success/registraion-success.component */
    "./src/app/authentication/registraion-success/registraion-success.component.ts");
    /* harmony import */


    var _confirm_success_confirm_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./confirm-success/confirm-success.component */
    "./src/app/authentication/confirm-success/confirm-success.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/authentication/reset-password/reset-password.component.ts");

    var AutheticationModule = function AutheticationModule() {
      _classCallCheck(this, AutheticationModule);
    };

    AutheticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"], _registraion_success_registraion_success_component__WEBPACK_IMPORTED_MODULE_10__["RegistraionSuccessComponent"], _confirm_success_confirm_success_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmSuccessComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationRoutingModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzFormModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzSpinModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzAlertModule"]],
      providers: []
    })], AutheticationModule);
    /***/
  },

  /***/
  "./src/app/authentication/confirm-success/confirm-success.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/authentication/confirm-success/confirm-success.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfirmSuccessComponent */

  /***/
  function srcAppAuthenticationConfirmSuccessConfirmSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmSuccessComponent", function () {
      return ConfirmSuccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfirmSuccessComponent = /*#__PURE__*/function () {
      function ConfirmSuccessComponent() {
        _classCallCheck(this, ConfirmSuccessComponent);
      }

      _createClass(ConfirmSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfirmSuccessComponent;
    }();

    ConfirmSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirm-success',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirm-success.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/confirm-success/confirm-success.component.html"))["default"]
    })], ConfirmSuccessComponent);
    /***/
  },

  /***/
  "./src/app/authentication/forgot-password/forgot-password.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppAuthenticationForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_service_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/service/form.service */
    "./src/shared/service/form.service.ts");
    /* harmony import */


    var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../shared/service/auth.service */
    "./src/shared/service/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(fb, authService, formService, router) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.fb = fb;
        this.authService = authService;
        this.formService = formService;
        this.router = router;
        this.isSuccessMessage = false;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgotPasswordForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.errorMessage = null;
          this.isSuccessMessage = false;
          this.formService.makeFormDirty(this.forgotPasswordForm);

          if (this.forgotPasswordForm.valid) {
            this.isLoadingFlag = true;
            var status = this.authService.forgotPassword(this.forgotPasswordForm.value);

            if (status) {
              this.isSuccessMessage = true;
              this.router.navigate(['auth/reset-password', this.forgotPasswordForm.value.email]);
            } else {
              this.errorMessage = 'Email address not found!';
            }

            this.isLoadingFlag = false;
          }
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _shared_service_form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/forgot-password/forgot-password.component.html"))["default"]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/authentication/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/service/auth.service */
    "./src/shared/service/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_shared_service_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/shared/service/form.service */
    "./src/shared/service/form.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, authService, router, formService, activatedRoute) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.formService = formService;
        this.activatedRoute = activatedRoute;

        if (this.authService.isLoggedin()) {
          this.router.navigate(['food/all-foods']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            _this.redirectUrl = params.redirectURL;
          });
          this.loginForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.errorMessage = null;
          this.formService.makeFormDirty(this.loginForm);

          if (this.loginForm.valid) {
            this.isLoadingFlag = true;
            var status = this.authService.signIn(this.loginForm.value);

            if (status) {
              this.authService.saveToken(this.loginForm.value.email);

              if (this.redirectUrl) {
                this.router.navigateByUrl(this.redirectUrl);
              } else {
                this.router.navigate(['food/all-foods']);
              }
            } else {
              this.errorMessage = 'Wrong username or password!';
            }

            this.isLoadingFlag = false;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_shared_service_form_service__WEBPACK_IMPORTED_MODULE_5__["FormService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/login/login.component.html"))["default"]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/authentication/registraion-success/registraion-success.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/authentication/registraion-success/registraion-success.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: RegistraionSuccessComponent */

  /***/
  function srcAppAuthenticationRegistraionSuccessRegistraionSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistraionSuccessComponent", function () {
      return RegistraionSuccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RegistraionSuccessComponent = /*#__PURE__*/function () {
      function RegistraionSuccessComponent() {
        _classCallCheck(this, RegistraionSuccessComponent);
      }

      _createClass(RegistraionSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegistraionSuccessComponent;
    }();

    RegistraionSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registraion-success',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registraion-success.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/registraion-success/registraion-success.component.html"))["default"]
    })], RegistraionSuccessComponent);
    /***/
  },

  /***/
  "./src/app/authentication/reset-password/reset-password.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/authentication/reset-password/reset-password.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppAuthenticationResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/service/form.service */
    "./src/shared/service/form.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/shared/service/auth.service */
    "./src/shared/service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(fb, authService, router, activatedRoute, formService) {
        var _this2 = this;

        _classCallCheck(this, ResetPasswordComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formService = formService;

        this.matchPassword = function (control) {
          if (!control.value) {
            return {
              required: true
            };
          } else if (control.value !== _this2.resetPasswordForm.controls.password.value) {
            return {
              confirm: true,
              error: true
            };
          }
        };
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.activatedRoute.paramMap.subscribe(function (params) {
            _this3.token = params.get('token');
          });
          this.resetPasswordForm = this.fb.group({
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.matchPassword]]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.isErrorMesage = false;
          this.formService.makeFormDirty(this.resetPasswordForm);

          if (this.resetPasswordForm.valid) {
            this.isLoadingFlag = true;
            var model = {
              email: this.token,
              password: this.resetPasswordForm.value.password
            };
            var status = this.authService.resetPassword(model);

            if (status) {
              this.router.navigate(['auth/confirm-success']);
            } else {
              this.isErrorMesage = true;
            }

            this.isLoadingFlag = false;
          }
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _shared_service_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"]
      }];
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/reset-password/reset-password.component.html"))["default"]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/authentication/sign-up/sign-up.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/authentication/sign-up/sign-up.component.ts ***!
    \*************************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppAuthenticationSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_service_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../shared/service/form.service */
    "./src/shared/service/form.service.ts");
    /* harmony import */


    var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/service/auth.service */
    "./src/shared/service/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(fb, authService, router, formService) {
        var _this4 = this;

        _classCallCheck(this, SignUpComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.formService = formService;

        this.matchPassword = function (control) {
          if (!control.value) {
            return {
              required: true
            };
          } else if (control.value !== _this4.signUpForm.controls.password.value) {
            return {
              confirm: true,
              error: true
            };
          }
        };
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30)]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.matchPassword]]
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm(formValue) {
          this.errorMessage = null;
          this.formService.makeFormDirty(this.signUpForm);

          if (this.signUpForm.valid) {
            this.isLoadingFlag = true;
            var model = {
              name: formValue.name,
              email: formValue.email,
              password: formValue.password
            };
            var status = this.authService.signUp(model);

            if (status) {
              this.router.navigate(['auth/registration-success']);
            } else {
              this.errorMessage = 'Email already exists!';
            }

            this.isLoadingFlag = false;
          }
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _shared_service_form_service__WEBPACK_IMPORTED_MODULE_1__["FormService"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-up/sign-up.component.html"))["default"]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/shared/service/form.service.ts":
  /*!********************************************!*\
    !*** ./src/shared/service/form.service.ts ***!
    \********************************************/

  /*! exports provided: FormService */

  /***/
  function srcSharedServiceFormServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormService", function () {
      return FormService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormService = /*#__PURE__*/function () {
      function FormService() {
        _classCallCheck(this, FormService);
      }

      _createClass(FormService, [{
        key: "makeFormDirty",
        value: function makeFormDirty(form) {
          Object.keys(form.controls).forEach(function (key) {
            var control = form.controls[key];
            control.markAsDirty();
            control.updateValueAndValidity();
          });
        }
      }]);

      return FormService;
    }();

    FormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FormService);
    /***/
  }
}]);
//# sourceMappingURL=authentication-authentication-module-es5.js.map