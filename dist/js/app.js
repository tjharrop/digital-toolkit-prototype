window.addEventListener("load",(()=>{!function(){let e=function(e){let n="dismissed=",t=document.cookie.split(";");for(let e=0;e<t.length;e++){let l=t[e];for(;" "==l.charAt(0);)l=l.substring(1);if(0==l.indexOf(n))return l.substring(n.length,l.length)}return""}();if(console.log(e),!e){console.log("dsad");let e=document.createElement("div");e.innerHTML='\n      <div class="nsw-global-alert nsw-global-alert--critical js-global-alert" role="alert" id="proto-warn">\n        <div class="nsw-global-alert__wrapper">\n          <div class="nsw-global-alert__content">\n            <div class="nsw-global-alert__title">This is a prototype</div>\n            <p>You\'re currently using a prototype of the NSW UX &amp; Technology resources library which is for demonstration and testing only.</p>\n          </div>\n          <button class="nsw-icon-button js-close-alert" type="button" aria-expanded="true" id="close-global">\n            <span class="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</span>\n            <span class="sr-only">Close message</span>\n          </button>\n        </div>\n      </div>\n    ',document.querySelector("body").prepend(e),document.getElementById("close-global").addEventListener("click",(function(e){!function(e,n,t){const l=new Date;l.setTime(l.getTime()+864e5);let o="expires="+l.toUTCString();document.cookie="dismissed=true;"+o+";path=/"}(),document.getElementById("proto-warn").style.display="none"}))}}()}));