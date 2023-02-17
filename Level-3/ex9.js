let mainArray = [];
let counter = 9;
for(let i = 0; i < 3; i++){
  subArray = [];
  for(let h = 0; h < 3; h++){
    subArray.push(counter);
    counter--;
  }
  mainArray.push(subArray);
}
console.log(mainArray);