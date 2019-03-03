const digitCounts = function (k, n) {

    var str, times = 0, i;

    str = "0";

    for(i = 1; i <= n; i++){
        str += i;
    }

//这段代码的意思是让str成为一个字符串0123456789101112
//如果按照你的思路一个一个判断的话，那下面的内容应该也放在for循环里，不然它判断的只有最后那个数

    var b = String(str).split("");

    for(let element of b){
        if(element.indexOf(k) != -1){
            times++;
        }
    }

    return times;
}
//思路：
//　　１、要想判断11是否含有１，要把11拆分，但是11用 number 的方法拆开太麻烦
//　　２、利用 string 的方法或者正则的方法拆开，然后一位一位地看
//　　３、使用 indexOF()　方法查看它是否出现

//　split()方法：　用于把一个字符串分割成“字符串数组”（注意分成数组了！！！）
// 如果把空字符串(" ")用作separator那么stringObject中的每个字符串都会被分割

//　String()方法：　把函数对象的值转化为字符串