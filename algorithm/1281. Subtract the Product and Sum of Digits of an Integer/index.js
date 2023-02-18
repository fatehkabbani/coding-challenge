var subtractProductAndSum = function(n) {
    let total = 1;
    let plusTotal = 0;
    let number = Array.from(String(n) , Number)
    for(let i = 0; i < number.length; i++){
        total *= number[i];
        plusTotal += number[i];
    }
    return total - plusTotal;
};
console.log(subtractProductAndSum(234));