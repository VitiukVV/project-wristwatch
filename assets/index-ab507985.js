(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();const d=document.querySelector("[data-menu]"),y=document.querySelector("[data-menu-open]"),f=document.querySelector("[data-menu-close]"),a=document.querySelector("body"),g=document.querySelectorAll(".menu-link"),s=()=>{d.classList.toggle("is-hidden"),a.classList.toggle("body")};y.addEventListener("click",s);f.addEventListener("click",s);g.forEach(o=>o.addEventListener("click",s));window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(d.classList.add("is-hidden"),a.classList.remove("body"))});const l={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};l.openModalBtn.addEventListener("click",u);l.closeModalBtn.addEventListener("click",u);function u(){l.modal.classList.toggle("is-hidden"),l.body.classList.toggle("no-scroll")}new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:10,loop:!0,keyboard:{enabled:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"}});const i=document.getElementsByClassName("accordion");for(let o=0;o<i.length;o+=1)i[o].onclick=function(){this.classList.toggle("active");let n=this.nextElementSibling;n.style.maxHeight?n.style.maxHeight=null:n.style.maxHeight=n.scrollHeight+"px"};