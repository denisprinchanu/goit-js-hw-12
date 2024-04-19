import{i as f,S as g}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function y(r){return r.hits.map(e=>`<div class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
            </a>
            <div class="gallery-item-info">
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                    </span>
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                    </span>
                </p>
            </div>
        </div>`).join("")}function h(){f.info({timeout:3e3,position:"topRight",message:"We're sorry, but you've reached the end of search results."})}function L(){f.info({timeout:3e3,position:"topRight",message:"The search query can not be epty!"})}function b(){f.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"})}const d=new g(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),l=document.querySelector(".search-form"),a=document.querySelector(".gallery"),m=document.querySelector(".loader"),i=document.querySelector(".load-btn");let c="",p;l.addEventListener("submit",v);i.addEventListener("click",w);async function v(r){if(p=1,r.preventDefault(),a.innerHTML="",c=l.elements.searchWord.value.trim(),i.style.display="block",c===""){L(),a.innerHTML="",i.style.display="none",l.reset();return}m.style.display="block";try{const e=await fetchImages(c,p).then(n=>{const o=y(n);if(n.hits.length===0){b(),i.style.display="none",m.style.display="none";return}a.insertAdjacentHTML("beforeend",o),d.refresh(),m.style.display="none"})}catch(e){console.error("Error:",e)}l.reset()}async function w(){p+=1;try{const r=await fetchImages(c,p).then(e=>{const n=y(e);a.insertAdjacentHTML("beforeend",n),d.refresh();const o=a.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"}),e.hits.length<=14&&(i.style.display="none",h(),d.refresh())})}catch(r){console.error("Error:",r)}}
//# sourceMappingURL=commonHelpers.js.map
