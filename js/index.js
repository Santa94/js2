
/*function fib(n) {
let first = 1;
let second= 1;
for  ( i=3 ; i <= n ; i++ ) {
    let next = first + second ;
    first=second;
    second=next;
    
}
return second ;
}
*/
const enterNumber= prompt('Enter Number') ;
function fib(n) {
  let first = 1,
    second = 1;
  for (let i = 3; i <= n; i++) {
    let next = first + second;
    first = second;
    second = next;
  }
  return second;
}
alert( fib(enterNumber) );
