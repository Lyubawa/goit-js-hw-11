import{S as i,i as c}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n=document.querySelector(".form"),f=document.querySelector(".gallery");let u=new URLSearchParams({key:"41672793-a8580f18ed6f224a15f8d2674",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0}),d=`https://pixabay.com/api/?${u}`;const m=new i(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0,enableKeyboard:!0,docClose:!0});n.addEventListener("submit",a=>{a.preventDefault(),fetch(d).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(({hits:t,totalHits:s})=>{t.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",backgroundColor:"#B51B1B"}):((()=>{const e=t.reduce((r,o)=>r+`
           <li class="gallery-item">
           <a class="gallery-link" href="${o.largeImageURL}">
           <img
           class="gallery-image"
           src="${o.webformatURL}"
           alt="${o.tags}"
           />
           </a>
           <div class="gallery-info">
           <p>likes: ${o.likes}</p> 
           <p>views: ${o.views}</p>
           <p>comments: ${o.comments}</p>
           <p>downloads: ${o.downloads}</p>
           </div>
           </li>
            `,"");f.innerHTML=e})(),m.refresh())}).catch(t=>console.log(t)),n.reset()});
//# sourceMappingURL=commonHelpers.js.map
