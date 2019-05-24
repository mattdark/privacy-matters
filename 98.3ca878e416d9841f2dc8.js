(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{226:function(e,t,o){"use strict";o.r(t),o.d(t,"DeckgoSlideCode",function(){return c});var n,i,r=o(300),a=o(4),s=o(301),l=o(306);(i=n||(n={}))[i.SWIPE=0]="SWIPE",i[i.SCROLL=1]="SCROLL";var c=function(){function e(){this.anchor="// DeckDeckGo",this.anchorZoom="// DeckDeckGoZoom",this.hideAnchor=!0,this.language="javascript",this.mobile=!1,this.action=n.SWIPE,this.customActions=!1,this.customBackground=!1}return e.prototype.componentWillLoad=function(){this.mobile=s.a.isMobile()},e.prototype.componentDidLoad=function(){return r.a(this,void 0,void 0,function(){return r.b(this,function(e){switch(e.label){case 0:return[4,s.a.hideLazyLoadImages(this.el)];case 1:return e.sent(),this.slideDidLoad.emit(),[4,this.moveSlots()];case 2:return e.sent(),[4,this.showInfo()];case 3:return e.sent(),[2]}})})},e.prototype.moveSlots=function(){var e=this;return new Promise(function(t){var o=e.el.querySelector("[slot='code']"),n=e.el.shadowRoot.querySelector("deckgo-highlight-code");n&&o&&n.appendChild(o),t()})},e.prototype.showInfo=function(){var e=this;return new Promise(function(t){if(s.a.isMobile()){var o=e.el.querySelector("[slot='info']");o&&o.classList.add("deckgo-show-info")}t()})},e.prototype.hideInfo=function(){var e=this;return new Promise(function(t){if(s.a.isMobile()){var o=e.el.querySelector("[slot='info']");if(o&&o.classList.contains("deckgo-show-info"))return o.classList.remove("deckgo-show-info"),o.style.setProperty("pointer-events","none"),void t(!0)}t(!1)})},e.prototype.beforeSwipe=function(e){var t=this;return new Promise(function(o){return r.a(t,void 0,void 0,function(){var t;return r.b(this,function(n){switch(n.label){case 0:return[4,this.scrollToNext(e)];case 1:return(t=n.sent())?[4,this.zoomCode(!1)]:[3,3];case 2:n.sent(),n.label=3;case 3:return o(t),[2]}})})})},e.prototype.afterSwipe=function(){return l.a.afterSwipe()},e.prototype.scrollToNext=function(e){var t=this,o=this.el.shadowRoot.querySelector("deckgo-highlight-code");return o&&o.hasOwnProperty("findNextAnchor")?new Promise(function(n){return r.a(t,void 0,void 0,function(){var t,i,a;return r.b(this,function(r){switch(r.label){case 0:return[4,o.findNextAnchor(e)];case 1:return t=r.sent(),i=this.el.shadowRoot.querySelector("div.deckgo-slide-code-container"),t&&i?(a=i.scrollTop,i.scrollTop=t.offsetTop,o.hasOwnProperty("zoomCode")?[4,o.zoomCode(t.hasLineZoom)]:[3,3]):[3,4];case 2:r.sent(),r.label=3;case 3:return n(0===t.offsetTop&&0===a),[3,5];case 4:n(!0),r.label=5;case 5:return[2]}})})}):new Promise(function(e){e(!0)})},e.prototype.zoomCode=function(e){var t=this;return new Promise(function(o){return r.a(t,void 0,void 0,function(){var t,n;return r.b(this,function(i){switch(i.label){case 0:return(t=this.el.shadowRoot.querySelector("deckgo-highlight-code"))&&t.hasOwnProperty("zoomCode")?[4,t.zoomCode(e)]:[3,2];case 1:i.sent(),i.label=2;case 2:return(n=this.el.querySelector("[slot='title']"))&&n.style.setProperty("opacity",e?"0":"1"),o(),[2]}})})})},e.prototype.lazyLoadContent=function(){return l.a.lazyLoadContent(this.el)},e.prototype.switchAction=function(){var e=this;return new Promise(function(t){return r.a(e,void 0,void 0,function(){return r.b(this,function(e){switch(e.label){case 0:return this.mobile?[4,this.hideInfo()]:(t(),[2]);case 1:return e.sent()?(t(),[2]):(this.action=this.action===n.SWIPE?n.SCROLL:n.SWIPE,this.scrolling.emit(this.action===n.SCROLL),this.action===n.SCROLL?this.unlockScroll():this.lockScroll(),t(),[2])}})})})},e.prototype.lockScroll=function(){this.el.shadowRoot.querySelector("div.deckgo-slide-code-container").style.setProperty("overflow-y","hidden")},e.prototype.unlockScroll=function(){this.el.shadowRoot.querySelector("div.deckgo-slide-code-container").style.setProperty("overflow-y","auto")},e.prototype.render=function(){var e=this,t="deckgo-slide-code-container";return this.mobile&&(t+=" deckgo-slide-code-container-mobile"),Object(a.b)("div",{class:"deckgo-slide",onClick:function(){return e.switchAction()}},Object(a.b)("slot",{name:"title"}),Object(a.b)("div",{class:t},Object(a.b)("deckgo-highlight-code",{src:this.src,anchor:this.anchor,anchorZoom:this.anchorZoom,hideAnchor:this.hideAnchor,language:this.language})),Object(a.b)("slot",{name:"code"}),Object(a.b)("slot",{name:"info"}),Object(a.b)("slot",{name:"notes"}),Object(a.b)("slot",{name:"actions"}),Object(a.b)("slot",{name:"background"}))},e.prototype.hostData=function(){return{class:{"deckgo-slide-container":!0}}},Object.defineProperty(e,"is",{get:function(){return"deckgo-slide-code"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{afterSwipe:{method:!0},anchor:{type:String,attr:"anchor"},anchorZoom:{type:String,attr:"anchor-zoom"},beforeSwipe:{method:!0},customActions:{type:Boolean,attr:"custom-actions",reflectToAttr:!0},customBackground:{type:Boolean,attr:"custom-background",reflectToAttr:!0},el:{elementRef:!0},hideAnchor:{type:Boolean,attr:"hide-anchor"},language:{type:String,attr:"language"},lazyLoadContent:{method:!0},mobile:{state:!0},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"slideDidLoad",method:"slideDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"scrolling",method:"scrolling",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start;position:relative}div.deckgo-slide-code-container{width:100%;overflow-y:auto;scroll-behavior:smooth}div.deckgo-slide-code-container.deckgo-slide-code-container-mobile{overflow-y:hidden}::slotted([slot=title]){-webkit-transition:opacity .5s ease-in;transition:opacity .5s ease-in}::slotted([slot=info]){display:none;pointer-events:none}::slotted([slot=info].deckgo-show-info){position:absolute;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;background:var(--deckgo-show-info-background);z-index:var(--deckgo-show-info-zindex,1);pointer-events:auto}@media print{div.deckgo-slide{height:100%}}"},enumerable:!0,configurable:!0}),e}()},300:function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i});function n(e,t,o,n){return new(o||(o=Promise))(function(i,r){function a(e){try{l(n.next(e))}catch(e){r(e)}}function s(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){e.done?i(e.value):new o(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})}function i(e,t){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}},301:function(e,t,o){"use strict";o.d(t,"a",function(){return i});var n=o(300),i=function(){function e(){}return e.unifyEvent=function(e){return e.changedTouches?e.changedTouches[0]:e},e.lazyLoadImages=function(e){return n.a(this,void 0,void 0,function(){var t=this;return n.b(this,function(o){return[2,new Promise(function(o){return n.a(t,void 0,void 0,function(){var t;return n.b(this,function(n){switch(n.label){case 0:return(t=[]).push(this.lazyLoadLazyImgTags(e)),t.push(this.lazyLoadLazyImgComponents(e)),[4,Promise.all(t)];case 1:return n.sent(),o(),[2]}})})})]})})},e.lazyLoadLazyImgTags=function(e){return n.a(this,void 0,void 0,function(){var t=this;return n.b(this,function(o){return[2,new Promise(function(o){return n.a(t,void 0,void 0,function(){var t;return n.b(this,function(n){switch(n.label){case 0:return t=this.getAllImages(e,"img"),[4,this.lazyLoadSelectedImages(t)];case 1:return n.sent(),o(),[2]}})})})]})})},e.lazyLoadLazyImgComponents=function(e){return n.a(this,void 0,void 0,function(){var t=this;return n.b(this,function(o){return[2,new Promise(function(o){return n.a(t,void 0,void 0,function(){var t;return n.b(this,function(n){switch(n.label){case 0:return t=this.getAllImages(e,"deckgo-lazy-img"),[4,this.lazyLoadSelectedLazyImagesComponent(t)];case 1:return n.sent(),o(),[2]}})})})]})})},e.lazyLoadSelectedImages=function(e){return n.a(this,void 0,void 0,function(){return n.b(this,function(t){return[2,new Promise(function(t){e?(e.forEach(function(e){e.getAttribute("data-src")&&(e.setAttribute("src",e.getAttribute("data-src")),e.removeAttribute("data-src"),e.classList.contains("deckgo-reveal")||e.style.setProperty("visibility","inherit")),e.style.setProperty("pointer-events","none")}),t()):t()})]})})},e.lazyLoadSelectedLazyImagesComponent=function(e){return n.a(this,void 0,void 0,function(){var t=this;return n.b(this,function(o){return[2,new Promise(function(o){e?(e.forEach(function(e){return n.a(t,void 0,void 0,function(){return n.b(this,function(t){switch(t.label){case 0:return[4,e.lazyLoad()];case 1:return t.sent(),[2]}})})}),o()):o()})]})})},e.hideLazyLoadImages=function(t){return new Promise(function(o){var n=e.getAllImages(t,"img");n?((n=n.filter(function(e){return e.getAttribute("data-src")})).forEach(function(e){e.style.setProperty("visibility","hidden")}),o()):o()})},e.getAllImages=function(e,t){var o=e.querySelectorAll("[slot] "+t),n=e.shadowRoot.querySelectorAll(t);return Array.from(o).concat(Array.from(n))},e.debounce=function(e,t){var o;return function(n){o&&clearTimeout(o),o=setTimeout(e,t>0?t:300,n)}},e.isMobile=function(){if(!window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},e.isIOS=function(){if(!window||!navigator)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/iPad|iPhone|iPod/i.test(e)},e.isFullscreen=function(){return!(!window||!screen)&&window.innerHeight==screen.height},e}()},306:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var n=o(300),i=o(301),r=function(){function e(){}return e.lazyLoadContent=function(e,t){var o=this;return new Promise(function(i){return n.a(o,void 0,void 0,function(){var o,r;return n.b(this,function(n){switch(n.label){case 0:return o=[],(r=this.getAllElements(e,t))&&r.length>0?(r.forEach(function(e){o.push(e.lazyLoadContent())}),[4,Promise.all(o)]):[3,2];case 1:n.sent(),i(),n.label=2;case 2:return i(),[2]}})})})},e.getAllElements=function(e,t){var o=e.querySelectorAll(t),n=e.shadowRoot.querySelectorAll(t);return Array.from(o).concat(Array.from(n))},e}(),a=function(){function e(){}return e.hideRevealElements=function(e,t){return new Promise(function(o){if(i.a.isMobile())o();else{var n=e.querySelectorAll(t?"[slot] li:not(:first-child), [slot] > p:not(:first-child), [slot] > span:not(:first-child), [slot] > img:not(:first-child), [slot] > deckgo-lazy-img:not(:first-child)":"[slot] li, [slot] > p, [slot] > span, [slot] > img, [slot] > deckgo-lazy-img");n?Array.from(n).forEach(function(e){e.style.setProperty("visibility","hidden"),e.style.setProperty("transform","var(--slide-reveal-transform)"),e.style.setProperty("opacity","0"),e.classList.add("deckgo-reveal"),e.style.setProperty("transition","all var(--slide-reveal-duration) cubic-bezier(0.23, 1, 0.320, 1)")}):o()}})},e.showRevealElement=function(e){return new Promise(function(t){var o=e.querySelectorAll("[slot] li, [slot] > p, [slot] > span, [slot] > img, [slot] > deckgo-lazy-img"),n=!0;if(o){var i=Array.from(o).find(function(e){return"hidden"===e.style.getPropertyValue("visibility")});i&&(i.style.setProperty("visibility","initial"),i.style.setProperty("opacity","1"),i.style.setProperty("transform","none"),n=!1)}t(n)})},e.hideRevealElement=function(e){return new Promise(function(t){var o=e.querySelectorAll("[slot] li, [slot] > p, [slot] > span, [slot] > img, [slot] > deckgo-lazy-img"),n=!0;if(o){var i=Array.from(o).reverse().find(function(e){var t=e.style.getPropertyValue("visibility");return!t||"initial"===t});i&&(i.style.setProperty("visibility","hidden"),i.style.setProperty("transform","var(--slide-reveal-transform)"),i.style.setProperty("opacity","0"),n=!1)}t(n)})},e.beforeSwipe=function(e,t,o){var i=this;return new Promise(function(r){return n.a(i,void 0,void 0,function(){var i;return n.b(this,function(n){switch(n.label){case 0:return o?t?[4,this.showRevealElement(e)]:[3,2]:[3,5];case 1:return i=n.sent(),[3,4];case 2:return[4,this.hideRevealElement(e)];case 3:i=n.sent(),n.label=4;case 4:return r(i),[3,6];case 5:r(!0),n.label=6;case 6:return[2]}})})})},e.afterSwipe=function(){return new Promise(function(e){e()})},e.lazyLoadContent=function(e){var t=this;return new Promise(function(o){return n.a(t,void 0,void 0,function(){var t;return n.b(this,function(n){switch(n.label){case 0:return(t=[]).push(i.a.lazyLoadImages(e)),t.push(r.lazyLoadContent(e,"deckgo-gif")),t.push(r.lazyLoadContent(e,"deckgo-youtube")),[4,Promise.all(t)];case 1:return n.sent(),o(),[2]}})})})},e}()}}]);