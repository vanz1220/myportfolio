(()=>{const e=function(){const e={rootMargin:"200px 0px",threshold:.01},t=[];let n,a,i;d();const o=document.querySelector("body");function d(){n=Array.from(document.querySelectorAll("img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)")),i&&i.disconnect(),"IntersectionObserver"in window?(i=new IntersectionObserver(l,e),n.forEach((function(e){e.getAttribute("data-lazy-loaded")||i.observe(e)})),window.addEventListener("beforeprint",c),window.matchMedia&&window.matchMedia("print").addListener((function(e){e.matches&&c()}))):r()}function r(){for(i&&i.disconnect();n.length>0;)s(n[0])}function l(e){for(let t=0;t<e.length;t++){const n=e[t];n.intersectionRatio>0&&(i.unobserve(n.target),s(n.target))}0===n.length&&i.disconnect()}function c(){if(!a&&(n.length>0||t.length>0)){a=document.createElement("div"),a.id="loadingWarning",a.style.fontWeight="bold",a.innerText=jetpackLazyImagesL10n.loading_warning;const e=document.createElement("style");e.innerHTML="#loadingWarning { display: none; }\n@media print {\n#loadingWarning { display: block; }\nbody > #loadingWarning ~ * { display: none !important; }\n}",a.appendChild(e),o.insertBefore(a,o.firstChild)}n.length>0&&r(),a&&alert(jetpackLazyImagesL10n.loading_warning)}function s(e){let a;if(!(e instanceof HTMLImageElement))return;const i=e.getAttribute("data-lazy-srcset"),o=e.getAttribute("data-lazy-sizes");e.removeAttribute("data-lazy-srcset"),e.removeAttribute("data-lazy-sizes"),e.removeAttribute("data-lazy-src"),e.classList.add("jetpack-lazy-image--handled"),e.setAttribute("data-lazy-loaded",1),o&&e.setAttribute("sizes",o),i?e.setAttribute("srcset",i):e.removeAttribute("srcset"),e.setAttribute("loading","eager"),t.push(e);const d=n.indexOf(e);d>=0&&n.splice(d,1),e.complete?g.call(e,null):(e.addEventListener("load",g,{once:!0}),e.addEventListener("error",g,{once:!0}));try{a=new Event("jetpack-lazy-loaded-image",{bubbles:!0,cancelable:!0})}catch(e){a=document.createEvent("Event"),a.initEvent("jetpack-lazy-loaded-image",!0,!0)}e.dispatchEvent(a)}function g(){const e=t.indexOf(this);e>=0&&t.splice(e,1),a&&0===n.length&&0===t.length&&(a.parentNode.removeChild(a),a=null)}o&&(o.addEventListener("is.post-load",d),o.addEventListener("jetpack-lazy-images-load",d))};"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})()