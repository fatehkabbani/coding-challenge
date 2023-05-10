
var isAnagram = function(s, t) {
    // store the string in an array and sort it

    // first array
    let firstStrArray = [...t].sort();
    
    // second array
    let secondStrArray = [...s].sort()
    
    // if the sorted array is equal to the sorted string then return true
    if(firstStrArray.join("")== secondStrArray.join("")) return true
    // if not return false
    return false
};

console.log(isAnagram("anagram", "nagaram"));