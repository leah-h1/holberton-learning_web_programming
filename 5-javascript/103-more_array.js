var num= printEven(101)
function printEven(num) {
  for (let i=0; i<num; i++)  {
    if(i % 2 === 0) {
      console.log(i);
    }
  }
}
