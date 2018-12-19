const enterNumber = parseFloat(prompt('Enter Number'));

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

const enterNumber1 = parseFloat(prompt('Enter Number2'));

let n = 15;
let fibs = Array(1, 1);
fibs.push(1, 1)
while (fibs.length < n) {
    a = fibs.length[n - 1]
    b = fibs.length[n - 2]
    fibs[fibs.length] = fibs[a] + fibs[b]
    fibs.push(a + b)
}

for (let i = 0; fib.length > i; i++) {
    alert(fib(enterNumber1));
}
