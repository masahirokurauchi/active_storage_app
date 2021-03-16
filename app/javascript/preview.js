document.addEventListener('DOMContentLoaded', function(){
  // 画像を表示するためのHTMLの要素を取得
  const ImageList = document.getElementById('image-list');
  
  // input要素の値に変更があった場合、関数が発火
  document.getElementById('message_image').addEventListener('change', function(e){
  	// 取得した画像の情報を変数に格納
    const file = e.target.files[0];
    
    // URLを取得
    const blob = window.URL.createObjectURL(file);

    // 画像を表示するためのdiv要素を生成
    const imageElement = document.createElement('div');
  });
});