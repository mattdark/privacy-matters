(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{143:function(t,e,n){"use strict";n.r(e),n.d(e,"IonActionSheet",function(){return d}),n.d(e,"IonActionSheetController",function(){return b});var o=n(297),i=n(3),r=n(302),a=n(298);function s(t,e){var n=new t,o=new t;o.addElement(e.querySelector("ion-backdrop"));var i=new t;i.addElement(e.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.4),i.fromTo("translateY","100%","0%");var r=n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(r)}function c(t,e){var n=new t,o=new t;o.addElement(e.querySelector("ion-backdrop"));var i=new t;i.addElement(e.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.4,0),i.fromTo("translateY","0%","100%");var r=n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(r)}function u(t,e){var n=new t,o=new t;o.addElement(e.querySelector("ion-backdrop"));var i=new t;i.addElement(e.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.32),i.fromTo("translateY","100%","0%");var r=n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(r)}function l(t,e){var n=new t,o=new t;o.addElement(e.querySelector("ion-backdrop"));var i=new t;i.addElement(e.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.32,0),i.fromTo("translateY","0%","100%");var r=n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(r)}var d=function(){function t(){this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}return t.prototype.onBackdropTap=function(){this.dismiss(void 0,r.a)},t.prototype.dispatchCancelHandler=function(t){if(Object(r.b)(t.detail.role)){var e=this.getButtons().find(function(t){return"cancel"===t.role});this.callButtonHandler(e)}},t.prototype.present=function(){return Object(r.c)(this,"actionSheetEnter",s,u)},t.prototype.dismiss=function(t,e){return Object(r.d)(this,t,e,"actionSheetLeave",c,l)},t.prototype.onDidDismiss=function(){return Object(r.e)(this.el,"ionActionSheetDidDismiss")},t.prototype.onWillDismiss=function(){return Object(r.e)(this.el,"ionActionSheetWillDismiss")},t.prototype.buttonClick=function(t){return o.a(this,void 0,void 0,function(){var e;return o.c(this,function(n){switch(n.label){case 0:return Object(r.b)(e=t.role)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return n.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}})})},t.prototype.callButtonHandler=function(t){return o.a(this,void 0,void 0,function(){var e;return o.c(this,function(n){switch(n.label){case 0:if(!t||!t.handler)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.handler()];case 2:return!1===n.sent()?[2,!1]:[3,4];case 3:return e=n.sent(),console.error(e),[3,4];case 4:return[2,!0]}})})},t.prototype.getButtons=function(){return this.buttons.map(function(t){return"string"==typeof t?{text:t}:t})},t.prototype.hostData=function(){var t;return{role:"dialog","aria-modal":"true",style:{zIndex:2e4+this.overlayIndex},class:Object.assign((t={},t[""+this.mode]=!0,t),Object(a.a)(this.cssClass),{"action-sheet-translucent":this.translucent})}},t.prototype.render=function(){var t=this,e=this.getButtons(),n=e.find(function(t){return"cancel"===t.role}),o=e.filter(function(t){return"cancel"!==t.role});return[Object(i.b)("ion-backdrop",{tappable:this.backdropDismiss}),Object(i.b)("div",{class:"action-sheet-wrapper",role:"dialog"},Object(i.b)("div",{class:"action-sheet-container"},Object(i.b)("div",{class:"action-sheet-group"},void 0!==this.header&&Object(i.b)("div",{class:"action-sheet-title"},this.header,this.subHeader&&Object(i.b)("div",{class:"action-sheet-sub-title"},this.subHeader)),o.map(function(e){return Object(i.b)("button",{type:"button","ion-activatable":!0,class:p(e),onClick:function(){return t.buttonClick(e)}},Object(i.b)("span",{class:"action-sheet-button-inner"},e.icon&&Object(i.b)("ion-icon",{icon:e.icon,lazy:!1,class:"action-sheet-icon"}),e.text),"md"===t.mode&&Object(i.b)("ion-ripple-effect",null))})),n&&Object(i.b)("div",{class:"action-sheet-group action-sheet-group-cancel"},Object(i.b)("button",{type:"button",class:p(n),onClick:function(){return t.buttonClick(n)}},Object(i.b)("span",{class:"action-sheet-button-inner"},n.icon&&Object(i.b)("ion-icon",{icon:n.icon,lazy:!1,class:"action-sheet-icon"}),n.text)))))]},Object.defineProperty(t,"is",{get:function(){return"ion-action-sheet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionActionSheetDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionActionSheetWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-action-sheet-ios-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-ios{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:scroll;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9));--background-selected:var(--ion-background-color,#fff);--background-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.08);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top,0);margin-bottom:var(--ion-safe-area-bottom,0)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px;overflow:hidden}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.8)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8))),-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.8)));background-image:linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.8),rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%),linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.4),rgba(var(--ion-background-color-rgb,255,255,255),.4) 50%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 0);background-repeat:no-repeat;background-position:top,bottom;background-size:100% calc(100% - 1px),100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-button.activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected)}}.action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,transparent));background-image:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),.08),rgba(var(--ion-text-color-rgb,0,0,0),.08) 50%,transparent 0);background-repeat:no-repeat;background-position:bottom;background-size:100% 1px}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color,var(--ion-color-step-400,#999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;color:var(--color,var(--ion-color-primary,#3880ff));font-size:20px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios   .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:.1em;font-size:28px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios   .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:.1em;margin-inline-end:.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:700}.action-sheet-destructive.sc-ion-action-sheet-ios{color:var(--ion-color-danger,#f04141)}.action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:600}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function p(t){var e;return Object.assign(((e={"action-sheet-button":!0,"ion-activatable":!0})["action-sheet-"+t.role]=void 0!==t.role,e),Object(a.a)(t.cssClass))}var b=function(){function t(){}return t.prototype.create=function(t){return Object(r.f)(this.doc.createElement("ion-action-sheet"),t)},t.prototype.dismiss=function(t,e,n){return Object(r.g)(this.doc,t,e,"ion-action-sheet",n)},t.prototype.getTop=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(t){return[2,Object(r.h)(this.doc,"ion-action-sheet")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-action-sheet-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}()},297:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"c",function(){return a});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function r(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})}function a(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}},298:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return i});var o=n(297);function i(t,e){return null!==e.closest(t)}function r(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function a(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var s=/^[a-z][a-z0-9+\-.]*:/;function c(t,e,n,i){return o.a(this,void 0,void 0,function(){var r;return o.c(this,function(o){switch(o.label){case 0:return null==e||"#"===e[0]||s.test(e)?[3,2]:(r=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return o.sent(),[2,r.push(e,i)];case 2:return[2,!1]}})})}},302:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return b}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return p}),n.d(e,"f",function(){return r}),n.d(e,"g",function(){return a}),n.d(e,"h",function(){return s});var o=n(297),i=0;function r(t,e){var n=t.ownerDocument;(function(t){0===i&&(i=1,t.addEventListener("focusin",function(e){var n=s(t);if(n&&n.backdropDismiss&&!function(t,e){for(;e;){if(e===t)return!0;e=e.parentElement}return!1}(n,e.target)){var o=n.querySelector("input,button");o&&o.focus()}}),t.addEventListener("ionBackButton",function(e){var n=s(t);n&&n.backdropDismiss&&e.detail.register(100,function(){return n.dismiss(void 0,h)})}),t.addEventListener("keyup",function(e){if("Escape"===e.key){var n=s(t);n&&n.backdropDismiss&&n.dismiss(void 0,h)}}))})(n),Object.assign(t,e),t.classList.add("overlay-hidden");var o=i++;return t.overlayIndex=o,t.hasAttribute("id")||(t.id="ion-overlay-"+o),l(n).appendChild(t),t.componentOnReady()}function a(t,e,n,o,i){var r=s(t,o,i);return r?r.dismiss(e,n):Promise.reject("overlay does not exist")}function s(t,e,n){var o=function(t,e){var n=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===e?n:(e=e.toUpperCase(),n.filter(function(t){return t.tagName===e}))}(t,e);return void 0===n?o[o.length-1]:o.find(function(t){return t.id===n})}function c(t,e,n,i,r){return o.a(this,void 0,void 0,function(){var a;return o.c(this,function(o){switch(o.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),a=t.enterAnimation?t.enterAnimation:t.config.get(e,"ios"===t.mode?n:i),[4,d(t,a,t.el,r)]);case 1:return o.sent()&&t.didPresent.emit(),[2]}})})}function u(t,e,n,i,r,a,s){return o.a(this,void 0,void 0,function(){var c,u;return o.c(this,function(o){switch(o.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,o.label=1;case 1:return o.trys.push([1,3,,4]),t.willDismiss.emit({data:e,role:n}),c=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?r:a),[4,d(t,c,t.el,s)];case 2:return o.sent(),t.didDismiss.emit({data:e,role:n}),[3,4];case 3:return u=o.sent(),console.error(u),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,e,i,r){return o.a(this,void 0,void 0,function(){var a,s,c,u;return o.c(this,function(o){switch(o.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),a=i.shadowRoot||t.el,c=t,[4,n.e(2).then(n.bind(null,304)).then(function(t){return t.create(e,a,r)})]);case 1:return s=c.animation=o.sent(),t.animation=s,t.animated&&t.config.getBoolean("animated",!0)||s.duration(0),t.keyboardClose&&s.beforeAddWrite(function(){var t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,s.playAsync()];case 2:return o.sent(),u=s.hasCompleted,s.destroy(),t.animation=void 0,[2,u]}})})}function p(t,e){var n,o=new Promise(function(t){return n=t});return function(t,e,n){var o=function(i){t.removeEventListener(e,o),n(i)};t.addEventListener(e,o)}(t,e,function(t){n(t.detail)}),o}function b(t){return"cancel"===t||t===h}var h="backdrop"}}]);