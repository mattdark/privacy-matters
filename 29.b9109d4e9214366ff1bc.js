(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{297:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return r}),e.d(n,"c",function(){return a});
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
var o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function i(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function r(t,n,e,o){return new(e||(e=Promise))(function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function c(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){t.done?i(t.value):new e(function(n){n(t.value)}).then(a,c)}u((o=o.apply(t,n||[])).next())})}function a(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(t){r=[6,t],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}}},298:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return i});var o=e(297);function i(t,n){return null!==n.closest(t)}function r(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0}function a(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n}var c=/^[a-z][a-z0-9+\-.]*:/;function u(t,n,e,i){return o.a(this,void 0,void 0,function(){var r;return o.c(this,function(o){switch(o.label){case 0:return null==n||"#"===n[0]||c.test(n)?[3,2]:(r=t.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return o.sent(),[2,r.push(n,i)];case 2:return[2,!1]}})})}},299:function(t,n,e){"use strict";function o(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function r(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null}function a(t,n,e,o,r){if(t||i(n)){var a=n.querySelector("input.aux-input");a||((a=n.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),n.appendChild(a)),a.disabled=r,a.name=e,a.value=o||""}}function c(t,n,e){return Math.max(t,Math.min(n,e))}function u(t){return t.timeStamp||Date.now()}function d(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function s(t,n){var e="rtl"===t.document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function l(t,n){var e=t._original||t;return{_original:t,emit:g(e.emit.bind(e),n)}}function g(t,n){var e;return void 0===n&&(n=0),function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(o))}}e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return r}),e.d(n,"e",function(){return a}),e.d(n,"f",function(){return l}),e.d(n,"g",function(){return s}),e.d(n,"h",function(){return c}),e.d(n,"i",function(){return g}),e.d(n,"j",function(){return d})},310:function(t,n,e){"use strict";function o(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function r(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return o})},63:function(t,n,e){"use strict";e.r(n),e.d(n,"IonToggle",function(){return u});var o=e(297),i=e(3),r=e(298),a=e(299),c=e(310),u=function(){function t(){var t=this;this.inputId="ion-tg-"+d++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()}}return t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value})},t.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){return o.a(this,void 0,void 0,function(){var t,n=this;return o.c(this,function(o){switch(o.label){case 0:return t=this,[4,e.e(0).then(e.bind(null,303))];case 1:return t.gesture=o.sent().createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return n.onStart()},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.onClick=function(){this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.onStart=function(){this.activated=!0,this.setFocus()},t.prototype.onMove=function(t){(function(t,n,e,o){var i="rtl"===t.dir;return n?!i&&o>e||i&&-o<e:!i&&-o<e||i&&o>e})(this.doc,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,Object(c.d)())},t.prototype.onEnd=function(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()},t.prototype.getValue=function(){return this.value||""},t.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},t.prototype.hostData=function(){var t,n=this,e=n.disabled,o=n.checked,i=n.activated,c=n.color,u=n.el,d=n.inputId+"-lbl",s=Object(a.d)(u);return s&&(s.id=d),{role:"checkbox","aria-disabled":e?"true":null,"aria-checked":""+o,"aria-labelledby":d,class:Object.assign({},Object(r.c)(c),(t={},t[""+this.mode]=!0,t["in-item"]=Object(r.d)("ion-item",u),t["toggle-activated"]=i,t["toggle-checked"]=o,t["toggle-disabled"]=e,t.interactive=!0,t))}},t.prototype.render=function(){var t=this,n=this.getValue();return Object(a.e)(!0,this.el,this.name,this.checked?n:"",this.disabled),[Object(i.b)("div",{class:"toggle-icon"},Object(i.b)("div",{class:"toggle-inner"})),Object(i.b)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(n){return t.buttonEl=n}})]},Object.defineProperty(t,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-toggle-md-h{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ion-focused.sc-ion-toggle-md-h   input.sc-ion-toggle-md{border:2px solid #5e9ed6}.toggle-disabled.sc-ion-toggle-md-h{pointer-events:none}button.sc-ion-toggle-md{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl].sc-ion-toggle-md-h   button.sc-ion-toggle-md, [dir=rtl]   .sc-ion-toggle-md-h   button.sc-ion-toggle-md{right:0}button.sc-ion-toggle-md::-moz-focus-inner{border:0}.sc-ion-toggle-md-h{--background:var(--ion-color-medium-tint,#a2a4ab);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:var(--ion-background-color,#fff);--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-toggle-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:rgba(var(--ion-color-base-rgb),.5)}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{background:var(--ion-color-base)}.toggle-icon.sc-ion-toggle-md{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner.sc-ion-toggle-md{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}[dir=rtl].sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl]   .sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{right:0}.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:var(--background-checked)}.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}[dir=rtl].toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}.toggle-disabled.sc-ion-toggle-md-h{opacity:.3}.in-item[slot].sc-ion-toggle-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item[slot].sc-ion-toggle-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}.in-item[slot=start].sc-ion-toggle-md-h{padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item[slot=start].sc-ion-toggle-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();var d=0}}]);