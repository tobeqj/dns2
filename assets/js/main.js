$(function () {
  'use strict';

  //下拉刷新页面
  $(document).on("pageInit", "#game", function(e, id, page) {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      autoplay: 3000,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    })        
    console.log('jk');
    var $content = $(page).find(".content").on('refresh', function(e) {
      // 模拟2s的加载过程
     
      setTimeout(function() {
        console.log('world');
        //$content.find('').prepend(cardHTML);
        // $(window).scrollTop(0);
        // 加载完毕需要重置
        $.pullToRefreshDone($content);
      }, 2000);
    });
  });
  $(document).on("pageInit", "#user", function(e, id, page) {
    console.log('jk');
    var $content = $(page).find(".content").on('refresh', function(e) {
      // 模拟2s的加载过程
     
      setTimeout(function() {
        console.log('world');
        //$content.find('').prepend(cardHTML);
        // $(window).scrollTop(0);
        // 加载完毕需要重置
        $.pullToRefreshDone($content);
      }, 2000);
    });
  });

  $(document).on("pageInit", "#bet", function(e, id, page) {
     var sendEle = $(page).find('#send'),
         betChoseEle = $(page).find('#bet-chose'),
         betChoseTypeEle =  $(page).find('#bet-chose-type'),
         messageEle = $(page).find("#message");  
     betChoseEle.on('click', function(e){
      if(betChoseTypeEle.css('display') == 'none'){
        $(page).find("#bet-footer").css('height', '88px');
        betChoseTypeEle.show();        
      }else{
        $(page).find("#bet-footer").css('height', '44px');
        betChoseTypeEle.hide();
      }
    });

    messageEle.on('focus', function(e){
      if(betChoseTypeEle.css('display') != 'none'){
        $(page).find("#bet-footer").css('height', '44px');
        betChoseTypeEle.hide();
      }
      sendEle.show();
      betChoseEle.hide();
    });
    messageEle.on('blur', function(e){
      sendEle.hide();
      betChoseEle.show();
    });
    sendEle.on('click', function(e){
      console.log(messageEle.val());
    });
    var $content = $(page).find(".content").on('refresh', function(e) {
      // 模拟2s的加载过程
     
      setTimeout(function() {
        console.log('world');
        //$content.find('').prepend(cardHTML);
        // $(window).scrollTop(0);
        // 加载完毕需要重置
        $.pullToRefreshDone($content);
      }, 2000);
    });
  });
  $.init();
});