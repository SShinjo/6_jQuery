$(function() {
	$('#btn').on('click', function() {
		//入力された都市名でWebAPIに天気情報をリクエスト
	$.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "9be86bcea5db9cb183dbee32ce117157",
      dataType : 'jsonp',
    }).done(function (data) {
    	//通信成功

    	 // 位置
        $('#place').text(data.name);
        // 最高気温
        $('#temp_max').text(data.main.temp_max);
        // 最低気温
        $('#temp_min').text(data.main.temp_min);
        //　湿度
        $('#humidity').text(data.main.humidity);
        //　風速
        $('#speed').text(data.wind.speed);
        // 天気
        $('#weather').text(data.weather[0].main);
        // 天気アイコン
        $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        $('img').attr("alt",data.weather[0].main);

    }).fail(function (data) {
    	//通信失敗
    	alert('通信に失敗しました.');
    });
	});
});

/*

$.ajax()は、Ajaxを実装するメソッド

urlオプション（パラメータ）
ー＞APIにリクエストするURLを指定する。
$('#cityname').val() で#citynameの値を受け取り、URLに結合させている
ー＞val()はHTMLのvalue属性を取得するメソッド

dataTypeオプション（パラメータ）
ー＞レスポンスとして取得したいデータの型を指定
今回は、Jsonで受け取りたいので、dataType : 'jsonp' とする。

.done()ー＞通信に成功した場合
Web APIが正常に呼び出せたということ
.fail()ー＞通信に失敗した場合

dataは任意の変数名: 引数内に取得した結果が入る

$('#id名').text(JSONから欲しい値)
ー＞指定したidのテキストをJSONから受け取った値に変換する
data.JSONのオブジェクト名.プロパティ名
*/

