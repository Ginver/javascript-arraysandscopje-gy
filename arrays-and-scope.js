


// --------------------------
// Opdracht 1: Check hoeveel studenten hun studie cum laude hebben gehaald (8 of hoger) en log dit in de console.
// verwacht antwoord: 6
// --------------------------
let grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let aantal = 0;
for (let i=0; i < grades.length; i++){
    if (i >= 8){
       aantal +=1;
    }
        }
console.log(aantal);


// --------------------------
// Opdracht 2: Check welke waarde in de array het hoogste is, en log dit in de console
// verwacht antwoord: 9
// --------------------------
let grades1 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
console.log(Math.max(...grades1));


// --------------------------
// Opdracht 3: Tel alle waardes van de array bij elkaar op en bereken het gemiddelde. Log dit in de console.
// verwacht antwoord: 6.642857142857143
// --------------------------

let grades2 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let total = 0;
for (let i=0; i < grades2.length; i++){
    total += grades2[i];
}
let avg = total / grades2.length;
console.log(avg);


