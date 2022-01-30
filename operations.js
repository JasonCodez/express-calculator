// finds the average number from the sum of all numbers given
function mean(nums) {
   let total = 0;
   for (let num of nums) {
      total += num;
   }
   return total / nums.length;
}

function median(nums) {
   if(nums.length % 2 === 0) {
      return (nums[nums.length/2 - 1] + nums[nums.length/2]) / 2;
   } else {
      return nums[(nums.length - 1) / 2];
   }
}

function mode(nums) {
   const obj = {};
   nums.forEach(num => {
      if(!obj[num]) {
         obj[num] = 1;
      } else {
         obj[num] += 1;
      }
   })
   const values = Object.values(obj);
   const max = Math.max.apply(Math, values);
   for(key in obj){
      if(obj[key] === max) {
         return +[key];
      }
   }
}



module.exports = { mean, median, mode }