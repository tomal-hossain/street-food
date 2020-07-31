(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/shared/service/auth.service.ts":
/*!********************************************!*\
  !*** ./src/shared/service/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.userList = [];
    }
    signIn(model) {
        const user = this.userList.find(x => x.email === model.email && x.password === model.password);
        if (user) {
            return true;
        }
        return false;
    }
    signUp(model) {
        const user = this.userList.find(x => x.email === model.email);
        if (user) {
            return false;
        }
        this.userList.push(model);
        return true;
    }
    forgotPassword(model) {
        const user = this.userList.find(x => x.email === model.email);
        if (user) {
            return true;
        }
        return false;
    }
    resetPassword(model) {
        const index = this.userList.findIndex(x => x.email === model.email);
        if (index >= 0) {
            this.userList[index].password = model.password;
            return true;
        }
        return false;
    }
    saveToken(token) {
        localStorage.setItem('userToken', token);
    }
    isLoggedin() {
        const email = localStorage.getItem('userToken');
        if (email) {
            const index = this.userList.findIndex(x => x.email === email);
            if (index >= 0) {
                return true;
            }
        }
        return false;
    }
    getUserName() {
        const email = localStorage.getItem('userToken');
        const index = this.userList.findIndex(x => x.email === email);
        if (index >= 0) {
            return this.userList[index].name;
        }
        return null;
    }
    logOut() {
        localStorage.clear();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map