!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var r=document.querySelector(".menu-button");r.addEventListener("click",()=>{for(document.querySelector("nav div.pp").classList.toggle("show"),i=0;i<r.children.length;i++)r.children[i].classList.toggle("toggle")});var n=1;document.querySelector(".slider .next").addEventListener("click",()=>{(n+=1)>3&&(n=1),c(n)});var o=document.querySelector(".dotContainer");function c(e){var t=document.querySelector(".slider").children,r=document.getElementsByClassName("dot");for(i=0;i<3;i++)t[i].style.display="none",r[i].className=r[i].className.replace("active","");t[n-1].style.display="block",r[n-1].classList.toggle("active")}o.addEventListener("click",e=>{if(e.target.classList.contains("dot")){var t=Array.prototype.indexOf.call(o.children,e.target);n=t+1,c(t+1)}}),document.querySelector(".slider .last").addEventListener("click",()=>{(n-=1)<1&&(n=3),c(n)}),c(),document.getElementsByClassName("searchIcon")[0].addEventListener("click",()=>{document.querySelector(".searchModal").classList.toggle("active"),console.log("aa")}),document.getElementsByClassName("search-close")[0].addEventListener("click",()=>{document.querySelector(".searchModal").classList.toggle("active"),console.log("aa")})}]);