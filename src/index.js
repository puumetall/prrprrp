let Vue = require('vue/dist/vue.common.dev');
new Vue ({
    el: '#app',
    data: {
        greeting: 'hello vue!',
    }
});
let sum = 0;
for (let i = 0; i <= 100; i++) {
  
    if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
    }
}
console.log(sum);

function fibonazi(max) {
    let a = 1, b = 2;
    let sum = 0;
    while (a <= max) {
        if (a % 2 === 0) {
            sum += a;
        }    
        let c = a + b;
        a = b;
        b = c;
    }
    return sum;
}
 
console.log(fibonazi(4000000));

function largestPalindrome(){

    let arr = [];    
    for(let i =999; i>100; i--){
        for(let j = 999; j>100; j--){
            let mul = j*i;
            if(isPalin(mul)){
                arr.push(j * i);
            }
        }
    }

    return Math.max.apply(Math, arr);
};

function isPalin(i){
    return i.toString() == i.toString().split("").reverse().join("");
};

console.log(largestPalindrome());

function nthPrime(nth){
    let P= [2], n= 3, div, i, limit,isPrime;
    while(P.length<nth){
        div= 3, i= 1;
        limit= Math.sqrt(n)+1;
        isPrime= true;
        while(div<limit){
            if(n%div=== 0){
                isPrime= false;
                div= limit;
            }
            else div= P[i++] || div+ 2;
        }
        if(isPrime) P.push(n);
        n+= 2;
    }
    return P[P.length-1];
};
console.log(nthPrime(10001));

let people = [
    {name: 'vello', age: 34},
    {name: 'martin', age: 17},
    {name: 'kaspar', age: 64},
    {name: 'manivald', age: 58},
    {name: 'maria', age: 23},
    {name: 'virginia', age: 14},
    {name: 'malle', age: 83},
    {name: 'kati', age: 26},
];
const findAverageAge = (arr = []) => {
    const { sum, count } = arr.reduce((acc, val) => {
       let { sum, count } = acc;
       sum += val.age;
       count++;
       return { sum, count };
       }, {
          sum: 0, count: 0
    });
    return (sum / (count || 1));
 };
 console.log(findAverageAge(people));
