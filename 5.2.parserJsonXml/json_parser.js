const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`
const data = JSON.parse(jsonString);
const worker = data.list;

const resultObj = {};
resultObj.list = [];

worker.forEach((elememt) => {
  const result = {
    name: elememt.name,
    age: elememt.age,
    prof: elememt.prof,
  };  
  resultObj.list.push(result);
});

console.log('resultObj', resultObj);