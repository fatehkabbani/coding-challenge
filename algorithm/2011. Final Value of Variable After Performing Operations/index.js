var finalValueAfterOperations = function (operations) {
    let X = 0;
    let sym;
    for (let i = 0; i < operations.length; i++) {
        operations[i] == "++X" || operations[i] == "X++" ? X++ : X--
    }
    return X
};