!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t,n=navigator.userAgent,r=/iphone/i.test(n),i=/chrome/i.test(n),s=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,a){var c,o,u,l,f,d,p,h;if(!n&&this.length>0){c=e(this[0]);var m=c.data(e.mask.dataName);return m?m():void 0}return a=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},a),o=e.mask.definitions,u=[],l=p=n.length,f=null,e.each(n.split(""),function(e,t){"?"==t?(p--,l=e):o[t]?(u.push(new RegExp(o[t])),null===f&&(f=u.length-1),l>e&&(d=u.length-1)):u.push(null)}),this.trigger("unmask").each(function(){function c(){if(a.completed){for(var e=f;d>=e;e++)if(u[e]&&E[e]===m(e))return;a.completed.call(z)}}function m(e){return a.placeholder.charAt(e<a.placeholder.length?e:0)}function g(e){for(;++e<p&&!u[e];);return e}function A(e){for(;--e>=0&&!u[e];);return e}function v(e,t){var n,r;if(!(0>e)){for(n=e,r=g(t);p>n;n++)if(u[n]){if(!(p>r&&u[n].test(E[r])))break;E[n]=E[r],E[r]=m(r),r=g(r)}$(),z.caret(Math.max(f,e))}}function b(e){var t,n,r,i;for(t=e,n=m(e);p>t;t++)if(u[t]){if(r=g(t),i=E[t],E[t]=n,!(p>r&&u[r].test(i)))break;n=i}}function w(){var e=z.val(),t=z.caret();if(h&&h.length&&h.length>e.length){for(_(!0);t.begin>0&&!u[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<f&&!u[t.begin];)t.begin++;z.caret(t.begin,t.begin)}else{for(_(!0);t.begin<p&&!u[t.begin];)t.begin++;z.caret(t.begin,t.begin)}c()}function y(){_(),z.val()!=R&&z.change()}function k(e){if(!z.prop("readonly")){var t,n,i,s=e.which||e.keyCode;h=z.val(),8===s||46===s||r&&127===s?(t=z.caret(),n=t.begin,i=t.end,i-n==0&&(n=46!==s?A(n):i=g(n-1),i=46===s?g(i):i),S(n,i),v(n,i-1),e.preventDefault()):13===s?y.call(this,e):27===s&&(z.val(R),z.caret(0,_()),e.preventDefault())}}function x(t){if(!z.prop("readonly")){var n,r,i,a=t.which||t.keyCode,o=z.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||32>a)&&a&&13!==a){if(o.end-o.begin!=0&&(S(o.begin,o.end),v(o.begin,o.end-1)),n=g(o.begin-1),p>n&&(r=String.fromCharCode(a),u[n].test(r))){if(b(n),E[n]=r,$(),i=g(n),s){var l=function(){e.proxy(e.fn.caret,z,i)()};setTimeout(l,0)}else z.caret(i);o.begin<=d&&c()}t.preventDefault()}}}function S(e,t){var n;for(n=e;t>n&&p>n;n++)u[n]&&(E[n]=m(n))}function $(){z.val(E.join(""))}function _(e){var t,n,r,i=z.val(),s=-1;for(t=0,r=0;p>t;t++)if(u[t]){for(E[t]=m(t);r++<i.length;)if(n=i.charAt(r-1),u[t].test(n)){E[t]=n,s=t;break}if(r>i.length){S(t+1,p);break}}else E[t]===i.charAt(r)&&r++,l>t&&(s=t);return e?$():l>s+1?a.autoclear||E.join("")===T?(z.val()&&z.val(""),S(0,p)):$():($(),z.val(z.val().substring(0,s+1))),l?t:f}var z=e(this),E=e.map(n.split(""),function(e,t){return"?"!=e?o[e]?m(t):e:void 0}),T=E.join(""),R=z.val();z.data(e.mask.dataName,function(){return e.map(E,function(e,t){return u[t]&&e!=m(t)?e:null}).join("")}),z.one("unmask",function(){z.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!z.prop("readonly")){clearTimeout(t);var e;R=z.val(),e=_(),t=setTimeout(function(){z.get(0)===document.activeElement&&($(),e==n.replace("?","").length?z.caret(0,e):z.caret(e))},10)}}).on("blur.mask",y).on("keydown.mask",k).on("keypress.mask",x).on("input.mask paste.mask",function(){z.prop("readonly")||setTimeout(function(){var e=_(!0);z.caret(e),c()},0)}),i&&s&&z.off("input.mask").on("input.mask",w),_()})}})}),function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s}())}(window),function(e,t,n){"use strict";function r(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function i(){D=!1,P=e.devicePixelRatio,M={},L={},g.DPR=P||1,I.width=Math.max(e.innerWidth||0,x.clientWidth),I.height=Math.max(e.innerHeight||0,x.clientHeight),I.vw=I.width/100,I.vh=I.height/100,m=[I.height,I.width,P].join("-"),I.em=g.getEmValue(),I.rem=I.em}function s(e,t,n,r){var i,s,a,c;return"saveData"===$.algorithm?e>2.7?c=n+1:(s=t-n,i=Math.pow(e-.6,1.5),a=s*i,r&&(a+=.1*i),c=e+a):c=n>1?Math.sqrt(e*t):e,c>n}function a(e){var t,n=g.getSet(e),r=!1;"pending"!==n&&(r=m,n&&(t=g.setRes(n),g.applySetCandidate(t,e))),e[g.ns].evaled=r}function c(e,t){return e.res-t.res}function o(e,t,n){var r;return!n&&t&&(n=e[g.ns].sets,n=n&&n[n.length-1]),r=u(t,n),r&&(t=g.makeUrl(t),e[g.ns].curSrc=t,e[g.ns].curCan=r,r.res||K(r,r.set.sizes)),r}function u(e,t){var n,r,i;if(e&&t)for(i=g.parseSet(t),e=g.makeUrl(e),n=0;n<i.length;n++)if(e===g.makeUrl(i[n].url)){r=i[n];break}return r}function l(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)i=a[n],i[g.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function f(e,t){function n(t){var n,r=t.exec(e.substring(f));if(r)return n=r[0],f+=n.length,n}function i(){var e,n,r,i,c,o,u,l,f,p=!1,h={};for(i=0;i<a.length;i++)c=a[i],o=c[c.length-1],u=c.substring(0,c.length-1),l=parseInt(u,10),f=parseFloat(u),N.test(u)&&"w"===o?((e||n)&&(p=!0),0===l?p=!0:e=l):G.test(u)&&"x"===o?((e||n||r)&&(p=!0),f<0?p=!0:n=f):N.test(u)&&"h"===o?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(h.url=s,e&&(h.w=e),n&&(h.d=n),r&&(h.h=r),r||n||e||(h.d=1),1===h.d&&(t.has1x=!0),h.set=t,d.push(h))}for(var s,a,c,o,u,l=e.length,f=0,d=[];;){if(n(W),f>=l)return d;s=n(Q),a=[],","===s.slice(-1)?(s=s.replace(q,""),i()):function(){for(n(j),c="",o="in descriptor";;){if(u=e.charAt(f),"in descriptor"===o)if(r(u))c&&(a.push(c),c="",o="after descriptor");else{if(","===u)return f+=1,c&&a.push(c),void i();if("("===u)c+=u,o="in parens";else{if(""===u)return c&&a.push(c),void i();c+=u}}else if("in parens"===o)if(")"===u)c+=u,o="in descriptor";else{if(""===u)return a.push(c),void i();c+=u}else if("after descriptor"===o)if(r(u));else{if(""===u)return void i();o="in descriptor",f-=1}f+=1}}()}}function d(e){var t,n,i,s,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=function(e){function t(){s&&(a.push(s),s="")}function n(){a[0]&&(c.push(a),a=[])}for(var i,s="",a=[],c=[],o=0,u=0,l=!1;;){if(""===(i=e.charAt(u)))return t(),n(),c;if(l){if("*"===i&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(r(i)){if(e.charAt(u-1)&&r(e.charAt(u-1))||!s){u+=1;continue}if(0===o){t(),u+=1;continue}i=" "}else if("("===i)o+=1;else if(")"===i)o-=1;else{if(","===i){t(),n(),u+=1;continue}if("/"===i&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}s+=i,u+=1}}}(e),i=n.length,t=0;t<i;t++)if(s=n[t],a=s[s.length-1],function(e){return!!(o.test(e)&&parseFloat(e)>=0)||(!!u.test(e)||("0"===e||"-0"===e||"+0"===e))}(a)){if(c=a,s.pop(),0===s.length)return c;if(s=s.join(" "),g.matchesMedia(s))return c}return"100vw"}t.createElement("picture");var p,h,m,g={},A=!1,v=function(){},b=t.createElement("img"),w=b.getAttribute,y=b.setAttribute,k=b.removeAttribute,x=t.documentElement,S={},$={algorithm:""},_=navigator.userAgent,z=/rident/.test(_)||/ecko/.test(_)&&_.match(/rv\:(\d+)/)&&RegExp.$1>35,E="currentSrc",T=/\s+\+?\d+(e\d+)?w/,R=e.picturefillCFG,C="font-size:100%!important;",D=!0,M={},L={},P=e.devicePixelRatio,I={px:1,in:96},B=t.createElement("a"),U=!1,j=/^[ \t\n\r\u000c]+/,W=/^[, \t\n\r\u000c]+/,Q=/^[^ \t\n\r\u000c]+/,q=/[,]+$/,N=/^\d+$/,G=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,H=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},F=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},O=function(){var e=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},t=F(function(t){return"return "+e((t||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(e,n){var r;if(!(e in M))if(M[e]=!1,n&&(r=e.match(/^([\d\.]+)(em|vw|px)$/)))M[e]=r[1]*I[r[2]];else try{M[e]=new Function("e",t(e))(I)}catch(e){}return M[e]}}(),K=function(e,t){return e.w?(e.cWidth=g.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},V=function(e){if(A){var n,r,i,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),n=s.elements||g.qsa(s.context||t,s.reevaluate||s.reselect?g.sel:g.selShort),i=n.length){for(g.setupRun(s),U=!0,r=0;r<i;r++)g.fillImg(n[r],s);g.teardownRun(s)}}};e.console&&console.warn,E in b||(E="src"),S["image/jpeg"]=!0,S["image/gif"]=!0,S["image/png"]=!0,S["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.ns=("pf"+(new Date).getTime()).substr(0,9),g.supSrcset="srcset"in b,g.supSizes="sizes"in b,g.supPicture=!!e.HTMLPictureElement,g.supSrcset&&g.supPicture&&!g.supSizes&&function(e){b.srcset="data:,a",e.src="data:,a",g.supSrcset=b.complete===e.complete,g.supPicture=g.supSrcset&&g.supPicture}(t.createElement("img")),g.supSrcset&&!g.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=t.createElement("img"),r=function(){2===n.width&&(g.supSizes=!0),h=g.supSrcset&&!g.supSizes,A=!0,setTimeout(V)};n.onload=r,n.onerror=r,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",n.src=e}():A=!0,g.selShort="picture>img,img[srcset]",g.sel=g.selShort,g.cfg=$,g.DPR=P||1,g.u=I,g.types=S,g.setSize=v,g.makeUrl=F(function(e){return B.href=e,B.href}),g.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},g.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?g.matchesMedia=function(e){return!e||matchMedia(e).matches}:g.matchesMedia=g.mMQ,g.matchesMedia.apply(this,arguments)},g.mMQ=function(e){return!e||O(e)},g.calcLength=function(e){var t=O(e,!0)||!1;return t<0&&(t=!1),t},g.supportsType=function(e){return!e||S[e]},g.parseSize=F(function(e){var t=(e||"").match(/(\([^)]+\))?\s*(.+)/);return{media:t&&t[1],length:t&&t[2]}}),g.parseSet=function(e){return e.cands||(e.cands=f(e.srcset,e)),e.cands},g.getEmValue=function(){var e;if(!p&&(e=t.body)){var n=t.createElement("div"),r=x.style.cssText,i=e.style.cssText;n.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",x.style.cssText=C,e.style.cssText=C,e.appendChild(n),p=n.offsetWidth,e.removeChild(n),p=parseFloat(p,10),x.style.cssText=r,e.style.cssText=i}return p||16},g.calcListLength=function(e){if(!(e in L)||$.uT){var t=g.calcLength(d(e));L[e]=t?t:I.width}return L[e]},g.setRes=function(e){var t;if(e){t=g.parseSet(e);for(var n=0,r=t.length;n<r;n++)K(t[n],e.sizes)}return t},g.setRes.res=K,g.applySetCandidate=function(e,t){if(e.length){var n,r,i,a,u,l,f,d,p,h=t[g.ns],m=g.DPR;if(l=h.curSrc||t[E],f=h.curCan||o(t,l,e[0].set),f&&f.set===e[0].set&&((p=z&&!t.complete&&f.res-.1>m)||(f.cached=!0,f.res>=m&&(u=f))),!u)for(e.sort(c),a=e.length,u=e[a-1],r=0;r<a;r++)if(n=e[r],n.res>=m){i=r-1,u=e[i]&&(p||l!==g.makeUrl(n.url))&&s(e[i].res,n.res,m,e[i].cached)?e[i]:n;break}u&&(d=g.makeUrl(u.url),h.curSrc=d,h.curCan=u,d!==l&&g.setSrc(t,u),g.setSize(t))}},g.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},g.getSet=function(e){var t,n,r,i=!1,s=e[g.ns].sets;for(t=0;t<s.length&&!i;t++)if(n=s[t],n.srcset&&g.matchesMedia(n.media)&&(r=g.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},g.parseSets=function(e,t,n){var r,i,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[g.ns];(void 0===o.src||n.src)&&(o.src=w.call(e,"src"),o.src?y.call(e,"data-pfsrc",o.src):k.call(e,"data-pfsrc")),(void 0===o.srcset||n.srcset||!g.supSrcset||e.srcset)&&(r=w.call(e,"srcset"),o.srcset=r,a=!0),o.sets=[],c&&(o.pic=!0,l(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:w.call(e,"sizes")},o.sets.push(i),(s=(h||o.src)&&T.test(o.srcset||""))||!o.src||u(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,d:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=void 0,o.supported=!(c||i&&!g.supSrcset||s&&!g.supSizes),a&&g.supSrcset&&!o.supported&&(r?(y.call(e,"data-pfsrcset",r),e.srcset=""):k.call(e,"data-pfsrcset")),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==g.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},g.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[g.ns]||(e[g.ns]={}),n=e[g.ns],(r||n.evaled!==m)&&(n.parsed&&!t.reevaluate||g.parseSets(e,e.parentNode,t),n.supported?n.evaled=m:a(e))},g.setupRun=function(){U&&!D&&P===e.devicePixelRatio||i()},g.supPicture?(V=v,g.fillImg=v):function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function(){var e=t.readyState||"";s=setTimeout(i,"loading"===e?200:999),t.body&&(g.fillImgs(),(n=n||r.test(e))&&clearTimeout(s))},s=setTimeout(i,t.body?9:99),a=x.clientHeight,c=function(){D=Math.max(e.innerWidth||0,x.clientWidth)!==I.width||x.clientHeight!==a,a=x.clientHeight,D&&g.fillImgs()};H(e,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(c,99)),H(t,"readystatechange",i)}(),g.picturefill=V,g.fillImgs=V,g.teardownRun=v,V._=g,e.picturefillCFG={pf:g,push:function(e){var t=e.shift();"function"==typeof g[t]?g[t].apply(g,e):($[t]=e[0],U&&g.fillImgs({reselect:!0}))}};for(;R&&R.length;)e.picturefillCFG.push(R.shift());e.picturefill=V,"object"==typeof module&&"object"==typeof module.exports?module.exports=V:"function"==typeof define&&define.amd&&define("picturefill",function(){return V}),g.supPicture||(S["image/webp"]=function(t,n){var r=new e.Image;return r.onerror=function(){S[t]=!1,V()},r.onload=function(){S[t]=1===r.width,V()},r.src=n,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),$(document).ready(function(){function e(e){var t=$(e).find(".responds__list").outerWidth();$(e).find(".responds__list .responds__box").eq(-1).clone().prependTo($(e).find(".responds__list")),$(e).find(".responds__list").css({left:"-"+t+"px"}),$(e).find(".responds__list .responds__box").eq(-1).remove(),$(e).find(".responds__list").animate({left:"0px"},200)}function t(e){var t=$(e).find(".responds__list").outerWidth();$(e).find(".responds__list").animate({left:"-"+t+"px"},200,function(){$(e).find(".responds__list .responds__box").eq(0).clone().appendTo($(e).find(".responds__list")),$(e).find(".responds__list .responds__box").eq(0).remove(),$(e).find(".responds__list").css({left:"0px"})})}$('a[href^="#"]').bind("click.smoothscroll",function(e){e.preventDefault();var t=this.hash,n=$(t);$("html, body").stop().animate({scrollTop:n.offset().top},1500,"swing",function(){window.location.hash=t})}),$("#z_tel").mask("+38(999) 999-99-99"),$("#z_form").submit(function(){var e=$(this).serialize();$.ajax({type:"POST",url:"/build/php/send.php",async:!1,data:e,success:function(e){alert(e)},error:function(t){console.log("form_data",e),alert("error!")}})}),$("a[name=modal]").click(function(e){e.preventDefault();var t=$(this).attr("href"),n=$(document).height(),r=$(document).width();$("#mask").css({width:2*r,height:n}),$("#mask").fadeIn(700),$("#mask").fadeTo("slow",.9);var i=$(window).width();$(t).css("top",0),$(t).css("left",i/2-$(t).width()/2),$(t).fadeIn(2e3)}),$(".close").click(function(e){e.preventDefault(),$("#mask, .zakaz__window").hide()}),$("#mask").click(function(){$(this).hide(),$(".zakaz__window").hide()}),$(document).on("click",".responds__nav_r",function(){return t($("#slider")),!1}),$(document).on("click",".responds__nav_l",function(){return e($("#slider")),!1})}),function(e){var t={picStep:1};e.fn.slider=function(n){var r=(e.extend({},t,n),225*n.picStep),i=e(".responds__nav_l"),s=e(".responds__nav_r"),a=e(this),c=0,o=a.find("li").length,u=-((o-5)*r);return i.click(function(){0!=c&&(c+=r,a.animate({left:c+"px"},500))}),s.click(function(){c!=u&&(c-=r,a.animate({left:c+"px"},500)),c<u+4*r&&(c=0,a.animate({left:c+"px"},500))}),this}}(jQuery);