import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="46313967-d4d30fae59777882921d7e8bb";function d(o){const s=`https://pixabay.com/api/?${new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9})}`;fetch(s).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function y(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:u,downloads:f})=>`
<li class="gallery-item">
                <a href="${a}" class="gallery-link">
                    <img src="${s}" alt="${e}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes:</span> ${r}</p>
                    <p class="info-item"><span>Views:</span> ${i}</p>
                    <p class="info-item"><span>Comments:</span> ${u}</p>
                    <p class="info-item"><span>Downloads:</span> ${f}</p>
                </div>
            </li>
        `).join("");gallery.innerHTML=t,lightbox.refresh()}const l=document.querySelector(".loader"),c=document.querySelector(".search-form"),h=document.querySelector(".gallery");new m(".gallery a",{});c.addEventListener("submit",o=>{o.preventDefault(),h.innerHTML="";const t=o.target.elements.query.value;if(!t){n.error({title:"Error",message:"Please enter a search query!"});return}l.style.display="block";try{const s=d(t);s.hits.length===0?n.warning({title:"No results",message:"Sorry, there are no images matching your search query."}):y(s.hits)}catch{n.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{l.style.display="none",g()}});function g(){c.reset()}
//# sourceMappingURL=index.js.map
