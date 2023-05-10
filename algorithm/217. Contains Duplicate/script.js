// third sulotion with 
var containsDuplicate = function (nums){
  let n = new Set(nums);
  if (n.size == nums.length) return false;
  return true;
}
console.log(containsDuplicate([1, 2, ,5,1,1,3]));

// 1 first sulotion with o(n2)
// var containsDuplicate = function (nums) {
//   // loop over the array
//   for (let i = 0; i < nums.length; i++) {
//     // make another loop to check if there is a duplicate
//     for (let j = 0; j < nums.length; j++) {
//       // if there is a duplicate and the index of the duplicate is not equal to the index of the number then return true
//       if (nums[i] == nums[j] && j != i) return true;      
//     }
//   }
//   // if there is no dupcialte return false
//   return false;
// };

// second sulotion with o(n) instade of o(n2) 
// var containsDuplicate = function (nums) {
//   // create a set
//   const n = new Set();
//   // loop through the array
//   for (let i = 0; i < nums.length; i++) {
//     // if the set has the number then return true
//       if (n.has(nums[i])) {
//           return true;
//       }
//       // add the number to the set
//       n.add(nums[i]);
//   }
//   // if there is no dupcialte return false
//   return false;
// };

// console.log(containsDuplicate([1, 2, 3]));
