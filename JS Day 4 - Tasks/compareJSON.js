// comparing two JSON have same properties without order
let obj1 = {
    name: "Person 1",
    age: 5
};

let obj2 = {
    name: "Person 2",
    age: 5
}

Object.entries(obj1).forEach((entry) => {
    const [key, value] = entry;
    if(typeof obj2[key] != 'undefined')
        console.log(`Both Object have the key: ${key}`);
    else
        console.log(`Key ${key} not found in obj2`)
});