$(function() {

    $('#back a').on('click', function() {
        $('body, html').animate({
            scrollTop:0
        }, 800);
        return false;
    });
});

/*
$('#back a').on('click', function(){
  // #back内の<a>タグがクリックされたときの処理
});

$('セレクタ名').animate({　　　
      変化対象のプロパティ名:変化値　　
    }, アニメーションの動作時間);　　

ページ全体に対して処理を実行
$('body, html') : body要素またはhtml要素

*/

