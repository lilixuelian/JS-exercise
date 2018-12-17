function duplicates(arr) {
    var result = []
        arr.map(function(item){
            if(result.indexOf(item) == -1) {
                result.push(item);
            }
        })
        return result;
    }