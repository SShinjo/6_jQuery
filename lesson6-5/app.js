$(function() {
	$('.box1').slideDown(function() {
		$('.box1').css({
			'background-color': '#0000ff',
			'width': '200px',
			'height': '100px'
		}).slideUp(1000);
	})
});


//$('セレクタ').css('background-color','#0000FF');
//上から下にスライド　.slideDown(); cssでdisplay:noneを設定
//下から上にスライド　.slideUp(); 隠すメソッドなのでdisplay:noneはつけない
//jQueryで表示する　.show();
//非表示にする hide(); cssで設定したオブジェクトが一瞬だけ見える

//秒数の単位はミリ秒　１秒＝1000