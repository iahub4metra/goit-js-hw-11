import{i as l,s as d}from"./assets/vendor-5c957d73.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const u=r=>fetch(`https://pixabay.com/api/?key=43749964-78fe686efe4660c3d41d86a93&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>console.log(e)),f=(r,e)=>{if(r.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const s=r.map(i=>`<li class="list-item">
                    <a href="${i.largeImageURL}">
                        <img
                            src="${i.webformatURL}"
                            alt="${i.tags}"
                            class="image"
                        />
                    </a>
                    <div class="lower-box">
                        <div>
                            <h3 class="card-title">Likes</h3>
                            <p>${i.likes}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Views</h3>
                            <p>${i.views}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Comments</h3>
                            <p>${i.comments}</p>    
                        </div>
                        <div>
                            <h3 class="card-title">Downloads</h3>
                            <p>${i.downloads}</p>    
                        </div>
                    </div>
                </li>`).join("");e.insertAdjacentHTML("beforeend",s)},m=()=>{l.error({message:"Please fill the field!",position:"topRight"})},p=r=>{r.style.display="inline-block"},h=r=>{r.style.display="none"};document.querySelector(".btnSubmit");const y=document.querySelector(".form"),g=document.querySelector("#inputSearch"),a=document.querySelector(".list"),c=document.querySelector(".loader"),L=new d(".list a",{sourceAttr:"href",animationSpeed:100,fadeSpeed:50,animationSlide:!1,scrollZoom:!1,captionsData:"alt",captionDelay:250});y.addEventListener("submit",r=>{r.preventDefault();const e=g.value.trim();e===""?m():(a.innerHTML="",p(c),u(e).then(s=>{f(s,a),L.refresh()}).finally(()=>{h(c)}))});
//# sourceMappingURL=commonHelpers.js.map
