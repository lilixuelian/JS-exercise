function duplicates(arr) {
        var result[];
    
        arr.map(funtion(item){
            if(arr.indexOf(item) != arr.lastIndexOf(item) && result.indexOf(item) == -1){
                result.push(item);
            }
        }
        return result;
    
  }