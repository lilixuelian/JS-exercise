function uniqueNums(n){
  var result = [];
  var i;
  
  do{
    var num = 2 + Math.round(Math.random() * 30);
    
    if(result.indexOf(num) == -1){
    result.push(num);
    }
  }while(result.length < n);
  
  return result;
  
}