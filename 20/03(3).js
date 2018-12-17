function duplicates(arr) {
    var result = [];
    var i;
    
    arr.sort();
    
    for(i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i + 1]){
        result.push(arr[i]);
      }
    }
    return result;
  }