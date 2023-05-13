var groupAnagrams = (strs) => {
    let obj = {};
    for(let i of strs){
        let key = i.split('').sort().join('');
        !obj[key] ? obj[key] = [i] : obj[key].push(i);
    }
    return Object.values(obj);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
