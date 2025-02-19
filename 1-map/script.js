const array = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 1, name: "Вася"},
];

const arrayId  = array.map(item => item.id);
const set = new Set(arrayId);

let result = [];
set.forEach(itemSet => {
  const element = array.find(itemAr => itemAr.id == itemSet);
  result.push(element);  
})

console.log(result);
