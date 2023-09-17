// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
//     bio: function () {
//         console.log(
//             `${this.name[0]} ${this.name[1]} is ${this.age} years old.`
//         );
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     },
// };

// person.name;
// person.name[0];
// person.age;
// person.bio();
// person.introduceSelf();

// // TEST YOUR SKILLS EX 1
// const cat = {
//     name: "Bertie",
//     breed: "Cymric",
//     color: "white",
//     greeting: function () {
//         console.log("Meow!");
//     },
// };

// const catName = cat["name"];
// cat.color = "black";
// cat.greeting();

// let para1 = document.createElement("p");
// let para2 = document.createElement("p");

// para1.textContent = `The cat's name is ${catName}.`;
// para2.textContent = `The cat's color is ${cat.color}.`;

// section.appendChild(para1);
// section.appendChild(para2);

// // TEST YOUR SKILLS EX 2
// const bandObject = {
//     name: "Cartel de Santa",
//     nationality: "Mexican",
//     genre: "Hip-hop/rap",
//     members: 3,
//     formed: 1999,
//     split: false,
//     albums: [
//         {
//             name: "Vol. II",
//             released: 2004,
//         },
//         {
//             name: "Vol. IV",
//             released: 2008,
//         },
//     ],
// };
// let bandInfo = `Lets dive into a small bio of ${bandObject.name}, they're nationality are ${bandObject.nationality}, they're been active since ${bandObject.formed}, the style of the band is ${bandObject.genre}. Their first album was ${bandObject.albums[0]?.name} and the release date of that album was on ${bandObject.albums[0]?.released}`;

// // Don't edit the code below here

// let para1 = document.createElement("p");
// para1.textContent = bandInfo;
// section.appendChild(para1);

// // TEST YOUR SKILLS EX 3
// const cat = {
//     name: "Bertie",
//     breed: "Cymric",
//     color: "white",
//     greeting: function () {
//         console.log(`Hello, said ${this.name} the ${this.breed}.`);
//     },
// };

// const cat2 = {
//     name: "Pepe",
//     breed: "Russian Blue",
//     color: "silver",
//     greeting: function () {
//         console.log(`Hello, said ${this.name} the ${this.breed}.`);
//     },
// };

// cat.greeting();
// cat2.greeting();

// TEST YOUR SKILLS EX 4
class DRYCat {
    constructor(name, breed, color) {
        this._name = name;
        this._breed = breed;
        this._color = color;
    }
    greeting = function () {
        return `Hello, said ${this._name} the ${this._breed}.`
    };
}

const berth = new DRYCat('Berth', 'Russian Blue', 'Silver')
const elf = new DRYCat('Elfie', 'Aphrodite Giant', 'Ginger')

console.log(berth.greeting())
console.log(elf.greeting())