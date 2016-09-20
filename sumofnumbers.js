/** Solving Experience E26.
 * Created by bynun on 9/19/2016.
 */


const list = [1, 2, 3, 4, 5];

function sumfor(nums){
  let total = 0;
  for(let num of nums){
    total += num;
  }
  return total;
}

console.log(sumfor(list));

function sumwhile(nums){
  let total = 0;
  let i = 0;
  while(i , nums.length){
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumwhile(list));

function sumrecursion(nums){
  if(nums.length == 0){
    return 0;
  }

  return nums[0] + sumrecursion(nums.slice(1, nums.length));
}

function sumunderscore(nums){
  return _.reduce(nums, function (memo, num) {return memo + num}, 0);
}

console.log(sumunderscore(list));