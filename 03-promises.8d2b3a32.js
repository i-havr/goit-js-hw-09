var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("iQIUW");i.Notify.init({width:"250px",position:"right-top",closeButton:!1}),i.Notify.merge({useIcon:!1});const r={submitBtnRef:document.querySelector(".form > button"),formInput:document.querySelector(".form")},u={};function f(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function s({position:e,delay:t}){i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}function l({position:e,delay:t}){i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}r.formInput.addEventListener("submit",(function(e){e.preventDefault();const t=Number(u.delay),n=Number(u.step),o=Number(u.amount);for(let e=1;e<=o;e+=1){f(e,t+n*(e-1)).then(s).catch(l)}})),r.formInput.addEventListener("input",(function(e){return u[e.target.name]=e.target.value,u}));
//# sourceMappingURL=03-promises.8d2b3a32.js.map