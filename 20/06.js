const intersection = function (nums1, nums2) {
    var result = [];
    var array = [];

    for(let num of nums1){
        nums2.map(function(item){
            if(num == item){
                array.push(item);
            }
        })
    }
    array.map(function(item){
        if(result.indexOf(item) == -1) {
            result.push(item);
        }
    })
    return result;
}
