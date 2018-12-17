function duplicates(arr) {
    var a = [], result = [];
   for(var i = 0; i < arr.length; i++) {
       if(a[arr[i]] == undefined) {
           a[arr[i]] = 1;
           continue;
       }
       a[arr[i]]++;
   }
    for(var i = 0; i < a.length; i++) {
        (a[i] > 1) && result.push(i);
    }
    return result;
}