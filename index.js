import{a as p,S as d,i as a}from"./assets/vendor-BzeJ7Hez.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="55211619-6f7bac51831f98ad8082e4e8c";function g(s){return p.get(m,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){return s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${n}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b><span>${e}</span></p>
            <p class="info-item"><b>Views</b><span>${t}</span></p>
            <p class="info-item"><b>Comments</b><span>${i}</span></p>
            <p class="info-item"><b>Downloads</b><span>${f}</span></p>
          </div>
        </li>
      `).join("")}function L(s){l.insertAdjacentHTML("beforeend",b(s)),y.refresh()}function S(){l.innerHTML=""}function P(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",v);function v(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){a.error({message:"Please fill in the search field!",position:"topRight"});return}S(),P(),g(r).then(o=>{if(!o.hits||o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{q(),u.reset()})}
//# sourceMappingURL=index.js.map
