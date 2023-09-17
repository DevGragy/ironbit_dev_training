const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
    .then((response) => response.text())
    .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Add your code here
    let catData = JSON.parse(catString);
    for (let obj of catData) {
        if (obj.name === catData[catData.length - 2].name) {
            motherInfo += `${obj.name}`;
        } else if (
            obj.name !== catData[catData.length - 1].name &&
            catData[catData.length - 2].name
        ) {
            motherInfo += `${obj.name}, `;
        } else {
            motherInfo += ` and ${obj.name}.`;
        }
    }

    for (let i = 0; i < catData.length; i++) {
        total += catData[i].kittens.length;

        for (let j = 0; j < catData[i].kittens.length; j++) {
            if (catData[i].kittens[j].gender === "m") {
                male++;
            }
        }
    }
    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
