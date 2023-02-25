var finalValueAfterOperations = function (operations) {
    let x = 0; // x is the number we are incrementing or decrementing
    let sym; // symbol is the operation we are performing on x
    for (let i = 0; i < operations.length; i++) {
        operations[i] == "++X" || operations[i] == "X++" ? x++ : x-- // if the operation is a ++ or X++, we are incrementing x. If the operation is a -- or X--, we are decrementing x.
    }
    return x  // return the final value of x
};