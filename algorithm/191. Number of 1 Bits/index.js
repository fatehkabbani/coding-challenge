var hammingWeight = function(n) {
    let sum = 0;
for(let i = 0; i < 32; i++){
    sum += n & 1;
    n = n >>> 1;
}
    return sum;
};
console.log(hammingWeight(00000000000000000000000000001011));