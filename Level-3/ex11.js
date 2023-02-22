function product(arr){
  let output = []
  for(let i = 0; i < arr.length; i++){
    console.log(i)
    output.push(arr[i] * 5);
  }
  return output;
}

let result = product([1, 2, 3, 4, 5]);
console.log(result);