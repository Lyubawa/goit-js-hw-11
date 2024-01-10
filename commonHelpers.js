import{S as i,i as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n=document.querySelector(".form"),f=document.querySelector(".gallery");new URLSearchParams({key:"41672793-a8580f18ed6f224a15f8d2674",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0});let u="https://pixabay.com/api/?${searchParams}";const d=new i(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0,enableKeyboard:!0,docClose:!0});n.addEventListener("submit",a=>{a.preventDefault(),fetch(u).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(({hits:o,totalHits:s})=>{o.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",backgroundColor:"#B51B1B"}):((()=>{const e=o.reduce((r,t)=>r+`
           <li class="gallery-item">
           <a class="gallery-link" href="${t.largeImageURL}">
           <img
           class="gallery-image"
           src="${t.webformatURL}"
           alt="${t.tags}"
           />
           </a>
           <div class="gallery-info">
           <p>likes: ${t.likes}</p> 
           <p>views: ${t.views}</p>
           <p>comments: ${t.comments}</p>
           <p>downloads: ${t.downloads}</p>
           </div>
           </li>
            `,"");f.innerHTML=e})(),d.refresh())}).catch(o=>console.log(o)),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
