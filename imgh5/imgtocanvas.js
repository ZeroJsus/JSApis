function getBase64(){
	return new Promise(function(resolve, reject){
	  var canvas = document.getElementById('cancas');
	  var ctx = canvas.getContext('2d')
	  var image = new Image();
	  image.crossOrigin = '';
	  image.src = './test.jpg';
	  image.onload = function(){
	  	ctx.drawImage(image, 100, 100);
			resolve(canvas.toDataURL());
	  }
	})
}
getBase64().then(function(res){
  console.log(res)
})