// creating a JSON
let json = `{
    "data": "Click Here",
    "size": 36,
    "style": "bold",
    "name": "text1",
    "hOffset": 250,
    "vOffset": 100,
    "alignment": "center",
    "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
}`;

// Parsing the JSON to Object
let obj = JSON.parse(json);

// looping using for in
console.log("looping using for in");
for(const key in obj) {
    console.log(`key: ${key}, value: ${obj[key]}`)
}

// looping using forEach
console.log();
console.log("looping using forEach");
Object.entries(obj).forEach((entry) => {
    const [key, value] = entry;
    console.log(`key: ${key}, value: ${value}`);
});

// I have analysed and come to know that there is no way of looping using for and for of in object,
// but can be done in the array of objects

let jsonArrayStr = `[    
    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"name":"John", "email":"john@gmail.com", "age":33},    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
]`;

let arr = JSON.parse(jsonArrayStr);

// looping using for
console.log();
console.log("looping using for");
for(let i = 0; i < arr.length; i++) {
    Object.entries(arr[i]).forEach((entry) => {
        const [key, value] = entry;
        console.log(`key: ${key}, value: ${value}`);
    });
}

// looping using for in
console.log();
console.log("looping using for in");
for(let item of arr) {
    Object.entries(item).forEach((entry) => {
        const [key, value] = entry;
        console.log(`key: ${key}, value: ${value}`);
    });
}