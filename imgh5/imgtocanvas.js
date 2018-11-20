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


// promise ios10.3+ 
// function getBase64(file){
// 	return new Promise(function(resolve, reject){
// 		let reader = new FileReader();
// 		reader.readAsDataURL(file);
// 		reader.addEventListener('load', function(){
// 			resolve(reader.result);
// 		})
// 		reader.addEventListener('error', function(error){
// 			reject(error);
// 		})
// 	})
// }

// getBase64()
// .then(function(base64){
// 	console.log(base64)
// })
// .catch(function(error){
// 	console.error(error)
// })