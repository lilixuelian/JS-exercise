const extractStr = (str) => {
  let result = [],
      pattern = /\:+(\w*)\.+/g,
      temp = null
  while(temp = pattern.exec(str)){
    result.push(temp[1])
  }
  return result
}
