// revers string using in place algorithm
// input: ["h","e","l","l","o"]
// output: ["o","l","l","e","h"]

var reverseString = function (s) {
    // set i as 0 and j as s.length - 1 = 4
    let i = 0;
    let j = s.length - 1;
    // loop through the string
    for(; i < j; i++, j--) {
        // add a temp variable to store the value of s[i]
        let temp = s[i];
        // replace s[i] with s[j]
        s[i] = s[j];
        // add the value of temp to s[j]
        s[j] = temp;
    }
    // return the reversed string
    return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));
