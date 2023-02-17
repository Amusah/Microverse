let arr = [[1,2,3], [4,5,6], [7,8,9]];

for(let i = arr.length - 1; i >= 0; i--){
  //console.log(arr[i]);
  for(let h = arr[i].length - 1; h >=0; h--){
    console.log(arr[i][h]);
  }
}