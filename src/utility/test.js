function testWhile() {
  let arr = ['a', 'b', 'c', 'd', 'e'];
  // let index = 0;

  while (arr.length > 0) {
    arr.pop();
    console.log(arr.length);
  }
}

testWhile();
