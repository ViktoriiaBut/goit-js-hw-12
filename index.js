import{a as q,S as d,i as l}from"./assets/vendor-mdVVRe9K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="46313967-d4d30fae59777882921d7e8bb";async function $(s,t){const n=`https://pixabay.com/api/?${new URLSearchParams({key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t})}`;try{return(await q.get(n)).data}catch(e){throw console.error("Error fetching images:",e),e}}const v=new d(".gallery a"),x=document.querySelector(".gallery");function E(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:i,comments:L,downloads:S})=>`
<li class="gallery-item">
                <a href="${n}" class="gallery-link">
                    <img src="${o}" alt="${e}" class="gallery-image" /></a>
                  <div class="info">
                    <p class="info-item"><span>Likes:</span> ${r}</p>
                    <p class="info-item"><span>Views:</span> ${i}</p>
                    <p class="info-item"><span>Comments:</span> ${L}</p>
                    <p class="info-item"><span>Downloads:</span> ${S}</p>
                </div>
            </li>`).join("");x.innerHTML=t,v.refresh()}const u=new d(".gallery a"),p=document.querySelector(".loader"),a=document.querySelector(".load-more"),g=document.querySelector(".search-form"),m=document.querySelector(".gallery");function h(){p.style.display="flex"}function b(){p.style.display="none"}let c=1,M="",y=0,f=0;a.style.display="none";g.addEventListener("submit",H);a.addEventListener("click",O);async function H(s){s.preventDefault();const t=s.target.elements.query.value.trim();if(m.innerHTML="",!t){l.error({title:"Error",message:"Please enter a search query!"});return}a.style.display="none",c=1,y=0,f=0,m.innerHTML="",h(),await w(t,c),b(),g.reset()}async function w(s,t){try{const o=await $(s,t);if(o.hits.length===0){a.style.display="none",l.warning({title:"No results",message:"Sorry, there are no images matching your search query."});return}y=o.totalHits,f+=o.hits.length,E(o.hits),N(),t>1&&T(),D()}catch(o){l.error({color:"red",message:`Error fetching more images: ${o.message}`})}}async function O(){c++,a.disabled=!0,h(),await w(M,c),b()}function D(){f>=y?(a.style.display="none",l.error({title:"End of Results",message:"We're sorry, but you've reached the end of search results."})):(a.style.display="block",a.disabled=!1)}function N(){u?u.refresh():u=new d(".gallery-item a",{captionsData:"alt",captionDelay:250})}function T(){const s=document.querySelector(".gallery-item");if(s){const{height:t}=s.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
