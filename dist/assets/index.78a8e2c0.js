import{R as e,a as c}from"./vendor.f77956e9.js";const s=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}};s();const m=()=>e.createElement("div",{className:"w-max-7xl"},e.createElement("form",{className:"mx-2 sm:p-0 max-w-screen-sm my-10 mx-auto border-primary text-secondary  border bg-primary border-opacity-20 radius"},e.createElement("div",{className:"p-1.5"},e.createElement("h1",{className:"text-center mb-10 m-0"},"Create a Account"),e.createElement("div",{className:"form-group"},e.createElement("input",{type:"text",placeholder:"Enter Person Name...",className:`\r
                w-full\r
               placeholder-secondary\r
               placeholder-opacity-70\r
               bg-transparent\r
               border-primary\r
               border-opacity-50\r
               outline-none\r
               place\r
               radius\r
               text-primary\r
               border px-2 py-1`})),e.createElement("div",{className:"form-group mt-1"},e.createElement("input",{type:"text",placeholder:"Enter Person Name...",className:`\r
                w-full\r
               placeholder-primary\r
               placeholder-opacity-20\r
               bg-transparent\r
               border-primary\r
               border-opacity-50\r
               outline-none\r
               place\r
               radius\r
               text-primary\r
               border px-2 py-1`})),e.createElement("button",{className:"p-1 mt-1 radius"},"Submit"))),e.createElement("div",{className:"bg-primary w-screen-sm mx-auto"},e.createElement("button",{className:"m-1 absolute top-2"},"Hi"),e.createElement("button",{className:"w-1/2"},"Hello")),e.createElement("div",{className:"space-x-3.5"},e.createElement("button",null,"This is Button"),e.createElement("button",null,"Another Button")));c.render(e.createElement(m,null),document.getElementById("app"));
