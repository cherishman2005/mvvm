function isNumber(val) {
  let regPos = /^\d+(\.\d+)?$/; //非负浮点数
  let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if(regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }
}

isNumber("123");  //true
isNumber("12.3"); //true
isNumber("12..3"); //false
isNumber("哈哈"); //false

isNumber("a123");  //true



function isNumber(val) {
  let regPos = /^\d+(\.\d+)?$/; //非负浮点数
  if(regPos.test(val)) {
    return true;
  } else {
    return false;
  }
}