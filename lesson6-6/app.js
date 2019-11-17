$(function() {
	$('.box1').on('click', function() {
		$('.box1').addClass('box1-ext');
	});

	$('.box1').mouseout(function() {
		$('.box1').removeClass('box1-ext');
	});
});


/*
イベントの記述
$('.セレクタ名').イベント名(function(){
        　イベント発生時に行われる処理
});

「mouseover」イベント : マウスが乗った時のイベント
「mouseout」イベント：マウスが離れた時のイベント

/////////////////

マウスオーバー時のCSS（class）をあらかじめ書いておく
->cssをいちいち書かなくてすむ
->クラス属性の追加・解除を行う

クラスの追加 addClass('クラス名')
クラスの解除 removeClass('クラス名')

///////////////

マウスクリック時のイベント　・・・「click」イベント
$('.セレクタ名').on('click',function() {
        　イベント発生時に行われる処理
});
*/