!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t){var n=document.querySelector(".menu-button");n.addEventListener("click",()=>{for(document.querySelector("nav div.pp").classList.toggle("show"),i=0;i<n.children.length;i++)n.children[i].classList.toggle("toggle")});var r=1,o=document.querySelector(".dot-container");function l(e){var t=document.querySelector(".image-container").children,n=document.getElementsByClassName("dot");for(i=0;i<3;i++)t[i].style.display="none",n[i].className=n[i].className.replace("active","");t[r-1].style.display="block",n[r-1].classList.toggle("active")}o.addEventListener("click",()=>{if(event.target.classList.contains("dot")){var e=Array.prototype.indexOf.call(o.children,event.target);r=e+1,l(e+1)}}),l()}]);