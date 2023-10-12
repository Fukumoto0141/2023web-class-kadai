
//-----------------------------------------------------------------------------------
//フェードイン・フェードアウトアニメーション
//-----------------------------------------------------------------------------------
$(window).on('load', function(){//ページのロード

  $(".horizontal-scroll").mousewheel(function(event, delta, deltaX, deltaY) {

    var scroll = $(this).scrollLeft();//スクロール量
    var windowWidth = $(window).width();//ウィンドウの高さ

    $('.fadeIn').each(function(){//fadeInクラスの要素を一個ずつ確認

      var targetPosition  = $(this).offset().left;

      var targetWidth  = $(this).width();//対象要素の高さ

      if(targetPosition > -(targetWidth/2) && targetPosition < windowWidth - (targetWidth/4)){
        $(this).removeClass('items-inactive');
        $(this).addClass('active');//表示させるためのクラスつける
        if(targetPosition < windowWidth - (targetWidth/4) - 900 ){
          $(this).addClass('t4');
        }else if(targetPosition < windowWidth - (targetWidth/4) - 750 ){
          $(this).addClass('t3');
        }else if(targetPosition < windowWidth - (targetWidth/4) - 600){
          $(this).addClass('t2');

        }else if(targetPosition < windowWidth - (targetWidth/4) - 300){
          $(this).addClass('t1');
        }
      }else{
        $(this).addClass('items-inactive');
        $(this).removeClass('active');//非表示にするためのクラスつける
        $(this).removeClass('t1');
        $(this).removeClass('t2');
        $(this).removeClass('t3');
        $(this).removeClass('t4');

      }
    });
  });
});

$(window).on('load', function(){//ページのロード

  $(".horizontal-scroll").mousewheel(function(event, delta, deltaX, deltaY) {

    var scroll = $(this).scrollLeft();//スクロール量
    var windowWidth = $(window).width();//ウィンドウの高さ

    $('.fadeIn-up').each(function(){//fadeInクラスの要素を一個ずつ確認

      var targetPosition  = $(this).offset().left;

      var targetWidth  = $(this).width();//対象要素の高さ

      if(targetPosition < 50){
        $(this).addClass('inactive-up');
        $(this).removeClass('active-up');//非表示にするためのクラスつける
      }else if(targetPosition < (windowWidth/2)){
        $(this).removeClass('inactive-up');
        $(this).addClass('active-up');//表示させるためのクラスつける
      }
    });
  });
});


//-----------------------------------------------------------------------------------
//横スクロール処理
//-----------------------------------------------------------------------------------

$(function(){
  //最後に更新した時間
  let last_time = 0;
  //次のscrollまで空ける時間
  let interval = 25;


  //スクロール後の位置
  var moving;
  // スクロール後の位置+余韻の距離
  var aftermov;
  // 余韻の距離
  var after = 100;
  // 1スクロールの移動距離
  var speed = 30;

  $(".horizontal-scroll").mousewheel(function(event, delta, deltaX, deltaY) {
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

    var now = new Date().getTime();

    moving = $(this).scrollLeft() - delta * speed;

    if (now - last_time > interval){

      last_time = now;

      $(this).stop().animate({scrollLeft: moving }, 10, 'linear');
      
    }else{
      return;
    }
    
    if (delta < 0) {
      // 下にスクロールしたとき
      aftermov =  moving + 150;
    } else {
      // 上にスクロールしたとき
      aftermov =  moving - 150;
    }
    // setTimeout(100);
    $(this).animate({scrollLeft: aftermov}, 900, 'easeOutCirc');
  });
});

//-----------------------------------------------------------------------------------
//オプションボタン
//-----------------------------------------------------------------------------------

$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $("nav").toggleClass("in");
  $(".logo").toggleClass("inactive");
});

