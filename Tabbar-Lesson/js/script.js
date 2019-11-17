$(function() {

	$('#tab-contents .tab[id != "tab1"]').hide();

	$('#tab-menu a').on('click', function() {
		$("#tab-contents .tab").hide();
		$("tab-menu .active").removeClass("active");
		$(this).addClass("active");
		$($(this).attr("href")).show();
		return false;
	})
});


/*
1)ある値に等しくない要素を非表示にする
$('#tab-contents .tab[id != "tab1"]').hide();
$('要素[属性]')
$('要素[属性 = "値"]') 今回は$('要素[属性 != "値"]')
ー＞初期設定で表示されるのはTAB1のコンテンツだけになる。

２）クリックされた時の動作設定
$('#tab-menu a').on('click', function() {
  // イベント発生時に行われる処理
});

$($(this).attr("href")).show();
.attr()はHTM要素の属性を取得したり設定できるメソッド。
ー＞クリックした要素のhref情報を取得している

*/
