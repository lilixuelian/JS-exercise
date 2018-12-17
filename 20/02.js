const digitCounts = function (k, n) {


    var str, times = 0, i;

    str = "0";

    for(i = 1; i <= n; i++){
        str += i;
    }

    var b = String(str).split("");

    for(i = 0; i < b.length; i++){
        if(b[i].indexOf(k) != -1){
            times++;
        }
    }

    return times;


}