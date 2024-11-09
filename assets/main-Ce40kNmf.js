import{a as u,S as m,i as p}from"./vendor-u8rapaCG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="46313967-d4d30fae59777882921d7e8bb";document.querySelector(".loader");const f=t=>{u.get("https://pixabay.com/api/",{params:{key:d,q:searchInput,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(o=>{if(!o.ok)throw new Error("Error fetching images");return o.json()}).then(o=>o.hits)},y=new m(".gallery a"),g=t=>{const o=document.querySelector(".gallery");if(o.innerHTML="",t.length===0){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:n,views:i,comments:l,downloads:c})=>`
            <li class="gallery-item">
                <a href="${e}" class="gallery-link">
                    <img src="${a}" alt="${r}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes:</span> ${n}</p>
                    <p class="info-item"><span>Views:</span> ${i}</p>
                    <p class="info-item"><span>Comments:</span> ${l}</p>
                    <p class="info-item"><span>Downloads:</span> ${c}</p>
                </div>
            </li>
        `).join("");o.innerHTML=s,y.refresh()},h=()=>{const t=document.querySelector(".loader");t&&(t.style.display="block")},q=()=>{const t=document.querySelector(".loader");t&&(t.style.display="none")},L=document.querySelector(".search-form");L.addEventListener("submit",t=>{if(t.preventDefault(),gallery.innerHTML="",!document.querySelector('input[name="query"]').value.trim()){iziToast.error({title:"Error",message:"Search query cannot be empty."});return}h(),f().then(s=>{g(s)}).catch(s=>{console.error(s),iziToast.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{q()})});
//# sourceMappingURL=main-Ce40kNmf.js.map
