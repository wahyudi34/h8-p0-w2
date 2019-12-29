function konversiMenit(menit) {
  var sisa = menit-60
  var sisa2 = menit-120
  if(menit<60) {
    return 0 + ':' + menit
  } else if(menit>60 && sisa<10) {
    return 1 + ':' + 0 + sisa
  } else if(menit>60 && menit<120 && sisa>10) {
    return 1 + ':' + sisa
  } else if(menit>=120) {
    return 2 + ':' + 0 + sisa2
  }
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00