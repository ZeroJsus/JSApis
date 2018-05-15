function fearNotLetter(str) {
  var s = [];
  for(var i = 0;i < str.length-1;i++){
    if(i+1<=str.length-1){
      var sd = str[i+1].charCodeAt(0)-str[i].charCodeAt(0);
      if(sd>1){
        return String.fromCharCode((Number(str[i].charCodeAt(0))+1));
      }
    }
  }
  return undefined;
}
fearNotLetter("abce");