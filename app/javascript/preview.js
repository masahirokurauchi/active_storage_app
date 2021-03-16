// 画像投稿か編集画面なら
if (document.URL.match( /new/ ) || document.URL.match( /edit/ )) {
	document.addEventListener('DOMContentLoaded', function(){
	  // 画像を表示するためのHTMLの要素を取得
	  const ImageList = document.getElementById('image-list');

	  // 選択した画像を表示する関数
       const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
       const imageElement = document.createElement('div');

       // 表示する画像を生成
       const blobImage = document.createElement('img');
       blobImage.setAttribute('src', blob);
       // 生成したHTMLの要素をブラウザに表示させる
       imageElement.appendChild(blobImage);
       ImageList.appendChild(imageElement);
      };
	  
	  // input要素の値に変更があった場合、関数が発火
	  document.getElementById('message_image').addEventListener('change', function(e){
	  	// 画像が表示されている場合のみ、すでに存在している画像を削除する
        const imageContent = document.querySelector('img');
        if (imageContent){
          imageContent.remove();
        }

	  	// 取得した画像の情報を変数に格納
	    const file = e.target.files[0];
	    
	    // URLを取得
	    const blob = window.URL.createObjectURL(file);

        // call createImageHTML
	    createImageHTML(blob);
	  });
	});
}