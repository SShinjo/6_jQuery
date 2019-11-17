$(function() {

	$('.menu-trigger').on('click', function() {
		$(this).toggleClass('active');
		$('#sp-menu').fadeToggle();
		return false;
	})
});

/*
toggleClass()でclass属性を切り替える
class属性の追加と削除が交互に行われる

fadeToggle()でフェードイン・フェードアウトを切り替える
fadeInとfadeOutが交互に実行されるようになる

*/
