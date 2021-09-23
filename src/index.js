for(let i = 0 ; i<10 ; i++){
    console.log(i)
}

let tups = ['lime','cold','ice']
for(let j = 0; j<tups.length; j++) {
    if (tups[j] === 'lime') {
        console.log('Mulle meeldib' + ' ' + tups[j])
    } else {
        console.log('Mulle ei meeldi' + ' ' + tups[j])
    }
}
let num = 2;
while(num<1000000) {
    num*=2;
    console.log(num)
}
num = 1;
while(num>1) {
    console.log('while:' + num);
}
do {
    console.log('do:' + num);
}while(num>1);

let fruits = ['apple','cherry','pear'];
fruits.forEach((fruit, key)=> {
    fruits='baah';
    console.log('key:' + key + 'value:' + fruit)
});

let newFruits = [fruits].map((fruit, key)=> {
    return fruit+key;
});

console.log(newFruits);

let nums = [1,2,3,4,5,6,7,8,9];
let sum = nums.reduce((sum, value)=>{
    return sum + value;
});

console.log(sum);
nums = [5,2,3,7,4,1,9,6,8];
let sortedNums = nums.sort((a,b) => {
    if(a>b){
        return 1;
    } else if(a<b) {
        return -1;
    }
    return 0;
});
console.log(sortedNums);
