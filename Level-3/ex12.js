//let arr = [1, 2, 3, 4];
//let arr = [4, 1, 1, 2];
let arr = [1, 2, 1, 2];

function reverseAry(arr){
  let output = [];
  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] === 1) output.push('one');
    else if(arr[i] === 2) output.push('two');
    else if(arr[i] === 3) output.push('three');
    else output.push('four');
  }
  return output
}
let result = reverseAry(arr);
console.log(result);