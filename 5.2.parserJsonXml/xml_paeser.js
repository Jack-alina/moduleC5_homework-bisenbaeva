const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

resultObj = {};
resultObj.list = [];

function Student(firstName, secondName, age, prof, lang) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  this.prof = prof;
  this.lang = lang;
};

studentNode.forEach((element) => {
  const nameNode = element.querySelector("name");
  const firstNameNode = nameNode.querySelector("first");
  const secondNameNode = nameNode.querySelector("second");
  const ageNode = element.querySelector("age");
  const profNode = element.querySelector("prof");

  const langAttr = nameNode.getAttribute('lang');
  
  const result = {
  name: firstNameNode.textContent + " " + secondNameNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: langAttr,
  };
  
  student_ = new Student(firstNameNode, secondNameNode, ageNode, profNode, langAttr);
    
  resultObj.list.push(result);
});

console.log("resultObj", resultObj);