function useArguments(){
    var sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    console.log(sum);
}
/* 一开始错误的原因是写成了sum += arguments，注意arguments的用法 */
// arguments 有一点类似数组，有一个自带属性length
// arguments[i]可以代表输入的参数