const compose = (...rest) => {
  return (parameter) => {
    for(let i = rest.length - 1; i>=0 ;i--){
      parameter = rest[i](parameter) 
    }
    return parameter
  }
}