const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
    const str0 = strings[0]; // "That "
    const str1 = strings[1]; // " is a "
    const str2 = strings[2]; // "."

    const ageStr = ageExp > 99 ? "centenarian" : "youngster";

    // We can even return a string built using a template literal
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.

console.log`Hello`; // [ 'Hello' ]
console.log.bind(1, 2)`Hello`; // 2 [ 'Hello' ]
new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

function recursive(strings, ...values) {
    console.log(strings, values);
    return recursive;
}
recursive`Hello``World`;
// [ 'Hello' ] []
// [ 'World' ] []

function template(strings, ...keys) {
    return (...values) => {
        const dict = values[values.length - 1] || {};
        const result = [strings[0]];
        keys.forEach((key, i) => {
            const value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join("");
    };
}

const t1Closure = template`${0}${1}${0}!`;
// const t1Closure = template(["","","","!"],0,1,0);
t1Closure("Y", "A"); // "YAY!"

const t2Closure = template`${0} ${"foo"}!`;
// const t2Closure = template([""," ","!"],0,"foo");
t2Closure("Hello", {foo: "World"}); // "Hello World!"

const t3Closure = template`I'm ${"name"}. I'm almost ${"age"} years old.`;
// const t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
t3Closure("foo", {name: "MDN", age: 30}); // "I'm MDN. I'm almost 30 years old."
t3Closure({name: "MDN", age: 30}); // "I'm MDN. I'm almost 30 years old."
