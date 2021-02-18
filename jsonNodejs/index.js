const bioData={
    name: "Shashwat Vashimkar",
    age: 24,
    contact: 9838341202
};

// console.log(bioData);
// console.log(bioData.age);
// console.log(bioData.name);

const jsonData=JSON.stringify(bioData);  // stringify method obj to json
console.log(jsonData);
// console.log(json.name);   wil gice error

const objData=JSON.parse(jsonData);// parse method json to obj
console.log(objData);