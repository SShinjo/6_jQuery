$(function() {
/* this 使用
	$('.box1').on('click', function() {
		$(this).slideUp();
	});
*/

	$('button').on('click', function() {
		$('ul').children().css('color','red');
	});
});

/*
<this>
「クリックされた要素」を指している
今回：box1の正方形がクリックされた時、this（クリックされた要素）のみslideUpする

<children>
HTML要素直下の全ての子要素を取得する
今回：buttonがクリックされた時、ul要素の子要素（li要素）のcolorがredになる

*/