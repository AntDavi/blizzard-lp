"use strict";var slide_thumbnail=new Swiper(".s-slide-thumbnail",{slidesPerView:3,direction:"vertical",spaceBetween:20,watchSlidesProgress:!0}),slide_hero=new Swiper(".s-slide-hero",{effect:"fade",thumbs:{swiper:slide_thumbnail},autoplay:{delay:5e3,disableOnInteraction:!1}}),allFilter=document.querySelectorAll(".js-nav-games li a"),tabPane=document.querySelectorAll(".tab-pane-games"),btnOpenModal=(allFilter.forEach(function(t,n){t.addEventListener("click",function(e){e.preventDefault(),allFilter.forEach(function(e){e.classList.remove("active")}),tabPane.forEach(function(e){e.classList.remove("active")}),tabPane[n].classList.add("active"),t.classList.add("active")})}),document.querySelector(".js-open-modal")),btnCloseModal=document.querySelector(".js-close-modal"),btnMenu=(btnOpenModal.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.add("show-modal")}),btnCloseModal.addEventListener("click",function(){document.documentElement.classList.remove("show-modal")}),document.querySelectorAll(".js-btn-menu")),menuSite=document.querySelectorAll(".js-menu");btnMenu.forEach(function(t,n){t.addEventListener("click",function(e){e.preventDefault(),menuSite.forEach(function(e){e.classList.remove("active"),e.addEventListener("mouseleave",function(){e.classList.remove("active"),btnMenu.forEach(function(e){e.classList.remove("active")})})}),btnMenu.forEach(function(e){e.classList.remove("active")}),t.classList.add("active"),menuSite[n].classList.add("active")})});