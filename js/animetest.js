function showElementAnimation() {

  var element = document.getElementsByClassName('js-animation');
  if(!element) return; // 要素がなかったら処理をキャンセル
  
  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);


$(function(){
  $('head').append(
    '<style type="text/css">.target{opacity: 0;margin-top:10px;}'
  );
    $(window).load(function(){
        var delaySpeed = 200;
        var fadeSpeed = 1000;
        $('.target').each(function(i){
            $(this).delay(i*(delaySpeed)).animate({opacity:'1',marginTop:'0px'},fadeSpeed);
        });
    });
});


// 一つずつ

$(function(){
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollin');
      }
    });
  });
});


// 画像の前にパカパカするやつ

$(function(){
    // 画像の上にカバー
    $('#cover .front').css('top','100px');
    $('#cover').on({
      'mouseenter':function(){
        $('#cover .front').animate({'top':'0px'},300);
      },
      'mouseleave':function(){
        $('#cover .front').animate({'top':'100px'},300);}
    });

});