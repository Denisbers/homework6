
function printDivisors(n) {
    for (a = 1; a <= n; a++)
        if (n % a == 0)
            console.log(a + '');
}

printDivisors(2048);



/*
let n = 2048, divisor = [], a = 1;

while (a <= n) {
    if (n % a === 0) divisor.push(a);
    a = a + 1;
}
console.log(divisor);
*/


// Дано натуральное число. Найти и вывести на страницу все его делители.
