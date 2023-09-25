// ---------------------1-------------------

const list = ["Mango", "Kiwi", "Poly", "Ajax"];
let string1 = "";

for (let i = 0; i < list.length; i++){
    string1 += list[i];

    if (i < list.length - 1) {
        string1 += ", ";
    }
}
console.log(string1);



let string2 = list.join(", ");
console.log(string2);  


// ---------------------2-------------------

const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];

// ---------------------3-------------------

let index = cards.indexOf("Card-3");
let newCards = cards.slice();
newCards.splice(index, 1);
console.log(newCards);

// ---------------------4-------------------

newCards.push("Card-6");
console.log(newCards);

// ---------------------5-------------------

index = newCards.indexOf("Card-4");
newCards[index] = "card4";
console.log(newCards);