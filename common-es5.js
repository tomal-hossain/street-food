function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/shared/service/auth.service.ts":
  /*!********************************************!*\
    !*** ./src/shared/service/auth.service.ts ***!
    \********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcSharedServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.userList = [];
      }

      _createClass(AuthService, [{
        key: "signIn",
        value: function signIn(model) {
          var user = this.userList.find(function (x) {
            return x.email === model.email && x.password === model.password;
          });

          if (user) {
            return true;
          }

          return false;
        }
      }, {
        key: "signUp",
        value: function signUp(model) {
          var user = this.userList.find(function (x) {
            return x.email === model.email;
          });

          if (user) {
            return false;
          }

          this.userList.push(model);
          return true;
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(model) {
          var user = this.userList.find(function (x) {
            return x.email === model.email;
          });

          if (user) {
            return true;
          }

          return false;
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(model) {
          var index = this.userList.findIndex(function (x) {
            return x.email === model.email;
          });

          if (index >= 0) {
            this.userList[index].password = model.password;
            return true;
          }

          return false;
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          localStorage.setItem('userToken', token);
        }
      }, {
        key: "isLoggedin",
        value: function isLoggedin() {
          var email = localStorage.getItem('userToken');

          if (email) {
            var index = this.userList.findIndex(function (x) {
              return x.email === email;
            });

            if (index >= 0) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "getUserName",
        value: function getUserName() {
          var email = localStorage.getItem('userToken');
          var index = this.userList.findIndex(function (x) {
            return x.email === email;
          });

          if (index >= 0) {
            return this.userList[index].name;
          }

          return null;
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.clear();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map