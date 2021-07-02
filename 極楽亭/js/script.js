// $(function()){}の中に入れていく。jQueryがhtml、CSS、の次に発動するために。これをしないと動かない。
// スライダーオプション
$(function(){
    $('#rec-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    // オートプレイスピード。1000で1秒
    autoplaySpeed: 5000,
    // 左右ボタンの表示
    arrows: false,
    // コンテンツ幅
    centerPadding: '100px',
    centerMode	: true,
  });
});

