// roman integer
function roman(n){
    let roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let sum = 0;
    for(let i = 0; i < n.length; i++){
        if(roman[n[i]] < roman[n[i+1]]){
            sum -= roman[n[i]];
        }else{
            sum += roman[n[i]];
        }
    }
    return sum;
}
console.log(roman('MCMXCIV'));