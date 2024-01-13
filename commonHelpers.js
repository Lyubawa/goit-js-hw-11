import{S as u,i as c}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=document.querySelector(".form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader");let i;const m=new u(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0,enableKeyboard:!0,docClose:!0});function y(s){const t=new URLSearchParams({key:"41672793-a8580f18ed6f224a15f8d2674",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}d.addEventListener("submit",s=>{if(s.preventDefault(),f.innerHTML="",n.style.display="block",i=s.target.elements.search.value.trim(),!i){c.error({title:"Error",message:"Sorry, imput is empty!",position:"topRight"}),n.style.display="none";return}y(i).then(({hits:t})=>{if(t.length>0){const o=t.reduce((l,e)=>l+`
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
            `,"");f.innerHTML=o,m.refresh()}else c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#ffffff",titleColor:"#ffffff",iconColor:"#ffffff",backgroundColor:"#EF4040"})}).catch(t=>console.log(t)).finally(()=>{n.style.display="none"}),s.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
