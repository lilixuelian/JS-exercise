function useArguments(){
    var sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    console.log(sum);
}