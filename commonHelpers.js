import{i as l,S as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=(r,s)=>{const n=r.map(o=>`<li class="list-item">
                    <a href="${o.largeImageURL}">
                        <img
                            src="${o.webformatURL}"
                            alt="${o.tags}"
                            class="image"
                        />
                    </a>
                    <div class="lower-box">
                        <div>
                            <h3 class="card-title">Likes</h3>
                            <p>${o.likes}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Views</h3>
                            <p>${o.views}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Comments</h3>
                            <p>${o.comments}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Downloads</h3>
                            <p>${o.downloads}</p>    
                        </div>
                    </div>
                </li>`).join("");s.insertAdjacentHTML("beforeend",n)},m=()=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},f=r=>{r.style.display="inline-block"},p=r=>{r.style.display="none"},h=(r,s,n,o,e,t)=>(o(t),fetch(`https://pixabay.com/api/?key=43749964-78fe686efe4660c3d41d86a93&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).then(i=>{const c=i.hits;c.length===0?m():n(c,s)}).catch(i=>console.log(i)).finally(()=>{e(t)}));document.querySelector(".btnSubmit");const y=document.querySelector(".form"),g=document.querySelector("#inputSearch"),a=document.querySelector(".list"),L=document.querySelector(".loader");y.addEventListener("submit",r=>{r.preventDefault(),a.innerHTML="",h(g.value,a,u,f,p,L)});a.addEventListener("click",r=>{r.preventDefault(),r.target.tagName==="IMG"&&new d(".list-item a",{sourceAttr:"href",animationSpeed:100,fadeSpeed:50,animationSlide:!1,scrollZoom:!1,captionsData:"alt",captionDelay:250})});
//# sourceMappingURL=commonHelpers.js.map
