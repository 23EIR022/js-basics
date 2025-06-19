function add(a,b){
    console.log(a+b);
}
let newObject = {
    name: "Dhanu",
    age: 20,
    func: (a,b) => {
        console.log(a+b);
    }
};

console.log(newObject.name);
console.log(newObject.age);
newObject.func(2,3);

    let person = {
        name: "Dhanu",
        age: 20,
    };
        let newDetails ={
            ...person,
        role: "developer",
        company: "ABC pvt Ltd",
        isMarried: false,
        salary: 3.50,
    };
console.log(newDetails);