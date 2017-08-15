!function(e){var t=function(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]},n=function(t,n,i){this.setting={axis:"y",reverse:!1,trigger:"click",speed:500,forceHeight:!1,forceWidth:!1,autoSize:!0,front:".front",back:".back"},this.setting=e.extend(this.setting,n),"string"!=typeof n.axis||"x"!==n.axis.toLowerCase()&&"y"!==n.axis.toLowerCase()||(this.setting.axis=n.axis.toLowerCase()),"boolean"==typeof n.reverse&&(this.setting.reverse=n.reverse),"string"==typeof n.trigger&&(this.setting.trigger=n.trigger.toLowerCase());var s=parseInt(n.speed);isNaN(s)||(this.setting.speed=s),"boolean"==typeof n.forceHeight&&(this.setting.forceHeight=n.forceHeight),"boolean"==typeof n.forceWidth&&(this.setting.forceWidth=n.forceWidth),"boolean"==typeof n.autoSize&&(this.setting.autoSize=n.autoSize),("string"==typeof n.front||n.front instanceof e)&&(this.setting.front=n.front),("string"==typeof n.back||n.back instanceof e)&&(this.setting.back=n.back),this.element=t,this.frontElement=this.getFrontElement(),this.backElement=this.getBackElement(),this.isFlipped=!1,this.init(i)};e.extend(n.prototype,{flipDone:function(e){var n=this;n.element.one(t(),function(){n.element.trigger("flip:done"),"function"==typeof e&&e.call(n.element)})},flip:function(e){if(!this.isFlipped){this.isFlipped=!0;var t="rotate"+this.setting.axis;this.frontElement.css({transform:t+(this.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}),this.backElement.css({transform:t+"(0deg)","z-index":"1"}),this.flipDone(e)}},unflip:function(e){if(this.isFlipped){this.isFlipped=!1;var t="rotate"+this.setting.axis;this.frontElement.css({transform:t+"(0deg)","z-index":"1"}),this.backElement.css({transform:t+(this.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),this.flipDone(e)}},getFrontElement:function(){return this.setting.front instanceof e?this.setting.front:this.element.find(this.setting.front)},getBackElement:function(){return this.setting.back instanceof e?this.setting.back:this.element.find(this.setting.back)},init:function(e){var t=this,n=t.frontElement.add(t.backElement),i="rotate"+t.setting.axis,s=2*t.element["outer"+("rotatex"===i?"Height":"Width")](),r={perspective:s,position:"relative"},a={transform:i+"("+(t.setting.reverse?"180deg":"-180deg")+")","z-index":"0"},o={"backface-visibility":"hidden","transform-style":"preserve-3d",position:"absolute","z-index":"1"};t.setting.forceHeight?n.outerHeight(t.element.height()):t.setting.autoSize&&(o.height="100%"),t.setting.forceWidth?n.outerWidth(t.element.width()):t.setting.autoSize&&(o.width="100%"),(window.chrome||window.Intl&&Intl.v8BreakIterator)&&"CSS"in window&&(r["-webkit-transform-style"]="preserve-3d"),t.element.css(r),t.backElement.css(a),n.css(o).find("*").css({"backface-visibility":"hidden"}),setTimeout(function(){var i=t.setting.speed/1e3||.5;n.css({transition:"all "+i+"s ease-out"}),"function"==typeof e&&e.call(t.element)},20),t.attachEvents()},clickHandler:function(t){t||(t=window.event),this.element.find(e(t.target).closest('button, a, input[type="submit"]')).length||(this.isFlipped?this.unflip():this.flip())},hoverHandler:function(){var t=this;t.element.off("mouseleave.flip"),t.flip(),setTimeout(function(){t.element.on("mouseleave.flip",e.proxy(t.unflip,t)),t.element.is(":hover")||t.unflip()},t.setting.speed+150)},attachEvents:function(){var t=this;"click"===t.setting.trigger?t.element.on(e.fn.tap?"tap.flip":"click.flip",e.proxy(t.clickHandler,t)):"hover"===t.setting.trigger&&(t.element.on("mouseenter.flip",e.proxy(t.hoverHandler,t)),t.element.on("mouseleave.flip",e.proxy(t.unflip,t)))},flipChanged:function(e){this.element.trigger("flip:change"),"function"==typeof e&&e.call(this.element)},changeSettings:function(e,t){var n=this,i=!1;if(void 0!==e.axis&&n.setting.axis!==e.axis.toLowerCase()&&(n.setting.axis=e.axis.toLowerCase(),i=!0),void 0!==e.reverse&&n.setting.reverse!==e.reverse&&(n.setting.reverse=e.reverse,i=!0),i){var s=n.frontElement.add(n.backElement),r=s.css(["transition-property","transition-timing-function","transition-duration","transition-delay"]);s.css({transition:"none"});var a="rotate"+n.setting.axis;n.isFlipped?n.frontElement.css({transform:a+(n.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}):n.backElement.css({transform:a+(n.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),setTimeout(function(){s.css(r),n.flipChanged(t)},0)}else n.flipChanged(t)}}),e.fn.flip=function(t,i){return"function"==typeof t&&(i=t),"string"==typeof t||"boolean"==typeof t?this.each(function(){var n=e(this).data("flip-model");"toggle"===t&&(t=!n.isFlipped),t?n.flip(i):n.unflip(i)}):this.each(function(){if(e(this).data("flip-model")){var s=e(this).data("flip-model");!t||void 0===t.axis&&void 0===t.reverse||s.changeSettings(t,i)}else e(this).data("flip-model",new n(e(this),t||{},i))}),this}}(jQuery),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t,n=navigator.userAgent,i=/iphone/i.test(n),s=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,a){var o,c,l,f,u,d,p,h;if(!n&&this.length>0){o=e(this[0]);var m=o.data(e.mask.dataName);return m?m():void 0}return a=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},a),c=e.mask.definitions,l=[],f=p=n.length,u=null,e.each(n.split(""),function(e,t){"?"==t?(p--,f=e):c[t]?(l.push(new RegExp(c[t])),null===u&&(u=l.length-1),f>e&&(d=l.length-1)):l.push(null)}),this.trigger("unmask").each(function(){function o(){if(a.completed){for(var e=u;d>=e;e++)if(l[e]&&z[e]===m(e))return;a.completed.call(_)}}function m(e){return a.placeholder.charAt(e<a.placeholder.length?e:0)}function g(e){for(;++e<p&&!l[e];);return e}function v(e){for(;--e>=0&&!l[e];);return e}function A(e,t){var n,i;if(!(0>e)){for(n=e,i=g(t);p>n;n++)if(l[n]){if(!(p>i&&l[n].test(z[i])))break;z[n]=z[i],z[i]=m(i),i=g(i)}E(),_.caret(Math.max(u,e))}}function b(e){var t,n,i,s;for(t=e,n=m(e);p>t;t++)if(l[t]){if(i=g(t),s=z[t],z[t]=n,!(p>i&&l[i].test(s)))break;n=s}}function x(){var e=_.val(),t=_.caret();if(h&&h.length&&h.length>e.length){for($(!0);t.begin>0&&!l[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<u&&!l[t.begin];)t.begin++;_.caret(t.begin,t.begin)}else{for($(!0);t.begin<p&&!l[t.begin];)t.begin++;_.caret(t.begin,t.begin)}o()}function y(){$(),_.val()!=C&&_.change()}function k(e){if(!_.prop("readonly")){var t,n,s,r=e.which||e.keyCode;h=_.val(),8===r||46===r||i&&127===r?(t=_.caret(),n=t.begin,s=t.end,s-n==0&&(n=46!==r?v(n):s=g(n-1),s=46===r?g(s):s),S(n,s),A(n,s-1),e.preventDefault()):13===r?y.call(this,e):27===r&&(_.val(C),_.caret(0,$()),e.preventDefault())}}function w(t){if(!_.prop("readonly")){var n,i,s,a=t.which||t.keyCode,c=_.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||32>a)&&a&&13!==a){if(c.end-c.begin!=0&&(S(c.begin,c.end),A(c.begin,c.end-1)),n=g(c.begin-1),p>n&&(i=String.fromCharCode(a),l[n].test(i))){if(b(n),z[n]=i,E(),s=g(n),r){var f=function(){e.proxy(e.fn.caret,_,s)()};setTimeout(f,0)}else _.caret(s);c.begin<=d&&o()}t.preventDefault()}}}function S(e,t){var n;for(n=e;t>n&&p>n;n++)l[n]&&(z[n]=m(n))}function E(){_.val(z.join(""))}function $(e){var t,n,i,s=_.val(),r=-1;for(t=0,i=0;p>t;t++)if(l[t]){for(z[t]=m(t);i++<s.length;)if(n=s.charAt(i-1),l[t].test(n)){z[t]=n,r=t;break}if(i>s.length){S(t+1,p);break}}else z[t]===s.charAt(i)&&i++,f>t&&(r=t);return e?E():f>r+1?a.autoclear||z.join("")===T?(_.val()&&_.val(""),S(0,p)):E():(E(),_.val(_.val().substring(0,r+1))),f?t:u}var _=e(this),z=e.map(n.split(""),function(e,t){return"?"!=e?c[e]?m(t):e:void 0}),T=z.join(""),C=_.val();_.data(e.mask.dataName,function(){return e.map(z,function(e,t){return l[t]&&e!=m(t)?e:null}).join("")}),_.one("unmask",function(){_.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!_.prop("readonly")){clearTimeout(t);var e;C=_.val(),e=$(),t=setTimeout(function(){_.get(0)===document.activeElement&&(E(),e==n.replace("?","").length?_.caret(0,e):_.caret(e))},10)}}).on("blur.mask",y).on("keydown.mask",k).on("keypress.mask",w).on("input.mask paste.mask",function(){_.prop("readonly")||setTimeout(function(){var e=$(!0);_.caret(e),o()},0)}),s&&r&&_.off("input.mask").on("input.mask",x),$()})}})}),function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),i=function(e){var t,i,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=i}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])},r=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){r(),a&&a.addListener&&a.addListener(r)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),r}())}(window),function(e,t,n){"use strict";function i(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function s(){D=!1,W=e.devicePixelRatio,L={},M={},g.DPR=W||1,I.width=Math.max(e.innerWidth||0,w.clientWidth),I.height=Math.max(e.innerHeight||0,w.clientHeight),I.vw=I.width/100,I.vh=I.height/100,m=[I.height,I.width,W].join("-"),I.em=g.getEmValue(),I.rem=I.em}function r(e,t,n,i){var s,r,a,o;return"saveData"===E.algorithm?e>2.7?o=n+1:(r=t-n,s=Math.pow(e-.6,1.5),a=r*s,i&&(a+=.1*s),o=e+a):o=n>1?Math.sqrt(e*t):e,o>n}function a(e){var t,n=g.getSet(e),i=!1;"pending"!==n&&(i=m,n&&(t=g.setRes(n),g.applySetCandidate(t,e))),e[g.ns].evaled=i}function o(e,t){return e.res-t.res}function c(e,t,n){var i;return!n&&t&&(n=e[g.ns].sets,n=n&&n[n.length-1]),i=l(t,n),i&&(t=g.makeUrl(t),e[g.ns].curSrc=t,e[g.ns].curCan=i,i.res||K(i,i.set.sizes)),i}function l(e,t){var n,i,s;if(e&&t)for(s=g.parseSet(t),e=g.makeUrl(e),n=0;n<s.length;n++)if(e===g.makeUrl(s[n].url)){i=s[n];break}return i}function f(e,t){var n,i,s,r,a=e.getElementsByTagName("source");for(n=0,i=a.length;n<i;n++)s=a[n],s[g.ns]=!0,(r=s.getAttribute("srcset"))&&t.push({srcset:r,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function u(e,t){function n(t){var n,i=t.exec(e.substring(u));if(i)return n=i[0],u+=n.length,n}function s(){var e,n,i,s,o,c,l,f,u,p=!1,h={};for(s=0;s<a.length;s++)o=a[s],c=o[o.length-1],l=o.substring(0,o.length-1),f=parseInt(l,10),u=parseFloat(l),Q.test(l)&&"w"===c?((e||n)&&(p=!0),0===f?p=!0:e=f):q.test(l)&&"x"===c?((e||n||i)&&(p=!0),u<0?p=!0:n=u):Q.test(l)&&"h"===c?((i||n)&&(p=!0),0===f?p=!0:i=f):p=!0;p||(h.url=r,e&&(h.w=e),n&&(h.d=n),i&&(h.h=i),i||n||e||(h.d=1),1===h.d&&(t.has1x=!0),h.set=t,d.push(h))}for(var r,a,o,c,l,f=e.length,u=0,d=[];;){if(n(F),u>=f)return d;r=n(j),a=[],","===r.slice(-1)?(r=r.replace(U,""),s()):function(){for(n(P),o="",c="in descriptor";;){if(l=e.charAt(u),"in descriptor"===c)if(i(l))o&&(a.push(o),o="",c="after descriptor");else{if(","===l)return u+=1,o&&a.push(o),void s();if("("===l)o+=l,c="in parens";else{if(""===l)return o&&a.push(o),void s();o+=l}}else if("in parens"===c)if(")"===l)o+=l,c="in descriptor";else{if(""===l)return a.push(o),void s();o+=l}else if("after descriptor"===c)if(i(l));else{if(""===l)return void s();c="in descriptor",u-=1}u+=1}}()}}function d(e){var t,n,s,r,a,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=function(e){function t(){r&&(a.push(r),r="")}function n(){a[0]&&(o.push(a),a=[])}for(var s,r="",a=[],o=[],c=0,l=0,f=!1;;){if(""===(s=e.charAt(l)))return t(),n(),o;if(f){if("*"===s&&"/"===e[l+1]){f=!1,l+=2,t();continue}l+=1}else{if(i(s)){if(e.charAt(l-1)&&i(e.charAt(l-1))||!r){l+=1;continue}if(0===c){t(),l+=1;continue}s=" "}else if("("===s)c+=1;else if(")"===s)c-=1;else{if(","===s){t(),n(),l+=1;continue}if("/"===s&&"*"===e.charAt(l+1)){f=!0,l+=2;continue}}r+=s,l+=1}}}(e),s=n.length,t=0;t<s;t++)if(r=n[t],a=r[r.length-1],function(e){return!!(c.test(e)&&parseFloat(e)>=0)||(!!l.test(e)||("0"===e||"-0"===e||"+0"===e))}(a)){if(o=a,r.pop(),0===r.length)return o;if(r=r.join(" "),g.matchesMedia(r))return o}return"100vw"}t.createElement("picture");var p,h,m,g={},v=!1,A=function(){},b=t.createElement("img"),x=b.getAttribute,y=b.setAttribute,k=b.removeAttribute,w=t.documentElement,S={},E={algorithm:""},$=navigator.userAgent,_=/rident/.test($)||/ecko/.test($)&&$.match(/rv\:(\d+)/)&&RegExp.$1>35,z="currentSrc",T=/\s+\+?\d+(e\d+)?w/,C=e.picturefillCFG,R="font-size:100%!important;",D=!0,L={},M={},W=e.devicePixelRatio,I={px:1,in:96},H=t.createElement("a"),B=!1,P=/^[ \t\n\r\u000c]+/,F=/^[, \t\n\r\u000c]+/,j=/^[^ \t\n\r\u000c]+/,U=/[,]+$/,Q=/^\d+$/,q=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,N=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i||!1):e.attachEvent&&e.attachEvent("on"+t,n)},G=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},O=function(){var e=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},t=G(function(t){return"return "+e((t||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(e,n){var i;if(!(e in L))if(L[e]=!1,n&&(i=e.match(/^([\d\.]+)(em|vw|px)$/)))L[e]=i[1]*I[i[2]];else try{L[e]=new Function("e",t(e))(I)}catch(e){}return L[e]}}(),K=function(e,t){return e.w?(e.cWidth=g.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},V=function(e){if(v){var n,i,s,r=e||{};if(r.elements&&1===r.elements.nodeType&&("IMG"===r.elements.nodeName.toUpperCase()?r.elements=[r.elements]:(r.context=r.elements,r.elements=null)),n=r.elements||g.qsa(r.context||t,r.reevaluate||r.reselect?g.sel:g.selShort),s=n.length){for(g.setupRun(r),B=!0,i=0;i<s;i++)g.fillImg(n[i],r);g.teardownRun(r)}}};e.console&&console.warn,z in b||(z="src"),S["image/jpeg"]=!0,S["image/gif"]=!0,S["image/png"]=!0,S["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.ns=("pf"+(new Date).getTime()).substr(0,9),g.supSrcset="srcset"in b,g.supSizes="sizes"in b,g.supPicture=!!e.HTMLPictureElement,g.supSrcset&&g.supPicture&&!g.supSizes&&function(e){b.srcset="data:,a",e.src="data:,a",g.supSrcset=b.complete===e.complete,g.supPicture=g.supSrcset&&g.supPicture}(t.createElement("img")),g.supSrcset&&!g.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=t.createElement("img"),i=function(){2===n.width&&(g.supSizes=!0),h=g.supSrcset&&!g.supSizes,v=!0,setTimeout(V)};n.onload=i,n.onerror=i,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",n.src=e}():v=!0,g.selShort="picture>img,img[srcset]",g.sel=g.selShort,g.cfg=E,g.DPR=W||1,g.u=I,g.types=S,g.setSize=A,g.makeUrl=G(function(e){return H.href=e,H.href}),g.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},g.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?g.matchesMedia=function(e){return!e||matchMedia(e).matches}:g.matchesMedia=g.mMQ,g.matchesMedia.apply(this,arguments)},g.mMQ=function(e){return!e||O(e)},g.calcLength=function(e){var t=O(e,!0)||!1;return t<0&&(t=!1),t},g.supportsType=function(e){return!e||S[e]},g.parseSize=G(function(e){var t=(e||"").match(/(\([^)]+\))?\s*(.+)/);return{media:t&&t[1],length:t&&t[2]}}),g.parseSet=function(e){return e.cands||(e.cands=u(e.srcset,e)),e.cands},g.getEmValue=function(){var e;if(!p&&(e=t.body)){var n=t.createElement("div"),i=w.style.cssText,s=e.style.cssText;n.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",w.style.cssText=R,e.style.cssText=R,e.appendChild(n),p=n.offsetWidth,e.removeChild(n),p=parseFloat(p,10),w.style.cssText=i,e.style.cssText=s}return p||16},g.calcListLength=function(e){if(!(e in M)||E.uT){var t=g.calcLength(d(e));M[e]=t?t:I.width}return M[e]},g.setRes=function(e){var t;if(e){t=g.parseSet(e);for(var n=0,i=t.length;n<i;n++)K(t[n],e.sizes)}return t},g.setRes.res=K,g.applySetCandidate=function(e,t){if(e.length){var n,i,s,a,l,f,u,d,p,h=t[g.ns],m=g.DPR;if(f=h.curSrc||t[z],u=h.curCan||c(t,f,e[0].set),u&&u.set===e[0].set&&((p=_&&!t.complete&&u.res-.1>m)||(u.cached=!0,u.res>=m&&(l=u))),!l)for(e.sort(o),a=e.length,l=e[a-1],i=0;i<a;i++)if(n=e[i],n.res>=m){s=i-1,l=e[s]&&(p||f!==g.makeUrl(n.url))&&r(e[s].res,n.res,m,e[s].cached)?e[s]:n;break}l&&(d=g.makeUrl(l.url),h.curSrc=d,h.curCan=l,d!==f&&g.setSrc(t,l),g.setSize(t))}},g.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},g.getSet=function(e){var t,n,i,s=!1,r=e[g.ns].sets;for(t=0;t<r.length&&!s;t++)if(n=r[t],n.srcset&&g.matchesMedia(n.media)&&(i=g.supportsType(n.type))){"pending"===i&&(n=i),s=n;break}return s},g.parseSets=function(e,t,n){var i,s,r,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[g.ns];(void 0===c.src||n.src)&&(c.src=x.call(e,"src"),c.src?y.call(e,"data-pfsrc",c.src):k.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!g.supSrcset||e.srcset)&&(i=x.call(e,"srcset"),c.srcset=i,a=!0),c.sets=[],o&&(c.pic=!0,f(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:x.call(e,"sizes")},c.sets.push(s),(r=(h||c.src)&&T.test(c.srcset||""))||!c.src||l(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||s&&!g.supSrcset||r&&!g.supSizes),a&&g.supSrcset&&!c.supported&&(i?(y.call(e,"data-pfsrcset",i),e.srcset=""):k.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==g.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},g.fillImg=function(e,t){var n,i=t.reselect||t.reevaluate;e[g.ns]||(e[g.ns]={}),n=e[g.ns],(i||n.evaled!==m)&&(n.parsed&&!t.reevaluate||g.parseSets(e,e.parentNode,t),n.supported?n.evaled=m:a(e))},g.setupRun=function(){B&&!D&&W===e.devicePixelRatio||s()},g.supPicture?(V=A,g.fillImg=A):function(){var n,i=e.attachEvent?/d$|^c/:/d$|^c|^i/,s=function(){var e=t.readyState||"";r=setTimeout(s,"loading"===e?200:999),t.body&&(g.fillImgs(),(n=n||i.test(e))&&clearTimeout(r))},r=setTimeout(s,t.body?9:99),a=w.clientHeight,o=function(){D=Math.max(e.innerWidth||0,w.clientWidth)!==I.width||w.clientHeight!==a,a=w.clientHeight,D&&g.fillImgs()};N(e,"resize",function(e,t){var n,i,s=function(){var r=new Date-i;r<t?n=setTimeout(s,t-r):(n=null,e())};return function(){i=new Date,n||(n=setTimeout(s,t))}}(o,99)),N(t,"readystatechange",s)}(),g.picturefill=V,g.fillImgs=V,g.teardownRun=A,V._=g,e.picturefillCFG={pf:g,push:function(e){var t=e.shift();"function"==typeof g[t]?g[t].apply(g,e):(E[t]=e[0],B&&g.fillImgs({reselect:!0}))}};for(;C&&C.length;)e.picturefillCFG.push(C.shift());e.picturefill=V,"object"==typeof module&&"object"==typeof module.exports?module.exports=V:"function"==typeof define&&define.amd&&define("picturefill",function(){return V}),g.supPicture||(S["image/webp"]=function(t,n){var i=new e.Image;return i.onerror=function(){S[t]=!1,V()},i.onload=function(){S[t]=1===i.width,V()},i.src=n,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),$(document).ready(function(){function e(e){var t=$(e).find(".responds__list").outerWidth();$(e).find(".responds__list .responds__box").eq(-1).clone().prependTo($(e).find(".responds__list")),$(e).find(".responds__list").css({left:"-"+t+"px"}),$(e).find(".responds__list .responds__box").eq(-1).remove(),$(e).find(".responds__list").animate({left:"0px"},200)}function t(e){var t=$(e).find(".responds__list").outerWidth();$(e).find(".responds__list").animate({left:"-"+t+"px"},200,function(){$(e).find(".responds__list .responds__box").eq(0).clone().appendTo($(e).find(".responds__list")),$(e).find(".responds__list .responds__box").eq(0).remove(),$(e).find(".responds__list").css({left:"0px"})})}$("#flip_img1").flip(),$("#flip_img2").flip(),$("#flip_img3").flip(),$("#flip_img4").flip(),$("#flip_img5").flip(),$('a[href^="#"]').bind("click.smoothscroll",function(e){e.preventDefault();var t=this.hash,n=$(t);$("html, body").stop().animate({scrollTop:n.offset().top},1500,"swing",function(){window.location.hash=t})}),$("#z_tel").mask("+38(999) 999-99-99"),$("#z_form").submit(function(){var e=$(this).serialize();$.ajax({type:"POST",url:"/build/php/send.php",async:!1,data:e,success:function(e){alert(e)},error:function(t){console.log("form_data",e),alert("error!")}})}),$("a[name=modal]").click(function(e){e.preventDefault();var t=$(this).attr("href"),n=$(document).height(),i=$(document).width();$("#mask").css({width:2*i,height:n}),$("#mask").fadeIn(700),$("#mask").fadeTo("slow",.9);var s=$(window).width();$(t).css("top",0),$(t).css("left",s/2-$(t).width()/2),$(t).fadeIn(2e3)}),$(".close").click(function(e){e.preventDefault(),$("#mask, .zakaz__window").hide()}),$("#mask").click(function(){$(this).hide(),$(".zakaz__window").hide()}),$(document).on("click",".responds__nav_r",function(){return t($("#slider")),!1}),$(document).on("click",".responds__nav_l",function(){return e($("#slider")),!1})}),function(e){var t={picStep:1};e.fn.slider=function(n){var i=(e.extend({},t,n),225*n.picStep),s=e(".responds__nav_l"),r=e(".responds__nav_r"),a=e(this),o=0,c=a.find("li").length,l=-((c-5)*i);return s.click(function(){0!=o&&(o+=i,a.animate({left:o+"px"},500))}),r.click(function(){o!=l&&(o-=i,a.animate({left:o+"px"},500)),o<l+4*i&&(o=0,a.animate({left:o+"px"},500))}),this}}(jQuery);