const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function d(){e.setAttribute("disabled","disabled"),t.removeAttribute("disabled")}function r(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0").toUpperCase()}`}t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),r(),timerId=setInterval(r,1e3)})),e.addEventListener("click",(function(){d(),clearInterval(timerId)})),d();
//# sourceMappingURL=01-color-switcher.a1bcf859.js.map
