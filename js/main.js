"use strict";$(document).ready(function(){if(svg4everybody(),$(".footer-menu-mob").on("click",function(){var e=$(this).find("span");"Скрыть меню"==e.html()?e.html("Показать меню"):e.html("Скрыть меню"),$(this).toggleClass("open"),$(this).siblings("a").toggle()}),$(".header-nav-mob").on("click",function(){var e=$(this).find("span");"закрыть"==e.html()?e.html("Меню"):e.html("закрыть"),$(this).toggleClass("open"),$(".menu").slideToggle("fast")}),$(".menu-link .icon").on("click",function(){$(this).parents(".menu-li").toggleClass("open").find(".menu-sub").slideToggle("fast")}),$(".menu-sub-link .icon").on("click",function(){$(this).parents(".menu-sub-li").toggleClass("open").find(".menu-postsub").slideToggle("fast")}),$(".home-slider").length)new Swiper(".home-slider .swiper-container",{effect:"fade",speed:500,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".home-slider .swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+(8<e?e+1:"0"+(e+1))+"</span>"}}});if($(".home-blog").length)new Swiper(".home-blog .swiper-container",{speed:500,spaceBetween:0,slidesPerView:1,loop:!0,navigation:{nextEl:".home-blog .swiper-button-next",prevEl:".home-blog .swiper-button-prev"},pagination:{el:".home-blog .swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+(8<e?e+1:"0"+(e+1))+"</span>"}},breakpoints:{320:{slidesPerView:1,spaceBetween:0},600:{slidesPerView:2,spaceBetween:20},760:{slidesPerView:2,spaceBetween:30},1e3:{slidesPerView:3,spaceBetween:30}}});if($(".article-slider").length)new Swiper(".article-slider .swiper-container",{speed:500,spaceBetween:0,slidesPerView:1,loop:!0,navigation:{nextEl:".article-slider .swiper-button-next",prevEl:".article-slider .swiper-button-prev"},pagination:{el:".article-slider .swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+(8<e?e+1:"0"+(e+1))+"</span>"}},breakpoints:{320:{slidesPerView:1,spaceBetween:0},1e3:{slidesPerView:2,spaceBetween:30},1100:{slidesPerView:3,spaceBetween:30}}});if($(".home-license").length){$.fancybox.defaults.backFocus=!1;new Swiper(".home-license .swiper-container",{speed:500,spaceBetween:10,slidesPerView:2,loop:!0,navigation:{nextEl:".home-license .swiper-button-next",prevEl:".home-license .swiper-button-prev"},pagination:{el:".home-license .swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+(8<e?e+1:"0"+(e+1))+"</span>"}},breakpoints:{320:{spaceBetween:10,slidesPerView:2},450:{spaceBetween:20,slidesPerView:3},700:{spaceBetween:20,slidesPerView:4},900:{spaceBetween:30,slidesPerView:5},1250:{spaceBetween:30,slidesPerView:6}}})}if($(".list-item-license").length){$.fancybox.defaults.backFocus=!1;new Swiper(".list-item-license .swiper-container",{speed:500,spaceBetween:10,slidesPerView:2,loop:!0,navigation:{nextEl:".list-item-license .swiper-button-next",prevEl:".list-item-license .swiper-button-prev"},pagination:{el:".list-item-license .swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+(8<e?e+1:"0"+(e+1))+"</span>"}},breakpoints:{320:{spaceBetween:5,slidesPerView:2},550:{spaceBetween:10,slidesPerView:3},700:{spaceBetween:20,slidesPerView:3},850:{spaceBetween:30,slidesPerView:4}}})}if($(".aside-license").length){$.fancybox.defaults.backFocus=!1;new Swiper(".aside-license .swiper-container",{speed:500,slidesPerView:2,spaceBetween:10,observer:!0,observeParents:!0,pagination:{el:".aside-license .swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+(8<e?e+1:"0"+(e+1))+"</span>"}},breakpoints:{750:{spaceBetween:25,slidesPerView:1}}})}if($(".aside .aside-title").on("click",function(){var e=$(this),i=e.parents(".aside");if(e.toggleClass("open"),e.siblings(".aside-content").slideToggle("fast"),i.hasClass("aside--single")){var s=e.find(".aside-title-icon span");"Скрыть"==s.html()?s.html("Показать"):s.html("Скрыть")}}),$(".project-gallery").length){var e=new Swiper(".small-list .swiper-container",{freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,spaceBetween:10,slidesPerView:3,navigation:{nextEl:".small-list .swiper-button-next",prevEl:".small-list .swiper-button-prev"},breakpoints:{760:{slidesPerView:4,spaceBetween:16},1e3:{slidesPerView:5,spaceBetween:20}}});new Swiper(".big-picture .swiper-container",{navigation:{nextEl:".big-picture .swiper-button-next",prevEl:".big-picture .swiper-button-prev"},thumbs:{swiper:e}})}});