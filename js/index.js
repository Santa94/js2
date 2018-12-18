const enterNumber = prompt('Enter Number');

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
alert(fib(enterNumber)); 



/*let n=15,a,b;
let fib = (1,1)
fib.push(1,1) 
while (fib.length < n) {
    a=fib.length[n - 1]
    b=fib.length[n - 2]
    fib.push(a+b)
}

for (let i = 0; fib.length > i; i++) {
    alert(fib[i]);
}
