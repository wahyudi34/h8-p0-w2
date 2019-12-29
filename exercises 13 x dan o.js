function xo(str) {
    var bagX = ''
    var bagO = ''
    for(var i=0; i<str.length; i++) {
        if(str[i]==='x') {
            bagX+=str[i]
        } else {
            bagO+=str[i]
        }
    }
    if(bagX.length === bagO.length) {
        return true
    } else {
        return false
    }
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true