(()=>{let t="",e="",n="",o=!1;const c=["0","1","2","3","4","5","6","7","8","9","."],s=["-","+","×","÷"],a=document.querySelector(".calc-screen p");document.querySelector(".ac").onclick=function(){t="",e="",n="",o=!1,a.textContent=0},document.querySelector(".buttons").onclick=l=>{if(!l.target.classList.contains("btn"))return;if(l.target.classList.contains("ac"))return;a.textContent="";const r=l.target.textContent;if(c.includes(r))return""===e&&""===n?(t+=r,a.textContent=t):""!==t&&""!==e&&o?(e=r,o=!1,a.textContent=e):(e+=r,a.textContent=e),void console.table(t,e,n);if(s.includes(r))return n=r,a.textContent=n,void console.table(t,e,n);if("="===r){switch(""===e&&(e=t),n){case"+":t=+t+ +e;break;case"-":t-=e;break;case"×":t*=e;break;case"÷":if("0"===e)return a.textContent="Ошибка",t="",e="",void(n="");t/=e}o=!0,a.textContent=t,console.table(t,e,n)}"+/-"===r&&""!==t&&(t=-1*+t,a.textContent=t),"%"===r&&""!==t&&(t/=100,a.textContent=t)}})(),(()=>{const t=document.querySelector("body"),e=document.querySelector("#toggle"),n=document.querySelector(".toggle .bxs-sun"),o=document.querySelector(".toggle .bx-moon");e.addEventListener("change",(()=>{t.classList.toggle("calc-light"),n.className="bx bxs-sun"==n.className?"bx bx-sun":"bx bxs-sun",o.className="bx bxs-moon"==o.className?"bx bx-moon":"bx bxs-moon"}))})();