import{i as p,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="46313967-d4d30fae59777882921d7e8bb",a=document.querySelector(".loader");function d(s,r){const o=`https://pixabay.com/api/?${new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9})}`;a.style.display="block",fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{const t=e.hits;t.length===0&&p.error({title:"No pictures found",message:"Try another query",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:3e3,closeOnClick:!0}),a.style.display="none",r(t)}).catch(e=>console.log(e))}const y=new f(".gallery a");function h(s){const r=s.map(({webformatURL:n,largeImageURL:o,tags:e,likes:t,views:i,comments:l,downloads:u})=>`
<li class="gallery-item">
                <a href="${o}" class="gallery-link">
                    <img src="${n}" alt="${e}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes:</span> ${t}</p>
                    <p class="info-item"><span>Views:</span> ${i}</p>
                    <p class="info-item"><span>Comments:</span> ${l}</p>
                    <p class="info-item"><span>Downloads:</span> ${u}</p>
                </div>
            </li>
        `).join("");c.innerHTML=r,y.refresh()}const g=document.querySelector(".search-form"),c=document.querySelector(".gallery");g.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="";const r=s.target.elements.query.value;r.trim()!==""&&d(r,h)});
//# sourceMappingURL=index.js.map
