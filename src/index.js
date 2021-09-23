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

    var arr = [];    
    for(var i =999; i>100; i--){
        for(var j = 999; j>100; j--){
            var mul = j*i;
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
    var P= [2], n= 3, div, i, limit,isPrime;
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
console.log(nthPrime(10001))