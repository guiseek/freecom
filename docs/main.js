;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ '/cOR':
      /*!****************************************************!*\
  !*** ./libs/peer/player/src/lib/controls/index.ts ***!
  \****************************************************/
      /*! exports provided: QualityControl, VolumeControl */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _quality_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./quality.control */ 'fWq8'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'QualityControl',
          function () {
            return _quality_control__WEBPACK_IMPORTED_MODULE_0__[
              'QualityControl'
            ]
          }
        )

        /* harmony import */ var _volume_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./volume.control */ 'OFrF'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'VolumeControl',
          function () {
            return _volume_control__WEBPACK_IMPORTED_MODULE_1__['VolumeControl']
          }
        )

        /***/
      },

    /***/ 0:
      /*!*********************************************************!*\
  !*** multi ./apps/docs/samples/peer-client/src/main.ts ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/guiseek/dev/rtc/freecom/apps/docs/samples/peer-client/src/main.ts */ 'DUmd'
        )

        /***/
      },

    /***/ 1:
      /*!********************!*\
  !*** ws (ignored) ***!
  \********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        /* (ignored) */
        /***/
      },

    /***/ '1wjH':
      /*!*********************************************************!*\
  !*** ./libs/peer/phone/src/lib/peer-phone.component.ts ***!
  \*********************************************************/
      /*! exports provided: PeerPhoneComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPhoneComponent',
          function () {
            return PeerPhoneComponent
          }
        )
        /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/material/dialog */ '0IaG'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _config_config_injectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./config/config-injectors */ 'qlr7'
        )
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ 'kU1M'
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )

        class PeerPhoneComponent {
          constructor(ref, config, data) {
            this.ref = ref
            this.config = config
            this.data = data
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__['Subject']()
          }
          ngOnInit() {
            this.ring = new Audio(this.config.ringtones.incoming)
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['interval'])(
              this.ring.duration
            )
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['delay'])(
                  1000
                ),
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['takeUntil']
                )(this.destroy$),
                Object(
                  rxjs_operators__WEBPACK_IMPORTED_MODULE_3__['repeatWhen']
                )(() =>
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_4__['fromEvent'])(
                    this.ring,
                    'onended'
                  )
                )
              )
              .subscribe(() => this.ring.play())
          }
          cancel() {
            this.ref.close(null)
          }
          ngOnDestroy() {
            this.destroy$.next()
            this.destroy$.complete()
          }
        }
        PeerPhoneComponent.ɵfac = function PeerPhoneComponent_Factory(t) {
          return new (t || PeerPhoneComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__[
                'MatDialogRef'
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _config_config_injectors__WEBPACK_IMPORTED_MODULE_2__[
                'PEER_PHONE_CONFIG'
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__[
                'MAT_DIALOG_DATA'
              ]
            )
          )
        }
        PeerPhoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineComponent'
        ]({
          type: PeerPhoneComponent,
          selectors: [['peer-peer-phone']],
          decls: 22,
          vars: 0,
          consts: [
            [
              'xmlns',
              'http://www.w3.org/2000/svg',
              'width',
              '360',
              'height',
              '321.3',
              'viewBox',
              '0 0 360 321.3',
              1,
              'phone',
            ],
            [
              'id',
              'Grupo_1',
              'data-name',
              'Grupo 1',
              'transform',
              'translate(0)',
            ],
            [
              'id',
              'Caminho_1',
              'data-name',
              'Caminho 1',
              'd',
              'M260.3,72h-1.5V24.7A24.753,24.753,0,0,0,234.1,0H127.4a24.753,24.753,0,0,0-24.7,24.7V40.8H101v13h1.7V64.1h-1.4V87.6h1.4v5.9h-1.3v23h1.3V296.6a24.753,24.753,0,0,0,24.7,24.7H234.1a24.753,24.753,0,0,0,24.7-24.7V110.2h1.5Z',
              'fill',
              '#e8e8e8',
            ],
            [
              'id',
              'Caminho_2',
              'data-name',
              'Caminho 2',
              'd',
              'M251.5,30.6v261a23.259,23.259,0,0,1-23.3,23.3h-95a23.259,23.259,0,0,1-23.3-23.3V30.6A23.259,23.259,0,0,1,133.2,7.3h9.2a17.421,17.421,0,0,0,15.9,10.4h44.6A17.421,17.421,0,0,0,218.8,7.3h9.4A23.259,23.259,0,0,1,251.5,30.6Z',
              'fill',
              '#fff',
            ],
            [
              'id',
              'Caminho_3',
              'data-name',
              'Caminho 3',
              'd',
              'M251.5,30.6v9.8H109.9V30.6A23.259,23.259,0,0,1,133.2,7.3h9.2a17.421,17.421,0,0,0,15.9,10.4h44.6A17.421,17.421,0,0,0,218.8,7.3h9.4A23.259,23.259,0,0,1,251.5,30.6Z',
              'fill',
              '#566284',
            ],
            [
              'id',
              'Caminho_4',
              'data-name',
              'Caminho 4',
              'd',
              'M163.6,94.6a24.113,24.113,0,1,1,34.2,34,24.113,24.113,0,1,1-34.2-34Zm8.8,32.4a17.452,17.452,0,0,0,16.6,0,17.827,17.827,0,0,0,6.2-5.7c0-1.5-.9-2.8-2.7-4a19.636,19.636,0,0,0-5.9-2.6,21.873,21.873,0,0,0-5.9-.8,26.744,26.744,0,0,0-5.9.8,19.636,19.636,0,0,0-5.9,2.6c-1.8,1.2-2.7,2.5-2.8,4A17.3,17.3,0,0,0,172.4,127Zm13.4-30.1a6.943,6.943,0,0,0-5.1-2.1,7.336,7.336,0,0,0-5.2,2.1,7.127,7.127,0,0,0,0,10.3,7.262,7.262,0,0,0,5.2,2.2,6.67,6.67,0,0,0,5.1-2.2,7.17,7.17,0,0,0,2.1-5.2A6.943,6.943,0,0,0,185.8,96.9Z',
              'fill',
              '#577be0',
            ],
            [
              'id',
              'Caminho_5',
              'data-name',
              'Caminho 5',
              'd',
              'M203.5,54.7H155.9v4h47.6Z',
              'fill',
              '#ccc',
            ],
            [
              'id',
              'Caminho_6',
              'data-name',
              'Caminho 6',
              'd',
              'M195.7,147.4H165.6v4h30.1Z',
              'fill',
              '#ccc',
            ],
            [
              'id',
              'Caminho_7',
              'data-name',
              'Caminho 7',
              'd',
              'M140.8,214a13.5,13.5,0,1,0-13.5-13.5A13.5,13.5,0,0,0,140.8,214Z',
              'fill',
              '#b3b3b3',
            ],
            [
              'id',
              'Caminho_8',
              'data-name',
              'Caminho 8',
              'd',
              'M180.5,214A13.5,13.5,0,1,0,167,200.5,13.5,13.5,0,0,0,180.5,214Z',
              'fill',
              '#b3b3b3',
            ],
            [
              'id',
              'Caminho_9',
              'data-name',
              'Caminho 9',
              'd',
              'M180.7,286.1a16.6,16.6,0,1,0-16.6-16.6A16.6,16.6,0,0,0,180.7,286.1Z',
              'fill',
              '#577be0',
            ],
            [
              'id',
              'Caminho_10',
              'data-name',
              'Caminho 10',
              'd',
              'M220.1,214a13.5,13.5,0,1,0-13.5-13.5A13.5,13.5,0,0,0,220.1,214Z',
              'fill',
              '#b3b3b3',
            ],
            [
              'id',
              'Caminho_11',
              'data-name',
              'Caminho 11',
              'd',
              'M135.4,194.6l11.8,11.8-.9.9-2.9-2.9a6.356,6.356,0,0,1-1.8.6v2.3h-1.4v-2.4a4.933,4.933,0,0,1-3-1.6,4.471,4.471,0,0,1-1.2-3.1h1.2a3.25,3.25,0,0,0,1.1,2.5,3.541,3.541,0,0,0,2.6,1,3.166,3.166,0,0,0,1.6-.4l-1.2-1.2c-.2,0-.3.1-.5.1a2.051,2.051,0,0,1-2.1-2.1v-.5l-4.2-4.2Zm3.3,1.5V196a2.1,2.1,0,1,1,4.2,0v4.3Zm7.1,4.1a4.645,4.645,0,0,1-.6,2.3l-.9-.9a3.529,3.529,0,0,0,.3-1.4Z',
              'fill',
              '#fff',
            ],
            [
              'id',
              'Caminho_12',
              'data-name',
              'Caminho 12',
              'd',
              'M175.3,195.3a1.45,1.45,0,1,1-.4,1A1.284,1.284,0,0,1,175.3,195.3Zm0,4.2a1.45,1.45,0,1,1-.4,1A1.284,1.284,0,0,1,175.3,199.5Zm0,4.3a1.45,1.45,0,1,1-.4,1A1.159,1.159,0,0,1,175.3,203.8Zm4.2-8.5a1.45,1.45,0,1,1-.4,1A1.284,1.284,0,0,1,179.5,195.3Zm0,4.2a1.45,1.45,0,1,1-.4,1A1.284,1.284,0,0,1,179.5,199.5Zm0,4.3a1.45,1.45,0,1,1-.4,1A1.159,1.159,0,0,1,179.5,203.8Zm6.2-6.5a1.45,1.45,0,1,1,.4-1A1.159,1.159,0,0,1,185.7,197.3Zm-2,2.2a1.45,1.45,0,1,1-.4,1A1.284,1.284,0,0,1,183.7,199.5Zm0,4.3a1.45,1.45,0,1,1-.4,1A1.159,1.159,0,0,1,183.7,203.8Z',
              'fill',
              '#fff',
            ],
            [
              'id',
              'Caminho_13',
              'data-name',
              'Caminho 13',
              'd',
              'M217,198.4h2.8l3.5-3.5v11.3l-3.5-3.5H217Z',
              'fill',
              '#fff',
            ],
            [
              'id',
              'Caminho_14',
              'data-name',
              'Caminho 14',
              'd',
              'M180.7,267.3a15.225,15.225,0,0,0-4.2.6v2.8a1.05,1.05,0,0,1-.5.9,8.068,8.068,0,0,0-2.4,1.7.864.864,0,0,1-.6.3.6.6,0,0,1-.6-.3l-2.3-2.3a.864.864,0,0,1-.3-.6.713.713,0,0,1,.3-.6,15.064,15.064,0,0,1,10.6-4.3,14.486,14.486,0,0,1,10.6,4.3.864.864,0,0,1,.3.6.713.713,0,0,1-.3.6l-2.3,2.3a.864.864,0,0,1-.6.3.713.713,0,0,1-.6-.3,10.393,10.393,0,0,0-2.4-1.7.891.891,0,0,1-.5-.8V268A15.389,15.389,0,0,0,180.7,267.3Z',
              'fill',
              '#fff',
            ],
            [
              'id',
              'Caminho_15',
              'data-name',
              'Caminho 15',
              'd',
              'M140.1,11.8H125v4h15.1Z',
              'fill',
              '#fff',
            ],
            [
              'id',
              'Caminho_16',
              'data-name',
              'Caminho 16',
              'd',
              'M222.1,15.8a2,2,0,1,0-2-2A2,2,0,0,0,222.1,15.8Z',
              'fill',
              '#fff',
            ],
            [
              'id',
              'Caminho_17',
              'data-name',
              'Caminho 17',
              'd',
              'M228.5,15.8a2,2,0,1,0-2-2A2,2,0,0,0,228.5,15.8Z',
              'fill',
              '#fff',
            ],
            [
              'id',
              'Caminho_18',
              'data-name',
              'Caminho 18',
              'd',
              'M24.532,147a5.933,5.933,0,0,1-4.237-1.779,71.053,71.053,0,0,1,0-99.443,5.986,5.986,0,0,1,1.944-1.316,5.919,5.919,0,0,1,4.586,0,5.985,5.985,0,0,1,1.944,1.316,6.075,6.075,0,0,1,1.3,1.969,6.143,6.143,0,0,1,0,4.646,6.074,6.074,0,0,1-1.3,1.969,58.79,58.79,0,0,0,0,82.275,6.109,6.109,0,0,1-.9,9.345A5.933,5.933,0,0,1,24.532,147Z',
              'fill',
              '#7383bf',
              1,
              'second-wave-left',
            ],
            [
              'id',
              'Caminho_19',
              'data-name',
              'Caminho 19',
              'd',
              'M50.241,56.142a5.931,5.931,0,0,1,3.334,1.019,6.048,6.048,0,0,1,2.21,2.726,6.123,6.123,0,0,1-1.307,6.619,40.246,40.246,0,0,0,0,56.321,6.127,6.127,0,0,1,0,8.585,5.939,5.939,0,0,1-8.473,0,52.5,52.5,0,0,1,0-73.49A5.948,5.948,0,0,1,47.947,56.6,5.885,5.885,0,0,1,50.241,56.142ZM335.468,44a5.9,5.9,0,0,1,2.293.461,5.972,5.972,0,0,1,1.943,1.318,71.053,71.053,0,0,1,0,99.443,5.941,5.941,0,0,1-8.473,0,6.121,6.121,0,0,1,0-8.584,58.79,58.79,0,0,0,0-82.275,6.109,6.109,0,0,1,.9-9.345A5.93,5.93,0,0,1,335.468,44Z',
              'fill',
              '#7383bf',
              1,
              'second-wave-right',
            ],
            [
              'id',
              'Caminho_20',
              'data-name',
              'Caminho 20',
              'd',
              'M304.666,133.028a5.936,5.936,0,0,0,7.57-.76,52.494,52.494,0,0,0,0-73.49,5.936,5.936,0,0,0-8.473,0,6.126,6.126,0,0,0,0,8.584,40.246,40.246,0,0,1,0,56.321,6.11,6.11,0,0,0,.9,9.345Z',
              'fill',
              '#7383bf',
              1,
              'first-wave-right',
            ],
          ],
          template: function PeerPhoneComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵnamespaceSVG']()
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](
                0,
                'svg',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](
                1,
                'g',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                2,
                'path',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                3,
                'path',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                4,
                'path',
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                5,
                'path',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                6,
                'path',
                6
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                7,
                'path',
                7
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                8,
                'path',
                8
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                9,
                'path',
                9
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                10,
                'path',
                10
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                11,
                'path',
                11
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                12,
                'path',
                12
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                13,
                'path',
                13
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                14,
                'path',
                14
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                15,
                'path',
                15
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                16,
                'path',
                16
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                17,
                'path',
                17
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                18,
                'path',
                18
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                19,
                'path',
                19
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                20,
                'path',
                20
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](
                21,
                'path',
                21
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']()
            }
          },
          styles: [
            '[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n  height: 321px;\n  max-height: 600px;\n}\n[_nghost-%COMP%]   .mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n}\n[_nghost-%COMP%]   .phone[_ngcontent-%COMP%] {\n  \n  transform-origin: 50% 50%;\n  -webkit-animation: ring 2s ease infinite;\n          animation: ring 2s ease infinite;\n}\n[_nghost-%COMP%]   .first-wave-right[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n  -webkit-animation: propagation_right 1.8s ease infinite;\n          animation: propagation_right 1.8s ease infinite;\n  opacity: 0;\n}\n[_nghost-%COMP%]   .second-wave-right[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n  -webkit-animation: propagation_right 1.8s 0.2s ease infinite;\n          animation: propagation_right 1.8s 0.2s ease infinite;\n  opacity: 0;\n}\n[_nghost-%COMP%]   .first-wave-left[_ngcontent-%COMP%] {\n  transform: translateX(2px);\n  -webkit-animation: propagation_left 1.8s ease infinite;\n          animation: propagation_left 1.8s ease infinite;\n  opacity: 0;\n}\n[_nghost-%COMP%]   .second-wave-left[_ngcontent-%COMP%] {\n  transform: translateX(2px);\n  -webkit-animation: propagation_left 1.8s 0.2s ease infinite;\n          animation: propagation_left 1.8s 0.2s ease infinite;\n  opacity: 0;\n}\n@-webkit-keyframes propagation_right {\n  70% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(2px);\n    opacity: 0;\n  }\n}\n@keyframes propagation_right {\n  70% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(2px);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes propagation_left {\n  70% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-2px);\n    opacity: 0;\n  }\n}\n@keyframes propagation_left {\n  70% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-2px);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  20% {\n    transform: rotate(10deg);\n  }\n  40% {\n    transform: rotate(-10deg);\n  }\n  60% {\n    transform: rotate(10deg);\n  }\n  80% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  20% {\n    transform: rotate(10deg);\n  }\n  40% {\n    transform: rotate(-10deg);\n  }\n  60% {\n    transform: rotate(10deg);\n  }\n  80% {\n    transform: rotate(0deg);\n  }\n}\n  .phone-container .mat-dialog-container {\n  background-color: transparent;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BlZXItcGhvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQUY7QUFFRTtFQUNFLDZCQUFBO0FBQUo7QUFHRTtFQUNFLE9BQUE7RUFDQSxXQUFBO0FBREo7QUFJRTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FBRko7QUFLRTtFQUNFLDJCQUFBO0VBQ0EsdURBQUE7VUFBQSwrQ0FBQTtFQUNBLFVBQUE7QUFISjtBQU1FO0VBQ0UsMkJBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0VBQ0EsVUFBQTtBQUpKO0FBT0U7RUFDRSwwQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7RUFDQSxVQUFBO0FBTEo7QUFRRTtFQUNFLDBCQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtFQUNBLFVBQUE7QUFOSjtBQVNFO0VBQ0U7SUFDRSxVQUFBO0VBUEo7RUFTRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQVBKO0FBQ0Y7QUFBRTtFQUNFO0lBQ0UsVUFBQTtFQVBKO0VBU0U7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFQSjtBQUNGO0FBVUU7RUFDRTtJQUNFLFVBQUE7RUFSSjtFQVVFO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBUko7QUFDRjtBQUNFO0VBQ0U7SUFDRSxVQUFBO0VBUko7RUFVRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQVJKO0FBQ0Y7QUFXRTtFQUNFO0lBQ0UsdUJBQUE7RUFUSjtFQVdFO0lBQ0Usd0JBQUE7RUFUSjtFQVdFO0lBQ0UseUJBQUE7RUFUSjtFQVdFO0lBQ0Usd0JBQUE7RUFUSjtFQVdFO0lBQ0UsdUJBQUE7RUFUSjtBQUNGO0FBTkU7RUFDRTtJQUNFLHVCQUFBO0VBVEo7RUFXRTtJQUNFLHdCQUFBO0VBVEo7RUFXRTtJQUNFLHlCQUFBO0VBVEo7RUFXRTtJQUNFLHdCQUFBO0VBVEo7RUFXRTtJQUNFLHVCQUFBO0VBVEo7QUFDRjtBQVlBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtBQVRGIiwiZmlsZSI6InBlZXItcGhvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgd2lkdGg6IDM4MHB4O1xuICBoZWlnaHQ6IDMyMXB4O1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcblxuICAubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5waG9uZSB7XG4gICAgLyogUlVOIEFOSU1BVElPTiBJTiBDRU5URVIgKi9cbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIGFuaW1hdGlvbjogcmluZyAycyBlYXNlIGluZmluaXRlO1xuICB9XG5cbiAgLmZpcnN0LXdhdmUtcmlnaHQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgICBhbmltYXRpb246IHByb3BhZ2F0aW9uX3JpZ2h0IDEuOHMgZWFzZSBpbmZpbml0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLnNlY29uZC13YXZlLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG4gICAgYW5pbWF0aW9uOiBwcm9wYWdhdGlvbl9yaWdodCAxLjhzIDAuMnMgZWFzZSBpbmZpbml0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLmZpcnN0LXdhdmUtbGVmdCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgYW5pbWF0aW9uOiBwcm9wYWdhdGlvbl9sZWZ0IDEuOHMgZWFzZSBpbmZpbml0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLnNlY29uZC13YXZlLWxlZnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgIGFuaW1hdGlvbjogcHJvcGFnYXRpb25fbGVmdCAxLjhzIDAuMnMgZWFzZSBpbmZpbml0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgQGtleWZyYW1lcyBwcm9wYWdhdGlvbl9yaWdodCB7XG4gICAgNzAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcHJvcGFnYXRpb25fbGVmdCB7XG4gICAgNzAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHJpbmcge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgfVxufVxuOjpuZy1kZWVwIC5waG9uZS1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4iXX0= */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            PeerPhoneComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'],
                args: [
                  {
                    selector: 'peer-peer-phone',
                    templateUrl: './peer-phone.component.html',
                    styleUrls: ['./peer-phone.component.scss'],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__[
                      'MatDialogRef'
                    ],
                },
                {
                  type: undefined,
                  decorators: [
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__['Inject'],
                      args: [
                        _config_config_injectors__WEBPACK_IMPORTED_MODULE_2__[
                          'PEER_PHONE_CONFIG'
                        ],
                      ],
                    },
                  ],
                },
                {
                  type: undefined,
                  decorators: [
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__['Inject'],
                      args: [
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__[
                          'MAT_DIALOG_DATA'
                        ],
                      ],
                    },
                  ],
                },
              ]
            },
            null
          )
        })()

        /***/
      },

    /***/ '3YGx':
      /*!**************************************************!*\
  !*** ./libs/peer/client/src/lib/client-store.ts ***!
  \**************************************************/
      /*! exports provided: ClientStore */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ClientStore',
          function () {
            return ClientStore
          }
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! immutable */ 'Mpt7'
        )

        class ClientStore {
          constructor() {
            this._clients = new rxjs__WEBPACK_IMPORTED_MODULE_0__[
              'BehaviorSubject'
            ](Object(immutable__WEBPACK_IMPORTED_MODULE_2__['List'])([]))
          }
          get clients$() {
            return this._clients.asObservable()
          }
          getClient(clientId) {
            const clientList = this._clients.getValue()
            return clientList.find((c) => c.id === clientId)
          }
          addClient(newClient) {
            this._clients.next(this._clients.getValue().push(newClient))
          }
          removeClient(clientId) {
            const clientList = this._clients.getValue()
            const removeIndex = clientList.findIndex((c) => c.id === clientId)
            this._clients.next(clientList.remove(removeIndex))
          }
        }
        ClientStore.ɵfac = function ClientStore_Factory(t) {
          return new (t || ClientStore)()
        }
        ClientStore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineInjectable'
        ]({ token: ClientStore, factory: ClientStore.ɵfac })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            ClientStore,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'],
              },
            ],
            function () {
              return []
            },
            null
          )
        })()

        /***/
      },

    /***/ '462L':
      /*!****************************************************************!*\
  !*** ./apps/docs/samples/peer-client/src/app/app.component.ts ***!
  \****************************************************************/
      /*! exports provided: AppComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppComponent',
          function () {
            return AppComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        )

        class AppComponent {
          constructor() {
            this.title = 'docs-samples-peer-client'
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)()
        }
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: AppComponent,
          selectors: [['sample-root']],
          decls: 2,
          vars: 0,
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'main'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                1,
                'router-outlet'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterOutlet'],
          ],
          styles: [
            '[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQUNKO0FBQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNOIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnN0YXJ0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'sample-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.scss'],
                  },
                ],
              },
            ],
            function () {
              return []
            },
            null
          )
        })()

        /***/
      },

    /***/ '4x5A':
      /*!*****************************************************!*\
  !*** ./libs/peer/player/src/lib/utilities/index.ts ***!
  \*****************************************************/
      /*! exports provided: EventHandler, Fullscreen, playerIcons */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./event-handler */ 'JhCZ'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'EventHandler',
          function () {
            return _event_handler__WEBPACK_IMPORTED_MODULE_0__['EventHandler']
          }
        )

        /* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./fullscreen */ 'kMTJ'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Fullscreen',
          function () {
            return _fullscreen__WEBPACK_IMPORTED_MODULE_1__['Fullscreen']
          }
        )

        /* harmony import */ var _player_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./player-icon */ 'Q99N'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'playerIcons',
          function () {
            return _player_icon__WEBPACK_IMPORTED_MODULE_2__['playerIcons']
          }
        )

        /***/
      },

    /***/ '883z':
      /*!***********************************************************!*\
  !*** ./libs/peer/core/src/lib/utilities/media-devices.ts ***!
  \***********************************************************/
      /*! exports provided: getDevices, getUserMedia, getDisplayMedia */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'getDevices',
          function () {
            return getDevices
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'getUserMedia',
          function () {
            return getUserMedia
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'getDisplayMedia',
          function () {
            return getDisplayMedia
          }
        )
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ 'mrSG'
        )

        function getDevices(deviceKind) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
            this,
            void 0,
            void 0,
            function* () {
              const filter = ({ kind }) => kind === deviceKind
              const devices = yield navigator.mediaDevices.enumerateDevices()
              return deviceKind ? devices.filter(filter) : devices
            }
          )
        }
        function getUserMedia(constraints) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
            this,
            void 0,
            void 0,
            function* () {
              return navigator.mediaDevices.getUserMedia(constraints)
            }
          )
        }
        function getDisplayMedia() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
            this,
            void 0,
            void 0,
            function* () {
              const configuration = { video: true }
              const mediaDevices = navigator.mediaDevices
              if ('getDisplayMedia' in navigator) {
                return navigator.getDisplayMedia(configuration)
              } else if ('getDisplayMedia' in mediaDevices) {
                return mediaDevices.getDisplayMedia(configuration)
              } else {
                return mediaDevices.getUserMedia({
                  video: { mediaSourcee: 'screen' },
                })
              }
            }
          )
        }

        /***/
      },

    /***/ '9T1Y':
      /*!*************************************************!*\
  !*** ./libs/peer/phone/src/lib/config/index.ts ***!
  \*************************************************/
      /*! exports provided: PEER_PHONE_CONFIG, mergeRtcConfig, peerPhoneConfig */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _config_injectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./config-injectors */ 'qlr7'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_PHONE_CONFIG',
          function () {
            return _config_injectors__WEBPACK_IMPORTED_MODULE_0__[
              'PEER_PHONE_CONFIG'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeRtcConfig',
          function () {
            return _config_injectors__WEBPACK_IMPORTED_MODULE_0__[
              'mergeRtcConfig'
            ]
          }
        )

        /* harmony import */ var _peer_phone_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./peer-phone-config */ 'zsLE'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'peerPhoneConfig',
          function () {
            return _peer_phone_config__WEBPACK_IMPORTED_MODULE_1__[
              'peerPhoneConfig'
            ]
          }
        )

        /***/
      },

    /***/ BSyR:
      /*!************************************************!*\
  !*** ./libs/peer/client/src/utils/versions.ts ***!
  \************************************************/
      /*! exports provided: versions */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'versions',
          function () {
            return versions
          }
        )
        const versions = {
          '@freecom/peer-client': '*',
        }

        /***/
      },

    /***/ DUmd:
      /*!***************************************************!*\
  !*** ./apps/docs/samples/peer-client/src/main.ts ***!
  \***************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */ 'SpU6'
        )
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ 'GKef'
        )
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ 'jhN1'
        )

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment']
            .production
        ) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])()
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
          'platformBrowser'
        ]()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule']
          )
          .catch((err) => console.error(err))

        /***/
      },

    /***/ EZ00:
      /*!****************************************************************************!*\
  !*** ./apps/docs/samples/peer-client/src/environments/environment.prod.ts ***!
  \****************************************************************************/
      /*! exports provided: environment */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'environment',
          function () {
            return environment
          }
        )
        const environment = {
          production: true,
          connection: {
            rtc: {
              iceServers: [
                // { urls: 'stun:gateway.guiseek.dev:3478' },
                { urls: 'stun:stun.services.mozilla.com' },
                { urls: 'stun:stun.stunprotocol.org:3478' },
              ],
            },
            socket: {
              uri: 'https://gateway.freecom.dev',
            },
          },
        }

        /***/
      },

    /***/ FcUm:
      /*!******************************************************!*\
  !*** ./libs/peer/player/src/lib/player.component.ts ***!
  \******************************************************/
      /*! exports provided: PlayerComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PlayerComponent',
          function () {
            return PlayerComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _utilities_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./utilities/event-handler */ 'JhCZ'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _controls_volume_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./controls/volume.control */ 'OFrF'
        )
        /* harmony import */ var _buttons_play_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./buttons/play.button */ 'X2QF'
        )
        /* harmony import */ var _controls_quality_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./controls/quality.control */ 'fWq8'
        )
        /* harmony import */ var _buttons_fullscreen_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./buttons/fullscreen.button */ 'to0R'
        )

        const _c0 = ['player']
        const _c1 = ['video']
        function PlayerComponent_div_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'div',
              6
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
          if (rf & 2) {
            const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵnextContext'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngClass',
              ctx_r1.getOverlayClass('visible', 'hidden')
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r1.title,
              ' '
            )
          }
        }
        function PlayerComponent_div_8_peer_play_2_Template(rf, ctx) {
          if (rf & 1) {
            const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵgetCurrentView'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'peer-play',
              13
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'playChanged',
              function PlayerComponent_div_8_peer_play_2_Template_peer_play_playChanged_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r8)
                const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵnextContext'
                ](2)
                return (ctx_r7.playing = $event)
              }
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
          if (rf & 2) {
            const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵnextContext'
            ](2)
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵreference'
            ](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'video',
              _r2
            )('keyboard', ctx_r4.keyboard)
          }
        }
        function PlayerComponent_div_8_peer_quality_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
              0,
              'peer-quality',
              14
            )
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2)
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵreference'
            ](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'video',
              _r2
            )
          }
        }
        function PlayerComponent_div_8_peer_fullscreen_5_Template(rf, ctx) {
          if (rf & 1) {
            const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵgetCurrentView'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'peer-fullscreen',
              15
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'fullscreenChanged',
              function PlayerComponent_div_8_peer_fullscreen_5_Template_peer_fullscreen_fullscreenChanged_0_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](
                  _r10
                )
                const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵnextContext'
                ](2)
                return (ctx_r9.isFullscreen = $event)
              }
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
          if (rf & 2) {
            const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵnextContext'
            ](2)
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵreference'
            ](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'player',
              _r0
            )('keyboard', ctx_r6.keyboard)
          }
        }
        function PlayerComponent_div_8_Template(rf, ctx) {
          if (rf & 1) {
            const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵgetCurrentView'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'div',
              7
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'div',
              8
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              PlayerComponent_div_8_peer_play_2_Template,
              1,
              2,
              'peer-play',
              9
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              3,
              'peer-volume',
              10
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'mutedChanged',
              function PlayerComponent_div_8_Template_peer_volume_mutedChanged_3_listener(
                $event
              ) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](
                  _r12
                )
                const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵnextContext'
                ]()
                ctx_r11.muted = $event
                return ctx_r11.mutedChange.emit(ctx_r11.muted)
              }
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              PlayerComponent_div_8_peer_quality_4_Template,
              1,
              1,
              'peer-quality',
              11
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              5,
              PlayerComponent_div_8_peer_fullscreen_5_Template,
              1,
              2,
              'peer-fullscreen',
              12
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
          if (rf & 2) {
            const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵnextContext'
            ]()
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵreference'
            ](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngClass',
              ctx_r3.getOverlayClass('visible', 'hidden')
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r3.stream === false
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'muted',
              ctx_r3.muted
            )('color', ctx_r3.color)('video', _r2)('keyboard', ctx_r3.keyboard)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r3.quality
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r3.fullscreen
            )
          }
        }
        const _c2 = [[['source']], [['track']]]
        const _c3 = ['source', 'track']
        class PlayerComponent {
          constructor(renderer, evt) {
            this.renderer = renderer
            this.evt = evt
            this.autoplay = true
            this.preload = true
            this.quality = true
            this.fullscreen = true
            this.stream = true
            this.color = 'primary'
            this.keyboard = false
            this.muted = false
            this.mutedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]()
            this.playing = false
            this.isFullscreen = false
            this.videoLoaded = false
            this.isMouseMoving = true
            this.isMouseMovingTimeout = 2000
          }
          ngAfterViewInit() {
            var _a, _b, _c, _d, _e
            this.events = [
              {
                element:
                  (_a = this.video) === null || _a === void 0
                    ? void 0
                    : _a.nativeElement,
                name: 'loadstart',
                callback: (event) => (this.videoLoaded = false),
                dispose: () => {},
              },
              {
                element:
                  (_b = this.video) === null || _b === void 0
                    ? void 0
                    : _b.nativeElement,
                name: 'loadedmetadata',
                callback: (event) => this.evLoadedMetadata(event),
                dispose: () => {},
              },
              {
                element:
                  (_c = this.video) === null || _c === void 0
                    ? void 0
                    : _c.nativeElement,
                name: 'error',
                callback: (event) =>
                  console.error('Unhandled Video Error', event),
                dispose: () => {},
              },
              {
                element:
                  (_d = this.video) === null || _d === void 0
                    ? void 0
                    : _d.nativeElement,
                name: 'contextmenu',
                callback: (event) => event.preventDefault(),
                dispose: () => {},
              },
              {
                element:
                  (_e = this.player) === null || _e === void 0
                    ? void 0
                    : _e.nativeElement,
                name: 'mousemove',
                callback: (event) => this.evMouseMove(event),
                dispose: () => {},
              },
            ]
            if (!!this.video && this.video.nativeElement) {
              this.video.nativeElement.addEventListener(
                'loadeddata',
                () => (this.videoLoaded = true)
              )
            }
            this.evt.addEvents(this.renderer, this.events)
          }
          evLoadedMetadata(event) {
            this.videoWidth = this.video.nativeElement.videoWidth
            this.videoHeight = this.video.nativeElement.videoHeight
            this.videoLoaded = true
          }
          evMouseMove(event) {
            this.isMouseMoving = true
            clearTimeout(this.isMouseMovingTimer)
            this.isMouseMovingTimer = window.setTimeout(() => {
              this.isMouseMoving = false
            }, this.isMouseMovingTimeout)
          }
          getOverlayClass(activeClass, inactiveClass) {
            if (this.overlay === null) {
              return !this.playing || this.isMouseMoving
                ? activeClass
                : inactiveClass
            } else {
              return this.overlay ? activeClass : inactiveClass
            }
          }
          load() {
            if (this.video && this.video.nativeElement)
              this.video.nativeElement.load()
          }
          getVideoTag() {
            var _a
            return (_a = this.video && this.video.nativeElement) !== null &&
              _a !== void 0
              ? _a
              : this.video.nativeElement
          }
          ngOnDestroy() {
            this.video.nativeElement.onloadeddata = null
            this.evt.removeEvents(this.events)
            if (this.srcObject) {
              this.srcObject.getTracks().forEach((t) => t.stop())
            }
          }
        }
        PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
          return new (t || PlayerComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['Renderer2']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _utilities_event_handler__WEBPACK_IMPORTED_MODULE_1__[
                'EventHandler'
              ]
            )
          )
        }
        PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: PlayerComponent,
          selectors: [['peer-player']],
          viewQuery: function PlayerComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](
                _c0,
                true
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](
                _c1,
                true
              )
            }
            if (rf & 2) {
              let _t
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.player = _t.first)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.video = _t.first)
            }
          },
          inputs: {
            src: 'src',
            srcObject: 'srcObject',
            title: 'title',
            autoplay: 'autoplay',
            preload: 'preload',
            quality: 'quality',
            fullscreen: 'fullscreen',
            stream: 'stream',
            poster: 'poster',
            color: 'color',
            keyboard: 'keyboard',
            overlay: 'overlay',
            muted: 'muted',
            videoWidth: 'videoWidth',
            videoHeight: 'videoHeight',
          },
          outputs: { mutedChange: 'mutedChange' },
          ngContentSelectors: _c3,
          decls: 9,
          vars: 8,
          consts: [
            [1, 'videoplayer', 3, 'ngClass'],
            ['player', ''],
            ['class', 'header', 3, 'ngClass', 4, 'ngIf'],
            [1, 'video', 3, 'srcObject', 'preload'],
            ['video', ''],
            ['class', 'controls', 3, 'ngClass', 4, 'ngIf'],
            [1, 'header', 3, 'ngClass'],
            [1, 'controls', 3, 'ngClass'],
            [1, 'menu'],
            [3, 'video', 'keyboard', 'playChanged', 4, 'ngIf'],
            [3, 'muted', 'color', 'video', 'keyboard', 'mutedChanged'],
            [3, 'video', 4, 'ngIf'],
            [3, 'player', 'keyboard', 'fullscreenChanged', 4, 'ngIf'],
            [3, 'video', 'keyboard', 'playChanged'],
            [3, 'video'],
            [3, 'player', 'keyboard', 'fullscreenChanged'],
          ],
          template: function PlayerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojectionDef'](_c2)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'div',
                0,
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                PlayerComponent_div_2_Template,
                2,
                2,
                'div',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                3,
                'video',
                3,
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](5)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](6, 1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                7,
                ' This browser does not support HTML5 video. '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                8,
                PlayerComponent_div_8_Template,
                6,
                8,
                'div',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngClass',
                ctx.getOverlayClass('show-mouse', 'hide-mouse')
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.title
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'srcObject',
                ctx.srcObject ? ctx.srcObject : null
              )('preload', ctx.preload ? 'auto' : 'metadata')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵattribute'](
                'src',
                ctx.src ? ctx.src : null,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              )('autoplay', ctx.autoplay ? true : null)(
                'poster',
                ctx.poster ? ctx.poster : null,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.videoLoaded
              )
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgClass'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _controls_volume_control__WEBPACK_IMPORTED_MODULE_3__[
              'VolumeControl'
            ],
            _buttons_play_button__WEBPACK_IMPORTED_MODULE_4__['PlayButton'],
            _controls_quality_control__WEBPACK_IMPORTED_MODULE_5__[
              'QualityControl'
            ],
            _buttons_fullscreen_button__WEBPACK_IMPORTED_MODULE_6__[
              'FullscreenButton'
            ],
          ],
          styles: [
            '[_nghost-%COMP%] {\n  display: block;\n  max-height: 100vh;\n}\n\n.videoplayer[_ngcontent-%COMP%] {\n  font-family: Roboto, "Helvetica Neue", sans-serif;\n  background-color: black;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  padding: 14px 0px;\n  width: 100%;\n  z-index: 1;\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65));\n}\n\n.video[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n\n.controls[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  z-index: 1;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65));\n}\n\n.controls[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-around;\n  height: 48px;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.5s linear;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 0.5s, opacity 0.5s linear;\n}\n\n.show-mouse[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.hide-mouse[_ngcontent-%COMP%] {\n  cursor: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsaURBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0ZBQUE7QUFFRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtRkFBQTtBQUZGOztBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFORjs7QUFTQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtBQU5GIiwiZmlsZSI6InBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xufVxuLnZpZGVvcGxheWVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcGFkZGluZzogMTRweCAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gdG9wLFxuICAgIHJnYmEoMCwgMCwgMCwgMCksXG4gICAgcmdiYSgwLCAwLCAwLCAwLjY1KVxuICApO1xufVxuXG4udmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tLFxuICAgIHJnYmEoMCwgMCwgMCwgMCksXG4gICAgcmdiYSgwLCAwLCAwLCAwLjY1KVxuICApO1xufVxuXG4uY29udHJvbHMgLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMC41cywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcbn1cblxuLnNob3ctbW91c2Uge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5oaWRlLW1vdXNlIHtcbiAgY3Vyc29yOiBub25lO1xufVxuIl19 */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PlayerComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'peer-player',
                    templateUrl: './player.component.html',
                    styleUrls: ['./player.component.scss'],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Renderer2'],
                },
                {
                  type:
                    _utilities_event_handler__WEBPACK_IMPORTED_MODULE_1__[
                      'EventHandler'
                    ],
                },
              ]
            },
            {
              player: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: ['player'],
                },
              ],
              video: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: ['video'],
                },
              ],
              src: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              srcObject: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              title: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              autoplay: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              preload: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              quality: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              fullscreen: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              stream: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              poster: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              color: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              keyboard: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              overlay: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              muted: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              mutedChange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'],
                },
              ],
              videoWidth: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              videoHeight: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ GKef:
      /*!*************************************************************!*\
  !*** ./apps/docs/samples/peer-client/src/app/app.module.ts ***!
  \*************************************************************/
      /*! exports provided: AppModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppModule',
          function () {
            return AppModule
          }
        )
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser/animations */ 'R1ws'
        )
        /* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./../environments/environment.prod */ 'EZ00'
        )
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser */ 'jhN1'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/icon */ 'NFeN'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _freecom_peer_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @freecom/peer-client */ 'oaHY'
        )
        /* harmony import */ var _freecom_peer_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @freecom/peer-player */ 'uN2N'
        )
        /* harmony import */ var _freecom_peer_phone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @freecom/peer-phone */ 'hIk7'
        )
        /* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./player/player.component */ 'Mrik'
        )
        /* harmony import */ var _phone_phone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./phone/phone.component */ 'k178'
        )
        /* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./app.routing */ 'dUvV'
        )
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./app.component */ '462L'
        )
        /* harmony import */ var _libs_peer_phone_src_lib_peer_phone_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ../../../../../../libs/peer/phone/src/lib/peer-phone.module */ 'da+Y'
        )
        /* harmony import */ var _libs_peer_client_src_lib_peer_client_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ../../../../../../libs/peer/client/src/lib/peer-client.module */ 'py/i'
        )

        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          'ɵɵdefineNgModule'
        ]({
          type: AppModule,
          bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__['AppComponent'],
          ],
        })
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          'ɵɵdefineInjector'
        ]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)()
          },
          providers: [],
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                'BrowserModule'
              ],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__[
                'MatIconModule'
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_5__[
                'MatButtonModule'
              ],
              _freecom_peer_player__WEBPACK_IMPORTED_MODULE_7__[
                'PeerPlayerModule'
              ],
              _freecom_peer_phone__WEBPACK_IMPORTED_MODULE_8__[
                'PeerPhoneModule'
              ].forRoot({
                ringtones: {
                  incoming: 'assets/audios/phone-ringtone_time_that_passes.ogg',
                },
              }),
              _freecom_peer_client__WEBPACK_IMPORTED_MODULE_6__[
                'PeerClientModule'
              ].forRoot(
                _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__[
                  'environment'
                ].connection
              ),
              _app_routing__WEBPACK_IMPORTED_MODULE_11__['AppRoutingModule'],
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__[
                'BrowserAnimationsModule'
              ],
            ],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__[
              'ɵɵsetNgModuleScope'
            ](AppModule, {
              declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__['AppComponent'],
                _phone_phone_component__WEBPACK_IMPORTED_MODULE_10__[
                  'PhoneComponent'
                ],
                _player_player_component__WEBPACK_IMPORTED_MODULE_9__[
                  'PlayerComponent'
                ],
              ],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                  'BrowserModule'
                ],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__[
                  'MatIconModule'
                ],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__[
                  'MatButtonModule'
                ],
                _freecom_peer_player__WEBPACK_IMPORTED_MODULE_7__[
                  'PeerPlayerModule'
                ],
                _libs_peer_phone_src_lib_peer_phone_module__WEBPACK_IMPORTED_MODULE_13__[
                  'PeerPhoneModule'
                ],
                _libs_peer_client_src_lib_peer_client_module__WEBPACK_IMPORTED_MODULE_14__[
                  'PeerClientModule'
                ],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__['AppRoutingModule'],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__[
                  'BrowserAnimationsModule'
                ],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵsetClassMetadata'](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__['NgModule'],
                args: [
                  {
                    declarations: [
                      _app_component__WEBPACK_IMPORTED_MODULE_12__[
                        'AppComponent'
                      ],
                      _phone_phone_component__WEBPACK_IMPORTED_MODULE_10__[
                        'PhoneComponent'
                      ],
                      _player_player_component__WEBPACK_IMPORTED_MODULE_9__[
                        'PlayerComponent'
                      ],
                    ],
                    imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                        'BrowserModule'
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__[
                        'MatIconModule'
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_5__[
                        'MatButtonModule'
                      ],
                      _freecom_peer_player__WEBPACK_IMPORTED_MODULE_7__[
                        'PeerPlayerModule'
                      ],
                      _freecom_peer_phone__WEBPACK_IMPORTED_MODULE_8__[
                        'PeerPhoneModule'
                      ].forRoot({
                        ringtones: {
                          incoming:
                            'assets/audios/phone-ringtone_time_that_passes.ogg',
                        },
                      }),
                      _freecom_peer_client__WEBPACK_IMPORTED_MODULE_6__[
                        'PeerClientModule'
                      ].forRoot(
                        _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__[
                          'environment'
                        ].connection
                      ),
                      _app_routing__WEBPACK_IMPORTED_MODULE_11__[
                        'AppRoutingModule'
                      ],
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__[
                        'BrowserAnimationsModule'
                      ],
                    ],
                    providers: [],
                    bootstrap: [
                      _app_component__WEBPACK_IMPORTED_MODULE_12__[
                        'AppComponent'
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ JhCZ:
      /*!*************************************************************!*\
  !*** ./libs/peer/player/src/lib/utilities/event-handler.ts ***!
  \*************************************************************/
      /*! exports provided: EventHandler */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'EventHandler',
          function () {
            return EventHandler
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )

        class EventHandler {
          addEvents(renderer, events) {
            for (let { element, name, dispose, callback } of events)
              dispose = renderer.listen(element, name, (newEvent) =>
                callback(newEvent)
              )
          }
          removeEvents(events) {
            for (const event of events) if (event.dispose) event.dispose()
          }
        }
        EventHandler.ɵfac = function EventHandler_Factory(t) {
          return new (t || EventHandler)()
        }
        EventHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjectable'
        ]({
          token: EventHandler,
          factory: EventHandler.ɵfac,
          providedIn: 'root',
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            EventHandler,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root',
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ Mrik:
      /*!**************************************************************************!*\
  !*** ./apps/docs/samples/peer-client/src/app/player/player.component.ts ***!
  \**************************************************************************/
      /*! exports provided: PlayerComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PlayerComponent',
          function () {
            return PlayerComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _freecom_peer_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @freecom/peer-client */ 'oaHY'
        )
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */ 'kU1M'
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _libs_peer_player_src_lib_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../../../../../../libs/peer/player/src/lib/player.component */ 'FcUm'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/icon */ 'NFeN'
        )

        function PlayerComponent_section_0_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵelementContainerStart'
            ](0)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'figure'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
              2,
              'peer-player',
              5
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵelementContainerEnd'
            ]()
          }
          if (rf & 2) {
            const client_r5 = ctx.$implicit
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'autoplay',
              true
            )('overlay', true)('stream', true)(
              'srcObject',
              client_r5 == null ? null : client_r5.stream
            )
          }
        }
        function PlayerComponent_section_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'section',
              3
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              PlayerComponent_section_0_ng_container_1_Template,
              3,
              4,
              'ng-container',
              4
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](2, 'async')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
          if (rf & 2) {
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵnextContext'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngForOf',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                2,
                1,
                ctx_r0.clients$
              )
            )
          }
        }
        function PlayerComponent_button_2_Template(rf, ctx) {
          if (rf & 1) {
            const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵgetCurrentView'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'button',
              6
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function PlayerComponent_button_2_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r7)
                const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵnextContext'
                ]()
                return ctx_r6.hangUp()
              }
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'mat-icon'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, 'close')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        function PlayerComponent_ng_template_4_Template(rf, ctx) {
          if (rf & 1) {
            const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵgetCurrentView'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'div',
              7
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'button',
              8
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function PlayerComponent_ng_template_4_Template_button_click_1_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r9)
                const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵnextContext'
                ]()
                return ctx_r8.connectToRoom()
              }
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'img', 9)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              3,
              'h2'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              4,
              'Chamada de v\u00EDdeo...'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        class PlayerComponent {
          constructor(clientStoreService, connectionService) {
            this.clientStoreService = clientStoreService
            this.connectionService = connectionService
            this.active$ = this.connectionService.active$
            this.clients$ = this.clientStoreService.clients$.pipe(
              Object(
                rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['map']
              )((clientList) => clientList.toArray()),
              Object(
                rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['catchError']
              )((err) =>
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__['throwError'])(
                  'E:',
                  err
                )
              )
            )
          }
          connectToRoom() {
            this.connectionService.connectToRoom()
          }
          connectScreen() {
            this.connectionService.connectScreen()
          }
          hangUp() {
            this.connectionService.hangup()
          }
        }
        PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
          return new (t || PlayerComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _freecom_peer_client__WEBPACK_IMPORTED_MODULE_1__['ClientStore']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _freecom_peer_client__WEBPACK_IMPORTED_MODULE_1__[
                'ClientConnection'
              ]
            )
          )
        }
        PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: PlayerComponent,
          selectors: [['sample-player']],
          decls: 6,
          vars: 7,
          consts: [
            ['id', 'grid', 4, 'ngIf', 'ngIfElse'],
            ['type', 'button', 'mat-button', '', 3, 'click', 4, 'ngIf'],
            ['startTmpl', ''],
            ['id', 'grid'],
            [4, 'ngFor', 'ngForOf'],
            [
              'title',
              '@SeekPeer',
              3,
              'autoplay',
              'overlay',
              'stream',
              'srcObject',
            ],
            ['type', 'button', 'mat-button', '', 3, 'click'],
            [1, 'start'],
            [1, 'join-room', 3, 'click'],
            [
              'src',
              'assets/images/beta.svg',
              'alt',
              'Iniciar chamada de v\u00EDdeo',
            ],
          ],
          template: function PlayerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                0,
                PlayerComponent_section_0_Template,
                3,
                3,
                'section',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](1, 'async')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                PlayerComponent_button_2_Template,
                3,
                0,
                'button',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](3, 'async')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                PlayerComponent_ng_template_4_Template,
                5,
                0,
                'ng-template',
                null,
                2,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵtemplateRefExtractor'
                ]
              )
            }
            if (rf & 2) {
              const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                'ɵɵreference'
              ](5)
              let tmp_0_0 = null
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵpipeBind1'
                ](1, 3, ctx.clients$)) == null
                  ? null
                  : tmp_0_0.length
              )('ngIfElse', _r2)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](
                  3,
                  5,
                  ctx.active$
                )
              )
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__['NgForOf'],
            _libs_peer_player_src_lib_player_component__WEBPACK_IMPORTED_MODULE_5__[
              'PlayerComponent'
            ],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__['MatButton'],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__['MatIcon'],
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__['AsyncPipe']],
          styles: [
            '[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[_nghost-%COMP%]   .start[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   button.join-room[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   #grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(640px, 1fr));\n  row-gap: 1rem;\n  column-gap: 1rem;\n  transition: all 1s ease-in-out;\n}\n[_nghost-%COMP%]   #grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   #grid[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNFO0VBQ0UsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0U7RUFDRSxhQUFBO0VBRUEsMkRBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUFKO0FBQ0k7RUFDRSxTQUFBO0FBQ047QUFBTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUVSIiwiZmlsZSI6InBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5zdGFydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBidXR0b24uam9pbi1yb29tIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICNncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg2NDBweCwgMWZyKSk7XG4gICAgcm93LWdhcDogMXJlbTtcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbiAgICBmaWd1cmUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdmlkZW8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */',
          ],
          changeDetection: 0,
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PlayerComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'sample-player',
                    templateUrl: './player.component.html',
                    styleUrls: ['./player.component.scss'],
                    changeDetection:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        'ChangeDetectionStrategy'
                      ].OnPush,
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _freecom_peer_client__WEBPACK_IMPORTED_MODULE_1__[
                      'ClientStore'
                    ],
                },
                {
                  type:
                    _freecom_peer_client__WEBPACK_IMPORTED_MODULE_1__[
                      'ClientConnection'
                    ],
                },
              ]
            },
            null
          )
        })()

        /***/
      },

    /***/ NGfb:
      /*!***************************************************!*\
  !*** ./libs/peer/core/src/lib/utilities/index.ts ***!
  \***************************************************/
      /*! exports provided: Logger, getDevices, getUserMedia, getDisplayMedia, S4, uid, uuid */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./logger */ 'U9yN'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Logger',
          function () {
            return _logger__WEBPACK_IMPORTED_MODULE_0__['Logger']
          }
        )

        /* harmony import */ var _media_devices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./media-devices */ '883z'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'getDevices',
          function () {
            return _media_devices__WEBPACK_IMPORTED_MODULE_1__['getDevices']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'getUserMedia',
          function () {
            return _media_devices__WEBPACK_IMPORTED_MODULE_1__['getUserMedia']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'getDisplayMedia',
          function () {
            return _media_devices__WEBPACK_IMPORTED_MODULE_1__[
              'getDisplayMedia'
            ]
          }
        )

        /* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./uuid */ 'n5N7'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'S4',
          function () {
            return _uuid__WEBPACK_IMPORTED_MODULE_2__['S4']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'uid',
          function () {
            return _uuid__WEBPACK_IMPORTED_MODULE_2__['uid']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'uuid',
          function () {
            return _uuid__WEBPACK_IMPORTED_MODULE_2__['uuid']
          }
        )

        /***/
      },

    /***/ NXTk:
      /*!**************************************************!*\
  !*** ./libs/peer/core/src/lib/peer-transport.ts ***!
  \**************************************************/
      /*! exports provided: PeerTransport */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerTransport',
          function () {
            return PeerTransport
          }
        )
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ 'mrSG'
        )
        /* harmony import */ var _peer_event_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./peer-event.enum */ 'vk2I'
        )

        class PeerTransport {
          static offer(by, to, sdp) {
            return {
              type:
                _peer_event_enum__WEBPACK_IMPORTED_MODULE_1__['PeerEvent']
                  .SdpOffer,
              by,
              to,
              sdp,
            }
          }
          static answer(by, to, sdp) {
            return {
              type:
                _peer_event_enum__WEBPACK_IMPORTED_MODULE_1__['PeerEvent']
                  .SdpAnswer,
              by,
              to,
              sdp,
            }
          }
          static candidate(by, to, ice) {
            return {
              type:
                _peer_event_enum__WEBPACK_IMPORTED_MODULE_1__['PeerEvent'].Ice,
              by,
              to,
              ice,
            }
          }
          static set(_a) {
            var { type, by, to } = _a,
              data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__rest'])(_a, [
                'type',
                'by',
                'to',
              ])
            return Object.assign({ type, by, to }, data)
          }
        }

        /***/
      },

    /***/ OFrF:
      /*!*************************************************************!*\
  !*** ./libs/peer/player/src/lib/controls/volume.control.ts ***!
  \*************************************************************/
      /*! exports provided: VolumeControl */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'VolumeControl',
          function () {
            return VolumeControl
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../utilities */ '4x5A'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/slider */ '5RNC'
        )

        function VolumeControl_i_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'i',
              4
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              'volume_off'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        function VolumeControl_i_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'i',
              4
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              'volume_mute'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        function VolumeControl_i_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'i',
              4
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              'volume_down'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        function VolumeControl_i_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'i',
              4
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'volume_up')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        class VolumeControl {
          constructor(evt) {
            this.evt = evt
            this.video = null
            this.color = 'primary'
            this.volume = 1
            this.volumeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]()
            this._muted = false
            this.mutedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]()
            this.keyboard = true
          }
          get muted() {
            return this._muted
          }
          set muted(v) {
            this._muted = v
            if (this.video) {
              this.video.muted = this._muted
            }
          }
          setVolume(value) {
            this.volume = value
            this.video.volume = this.volume
            this.volumeChanged.emit(this.volume)
            if (this.volume > 0) this.setMuted(false)
          }
          setMuted(value) {
            if (this.muted !== value) this.toggleMuted()
          }
          toggleMuted() {
            this.muted = !this.muted
            this.updateMuted()
          }
          updateMuted() {
            this.video.muted = this.muted
            this.mutedChanged.emit(this.muted)
          }
          onMuteKey(event) {
            if (this.keyboard) {
              this.toggleMuted()
              event.preventDefault()
            }
          }
        }
        VolumeControl.ɵfac = function VolumeControl_Factory(t) {
          return new (t || VolumeControl)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _utilities__WEBPACK_IMPORTED_MODULE_1__['EventHandler']
            )
          )
        }
        VolumeControl.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: VolumeControl,
          selectors: [['peer-volume']],
          hostBindings: function VolumeControl_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'keyup.m',
                function VolumeControl_keyup_m_HostBindingHandler($event) {
                  return ctx.onMuteKey($event)
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveDocument']
              )
            }
          },
          inputs: {
            video: 'video',
            color: 'color',
            volume: 'volume',
            muted: 'muted',
            keyboard: 'keyboard',
          },
          outputs: {
            volumeChanged: 'volumeChanged',
            mutedChanged: 'mutedChanged',
          },
          decls: 7,
          vars: 5,
          consts: [
            [1, 'volume-control'],
            ['mat-icon-button', '', 3, 'click'],
            ['class', 'material-icons', 4, 'ngIf'],
            [
              'min',
              '0',
              'max',
              '1',
              'step',
              '0.01',
              'value',
              '1',
              1,
              'volume-slider',
              3,
              'color',
              'input',
            ],
            [1, 'material-icons'],
          ],
          template: function VolumeControl_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'div',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                1,
                'button',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function VolumeControl_Template_button_click_1_listener() {
                  return ctx.toggleMuted()
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                VolumeControl_i_2_Template,
                2,
                0,
                'i',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                VolumeControl_i_3_Template,
                2,
                0,
                'i',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                VolumeControl_i_4_Template,
                2,
                0,
                'i',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                5,
                VolumeControl_i_5_Template,
                2,
                0,
                'i',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                6,
                'mat-slider',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'input',
                function VolumeControl_Template_mat_slider_input_6_listener(
                  $event
                ) {
                  return ctx.setVolume($event.value)
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.muted || ctx.volume === 0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                !ctx.muted && ctx.volume > 0 && ctx.volume < 0.25
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                !ctx.muted && ctx.volume >= 0.25 && ctx.volume < 0.5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                !ctx.muted && ctx.volume >= 0.5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'color',
                ctx.color
              )
            }
          },
          directives: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__['MatButton'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__['MatSlider'],
          ],
          styles: [
            '.volume-control[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 120px;\n}\n\n.volume-slider[_ngcontent-%COMP%] {\n  margin-left: -15px;\n}\n\n .mat-slider-thumb {\n  border-color: transparent !important;\n}\n\n .mat-slider-track-background {\n  background-color: lightgrey !important;\n  transform: translateX(0px) !important;\n}\n\n.volume-control[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  min-width: 0px;\n  width: 0px;\n  transition: visibility 0s 0.2s, opacity 0.2s linear, width 0.2s linear;\n}\n\n.volume-control[_ngcontent-%COMP%]:hover   .volume-slider[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  min-width: 90px;\n  width: 90px;\n  transition: opacity 0.2s linear, width 0.2s linear, min-width 0.2s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3ZvbHVtZS5jb250cm9sLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLHNDQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esc0VBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7QUFDRiIsImZpbGUiOiJ2b2x1bWUuY29udHJvbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZvbHVtZS1jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4udm9sdW1lLXNsaWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgIWltcG9ydGFudDtcbn1cblxuLnZvbHVtZS1jb250cm9sIC52b2x1bWUtc2xpZGVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBtaW4td2lkdGg6IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAwLjJzLCBvcGFjaXR5IDAuMnMgbGluZWFyLCB3aWR0aCAwLjJzIGxpbmVhcjtcbn1cblxuLnZvbHVtZS1jb250cm9sOmhvdmVyIC52b2x1bWUtc2xpZGVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhciwgd2lkdGggMC4ycyBsaW5lYXIsIG1pbi13aWR0aCAwLjJzIGxpbmVhcjtcbn1cbiJdfQ== */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            VolumeControl,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'peer-volume',
                    templateUrl: './volume.control.html',
                    styleUrls: ['./volume.control.scss'],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _utilities__WEBPACK_IMPORTED_MODULE_1__['EventHandler'],
                },
              ]
            },
            {
              video: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              color: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              volume: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              volumeChanged: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'],
                },
              ],
              muted: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              mutedChanged: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'],
                },
              ],
              keyboard: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              onMuteKey: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'],
                  args: ['document:keyup.m', ['$event']],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ Q99N:
      /*!***********************************************************!*\
  !*** ./libs/peer/player/src/lib/utilities/player-icon.ts ***!
  \***********************************************************/
      /*! exports provided: playerIcons */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'playerIcons',
          function () {
            return playerIcons
          }
        )
        const playerIcons = new Map([])
        playerIcons.set(
          'start',
          '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.695 196.737c-2.622-2.705-2.235-108.04 0-110.913 1.538-1.966 156.775-1.966 159.867 0 2.857 1.815 2.084 109.174 0 110.913-4.621 3.824-156.607 3.361-159.867 0z" fill="#191919"/><path d="M109.88 206.157h-3.773c-20.25 0-39.39-.294-53.919-.74-27.266-.84-28.224-1.831-30.325-3.991-2.1-2.159-3.814-3.966-3.713-60.095 0-14.024.21-27.359.512-37.543.58-19.325 1.252-20.166 2.74-22.09 2.192-2.806 5.116-2.924 12.2-3.218 4.302-.177 10.419-.336 18.175-.462 14.368-.236 33.61-.37 54.272-.37s40.004.134 54.557.37c26.889.437 27.603.907 29.561 2.15 3.361 2.127 3.73 5.765 4.159 12.554.84 13.696.933 41.383.731 60.927-.471 45.181-1.412 45.962-4.201 48.273-2.051 1.68-3.412 2.823-30.56 3.63-13.495.386-31.283.605-50.416.605zm-77.345-15.125c22.208 2.202 126.181 2.235 148.061.059 1.185-16.998 1.681-81.505.261-99.15-22.83-1.193-125.064-1.193-148.28 0-1.328 18.032-1.361 82.345-.042 99.091z" fill="#191919"/><path d="M26.695 196.737c-2.622-2.705-2.235-108.04 0-110.913 1.538-1.966 156.775-1.966 159.867 0 2.857 1.815 2.084 109.174 0 110.913-4.621 3.824-156.607 3.361-159.867 0z" fill="#448AFF"/><path d="M187.554 103.78c.621-.924.789-26.216-.841-26.888-4.705-2.067-156.464-1.924-160.32.412-1.463.84-1.58 25.468-.925 26.51.656 1.042 161.464.89 162.086-.034z" fill="#191919"/><path d="M101.142 111.25c-23.838 0-48.55-.084-63.33-.336a568.517 568.517 0 01-9.176-.194c-3.983-.134-6.865-.226-8.848-3.361-.966-1.537-1.555-2.47-1.386-15.124.067-5.353.31-12.41 1.083-15.637a7.78 7.78 0 013.47-5.084c1.875-1.126 2.908-1.748 29.35-2.294 14.285-.294 33.418-.479 53.954-.52 20.225 0 39.45.066 54.104.302 26.149.412 27.501 1 29.056 1.68a7.35 7.35 0 014.134 4.941c.269.924 1.101 3.722 1.168 16.2.067 13.209-.546 14.142-1.58 15.679-2.033 3.034-4.319 3.092-10.444 3.244-3.101.075-7.563.151-13.343.21-10.756.117-25.485.201-42.61.252-8.041.033-16.755.042-25.602.042zM31.804 97.402c24.636.53 124.643.496 149.439-.042.076-4.36 0-10.394-.218-14.351-23.057-1.26-126.408-1.025-148.894.344-.252 3.89-.36 9.78-.327 14.05z" fill="#191919"/><path d="M187.554 103.78c.621-.924.789-26.216-.841-26.888-4.705-2.067-156.464-1.924-160.32.412-1.463.84-1.58 25.468-.925 26.51.656 1.042 161.464.89 162.086-.034z" fill="#fff"/><path d="M23.737 105.544s32.678-30.618 32.224-31.602c-.664-1.394-31.93-1.277-32.635-.36-.706.915-5.513 34.114.411 31.962zM185.982 43.332c.479-1.008-3.126-25.166-4.815-25.611-4.974-1.328-155.346 20.603-158.841 23.451-1.32 1.11 2.184 25.452 2.99 26.385.808.932 160.196-23.217 160.666-24.225z" fill="#191919"/><path d="M25.678 74.279a6.596 6.596 0 01-5.47-2.345c-1.176-1.352-1.89-2.193-3.596-14.755-.723-5.302-1.521-12.326-1.235-15.628a7.78 7.78 0 012.68-5.546c1.68-1.395 2.63-2.16 28.762-6.512 14.066-2.344 33.03-5.277 53.398-8.268 20.032-2.941 39.089-5.596 53.667-7.478 25.964-3.361 27.376-2.966 29.014-2.521a7.408 7.408 0 014.857 4.31c1.084 2.336 2.277 7.504 3.546 15.36 2.033 12.604 1.554 13.637.756 15.318-1.563 3.294-3.697 3.672-10.024 4.781-3.159.555-7.739 1.32-13.612 2.269-10.991 1.773-25.973 4.117-43.324 6.772-30.316 4.664-69.413 10.461-88.42 13.007-3.36.454-5.966.782-7.755.983a29.404 29.404 0 01-3.244.253zm3.218-27.922c.32 3.89 1.084 9.705 1.748 13.915 24.494-3.135 123.618-18.1 148.129-22.343-.572-4.117-1.504-9.654-2.303-13.318-22.913 2.042-125.425 17.15-147.574 21.746z" fill="#191919"/><path d="M185.982 43.332c.479-1.008-3.126-25.166-4.815-25.611-4.974-1.328-155.346 20.603-158.841 23.451-1.32 1.11 2.184 25.452 2.99 26.385.808.932 160.196-23.217 160.666-24.225z" fill="#fff"/><path d="M22.326 41.172s33.912 23.822 33.61 24.847c-.446 1.479-31.384 5.957-32.224 5.15-.84-.806-7.57-31.223-1.386-29.996zM54.306 32.72c-.152.84 36.794 28.88 38.651 28.568l31.787-4.722c1.614-.244-37.727-29.569-39.61-29.291-1.882.277-30.677 4.596-30.828 5.445zM119.762 22.99c-.152.84 36.794 28.879 38.651 28.568l31.787-4.722c1.614-.244-37.727-29.569-39.609-29.291-1.882.277-30.678 4.604-30.829 5.444zM59.28 105.679c-.269-.84 32.14-33.972 34.039-33.972h32.14c1.63 0-32.955 34.787-34.863 34.787-1.907 0-31.047 0-31.316-.815zM125.458 105.679c-.268-.84 32.14-33.972 34.039-33.972 1.899 0 28.871.547 28.871 2.177 0 .546-29.686 32.618-31.593 32.618-1.908 0-31.048-.008-31.317-.823z" fill="#191919"/><path d="M108.62 183.083c-12.705 0-25.35-.101-34.694-.269-16.99-.311-17.545-.672-18.536-1.319-1.63-1.05-2.05-2.647-2.378-8.957-.286-5.646-.37-14.562-.202-22.687.311-15.242 1.017-15.813 2.302-16.805 1.152-.924 1.244-1 17.646-1.168 8.873-.092 20.78-.143 33.518-.143 48.995 0 50.322.53 51.028.84 2.37.95 2.706 3.303 3.008 9.319.278 5.588.337 14.562.143 22.863-.092 4-.235 7.453-.411 9.974-.278 4.042-.505 6.025-2.446 7.033-.882.361-2.73 1.319-48.978 1.319z" fill="#fff"/><path d="M106.276 135.029c24.367 0 48.827.193 49.785.571 1.764.706 1.294 42.408 0 43.08-1.294.673-24.116 1.051-47.433 1.051-24.855 0-50.373-.37-51.415-1.051-1.622-1.05-1.386-41.962 0-43.08.479-.378 24.712-.571 49.063-.571zm0-6.722c-12.756 0-24.67.05-33.56.143-4.798.05-8.58.109-11.243.185-4.89.126-6.537.168-8.478 1.731-2.672 2.151-2.89 5.276-3.16 9.242-.176 2.588-.31 6.101-.394 10.176-.168 8.234-.084 17.25.21 22.964.277 5.445.479 9.369 3.907 11.587 1.857 1.202 2.353 1.521 20.309 1.857 9.36.177 22.031.269 34.761.269 12.285 0 23.67-.092 32.073-.252 16.091-.319 16.881-.731 18.485-1.546 3.698-1.924 3.966-5.739 4.244-9.781.176-2.571.319-6.066.42-10.083.193-8.402.134-17.435-.151-23.107-.11-2.142-.244-3.806-.412-5.041-.21-1.538-.756-5.63-4.706-7.201-1.42-.563-1.848-.74-18.544-.908-8.999-.092-21.006-.143-33.736-.143l-.025-.092z" fill="#191919"/><path d="M70.161 146.104c-4.41 0-4.621 6.512-.42 6.831 4.202.319 66.7.319 69.641 0 2.941-.319 4.411-6.302-.311-6.613-4.722-.311-63.448-.218-68.91-.218zM70.161 159.968c-4.41 0-4.621 6.512-.42 6.831 4.202.319 36.451.319 39.391 0 2.941-.319 4.412-6.302-.31-6.613-4.723-.311-33.199-.218-38.66-.218z" fill="#191919"/></svg>'
        )
        playerIcons.set(
          'screen',
          '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.593 48C41.071 36.976 183.1 36.791 193.191 50.84c10.091 14.05 11.343 109.158-4.857 116.888-16.2 7.73-149.893 12.68-162.74-1.252-12.848-13.931-16.42-106.712 0-118.476z" fill="#191919"/><path d="M95.393 182.029c-64.615 0-72.17-8.192-74.782-10.974-5.277-5.722-9.067-18.989-11.243-39.433-1.908-17.872-2.059-38.047-.412-53.97 1.958-18.93 6.109-30.408 12.696-35.105L25.593 48l-3.899-5.478c3.034-2.16 9.915-5.277 34.619-7.403 15.637-1.344 35.224-2 55.154-1.823 20.536.201 39.778 1.26 54.247 2.94 24.368 2.908 30.308 7.025 32.93 10.68 6.352 8.848 8.092 34.03 8.562 48.248.773 23.46-.907 45.836-4.512 59.843-2.655 10.352-6.302 16.317-11.478 18.779-11.184 5.336-57.221 7.789-85.437 8.142-3.608.068-7.07.101-10.386.101zM29.492 53.504c-.202.143-4.865 3.714-7.125 25.535-1.555 15.04-1.404 34.165.411 51.155 2.219 20.83 5.882 29.753 7.756 31.736 3.36 2.983 26.485 7.26 76.186 6.571 43.122-.596 73.295-4.319 78.656-6.789.278-.227 3.294-2.933 5.739-16.805 2.521-14.091 3.42-34.241 2.471-53.903-1.042-21.56-3.941-33.207-5.731-36.047-3.941-3.083-28.51-7.965-78.824-8.234-47.357-.244-75.464 3.882-79.539 6.722v.059z" fill="#191919"/><path d="M25.593 48C41.071 36.976 183.1 36.791 193.191 50.84c10.091 14.05 11.343 109.158-4.857 116.888-16.2 7.73-149.893 12.68-162.74-1.252-12.848-13.931-16.42-106.712 0-118.476z" fill="#448AFF"/><path d="M70.967 80.585c-5.529 6.277-5.882 48.97 1.252 55.247 3.52 3.1 54.054 2.874 56.549 0 2.496-2.874 2.672-16.679 5.529-13.814 2.857 2.865 11.764 10.587 14.452 12.554 2.689 1.966 5.882 2.772 6.958-3.588 1.067-6.101.714-46.458.176-50.769-.487-3.924-5.176-3.588-8.209-.714-3.034 2.874-11.957 10.587-14.091 12.554-2.135 1.966-1.966-9.865-4.991-12.377-3.025-2.513-52.987-4.353-57.625.907z" fill="#fff"/></svg>'
        )
        playerIcons.set(
          'beta',
          '<svg width="217" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M174.661 107.023c-4.63-17.376-13.52-31.4-17.57-36.441-8.083-9.991-6.041-18.713-3.361-23.267 2.681-4.554 12.898-9.562 13.856-13.822.958-4.26-23.41-20.167-26.981-17.747-3.571 2.42-3.05 16.058-6.285 19.89-14.561 17.25-24.997 8.486-47.802 11.36-22.804 2.873-42.298 12.082-56.96 34.248-14.218 21.502-14.285 45.761-7.866 65.818 5.748 17.931 18.898 33.736 37.022 44.205a73.729 73.729 0 0036.845 9.554c29.367 0 57.188-15.082 72.607-39.206 9.848-15.411 12.032-33.829 6.495-54.592z" fill="#191919"/><path d="M95.568 207.543a80.418 80.418 0 01-40.215-10.461c-19.528-11.276-33.753-28.317-40.063-47.97-4.714-14.671-9.865-43.568 8.663-71.573 14.494-21.914 34.114-33.745 61.725-37.207a109.426 109.426 0 0119.628-.47c10.982.47 16.024.697 23.788-8.403.563-1.1 1.168-4.646 1.538-6.78 1.025-5.975 1.991-11.621 6.251-14.487 3.974-2.663 8.848-1.025 13.083.941a80.352 80.352 0 0111.142 6.47c7.638 5.235 14.511 10.924 13.066 17.402-1.042 4.638-5.193 7.848-9.504 11.209-1.68 1.32-4.537 3.53-5.125 4.52-1.252 2.11-3.496 7.849 2.773 15.596 4.688 5.79 13.923 20.502 18.838 38.929 6.05 22.687 3.588 42.853-7.318 59.944-16.68 26.132-46.668 42.34-78.27 42.34zm1.68-154.464a78.074 78.074 0 00-9.848.588C63.95 56.608 47.337 66.557 35.17 84.95c-15.427 23.325-11.058 47.642-7.075 60.053 5.277 16.469 17.351 30.829 33.98 40.433a66.977 66.977 0 0033.493 8.663c27.064 0 52.717-13.831 66.943-36.131 8.797-13.763 10.696-30.325 5.655-49.239-4.496-16.88-13.293-30.25-16.301-33.938-11.923-14.713-5.974-27.384-3.891-30.913 1.883-3.16 5.202-5.739 8.403-8.243.84-.672 2.05-1.596 3.05-2.445a77.893 77.893 0 00-14.914-9.83 85.389 85.389 0 00-.647 3.562c-.841 5.041-1.681 9.84-4.403 13.057-12.1 14.285-23.107 13.814-34.753 13.31-2.328-.11-4.832-.21-7.504-.21h.042z" fill="#191919"/><path d="M174.661 107.023c-4.63-17.376-13.52-31.4-17.57-36.441-8.083-9.991-6.041-18.713-3.361-23.267 2.681-4.554 12.898-9.562 13.856-13.822.958-4.26-23.41-20.167-26.981-17.747-3.571 2.42-3.05 16.058-6.285 19.89-14.561 17.25-24.997 8.486-47.802 11.36-22.804 2.873-42.298 12.082-56.96 34.248-14.218 21.502-14.285 45.761-7.866 65.818 5.748 17.931 18.898 33.736 37.022 44.205a73.729 73.729 0 0036.845 9.554c29.367 0 57.188-15.082 72.607-39.206 9.848-15.411 12.032-33.829 6.495-54.592z" fill="#fff"/><path d="M75.603 133.021L87.99 84.227c.798-3.075 4.2-4.705 7.797-1.563 3.596 3.143 33.409 34.451 33.409 34.451a4.071 4.071 0 01.003 5.645 4.078 4.078 0 01-1.751 1.077l-46.693 14.108a4.084 4.084 0 01-4.024-.946 4.078 4.078 0 01-1.127-3.978z" fill="#191919"/><path d="M157.074 109.032c-4.436-.647-11.763 3.756-15.402 3.957-3.638.202-12.368-3.361-16.107-3.361-3.739 0-11.167 3.286-13.654 3.311-2.488.025-9.134-1.622-13.251-1.622-4.117 0-8.99 1.681-13.075 1.63-4.083-.05-8.629-3.47-13.864-3.428-5.235.042-8.612 2.924-14.645 3.075-6.034.151-11.512-2.722-15.772-3.815-4.26-1.092-11.587-2.646-11.05 19.755.538 22.401 24.166 61.339 69.01 60.498 46.089-.916 67.641-43.693 67.641-60.271 0-16.578-5.386-19.082-9.831-19.729z" fill="#448AFF"/><path opacity=".2" d="M125.842 120.451c-2.185-3.294-8.554-8.831-8.554-8.831a31.172 31.172 0 01-5.453 1.176c-2.336.193-9.688-1.622-13.2-1.681-3.513-.058-11.428 2.051-13.713 1.731a41.804 41.804 0 01-6.16-1.68l-5.385 24.871c-.782 3.008 2.252 5.655 7.419 4.605 5.168-1.05 43.332-13.604 43.332-13.604 2.84-.865 3.899-3.302 1.714-6.587z" fill="#191919"/><path d="M67.436 87.487a6.504 6.504 0 00-8.2-1.78c-2.732 1.495-3.362 4.948-1.354 7.679 2.009 2.73 5.672 3.546 8.201 1.815a5.463 5.463 0 001.353-7.714zM144.614 90.975a4.59 4.59 0 00-5.781-1.278c-1.925 1.05-2.353 3.496-.95 5.42a4.295 4.295 0 005.781 1.277 3.854 3.854 0 001.615-2.51 3.861 3.861 0 00-.665-2.91z" fill="#448AFF"/><path d="M94.56 170.454a4.059 4.059 0 00-5.235-.176 3.17 3.17 0 00-.801 3.784c.2.418.492.787.851 1.081a3.797 3.797 0 005.235.176 3.396 3.396 0 00.998-2.443 3.405 3.405 0 00-1.049-2.422zM109.171 155.279a8.552 8.552 0 00-7.831 7.781c-.285 4.075 3.109 7.201 7.563 6.949 4.453-.252 7.957-3.756 7.831-7.781a7.184 7.184 0 00-2.318-5.067 7.179 7.179 0 00-5.245-1.882zM48.824 120.308a8.463 8.463 0 00-8.755 8.57 9.37 9.37 0 009.243 9.025h1.126c5.041.109 8.73-3.756 8.192-8.588a10.496 10.496 0 00-9.806-9.007z" fill="#fff"/><path d="M147.512 7.109c-3.361 3.302-3.134 11.956-5.243 18.662-2.109 6.705 9.319 14.082 13.268 11.47 3.949-2.614 14.41-10.202 16.662-14.285 2.252-4.084-21.359-19.141-24.687-15.847z" fill="#448AFF"/></svg>'
        )
        playerIcons.set(
          'box',
          '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0)"><path d="M109.029 119.581l-71.69-39.34a1.942 1.942 0 00-2.883 1.68c-.344 15.125-1.68 78.606.076 80.665 2.781 3.26 71.489 42.987 74.505 42.987 3.017 0 71.027-40.971 74.506-42.987 3.075-1.773.722-65.708.126-80.732a1.943 1.943 0 00-.992-1.61 1.947 1.947 0 00-1.89-.012l-71.758 39.349z" fill="#191919"/><path d="M109.029 212.27c-2.076 0-4.042 0-40.702-21.174-36.064-20.83-38.14-23.259-38.92-24.175-2-2.352-2.757-3.235-2.43-39.87.16-18.04.58-37.702.757-45.315a8.663 8.663 0 0112.84-7.394l68.463 37.568 68.515-37.593a8.668 8.668 0 0111.58 3.11 8.665 8.665 0 011.25 4.183c.303 7.638 1.034 27.367 1.32 45.5.159 10.285.142 18.486 0 24.46-.32 10.217-.841 14.595-4.756 16.864-.563.328-2.857 1.68-6.302 3.756-67.237 40.08-68.792 40.08-71.615 40.08zm-68.288-53.432c10.025 6.823 57.272 34.123 68.279 39.492 6.722-3.361 28.477-16.049 64.7-37.694l4.134-2.47c.84-7.697.647-34.249-.596-68.313l-64.994 35.619a6.726 6.726 0 01-6.47 0L41.002 89.92c-.74 35.073-.849 61.339-.26 68.918z" fill="#191919"/><path d="M34.523 76.98l74.506-39.735 74.505 39.735-74.505 40.879L34.523 76.98z" fill="#fff"/><path d="M109.365 34.556v80.614L34.859 74.283l74.506-39.727z" fill="#E6E6E6"/><path d="M109.029 119.581L34.523 78.695s-2 81.504 0 83.865c2.782 3.261 71.489 42.988 74.506 42.988 3.016 0 71.027-40.971 74.505-42.988 3.479-2.016 0-83.865 0-83.865l-74.505 40.886z" fill="#448AFF"/><path d="M109.029 119.581c-.84 1.731-1.681 86.387 0 85.967 5.335-1.311 71.69-39.433 74.783-43.483 1.327-1.756 2.008-82.287-.261-83.37-2.269-1.084-73.657 39.156-74.522 40.886z" fill="#2F72E2"/><path d="M183.097 74.048c3.857-2.126 24.754-13.721 23.653-14.36-1.1-.639-73.665-38.601-75.497-39.156-1.68-.512-20.569 11.848-23.636 13.864-3.159-2.193-25.897-17.847-28.485-16.402-2.78 1.513-70.069 39.056-72.48 40.45-2.218 1.32 22.51 13.747 26.334 15.663-3.571 1.806-24.948 12.26-23.628 13.015 1.319.757 70.43 41.543 74.127 41.946 2.378.26 21.679-11.965 24.216-13.646 2.84 1.882 26.048 17.209 28.367 15.898l73.212-42.013c1.352-.74-21.78-12.974-26.183-15.259zm-75.396 41.055L33.969 74.09l73.598-39.257 74.203 39.14-74.069 41.13z" fill="#191919"/><path d="M135.808 138.168c-3.361 0-7.957-2.252-17.2-7.84a383.297 383.297 0 01-10.924-6.89 422.96 422.96 0 01-8.68 5.319c-11.267 6.63-13.73 7.268-16.25 6.999-2.151-.235-4.823-.521-75.094-41.828l-1.68-.983a6.823 6.823 0 01-3.412-6.125c.143-4.638 3.874-6.613 12.05-10.923 1.16-.614 2.37-1.244 3.57-1.858l-3.007-1.672C3.199 65.847-.07 63.427-.204 58.873a6.974 6.974 0 013.503-6.252c1.849-1.067 39.308-21.972 70.405-39.324l2.16-1.201c4.336-2.42 9.243-.269 20.872 7.008 4.042 2.52 8.075 5.21 10.974 7.175 20.922-13.612 22.51-13.124 25.518-12.2 2.874.84 76.295 39.416 76.892 39.77a6.876 6.876 0 013.395 5.915c-.042 4.562-2.958 6.251-13.789 12.545l-2.697 1.563 4.008 2.21c12.041 6.721 14.889 8.46 14.973 13.032a6.822 6.822 0 01-3.42 6.05l-66.506 38.13-6.722 3.849a6.983 6.983 0 01-3.554 1.025zm-15.335-22.485c6.344 3.982 11.764 7.133 14.595 8.469l4.378-2.52 57.053-32.712c-3.621-2.041-8.352-4.63-14.032-7.646l-61.994 34.409zM22.407 86.988c37.181 21.788 55.608 32.106 61.288 34.904 2.445-1.193 6.848-3.747 11.075-6.31l-61.423-34.14c-4.63 2.31-8.2 4.126-10.94 5.546zm25.62-12.772l59.657 33.173 59.936-33.257-60.062-31.678-59.532 31.762zM19.078 59.192c3.849 2.16 8.865 4.823 14.285 7.562l61.574-32.837a154.638 154.638 0 00-14.772-8.84 73376.054 73376.054 0 00-61.095 34.115h.008zM120.498 34.06l61.91 32.653a598.908 598.908 0 0011.209-6.378c-17.595-9.243-53.171-27.729-62.674-32.526-2.202 1.184-5.949 3.386-10.445 6.251z" fill="#191919"/><path d="M183.937 74.048c.068-1.092 23.914-13.721 22.813-14.36-1.1-.639-73.665-38.601-75.497-39.156-1.68-.512-23.14 13.805-23.636 13.864-.496.06-25.905-17.88-28.485-16.435-2.78 1.546-70.069 39.089-72.48 40.483-2.218 1.32 26.275 14.957 26.334 15.663.058.706-24.948 12.26-23.637 13.015 1.31.757 70.439 41.543 74.136 41.946 2.378.26 23.46-13.646 24.216-13.646.756 0 26.048 17.209 28.367 15.898l73.212-42.013c1.352-.74-25.41-14.192-25.343-15.259zm-76.236 41.055c-.84-.067-73.707-40.45-73.724-40.988-.017-.538 73.102-39.18 73.598-39.256.496-.076 74.211 38.088 74.203 39.139-.008 1.05-73.228 41.147-74.077 41.08v.025zM61.033 157.805l-.37-29.981c0-1.873 1.723-2.268 3.118-.689l21.376 24.216c1.336 1.521 1.361 3.756.05 4.109l-21.006 5.722c-1.37.412-3.142-1.504-3.168-3.377z" fill="#fff"/><path d="M108.525 119.985c-.563 14.427-.841 65.262.512 85.563l-.512-85.563z" fill="#D32920"/><path d="M109.029 208.909a3.36 3.36 0 01-3.361-3.134c-1.378-20.738-1.067-71.607-.513-85.916a3.36 3.36 0 012.195-3.025 3.372 3.372 0 012.573.1 3.355 3.355 0 011.954 3.185c-.537 13.814-.84 65.061.504 85.211a3.347 3.347 0 01-1.865 3.239 3.364 3.364 0 01-1.269.34h-.218z" fill="#191919"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" transform="translate(.409 .105)" d="M0 0h215.105v215.105H0z"/></clipPath></defs></svg>'
        )
        playerIcons.set(
          'running-out',
          '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M126.328 59.221c-4.638-.269-7.201-5.705-7.201-5.705-2.638-4.621-6.226-6.285-10.856-3.647l-16.713 9.537c-4.621 2.639-6.075 4.865-4.58 10.41 0 0 2.522 5.219 1.967 8.815-.555 3.596-19.2 18.771-18.175 49.928.941 28.619 13.848 42.139 37.459 52.777 26.417 11.906 64.834 4.36 84.025-31.93 20.066-37.896-.781-68.952-27.938-83.101-19.998-10.487-33.35-6.815-37.988-7.084z" fill="#191919"/><path d="M133.294 193.259a67.963 67.963 0 01-27.83-5.882c-28.468-12.822-40.466-29.829-41.416-58.683-.84-26.427 11.05-42.257 16.805-49.861a77.357 77.357 0 001.462-1.975 17.01 17.01 0 00-1.336-4.134 6.722 6.722 0 01-.453-1.21C77.71 61.078 83.18 56.39 88.264 53.508l16.721-9.537c7.68-4.387 15.352-2.025 20.024 6.15.085.14.161.287.227.437a5.509 5.509 0 001.604 1.9c.471 0 1.53-.068 2.471-.135 6.537-.48 20.166-1.48 38.173 7.915 18.006 9.394 31.56 24.645 36.887 41.744 4.991 16.032 2.882 33.484-6.109 50.466-15.15 28.61-40.903 40.811-64.968 40.811zM93.323 67.539c1.025 2.261 3.025 7.454 2.235 12.201-.404 2.437-1.84 4.344-4.017 7.235-5.167 6.865-14.788 19.645-14.074 41.332.773 23.527 9.856 36.215 33.501 46.869 23.527 10.588 57.894 4.025 75.363-28.972 7.377-13.939 9.116-27.459 5.15-40.172-4.268-13.696-15.292-26.048-30.249-33.812-14.646-7.63-24.871-6.882-30.98-6.428-1.438.14-2.883.188-4.327.143-7.756-.454-11.814-7.445-12.73-9.243a6.086 6.086 0 00-.967-1.302c-.22.083-.434.184-.638.302L94.869 65.23c-.606.334-1.183.719-1.723 1.151.03.39.088.778.177 1.16z" fill="#191919"/><path d="M63.704 55.894c-1.63 11.074-10.714 11.25-12.755 11.125-7.462-.462-12.52-4.697-7.008-8.025.361-.218.37-.395-.412-.411-54.76-1.084-46.836-13.21-.185-17.184.37 0 .404-.109.27-.327-11.823-19.326-11.252-31.3 11.284-8.403.16.16.37.126.42-.075 3.697-15.1 12.385 8.73 10.41 15.3a56.36 56.36 0 00-2.024 8z" fill="#448AFF"/><path d="M97.868 66.573c-1.268-12.435-7.965-21.535-21.35-14.191-14.394 7.923-24.628 1.983-22.074-3.504 2.991-6.437 5.714 3.083 18.1-3.731 28.828-15.847 39.264 24.157 29.853 25.115a4.129 4.129 0 01-4.056-2.147 4.126 4.126 0 01-.473-1.542z" fill="#191919"/><path d="M126.328 59.221c-4.638-.269-7.201-5.705-7.201-5.705-2.638-4.621-6.226-6.285-10.856-3.647l-16.713 9.537c-4.621 2.639-6.075 4.865-4.58 10.41 0 0 2.522 5.219 1.967 8.815-.555 3.596-19.2 18.771-18.175 49.928.941 28.619 13.848 42.139 37.459 52.777 26.417 11.906 64.834 4.36 84.025-31.93 20.066-37.896-.781-68.952-27.938-83.101-19.998-10.487-33.35-6.815-37.988-7.084z" fill="#448AFF"/><path d="M118.001 97.033c-3.537 2.697 1.681 51.213 4.126 53.894 2.445 2.68 41.172-26.611 40.794-31.207-.378-4.597-41.383-25.385-44.92-22.687z" fill="#fff"/></svg>'
        )
        playerIcons.set(
          'cutted',
          '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M113.995 179.618c-1.614-18.293-15.276-18.965-17.369-21.713-2.092-2.747 1.48-121.257-1.041-122.324-2.521-1.067-19.973 4.773-20.688 28.098-.714 23.326-1.68 61.154.605 67.221 2.286 6.066 4.143 17.09 2.849 26.333-1.294 9.243-4.655 15.747-5.134 24.368-.445 8.192 5.193 17.645 18.217 19.191 11.494 1.311 23.611-9.663 22.561-21.174zm-10.083 0c-.177 4.831-5.933 10.52-11.218 10.268-7.327-.345-8.974-6.143-9.377-10.554-.403-4.411 4.873-11.091 10.335-10.68 5.882.404 10.47 4.622 10.26 10.932v.034z" fill="#191919"/><path d="M93.324 207.598a23.164 23.164 0 01-2.672-.151c-16.696-1.941-24.787-14.671-24.149-26.233.303-5.478 1.58-10.083 2.824-14.561a77.992 77.992 0 002.36-10.361c1.085-7.739-.47-17.645-2.52-22.989-1.756-4.68-2.605-18.343-1.025-69.825.563-18.486 10.083-27.3 15.771-30.93 2.017-1.294 9.016-5.353 14.285-3.151 4.403 1.857 4.588 6.251 4.814 11.822.143 3.496.219 8.403.244 15.04 0 12.184-.134 28.309-.302 43.913-.219 20.502-.479 45.424-.076 53.641 5.041 2.32 16.276 7.731 17.822 25.208.647 7.285-2.345 14.73-8.193 20.418a27.948 27.948 0 01-19.183 8.159zm-3.31-28.787c.411 4.201 1.605 4.269 2.991 4.327 1.386.059 4.058-2.52 4.201-3.814.118-3.361-2.79-3.916-4.041-4.008-.975.067-2.958 2.277-3.143 3.495h-.008zm-.328-133.853a18.503 18.503 0 00-1.823 1.68c-3.908 4.16-6.025 9.958-6.252 17.243-1.47 48.222-.706 61.834.202 64.758 2.52 6.806 4.663 18.99 3.193 29.51a71.197 71.197 0 01-1.462 7.361 16.094 16.094 0 017.764-3.496c-2.126-2.789-2.404-3.151-1.782-61.96.177-18.797.437-42.887.16-55.096z" fill="#191919"/><path d="M113.994 179.618c-1.613-18.293-15.275-18.965-17.368-21.713-2.092-2.747 1.48-121.257-1.042-122.324-2.52-1.067-19.972 4.773-20.687 28.098-.714 23.326-1.68 61.154.605 67.221 2.286 6.066 4.143 17.09 2.849 26.333-1.294 9.243-4.655 15.747-5.134 24.368-.446 8.192 5.193 17.645 18.216 19.191 11.495 1.311 23.612-9.663 22.561-21.174zm-10.083 0c-.176 4.831-5.932 10.52-11.217 10.268-7.327-.345-8.974-6.143-9.377-10.554-.404-4.411 4.873-11.091 10.335-10.68 5.882.404 10.469 4.622 10.259 10.932v.034z" fill="#fff"/><path d="M100.945 14.986c14.285.748 98.109 66.994 97.521 79.968-.589 12.973-44.122 69.447-57.272 66.38-13.15-3.067-94.294-62.549-95.394-76.732-1.101-14.184 40.013-70.406 55.145-69.616z" fill="#191919"/><path d="M142.303 168.215a11.57 11.57 0 01-2.622-.294c-10.083-2.319-40.257-24.191-54.818-35.433C40.086 97.911 39.338 88.29 39.094 85.123c-.512-6.193 3.546-16.117 11.965-29.435a207.174 207.174 0 0125.082-32.173c6.596-6.764 16.36-15.704 25.157-15.242 3.244.168 8.974 1.68 24.687 12.091 9.898 6.546 21.83 15.351 33.501 24.796 46.306 37.29 45.836 46.937 45.693 50.104-.622 13.613-30.636 53.037-48.55 66.641-5.604 4.26-10.234 6.31-14.326 6.31zM52.496 83.913c1.244 3.722 13.318 17.015 42.013 39.029 24.367 18.688 43.433 30.443 47.895 31.804 2.764-.504 12.856-7.369 28.182-26.384 14.914-18.486 20.435-30.25 21.09-33.308-1.63-4.083-14.091-18.191-42.097-40.61-26.711-21.375-44.962-32.139-49.012-32.77-1.495.102-7.562 3-18.645 15.294a198.059 198.059 0 00-21.006 28.266c-6.882 11.402-8.394 17.158-8.42 18.679z" fill="#191919"/><path d="M100.945 14.986c14.285.748 98.108 66.994 97.52 79.968-.588 12.973-44.122 69.447-57.272 66.38-13.15-3.067-94.293-62.549-95.394-76.732-1.1-14.184 40.013-70.406 55.146-69.616z" fill="#448AFF"/><path d="M115.591 63.343c-3.983 4.008-9.445 4.479-14.461 0-4.201-3.74-4.025-10.461 0-14.46 4.025-4 9.167-4.48 14.461 0 4.336 3.663 3.983 10.452 0 14.46zM168.468 109.515c-4.764 3.033-10.192 2.302-14.124-3.126-3.311-4.579-1.639-11.083 3.125-14.124 4.765-3.042 9.924-2.361 14.125 3.126 3.462 4.537 1.63 11.091-3.126 14.124zM87.88 87.912c-1.614.126-7.69 9.705-6.798 10.713.89 1.009 59.254 32.854 60.196 32.922.941.067 5.285-6.109 4.134-7.092-1.152-.983-56.197-36.652-57.533-36.543z" fill="#fff"/><path d="M20.483 160.939c7.923 10.453 18.947 10.503 25.778 5.949 7.185-4.781 11.075-10.982 18.385-16.805 7.31-5.823 15.654-7.184 24.015-10.495 13.049-5.109 38.912-20.754 58.322-34.022 19.267-13.175 15.881-30.46 13.696-32.09-2.185-1.63-102.511 61.617-105.872 61.205-3.361-.412-10.923-11.831-27.519-3.941-10.477 5-13.796 20.981-6.805 30.199zm26.568-18.225c3.126 4.503.05 12.435-3.957 14.326-4.008 1.891-10.083 2.949-14.285-3.361-2.915-4.42-.52-11.671 3.555-14.284 5.377-3.353 11.326-1.488 14.687 3.319z" fill="#191919"/><path d="M36.632 176.484c-7.445 0-15.368-3.361-21.502-11.487-4.63-6.108-6.201-14.662-4.201-22.88 1.932-7.932 6.831-14.284 13.444-17.427 15.855-7.562 26.207-.622 30.778 2.521 7.285-3.823 28.628-16.704 46.214-27.3 13.302-8.024 27.124-16.36 37.619-22.502 5.722-3.361 9.999-5.781 13.082-7.428 4.916-2.63 8.789-4.714 12.604-1.857 4.159 3.092 4.47 9.982 4.42 12.806-.109 5.394-2.109 19.132-18.334 30.249-18.746 12.814-45.374 29.157-59.659 34.736-2.52.992-5.041 1.807-7.402 2.588-5.621 1.832-10.562 3.445-14.864 6.865a78.083 78.083 0 00-7.73 7.293c-3.219 3.361-6.546 6.79-11.117 9.823a24.18 24.18 0 01-13.352 4zm1.496-32.065a3.888 3.888 0 00-2.1.681 5.192 5.192 0 00-1.631 2.941 3.126 3.126 0 00.067 1.966c.731 1.101 1.832 2.765 5.664 1 .949-.773 1.84-3.596 1.403-4.479-.538-.747-1.723-2.109-3.403-2.109zm15.805-3.041a16.08 16.08 0 01.933 8.461 71.14 71.14 0 015.562-4.991c6.184-4.916 12.722-7.067 19.049-9.142 2.319-.765 4.512-1.487 6.722-2.336 12.688-4.966 38.265-20.519 56.977-33.316 8.571-5.882 11.378-12.108 12.167-16.562-10.721 6.017-31.156 18.343-47.104 27.973-50.332 30.392-50.794 30.341-54.28 29.921l-.026-.008z" fill="#191919"/><path d="M20.483 160.939c7.923 10.453 18.947 10.503 25.778 5.949 7.185-4.781 11.075-10.982 18.385-16.805 7.31-5.823 15.654-7.184 24.015-10.495 13.049-5.109 38.912-20.754 58.322-34.022 19.267-13.175 15.881-30.46 13.696-32.09-2.185-1.63-102.511 61.617-105.872 61.205-3.361-.412-10.923-11.831-27.519-3.941-10.477 5-13.796 20.981-6.805 30.199zm26.568-18.225c3.126 4.503.05 12.435-3.957 14.326-4.008 1.891-10.083 2.949-14.285-3.361-2.915-4.42-.52-11.671 3.555-14.284 5.377-3.353 11.326-1.488 14.687 3.319z" fill="#fff"/></svg>'
        )
        // const customIcon = (icon: PlayerIcon, selector: string, attribute: string, value: string) => {
        //   const iconElement = new SVGElement()
        //   iconElement.append(playerIcons.get(icon))
        //   iconElement.querySelector(selector)
        //   iconElement.setAttribute(attribute, value)
        // }

        /***/
      },

    /***/ QRyt:
      /*!*****************************************************!*\
  !*** ./libs/peer/core/src/lib/peer-client.model.ts ***!
  \*****************************************************/
      /*! exports provided: PeerClient */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerClient',
          function () {
            return PeerClient
          }
        )
        /* harmony import */ var _immutable_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./immutable.model */ 's+lf'
        )

        class PeerClient extends _immutable_model__WEBPACK_IMPORTED_MODULE_0__[
          'ImmutableModel'
        ] {
          constructor(data) {
            super(PeerClient, data)
          }
          get id() {
            return this.data.get('id')
          }
          get label() {
            return this.data.get('label')
          }
          get stream() {
            return this.data.get('stream')
          }
          setId(val) {
            return this.setValue('id', val)
          }
          setLabel(val) {
            return this.setValue('label', val)
          }
          setStream(val) {
            return this.setValue('stream', val)
          }
        }

        /***/
      },

    /***/ S5ma:
      /*!***********************************************!*\
  !*** ./libs/peer/phone/src/lib/public-api.ts ***!
  \***********************************************/
      /*! exports provided: PEER_PHONE_CONFIG, mergeRtcConfig, peerPhoneConfig, PeerPhoneComponent, PeerPhoneModule, PeerPhoneService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./config */ '9T1Y'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_PHONE_CONFIG',
          function () {
            return _config__WEBPACK_IMPORTED_MODULE_0__['PEER_PHONE_CONFIG']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeRtcConfig',
          function () {
            return _config__WEBPACK_IMPORTED_MODULE_0__['mergeRtcConfig']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'peerPhoneConfig',
          function () {
            return _config__WEBPACK_IMPORTED_MODULE_0__['peerPhoneConfig']
          }
        )

        /* harmony import */ var _peer_phone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./peer-phone.component */ '1wjH'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPhoneComponent',
          function () {
            return _peer_phone_component__WEBPACK_IMPORTED_MODULE_1__[
              'PeerPhoneComponent'
            ]
          }
        )

        /* harmony import */ var _peer_phone_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./peer-phone.module */ 'da+Y'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPhoneModule',
          function () {
            return _peer_phone_module__WEBPACK_IMPORTED_MODULE_2__[
              'PeerPhoneModule'
            ]
          }
        )

        /* harmony import */ var _peer_phone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./peer-phone.service */ 'wZSH'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPhoneService',
          function () {
            return _peer_phone_service__WEBPACK_IMPORTED_MODULE_3__[
              'PeerPhoneService'
            ]
          }
        )

        /***/
      },

    /***/ SpU6:
      /*!***********************************************************************!*\
  !*** ./apps/docs/samples/peer-client/src/environments/environment.ts ***!
  \***********************************************************************/
      /*! exports provided: environment */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'environment',
          function () {
            return environment
          }
        )
        const environment = {
          production: false,
          connection: {
            rtc: {
              iceServers: [
                { urls: 'stun:ubuntu.gui:3478' },
                { urls: 'stun:stun.stunprotocol.org:3478' },
              ],
            },
            socket: {
              uri: 'https://gateway.freecom.dev',
            },
          },
        }
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ U9yN:
      /*!****************************************************!*\
  !*** ./libs/peer/core/src/lib/utilities/logger.ts ***!
  \****************************************************/
      /*! exports provided: Logger */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Logger',
          function () {
            return Logger
          }
        )
        class Logger {
          info(...msg) {
            console.log(`%c Info ${new Date()}`, 'color: #448AFF')
            console.log(msg)
            console.log('---------------------------------------')
          }
          log(...msg) {
            console.log(`%c Log ${new Date()}`, 'color: #448AFF')
            console.log(msg)
            console.log('---------------------------------------')
          }
          error(...msg) {
            console.log(`%c Error ${new Date()}`, 'color: #F2FA8C')
            console.log(msg)
            console.log('---------------------------------------')
          }
          warn(...msg) {
            console.log(`%c Warn ${new Date()}`, 'color: #E66B6E')
            console.log(msg)
            console.log('---------------------------------------')
          }
        }

        /***/
      },

    /***/ X2QF:
      /*!*********************************************************!*\
  !*** ./libs/peer/player/src/lib/buttons/play.button.ts ***!
  \*********************************************************/
      /*! exports provided: PlayButton */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PlayButton',
          function () {
            return PlayButton
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _utilities_event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../utilities/event-handler */ 'JhCZ'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )

        function PlayButton_i_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'i',
              2
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              'play_arrow'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        function PlayButton_i_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'i',
              2
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'pause')
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        class PlayButton {
          constructor(renderer, evt) {
            this.renderer = renderer
            this.evt = evt
            this.play = false
            this.playChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]()
            this.keyboard = true
          }
          ngAfterViewInit() {
            this.events = [
              {
                element: this.video,
                name: 'play',
                callback: (event) => this.setVideoPlayback(true),
                dispose: null,
              },
              {
                element: this.video,
                name: 'pause',
                callback: (event) => this.setVideoPlayback(false),
                dispose: null,
              },
              {
                element: this.video,
                name: 'durationchange',
                callback: (event) => this.setVideoPlayback(false),
                dispose: null,
              },
              {
                element: this.video,
                name: 'ended',
                callback: (event) => this.setVideoPlayback(false),
                dispose: null,
              },
              {
                element: this.video,
                name: 'click',
                callback: (event) => this.toggleVideoPlayback(),
                dispose: null,
              },
            ]
            this.evt.addEvents(this.renderer, this.events)
          }
          ngOnDestroy() {
            this.evt.removeEvents(this.events)
          }
          setVideoPlayback(value) {
            if (this.play !== value) this.toggleVideoPlayback()
          }
          toggleVideoPlayback() {
            this.play = !this.play
            this.updateVideoPlayback()
          }
          updateVideoPlayback() {
            this.play ? this.video.play() : this.video.pause()
            this.playChanged.emit(this.play)
          }
          onPlayKey(event) {
            if (this.keyboard) {
              this.toggleVideoPlayback()
              event.preventDefault()
            }
          }
        }
        PlayButton.ɵfac = function PlayButton_Factory(t) {
          return new (t || PlayButton)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['Renderer2']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _utilities_event_handler__WEBPACK_IMPORTED_MODULE_1__[
                'EventHandler'
              ]
            )
          )
        }
        PlayButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: PlayButton,
          selectors: [['peer-play']],
          hostBindings: function PlayButton_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'keyup.space',
                function PlayButton_keyup_space_HostBindingHandler($event) {
                  return ctx.onPlayKey($event)
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveDocument']
              )
            }
          },
          inputs: { video: 'video', play: 'play', keyboard: 'keyboard' },
          outputs: { playChanged: 'playChanged' },
          decls: 3,
          vars: 2,
          consts: [
            ['mat-button', '', 'color', 'primary', 3, 'click'],
            ['class', 'material-icons', 4, 'ngIf'],
            [1, 'material-icons'],
          ],
          template: function PlayButton_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'button',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function PlayButton_Template_button_click_0_listener() {
                  return ctx.toggleVideoPlayback()
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                PlayButton_i_1_Template,
                2,
                0,
                'i',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                PlayButton_i_2_Template,
                2,
                0,
                'i',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                !ctx.play
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.play
              )
            }
          },
          directives: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__['MatButton'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
          ],
          encapsulation: 2,
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PlayButton,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'peer-play',
                    templateUrl: './play.button.html',
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Renderer2'],
                },
                {
                  type:
                    _utilities_event_handler__WEBPACK_IMPORTED_MODULE_1__[
                      'EventHandler'
                    ],
                },
              ]
            },
            {
              video: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              play: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              playChanged: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'],
                },
              ],
              keyboard: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              onPlayKey: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'],
                  args: ['document:keyup.space', ['$event']],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ YAMS:
      /*!*************************************************************!*\
  !*** ./libs/peer/client/src/lib/config/config-injectors.ts ***!
  \*************************************************************/
      /*! exports provided: PEER_CONFIG, PEER_RTC_CONFIGURATION, PEER_MEDIA_CONSTRAINTS, mergeRtcConfig, mergeMediaConstraints, mergeSocketOptions, mergeConfig */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_CONFIG',
          function () {
            return PEER_CONFIG
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_RTC_CONFIGURATION',
          function () {
            return PEER_RTC_CONFIGURATION
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_MEDIA_CONSTRAINTS',
          function () {
            return PEER_MEDIA_CONSTRAINTS
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeRtcConfig',
          function () {
            return mergeRtcConfig
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeMediaConstraints',
          function () {
            return mergeMediaConstraints
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeSocketOptions',
          function () {
            return mergeSocketOptions
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeConfig',
          function () {
            return mergeConfig
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _socket_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./socket-options */ 'u2RX'
        )
        /* harmony import */ var _rtc_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./rtc-configuration */ 'ljco'
        )
        /* harmony import */ var _media_constraints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./media-constraints */ 'jy1n'
        )

        const PEER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'InjectionToken'
        ]('peer-config')
        const PEER_RTC_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'InjectionToken'
        ]('peer-rtc-configuration')
        const PEER_MEDIA_CONSTRAINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'InjectionToken'
        ]('peer-media-constraints')
        function mergeRtcConfig(config) {
          return Object.assign(
            _rtc_configuration__WEBPACK_IMPORTED_MODULE_2__['configuration'],
            config
          )
        }
        function mergeMediaConstraints(constraints) {
          return Object.assign(
            _media_constraints__WEBPACK_IMPORTED_MODULE_3__['mediaConstraints'],
            constraints
          )
        }
        function mergeSocketOptions(options) {
          return Object.assign(
            _socket_options__WEBPACK_IMPORTED_MODULE_1__['socketOptions'],
            options
          )
        }
        function mergeConfig({ rtc, media, socket }) {
          return {
            rtc: mergeRtcConfig(rtc),
            media: mergeMediaConstraints(media),
            socket: mergeSocketOptions(socket),
          }
        }

        /***/
      },

    /***/ aQ9L:
      /*!***************************************************!*\
  !*** ./libs/peer/player/src/lib/buttons/index.ts ***!
  \***************************************************/
      /*! exports provided: FullscreenButton, PlayButton */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _fullscreen_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./fullscreen.button */ 'to0R'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FullscreenButton',
          function () {
            return _fullscreen_button__WEBPACK_IMPORTED_MODULE_0__[
              'FullscreenButton'
            ]
          }
        )

        /* harmony import */ var _play_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./play.button */ 'X2QF'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PlayButton',
          function () {
            return _play_button__WEBPACK_IMPORTED_MODULE_1__['PlayButton']
          }
        )

        /***/
      },

    /***/ bGxS:
      /*!**************************************************************!*\
  !*** ./libs/peer/client/src/lib/config/rtc-offer-options.ts ***!
  \**************************************************************/
      /*! exports provided: rtcOfferOptions */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'rtcOfferOptions',
          function () {
            return rtcOfferOptions
          }
        )
        const rtcOfferOptions = {
          offerToReceiveVideo: true,
          offerToReceiveAudio: true,
        }

        /***/
      },

    /***/ dUvV:
      /*!**************************************************************!*\
  !*** ./apps/docs/samples/peer-client/src/app/app.routing.ts ***!
  \**************************************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppRoutingModule',
          function () {
            return AppRoutingModule
          }
        )
        /* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./player/player.component */ 'Mrik'
        )
        /* harmony import */ var _phone_phone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./phone/phone.component */ 'k178'
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )

        class AppRoutingModule {}
        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          'ɵɵdefineNgModule'
        ]({ type: AppRoutingModule })
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          'ɵɵdefineInjector'
        ]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)()
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_2__[
                'RouterModule'
              ].forRoot(
                [
                  { path: '', pathMatch: 'full', redirectTo: 'player' },
                  {
                    path: 'phone',
                    component:
                      _phone_phone_component__WEBPACK_IMPORTED_MODULE_1__[
                        'PhoneComponent'
                      ],
                  },
                  {
                    path: 'player',
                    component:
                      _player_player_component__WEBPACK_IMPORTED_MODULE_0__[
                        'PlayerComponent'
                      ],
                  },
                ],
                { initialNavigation: 'enabled' }
              ),
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__[
              'ɵɵsetNgModuleScope'
            ](AppRoutingModule, {
              imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
              ],
              exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__['ɵsetClassMetadata'](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__[
                        'RouterModule'
                      ].forRoot(
                        [
                          { path: '', pathMatch: 'full', redirectTo: 'player' },
                          {
                            path: 'phone',
                            component:
                              _phone_phone_component__WEBPACK_IMPORTED_MODULE_1__[
                                'PhoneComponent'
                              ],
                          },
                          {
                            path: 'player',
                            component:
                              _player_player_component__WEBPACK_IMPORTED_MODULE_0__[
                                'PlayerComponent'
                              ],
                          },
                        ],
                        { initialNavigation: 'enabled' }
                      ),
                    ],
                    exports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_2__[
                        'RouterModule'
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ 'da+Y':
      /*!******************************************************!*\
  !*** ./libs/peer/phone/src/lib/peer-phone.module.ts ***!
  \******************************************************/
      /*! exports provided: PeerPhoneModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPhoneModule',
          function () {
            return PeerPhoneModule
          }
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/dialog */ '0IaG'
        )
        /* harmony import */ var _config_config_injectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./config/config-injectors */ 'qlr7'
        )
        /* harmony import */ var _peer_phone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./peer-phone.component */ '1wjH'
        )
        /* harmony import */ var _peer_phone_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./peer-phone.service */ 'wZSH'
        )

        class PeerPhoneModule {
          static forRoot(config) {
            return {
              ngModule: PeerPhoneModule,
              providers: [
                {
                  provide:
                    _config_config_injectors__WEBPACK_IMPORTED_MODULE_3__[
                      'PEER_PHONE_CONFIG'
                    ],
                  useValue: config,
                },
              ],
            }
          }
        }
        PeerPhoneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineNgModule'
        ]({ type: PeerPhoneModule })
        PeerPhoneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineInjector'
        ]({
          factory: function PeerPhoneModule_Factory(t) {
            return new (t || PeerPhoneModule)()
          },
          providers: [
            _peer_phone_service__WEBPACK_IMPORTED_MODULE_5__[
              'PeerPhoneService'
            ],
          ],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
              _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__[
                'MatDialogModule'
              ],
            ],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              'ɵɵsetNgModuleScope'
            ](PeerPhoneModule, {
              declarations: [
                _peer_phone_component__WEBPACK_IMPORTED_MODULE_4__[
                  'PeerPhoneComponent'
                ],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__[
                  'MatDialogModule'
                ],
              ],
              exports: [
                _peer_phone_component__WEBPACK_IMPORTED_MODULE_4__[
                  'PeerPhoneComponent'
                ],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            PeerPhoneModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                        'CommonModule'
                      ],
                      _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__[
                        'MatDialogModule'
                      ],
                    ],
                    declarations: [
                      _peer_phone_component__WEBPACK_IMPORTED_MODULE_4__[
                        'PeerPhoneComponent'
                      ],
                    ],
                    providers: [
                      _peer_phone_service__WEBPACK_IMPORTED_MODULE_5__[
                        'PeerPhoneService'
                      ],
                    ],
                    exports: [
                      _peer_phone_component__WEBPACK_IMPORTED_MODULE_4__[
                        'PeerPhoneComponent'
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ eIMU:
      /*!**************************************************!*\
  !*** ./libs/peer/client/src/lib/config/index.ts ***!
  \**************************************************/
      /*! exports provided: socketOptions, configuration, rtcOfferOptions, mediaConstraints, PEER_CONFIG, PEER_RTC_CONFIGURATION, PEER_MEDIA_CONSTRAINTS, mergeRtcConfig, mergeMediaConstraints, mergeSocketOptions, mergeConfig */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _socket_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./socket-options */ 'u2RX'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'socketOptions',
          function () {
            return _socket_options__WEBPACK_IMPORTED_MODULE_0__['socketOptions']
          }
        )

        /* harmony import */ var _rtc_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./rtc-configuration */ 'ljco'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'configuration',
          function () {
            return _rtc_configuration__WEBPACK_IMPORTED_MODULE_1__[
              'configuration'
            ]
          }
        )

        /* harmony import */ var _rtc_offer_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./rtc-offer-options */ 'bGxS'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'rtcOfferOptions',
          function () {
            return _rtc_offer_options__WEBPACK_IMPORTED_MODULE_2__[
              'rtcOfferOptions'
            ]
          }
        )

        /* harmony import */ var _media_constraints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./media-constraints */ 'jy1n'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mediaConstraints',
          function () {
            return _media_constraints__WEBPACK_IMPORTED_MODULE_3__[
              'mediaConstraints'
            ]
          }
        )

        /* harmony import */ var _config_injectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./config-injectors */ 'YAMS'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_CONFIG',
          function () {
            return _config_injectors__WEBPACK_IMPORTED_MODULE_4__['PEER_CONFIG']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_RTC_CONFIGURATION',
          function () {
            return _config_injectors__WEBPACK_IMPORTED_MODULE_4__[
              'PEER_RTC_CONFIGURATION'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_MEDIA_CONSTRAINTS',
          function () {
            return _config_injectors__WEBPACK_IMPORTED_MODULE_4__[
              'PEER_MEDIA_CONSTRAINTS'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeRtcConfig',
          function () {
            return _config_injectors__WEBPACK_IMPORTED_MODULE_4__[
              'mergeRtcConfig'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeMediaConstraints',
          function () {
            return _config_injectors__WEBPACK_IMPORTED_MODULE_4__[
              'mergeMediaConstraints'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeSocketOptions',
          function () {
            return _config_injectors__WEBPACK_IMPORTED_MODULE_4__[
              'mergeSocketOptions'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeConfig',
          function () {
            return _config_injectors__WEBPACK_IMPORTED_MODULE_4__['mergeConfig']
          }
        )

        /***/
      },

    /***/ fHwv:
      /*!*************************************!*\
  !*** ./libs/peer/core/src/index.ts ***!
  \*************************************/
      /*! exports provided: ImmutableModel, PeerEvent, PeerClient, PeerTransport, Logger, getDevices, getUserMedia, getDisplayMedia, S4, uid, uuid */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_immutable_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/immutable.model */ 's+lf'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ImmutableModel',
          function () {
            return _lib_immutable_model__WEBPACK_IMPORTED_MODULE_0__[
              'ImmutableModel'
            ]
          }
        )

        /* harmony import */ var _lib_peer_event_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/peer-event.enum */ 'vk2I'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerEvent',
          function () {
            return _lib_peer_event_enum__WEBPACK_IMPORTED_MODULE_1__[
              'PeerEvent'
            ]
          }
        )

        /* harmony import */ var _lib_peer_client_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./lib/peer-client.model */ 'QRyt'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerClient',
          function () {
            return _lib_peer_client_model__WEBPACK_IMPORTED_MODULE_2__[
              'PeerClient'
            ]
          }
        )

        /* harmony import */ var _lib_peer_transport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./lib/peer-transport */ 'NXTk'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerTransport',
          function () {
            return _lib_peer_transport__WEBPACK_IMPORTED_MODULE_3__[
              'PeerTransport'
            ]
          }
        )

        /* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./lib/utilities */ 'NGfb'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Logger',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_4__['Logger']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'getDevices',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_4__['getDevices']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'getUserMedia',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_4__['getUserMedia']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'getDisplayMedia',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_4__[
              'getDisplayMedia'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'S4',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_4__['S4']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'uid',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_4__['uid']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'uuid',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_4__['uuid']
          }
        )

        /***/
      },

    /***/ fWq8:
      /*!**************************************************************!*\
  !*** ./libs/peer/player/src/lib/controls/quality.control.ts ***!
  \**************************************************************/
      /*! exports provided: QualityControl */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'QualityControl',
          function () {
            return QualityControl
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )

        function QualityControl_div_0_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'div',
              1
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
          if (rf & 2) {
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵnextContext'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              ctx_r0.video.videoHeight,
              'p '
            )
          }
        }
        class QualityControl {}
        QualityControl.ɵfac = function QualityControl_Factory(t) {
          return new (t || QualityControl)()
        }
        QualityControl.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: QualityControl,
          selectors: [['peer-quality']],
          inputs: { video: 'video' },
          decls: 1,
          vars: 1,
          consts: [
            ['class', 'quality', 4, 'ngIf'],
            [1, 'quality'],
          ],
          template: function QualityControl_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                0,
                QualityControl_div_0_Template,
                2,
                1,
                'div',
                0
              )
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.video && ctx.video.videoHeight
              )
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf']],
          styles: [
            '.quality[_ngcontent-%COMP%] {\n        display: inline-block;\n        font-size: 12px;\n        padding-left: 12px;\n        padding-right: 12px;\n      }',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            QualityControl,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'peer-quality',
                    template: `
    <div *ngIf="video && video.videoHeight" class="quality">
      {{ video.videoHeight }}p
    </div>
  `,
                    styles: [
                      `
      .quality {
        display: inline-block;
        font-size: 12px;
        padding-left: 12px;
        padding-right: 12px;
      }
    `,
                    ],
                  },
                ],
              },
            ],
            null,
            {
              video: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ hIk7:
      /*!**************************************!*\
  !*** ./libs/peer/phone/src/index.ts ***!
  \**************************************/
      /*! exports provided: PEER_PHONE_CONFIG, mergeRtcConfig, peerPhoneConfig, PeerPhoneComponent, PeerPhoneModule, PeerPhoneService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/public-api */ 'S5ma'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_PHONE_CONFIG',
          function () {
            return _lib_public_api__WEBPACK_IMPORTED_MODULE_0__[
              'PEER_PHONE_CONFIG'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeRtcConfig',
          function () {
            return _lib_public_api__WEBPACK_IMPORTED_MODULE_0__[
              'mergeRtcConfig'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'peerPhoneConfig',
          function () {
            return _lib_public_api__WEBPACK_IMPORTED_MODULE_0__[
              'peerPhoneConfig'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPhoneComponent',
          function () {
            return _lib_public_api__WEBPACK_IMPORTED_MODULE_0__[
              'PeerPhoneComponent'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPhoneModule',
          function () {
            return _lib_public_api__WEBPACK_IMPORTED_MODULE_0__[
              'PeerPhoneModule'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPhoneService',
          function () {
            return _lib_public_api__WEBPACK_IMPORTED_MODULE_0__[
              'PeerPhoneService'
            ]
          }
        )

        /***/
      },

    /***/ iOWS:
      /*!********************************************************!*\
  !*** ./libs/peer/player/src/lib/peer-player.module.ts ***!
  \********************************************************/
      /*! exports provided: PeerPlayerModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPlayerModule',
          function () {
            return PeerPlayerModule
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/core */ 'FKr1'
        )
        /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/slider */ '5RNC'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _buttons_play_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./buttons/play.button */ 'X2QF'
        )
        /* harmony import */ var _buttons_fullscreen_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./buttons/fullscreen.button */ 'to0R'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _controls_quality_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./controls/quality.control */ 'fWq8'
        )
        /* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./player.component */ 'FcUm'
        )
        /* harmony import */ var _utilities_fullscreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./utilities/fullscreen */ 'kMTJ'
        )
        /* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./controls */ '/cOR'
        )

        class PeerPlayerModule {}
        PeerPlayerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineNgModule'
        ]({ type: PeerPlayerModule })
        PeerPlayerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjector'
        ]({
          factory: function PeerPlayerModule_Factory(t) {
            return new (t || PeerPlayerModule)()
          },
          providers: [
            _utilities_fullscreen__WEBPACK_IMPORTED_MODULE_9__['Fullscreen'],
          ],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_3__['CommonModule'],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_6__[
                'MatButtonModule'
              ],
              _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__[
                'MatSliderModule'
              ],
              _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[
                'MatRippleModule'
              ],
            ],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵsetNgModuleScope'
            ](PeerPlayerModule, {
              declarations: [
                _buttons_play_button__WEBPACK_IMPORTED_MODULE_4__['PlayButton'],
                _controls__WEBPACK_IMPORTED_MODULE_10__['VolumeControl'],
                _controls_quality_control__WEBPACK_IMPORTED_MODULE_7__[
                  'QualityControl'
                ],
                _player_component__WEBPACK_IMPORTED_MODULE_8__[
                  'PlayerComponent'
                ],
                _buttons_fullscreen_button__WEBPACK_IMPORTED_MODULE_5__[
                  'FullscreenButton'
                ],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__['CommonModule'],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__[
                  'MatButtonModule'
                ],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__[
                  'MatSliderModule'
                ],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[
                  'MatRippleModule'
                ],
              ],
              exports: [
                _buttons_play_button__WEBPACK_IMPORTED_MODULE_4__['PlayButton'],
                _controls__WEBPACK_IMPORTED_MODULE_10__['VolumeControl'],
                _controls_quality_control__WEBPACK_IMPORTED_MODULE_7__[
                  'QualityControl'
                ],
                _player_component__WEBPACK_IMPORTED_MODULE_8__[
                  'PlayerComponent'
                ],
                _buttons_fullscreen_button__WEBPACK_IMPORTED_MODULE_5__[
                  'FullscreenButton'
                ],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PeerPlayerModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_3__[
                        'CommonModule'
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_6__[
                        'MatButtonModule'
                      ],
                      _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__[
                        'MatSliderModule'
                      ],
                      _angular_material_core__WEBPACK_IMPORTED_MODULE_1__[
                        'MatRippleModule'
                      ],
                    ],
                    declarations: [
                      _buttons_play_button__WEBPACK_IMPORTED_MODULE_4__[
                        'PlayButton'
                      ],
                      _controls__WEBPACK_IMPORTED_MODULE_10__['VolumeControl'],
                      _controls_quality_control__WEBPACK_IMPORTED_MODULE_7__[
                        'QualityControl'
                      ],
                      _player_component__WEBPACK_IMPORTED_MODULE_8__[
                        'PlayerComponent'
                      ],
                      _buttons_fullscreen_button__WEBPACK_IMPORTED_MODULE_5__[
                        'FullscreenButton'
                      ],
                    ],
                    exports: [
                      _buttons_play_button__WEBPACK_IMPORTED_MODULE_4__[
                        'PlayButton'
                      ],
                      _controls__WEBPACK_IMPORTED_MODULE_10__['VolumeControl'],
                      _controls_quality_control__WEBPACK_IMPORTED_MODULE_7__[
                        'QualityControl'
                      ],
                      _player_component__WEBPACK_IMPORTED_MODULE_8__[
                        'PlayerComponent'
                      ],
                      _buttons_fullscreen_button__WEBPACK_IMPORTED_MODULE_5__[
                        'FullscreenButton'
                      ],
                    ],
                    providers: [
                      _utilities_fullscreen__WEBPACK_IMPORTED_MODULE_9__[
                        'Fullscreen'
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ jy1n:
      /*!**************************************************************!*\
  !*** ./libs/peer/client/src/lib/config/media-constraints.ts ***!
  \**************************************************************/
      /*! exports provided: mediaConstraints */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mediaConstraints',
          function () {
            return mediaConstraints
          }
        )
        const mediaConstraints = {
          peerIdentity: '',
          video: true,
          audio: true,
        }

        /***/
      },

    /***/ k178:
      /*!************************************************************************!*\
  !*** ./apps/docs/samples/peer-client/src/app/phone/phone.component.ts ***!
  \************************************************************************/
      /*! exports provided: PhoneComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PhoneComponent',
          function () {
            return PhoneComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _freecom_peer_phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @freecom/peer-phone */ 'hIk7'
        )
        /* harmony import */ var _freecom_peer_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @freecom/peer-core */ 'fHwv'
        )

        class PhoneComponent {
          constructor(phoneService) {
            this.phoneService = phoneService
          }
          ngOnInit() {
            console.log(
              Object(_freecom_peer_core__WEBPACK_IMPORTED_MODULE_2__['uid'])()
            )
            this.phoneService.call()
          }
        }
        PhoneComponent.ɵfac = function PhoneComponent_Factory(t) {
          return new (t || PhoneComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _freecom_peer_phone__WEBPACK_IMPORTED_MODULE_1__[
                'PeerPhoneService'
              ]
            )
          )
        }
        PhoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: PhoneComponent,
          selectors: [['sample-phone']],
          decls: 2,
          vars: 0,
          template: function PhoneComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                1,
                'phone works!'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
          },
          styles: [
            '[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Bob25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InBob25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */',
          ],
          changeDetection: 0,
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PhoneComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'sample-phone',
                    templateUrl: './phone.component.html',
                    styleUrls: ['./phone.component.scss'],
                    changeDetection:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        'ChangeDetectionStrategy'
                      ].OnPush,
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _freecom_peer_phone__WEBPACK_IMPORTED_MODULE_1__[
                      'PeerPhoneService'
                    ],
                },
              ]
            },
            null
          )
        })()

        /***/
      },

    /***/ kMTJ:
      /*!**********************************************************!*\
  !*** ./libs/peer/player/src/lib/utilities/fullscreen.ts ***!
  \**********************************************************/
      /*! exports provided: Fullscreen */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Fullscreen',
          function () {
            return Fullscreen
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )

        class Fullscreen {
          constructor() {
            this.fnMap = [
              // Object keys
              [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror',
              ],
              // New WebKit
              [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror',
              ],
              // Old WebKit (Safari 5.1)
              [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror',
              ],
              // Mozilla
              [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror',
              ],
              // MS
              [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError',
              ],
            ]
            this.keyboardAllowed =
              typeof Element !== 'undefined' &&
              'ALLOW_KEYBOARD_INPUT' in Element
            const ret = {}
            let val
            for (let i = 0; i < this.fnMap.length; i++) {
              val = this.fnMap[i]
              if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                  // Map everything to the first list of keys
                  ret[this.fnMap[0][i].toString()] = val[i]
                }
                this.fn = ret
              }
            }
          }
          request(elem) {
            const request = this.fn.requestFullscreen
            elem = elem || document.documentElement
            // Work around Safari 5.1 bug: reports support for
            // keyboard in fullscreen even though it doesn't.
            // Browser sniffing, since the alternative with
            // setTimeout is even worse.
            if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
              elem[request]()
            } else {
              elem[request](
                this.keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {}
              )
            }
          }
          exit() {
            document[this.fn.exitFullscreen]()
          }
          toggle(elem) {
            if (this.isFullscreen()) {
              this.exit()
            } else {
              this.request(elem)
            }
          }
          onChange(callback) {
            document.addEventListener(this.fn.fullscreenchange, callback, false)
          }
          onError(callback) {
            document.addEventListener(this.fn.fullscreenerror, callback, false)
          }
          isFullscreen() {
            return Boolean(document[this.fn.fullscreenElement])
          }
          isEnabled() {
            // Coerce to boolean in case of old WebKit
            return Boolean(document[this.fn.fullscreenEnabled])
          }
          getElement() {
            return document[this.fn.fullscreenElement]
          }
        }
        Fullscreen.ɵfac = function Fullscreen_Factory(t) {
          return new (t || Fullscreen)()
        }
        Fullscreen.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjectable'
        ]({ token: Fullscreen, factory: Fullscreen.ɵfac })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            Fullscreen,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
              },
            ],
            function () {
              return []
            },
            null
          )
        })()

        /***/
      },

    /***/ ljco:
      /*!**************************************************************!*\
  !*** ./libs/peer/client/src/lib/config/rtc-configuration.ts ***!
  \**************************************************************/
      /*! exports provided: configuration */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'configuration',
          function () {
            return configuration
          }
        )
        const configuration = {
          iceServers: [{ urls: 'stun:ubuntu.gui:3478' }],
          bundlePolicy: 'balanced',
          certificates: [],
          iceCandidatePoolSize: 10,
          iceTransportPolicy: 'all',
          peerIdentity: '',
        }

        /***/
      },

    /***/ n5N7:
      /*!**************************************************!*\
  !*** ./libs/peer/core/src/lib/utilities/uuid.ts ***!
  \**************************************************/
      /*! exports provided: S4, uid, uuid */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'S4',
          function () {
            return S4
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'uid',
          function () {
            return uid
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'uuid',
          function () {
            return uuid
          }
        )
        function S4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
        }
        function uid() {
          return `${S4()}-${S4()}-${S4()}`
        }
        function uuid() {
          return `${S4()}${S4()}-${uid()}-${S4()}${S4()}${S4()}`
        }

        /***/
      },

    /***/ oaHY:
      /*!***************************************!*\
  !*** ./libs/peer/client/src/index.ts ***!
  \***************************************/
      /*! exports provided: PeerClientModule, ClientConnection, ClientStore, versions, socketOptions, configuration, rtcOfferOptions, mediaConstraints, PEER_CONFIG, PEER_RTC_CONFIGURATION, PEER_MEDIA_CONSTRAINTS, mergeRtcConfig, mergeMediaConstraints, mergeSocketOptions, mergeConfig */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_peer_client_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/peer-client.module */ 'py/i'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerClientModule',
          function () {
            return _lib_peer_client_module__WEBPACK_IMPORTED_MODULE_0__[
              'PeerClientModule'
            ]
          }
        )

        /* harmony import */ var _lib_client_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/client-connection */ 'uyQK'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ClientConnection',
          function () {
            return _lib_client_connection__WEBPACK_IMPORTED_MODULE_1__[
              'ClientConnection'
            ]
          }
        )

        /* harmony import */ var _lib_client_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./lib/client-store */ '3YGx'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ClientStore',
          function () {
            return _lib_client_store__WEBPACK_IMPORTED_MODULE_2__['ClientStore']
          }
        )

        /* harmony import */ var _utils_versions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./utils/versions */ 'BSyR'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'versions',
          function () {
            return _utils_versions__WEBPACK_IMPORTED_MODULE_3__['versions']
          }
        )

        /* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./lib/config */ 'eIMU'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'socketOptions',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__['socketOptions']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'configuration',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__['configuration']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'rtcOfferOptions',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__['rtcOfferOptions']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mediaConstraints',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__['mediaConstraints']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_CONFIG',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__['PEER_CONFIG']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_RTC_CONFIGURATION',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__[
              'PEER_RTC_CONFIGURATION'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_MEDIA_CONSTRAINTS',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__[
              'PEER_MEDIA_CONSTRAINTS'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeRtcConfig',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__['mergeRtcConfig']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeMediaConstraints',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__[
              'mergeMediaConstraints'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeSocketOptions',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__[
              'mergeSocketOptions'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeConfig',
          function () {
            return _lib_config__WEBPACK_IMPORTED_MODULE_4__['mergeConfig']
          }
        )

        /***/
      },

    /***/ 'py/i':
      /*!********************************************************!*\
  !*** ./libs/peer/client/src/lib/peer-client.module.ts ***!
  \********************************************************/
      /*! exports provided: PeerClientModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerClientModule',
          function () {
            return PeerClientModule
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _client_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./client-connection */ 'uyQK'
        )
        /* harmony import */ var _client_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./client-store */ '3YGx'
        )
        /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./config */ 'eIMU'
        )

        class PeerClientModule {
          static forRoot(config) {
            const peerConfig = Object(
              _config__WEBPACK_IMPORTED_MODULE_3__['mergeConfig']
            )(
              config !== null && config !== void 0
                ? config
                : { rtc: {}, media: {}, socket: null }
            )
            return {
              ngModule: PeerClientModule,
              providers: [
                {
                  provide: _config__WEBPACK_IMPORTED_MODULE_3__['PEER_CONFIG'],
                  useValue: peerConfig,
                },
              ],
            }
          }
        }
        PeerClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineNgModule'
        ]({ type: PeerClientModule })
        PeerClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjector'
        ]({
          factory: function PeerClientModule_Factory(t) {
            return new (t || PeerClientModule)()
          },
          providers: [
            _client_connection__WEBPACK_IMPORTED_MODULE_1__['ClientConnection'],
            _client_store__WEBPACK_IMPORTED_MODULE_2__['ClientStore'],
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PeerClientModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    providers: [
                      _client_connection__WEBPACK_IMPORTED_MODULE_1__[
                        'ClientConnection'
                      ],
                      _client_store__WEBPACK_IMPORTED_MODULE_2__['ClientStore'],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ qlr7:
      /*!************************************************************!*\
  !*** ./libs/peer/phone/src/lib/config/config-injectors.ts ***!
  \************************************************************/
      /*! exports provided: PEER_PHONE_CONFIG, mergeRtcConfig */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PEER_PHONE_CONFIG',
          function () {
            return PEER_PHONE_CONFIG
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'mergeRtcConfig',
          function () {
            return mergeRtcConfig
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _peer_phone_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./peer-phone-config */ 'zsLE'
        )

        const PEER_PHONE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'InjectionToken'
        ]('PeerPhoneConfig')
        function mergeRtcConfig(config) {
          return Object.assign(
            _peer_phone_config__WEBPACK_IMPORTED_MODULE_1__['peerPhoneConfig'],
            config
          )
        }

        /***/
      },

    /***/ 's+lf':
      /*!***************************************************!*\
  !*** ./libs/peer/core/src/lib/immutable.model.ts ***!
  \***************************************************/
      /*! exports provided: ImmutableModel */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ImmutableModel',
          function () {
            return ImmutableModel
          }
        )
        /* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! immutable */ 'Mpt7'
        )

        class ImmutableModel {
          constructor(ctor, data_) {
            this.ctor = ctor
            this.data_ = data_
            this.data = Object(immutable__WEBPACK_IMPORTED_MODULE_0__['Map'])(
              data_
            )
          }
          toJS() {
            return this.data.toJS()
          }
          setValue(key, value) {
            return new this.ctor(this.data.set(key, value))
          }
        }

        /***/
      },

    /***/ to0R:
      /*!***************************************************************!*\
  !*** ./libs/peer/player/src/lib/buttons/fullscreen.button.ts ***!
  \***************************************************************/
      /*! exports provided: FullscreenButton */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FullscreenButton',
          function () {
            return FullscreenButton
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../utilities */ '4x5A'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )

        function FullscreenButton_i_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'i',
              2
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              'fullscreen'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        function FullscreenButton_i_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'i',
              2
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              1,
              'fullscreen_exit'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        class FullscreenButton {
          constructor(fscreen, evt) {
            this.fscreen = fscreen
            this.evt = evt
            this.canFullscreen = false
            this.fullscreen = false
            this.fullscreenChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'EventEmitter'
            ]()
            this.keyboard = true
          }
          ngOnInit() {
            if (this.fscreen.isEnabled()) {
              this.canFullscreen = true
            }
            this.fscreen.onChange(() => {
              this.fscreen.isFullscreen()
                ? this.onChangesFullscreen(true)
                : this.onChangesFullscreen(false)
            })
          }
          setFullscreen(value) {
            if (this.canFullscreen && this.fullscreen !== value) {
              this.toggleFullscreen()
            }
          }
          toggleFullscreen() {
            this.fullscreen = !this.fullscreen
            this.updateFullscreen()
          }
          updateFullscreen() {
            this.fullscreen
              ? this.fscreen.request(this.player)
              : this.fscreen.exit()
            this.fullscreenChanged.emit(this.fullscreen)
          }
          onChangesFullscreen(value) {
            this.fullscreen = value
            this.fullscreenChanged.emit(this.fullscreen)
          }
          onFullscreenKey(event) {
            if (this.keyboard) {
              this.toggleFullscreen()
              event.preventDefault()
            }
          }
        }
        FullscreenButton.ɵfac = function FullscreenButton_Factory(t) {
          return new (t || FullscreenButton)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _utilities__WEBPACK_IMPORTED_MODULE_1__['Fullscreen']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _utilities__WEBPACK_IMPORTED_MODULE_1__['EventHandler']
            )
          )
        }
        FullscreenButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: FullscreenButton,
          selectors: [['peer-fullscreen']],
          hostBindings: function FullscreenButton_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'keyup.f',
                function FullscreenButton_keyup_f_HostBindingHandler($event) {
                  return ctx.onFullscreenKey($event)
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveDocument']
              )
            }
          },
          inputs: {
            player: 'player',
            fullscreen: 'fullscreen',
            keyboard: 'keyboard',
          },
          outputs: { fullscreenChanged: 'fullscreenChanged' },
          decls: 3,
          vars: 3,
          consts: [
            ['mat-button', '', 'color', 'primary', 3, 'disabled', 'click'],
            ['class', 'material-icons', 4, 'ngIf'],
            [1, 'material-icons'],
          ],
          template: function FullscreenButton_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'button',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function FullscreenButton_Template_button_click_0_listener() {
                  return ctx.toggleFullscreen()
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                FullscreenButton_i_1_Template,
                2,
                0,
                'i',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                FullscreenButton_i_2_Template,
                2,
                0,
                'i',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'disabled',
                !ctx.canFullscreen
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                !ctx.fullscreen
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.fullscreen
              )
            }
          },
          directives: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__['MatButton'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
          ],
          encapsulation: 2,
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FullscreenButton,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'peer-fullscreen',
                    templateUrl: './fullscreen.button.html',
                  },
                ],
              },
            ],
            function () {
              return [
                { type: _utilities__WEBPACK_IMPORTED_MODULE_1__['Fullscreen'] },
                {
                  type: _utilities__WEBPACK_IMPORTED_MODULE_1__['EventHandler'],
                },
              ]
            },
            {
              player: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              fullscreen: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              fullscreenChanged: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output'],
                },
              ],
              keyboard: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              onFullscreenKey: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostListener'],
                  args: ['document:keyup.f', ['$event']],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ u2RX:
      /*!***********************************************************!*\
  !*** ./libs/peer/client/src/lib/config/socket-options.ts ***!
  \***********************************************************/
      /*! exports provided: socketOptions */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'socketOptions',
          function () {
            return socketOptions
          }
        )
        const socketOptions = {
          uri: 'http://localhost:3000',
        }

        /***/
      },

    /***/ uN2N:
      /*!***************************************!*\
  !*** ./libs/peer/player/src/index.ts ***!
  \***************************************/
      /*! exports provided: FullscreenButton, PlayButton, QualityControl, VolumeControl, EventHandler, Fullscreen, playerIcons, PeerPlayerModule, PlayerComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/buttons */ 'aQ9L'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FullscreenButton',
          function () {
            return _lib_buttons__WEBPACK_IMPORTED_MODULE_0__['FullscreenButton']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PlayButton',
          function () {
            return _lib_buttons__WEBPACK_IMPORTED_MODULE_0__['PlayButton']
          }
        )

        /* harmony import */ var _lib_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/controls */ '/cOR'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'QualityControl',
          function () {
            return _lib_controls__WEBPACK_IMPORTED_MODULE_1__['QualityControl']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'VolumeControl',
          function () {
            return _lib_controls__WEBPACK_IMPORTED_MODULE_1__['VolumeControl']
          }
        )

        /* harmony import */ var _lib_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./lib/utilities */ '4x5A'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'EventHandler',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_2__['EventHandler']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Fullscreen',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_2__['Fullscreen']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'playerIcons',
          function () {
            return _lib_utilities__WEBPACK_IMPORTED_MODULE_2__['playerIcons']
          }
        )

        /* harmony import */ var _lib_peer_player_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./lib/peer-player.module */ 'iOWS'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPlayerModule',
          function () {
            return _lib_peer_player_module__WEBPACK_IMPORTED_MODULE_3__[
              'PeerPlayerModule'
            ]
          }
        )

        /* harmony import */ var _lib_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./lib/player.component */ 'FcUm'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PlayerComponent',
          function () {
            return _lib_player_component__WEBPACK_IMPORTED_MODULE_4__[
              'PlayerComponent'
            ]
          }
        )

        /***/
      },

    /***/ uyQK:
      /*!*******************************************************!*\
  !*** ./libs/peer/client/src/lib/client-connection.ts ***!
  \*******************************************************/
      /*! exports provided: ClientConnection */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ClientConnection',
          function () {
            return ClientConnection
          }
        )
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ 'mrSG'
        )
        /* harmony import */ var _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @freecom/peer-core */ 'fHwv'
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )
        /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./config */ 'eIMU'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _client_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./client-store */ '3YGx'
        )
        /* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! socket.io-client */ 'gFX4'
        )
        /* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          socket_io_client__WEBPACK_IMPORTED_MODULE_6__
        )

        class ClientConnection {
          constructor(config, clientStore) {
            this.config = config
            this.clientStore = clientStore
            this.peers = []
            this.active = new rxjs__WEBPACK_IMPORTED_MODULE_2__[
              'BehaviorSubject'
            ](false)
            this.active$ = this.active.asObservable()
            this.logger = new _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
              'Logger'
            ]()
            this.connectToRoom = () =>
              Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                this,
                void 0,
                void 0,
                function* () {
                  const video = {
                    height: 720,
                    echoCancellation: true,
                  }
                  try {
                    const stream = yield Object(
                      _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                        'getUserMedia'
                      ]
                    )({ video })
                    this.stream = stream
                    this.socket.emit(
                      _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                        'PeerEvent'
                      ].ConnectToRoom
                    )
                    const client = new _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                      'PeerClient'
                    ]({
                      id: this.socket.id,
                      stream: stream,
                    })
                    this.clientStore.addClient(client)
                    this.peer = this.peers[this.peerId]
                    console.log(this.peer)
                    this.active.next(true)
                  } catch (err) {
                    this.logger.error("Can't get media stream", err)
                  }
                }
              )
            this.connectScreen = () =>
              Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                this,
                void 0,
                void 0,
                function* () {
                  try {
                    const stream = yield Object(
                      _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                        'getDisplayMedia'
                      ]
                    )()
                    this.stream = stream
                    this.socket.emit(
                      _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                        'PeerEvent'
                      ].ConnectToRoom
                    )
                    const client = new _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                      'PeerClient'
                    ]({
                      id: this.socket.id,
                      stream: stream,
                    })
                    this.clientStore.addClient(client)
                    this.peer = this.peers[this.peerId]
                    console.log(this.peer)
                    this.active.next(true)
                  } catch (err) {
                    this.logger.error("Can't get media stream", err)
                  }
                }
              )
            const { rtc, socket } = this.config
            this.logger.info(socket)
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__[
              'connect'
            ](socket.uri)
            this.socket.on('connect', () => {
              this.logger.log('Socket connected. I am', this.socket.id)
              this.peerId = this.socket.id
            })
            this.socket.on('disconnect', ({ id }) => {
              this.logger.log('Socket disconnected. I was', id, this.socket.id)
            })
            this.socket.on(
              _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__['PeerEvent']
                .Connected,
              ({ id }) => this.makeOffer(id)
            )
            this.socket.on(
              _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__['PeerEvent']
                .Disconnected,
              ({ id }) => this.close(id)
            )
            this.socket.on(
              _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__['PeerEvent']
                .Message,
              (data) => this.handleMessage(data)
            )
          }
          makeOffer(clientId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
              this,
              void 0,
              void 0,
              function* () {
                try {
                  const peer = this.getPeer(clientId)
                  const sdp = yield peer.createOffer({
                    offerToReceiveVideo: true,
                    offerToReceiveAudio: true,
                  })
                  return peer.setLocalDescription(sdp).then(() => {
                    this.socket.emit(
                      _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                        'PeerEvent'
                      ].Message,
                      _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                        'PeerTransport'
                      ].offer(this.peerId, clientId, sdp)
                    )
                  })
                } catch (err) {
                  this.logger.error("Can't get media stream", err)
                }
              }
            )
          }
          handleMessage(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
              this,
              void 0,
              void 0,
              function* () {
                const peer = this.getPeer(message.by)
                this.logger.log(peer)
                this.logger.log(message)
                switch (message.type) {
                  case _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                    'PeerEvent'
                  ].SdpOffer:
                    return this.handleOffer(peer, message)
                  case _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                    'PeerEvent'
                  ].SdpAnswer:
                    return this.handleAnswer(peer, message)
                  case _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                    'PeerEvent'
                  ].Ice:
                    return this.handleIce(peer, message)
                }
              }
            )
          }
          handleOffer(peer, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
              this,
              void 0,
              void 0,
              function* () {
                try {
                  yield peer.setRemoteDescription(
                    new RTCSessionDescription(message.sdp)
                  )
                  this.logger.log('Setting remote description by offer')
                  const sdp = yield peer.createAnswer()
                  return peer.setLocalDescription(sdp).then(() => {
                    const transport = _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                      'PeerTransport'
                    ].answer(this.peerId, message.by, sdp)
                    this.socket.emit(
                      _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                        'PeerEvent'
                      ].Message,
                      transport
                    )
                  })
                } catch (err) {
                  this.logger.error('Error on SDP-Offer:', err)
                }
              }
            )
          }
          handleAnswer(peer, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
              this,
              void 0,
              void 0,
              function* () {
                try {
                  yield peer.setRemoteDescription(
                    new RTCSessionDescription(message.sdp)
                  )
                  this.logger.log('Setting remote description by answer')
                } catch (err) {
                  this.logger.error('Error on SDP-Answer:', err)
                }
              }
            )
          }
          handleIce(peer, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
              this,
              void 0,
              void 0,
              function* () {
                if (message.ice) {
                  this.logger.log('Adding ice candidate')
                  peer.addIceCandidate(message.ice)
                }
              }
            )
          }
          getPeer(id) {
            if (this.peers[id]) {
              return this.peers[id]
            }
            const peer = new RTCPeerConnection()
            this.peers[id] = peer
            /**
             * Caso seja meu id, armazena
             * o peer em memória volátil */
            if (id === this.peerId) {
              this.peer = peer
            }
            peer.addEventListener('icecandidate', ({ candidate }) => {
              if (candidate) {
                const message = _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                  'PeerTransport'
                ].candidate(this.peerId, id, candidate)
                this.socket.emit(
                  _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__['PeerEvent']
                    .Message,
                  message
                )
              }
            })
            peer.addEventListener('iceconnectionstatechange', (ev) => {
              if (peer.iceConnectionState === 'failed') {
                console.log('peer.restartIce()')
              }
            })
            peer.addEventListener('onnegotiationneeded', () => {
              this.logger.log('Need negotiation:', id)
            })
            peer.addEventListener('onsignalingstatechange', () => {
              this.logger.log(
                'ICE signaling state changed to:',
                peer.signalingState,
                'for client',
                id
              )
            })
            // Workaround for Chrome
            // see: https://github.com/webrtc/adapter/issues/361
            if (
              window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1
            ) {
              // Chrome
              // DEPECRATED https://developer.mozilla.org/de/docs/Web/API/RTCPeerConnection/addStream
              peer.addStream(this.stream)
              peer.onaddstream = ({ stream }) => {
                this.logger.log('Received new stream')
                const client = new _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                  'PeerClient'
                ]({ id: id, stream: stream })
                this.clientStore.addClient(client)
              }
            } else {
              // Firefox
              peer.addTrack(this.stream.getVideoTracks()[0], this.stream)
              peer.ontrack = ({ streams }) => {
                this.logger.log('Received new stream')
                const client = new _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__[
                  'PeerClient'
                ]({ id: id, stream: streams[0] })
                this.clientStore.addClient(client)
              }
            }
            return peer
          }
          close(id) {
            const peer = this.peers[id]
            if (peer) peer.close()
            const client = this.clientStore.getClient(id)
            if (client) client.stream.getTracks().forEach((t) => t.stop())
            this.clientStore.removeClient(id)
          }
          hangup() {
            this.close(this.peerId)
            this.socket.emit(
              _freecom_peer_core__WEBPACK_IMPORTED_MODULE_1__['PeerEvent']
                .Disconnected
            )
            this.peer = null
            this.peerId = null
            this.active.next(false)
          }
        }
        ClientConnection.ɵfac = function ClientConnection_Factory(t) {
          return new (t || ClientConnection)(
            _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵinject'](
              _config__WEBPACK_IMPORTED_MODULE_3__['PEER_CONFIG']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵɵinject'](
              _client_store__WEBPACK_IMPORTED_MODULE_5__['ClientStore']
            )
          )
        }
        ClientConnection.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__[
          'ɵɵdefineInjectable'
        ]({
          token: ClientConnection,
          factory: ClientConnection.ɵfac,
          providedIn: 'root',
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵsetClassMetadata'](
            ClientConnection,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__['Injectable'],
                args: [
                  {
                    providedIn: 'root',
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: undefined,
                  decorators: [
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_4__['Inject'],
                      args: [
                        _config__WEBPACK_IMPORTED_MODULE_3__['PEER_CONFIG'],
                      ],
                    },
                  ],
                },
                {
                  type:
                    _client_store__WEBPACK_IMPORTED_MODULE_5__['ClientStore'],
                },
              ]
            },
            null
          )
        })()

        /***/
      },

    /***/ vk2I:
      /*!***************************************************!*\
  !*** ./libs/peer/core/src/lib/peer-event.enum.ts ***!
  \***************************************************/
      /*! exports provided: PeerEvent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerEvent',
          function () {
            return PeerEvent
          }
        )
        var PeerEvent
        ;(function (PeerEvent) {
          PeerEvent['Disconnected'] = 'peer-disconnected'
          PeerEvent['Connected'] = 'peer-connected'
          PeerEvent['ConnectToRoom'] = 'connect-to-room'
          PeerEvent['JoinedToRoom'] = 'joined-to-room'
          PeerEvent['ScreenShared'] = 'screen-shared'
          PeerEvent['Message'] = 'peer-message'
          PeerEvent['SdpAnswer'] = 'sdp-answer'
          PeerEvent['SdpOffer'] = 'sdp-offer'
          PeerEvent['Ice'] = 'ice'
        })(PeerEvent || (PeerEvent = {}))

        /***/
      },

    /***/ wZSH:
      /*!*******************************************************!*\
  !*** ./libs/peer/phone/src/lib/peer-phone.service.ts ***!
  \*******************************************************/
      /*! exports provided: PeerPhoneService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerPhoneService',
          function () {
            return PeerPhoneService
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/dialog */ '0IaG'
        )
        /* harmony import */ var _peer_phone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./peer-phone.component */ '1wjH'
        )

        class PeerPhoneService {
          constructor(dialog) {
            this.dialog = dialog
          }
          call(client) {
            return this.dialog
              .open(
                _peer_phone_component__WEBPACK_IMPORTED_MODULE_2__[
                  'PeerPhoneComponent'
                ],
                {
                  panelClass: 'phone-container',
                  data: client,
                }
              )
              .afterClosed()
          }
        }
        PeerPhoneService.ɵfac = function PeerPhoneService_Factory(t) {
          return new (t || PeerPhoneService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__['MatDialog']
            )
          )
        }
        PeerPhoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjectable'
        ]({ token: PeerPhoneService, factory: PeerPhoneService.ɵfac })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            PeerPhoneService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__[
                      'MatDialog'
                    ],
                },
              ]
            },
            null
          )
        })()

        /***/
      },

    /***/ xb4r:
      /*!************************************************************************************!*\
  !*** ./apps/docs/samples/peer-client/$$_lazy_route_resource lazy namespace object ***!
  \************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'")
            e.code = 'MODULE_NOT_FOUND'
            throw e
          })
        }
        webpackEmptyAsyncContext.keys = function () {
          return []
        }
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext
        module.exports = webpackEmptyAsyncContext
        webpackEmptyAsyncContext.id = 'xb4r'

        /***/
      },

    /***/ zsLE:
      /*!*************************************************************!*\
  !*** ./libs/peer/phone/src/lib/config/peer-phone-config.ts ***!
  \*************************************************************/
      /*! exports provided: peerPhoneConfig */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'peerPhoneConfig',
          function () {
            return peerPhoneConfig
          }
        )
        const peerPhoneConfig = {
          ringtones: {
            calling: '',
            incoming: '',
            outgoing: '',
          },
        }

        /***/
      },
  },
  [[0, 'runtime', 'vendor']],
])
//# sourceMappingURL=main.js.map
