// ARRAY Y METODOS

const arr1 = [1, 2, 3];
arr1.push(4);
console.warn("Array 1", arr1);

const arr2 = [1, 2, 3];
arr2.pop(arr2);
console.warn("Array 2", arr2);

const arr3 = [1, 2, 3];
arr3.shift();
console.warn("Array 3", arr3);

const arr4 = [1, 2, 3];
arr4.unshift(0);
console.warn("Array 4", arr4);

const arr5 = [1, 2, 3];
arr5.splice(1, 0, "a", "b");
console.warn("Array 5", arr5);

const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const newArr1 = arr6.concat(arr7);
console.warn("New Array 1", newArr1);

const arr8 = [1, 2, 3, 4, 5];
const newArr2 = arr8.slice(1, 4);
console.warn("New Array 2", newArr2);

const arr9 = [1, 2, 3, 4, 5];
arr9.forEach((el) => {
    console.warn("Array 9 Element ->", el);
});

const arr10 = [1, 2, 3, 4, 5];
const arrayMapped = arr10.map((el) => el * 2);
console.warn("Map", arrayMapped);

const arr11 = [1, 2, 3, 4, 5];
const arrayFiltered = arr11.filter((el) => el % 2 === 0);
console.warn("Filter", arrayFiltered);

const arr12 = [1, 2, 3, 4, 5];
const arrayReduced = arr12.reduce((acc, el) => acc + el, 0);
console.warn("Reduce", arrayReduced);

// OBJETOS
const person = {
    name: "Elias",
    age: 25,
    city: "Mexico",
};
const props = Object.keys(person);
console.warn("Object Props", props);

const values = Object.values(person);
console.warn("Object Values", values);

const entries = Object.entries(person);
console.warn("Object Entries", entries);

const emptyObject = {};
const prop1 = {a: 1};
const prop2 = {b:2}
const prop3 = {c:3}
Object.assign(emptyObject, prop1, prop2, prop3)
console.warn('Non empty Object', emptyObject)

const newPerson = {}
Object.defineProperty(newPerson, 'name', {
    value: 'Juan', 
    writable: false,
    enumerable: true
})

console.warn('New Person Name', newPerson.name)
newPerson.name = 'Dan'
console.warn('New Person Name... Again', newPerson.name)

const anotherPerson = {
    name: 'Dev',
    age: 30
}
console.warn('Has Name Prop', anotherPerson.hasOwnProperty('name'))
console.warn('Has Age Prop', anotherPerson.hasOwnProperty('age'))
console.warn('Has City Prop', anotherPerson.hasOwnProperty('city'))

const multipleProps = {
    prop1: {
        prop2: {
            prop3: 'text'
        }
    }
}

const multiplePropsValue = multipleProps.prop1?.prop2?.prop3
console.warn('Value from obj with multiple props', multiplePropsValue)

const multiplePropsMethod = multipleProps.method?.()
console.warn('Has a method', multiplePropsMethod)