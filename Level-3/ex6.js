let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 13;

numbers.push(num);

if(numbers.includes(num)){
  console.log('Found it')
}else{
  console.log('Not found');
}