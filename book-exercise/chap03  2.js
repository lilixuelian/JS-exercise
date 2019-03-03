function isEven(x){
  
  if(x == 1){
    return false;
  }
  if(x == 2){
    return true;
  }
  return isEven(x - 2);
}
