import{i as l,s as d}from"./assets/vendor-5c957d73.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=(s,i)=>{const n=s.map(o=>`<li class="list-item">
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
                </li>`).join("");i.insertAdjacentHTML("beforeend",n)},f=()=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})},m=s=>{s.style.display="inline-block"},p=s=>{s.style.display="none"},h=(s,i,n,o,e,t)=>(o(t),fetch(`https://pixabay.com/api/?key=43749964-78fe686efe4660c3d41d86a93&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const a=r.hits;a.length===0?f():n(a,i)}).catch(r=>console.log(r)).finally(()=>{e(t)}));document.querySelector(".btnSubmit");const y=document.querySelector(".form"),g=document.querySelector("#inputSearch"),c=document.querySelector(".list"),L=document.querySelector(".loader"),b=new d(".list a",{sourceAttr:"href",animationSpeed:100,fadeSpeed:50,animationSlide:!1,scrollZoom:!1,captionsData:"alt",captionDelay:250});y.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",h(g.value,c,u,m,p,L),b.refresh()});
//# sourceMappingURL=commonHelpers.js.map
