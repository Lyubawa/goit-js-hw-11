import{S as f,i as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(r){if(r.ep)return;r.ep=!0;const e=n(r);fetch(r.href,e)}})();const d=document.querySelector(".form"),i=document.querySelector(".gallery"),c=document.querySelector(".loader");let s={key:"41672793-a8580f18ed6f224a15f8d2674",q:"cat",image_type:"photo",orientation:"horizontal",safesearch:!0};const m=new f(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0,enableKeyboard:!0,docClose:!0});function g(o){return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(({hits:t,totalHits:n})=>{if(t.length>0){const l=t.reduce((r,e)=>r+`
           <li class="gallery-item">
           <a class="gallery-link" href="${e.largeImageURL}">
           <img
           class="gallery-image"
           src="${e.webformatURL}"
           alt="${e.tags}"
           />
           </a>
           <div class="gallery-info">
           <p>likes: ${e.likes}</p> 
           <p>views: ${e.views}</p>
           <p>comments: ${e.comments}</p>
           <p>downloads: ${e.downloads}</p>
           </div>
           </li>
            `,"");i.innerHTML=l,m.refresh()}else u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",backgroundColor:"#B51B1B"})}).catch(t=>console.log(t)).finally(()=>{c.style.display="none"})}d.addEventListener("submit",o=>{o.preventDefault(),i.innerHTML="",c.style.display="block",new URLSearchParams(s),s.q=o.target.elements.search.value.trim(),g(),o.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
