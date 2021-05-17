// Code your solutions in this file

function writeCards (names, event) {
    const thanksCards = []

    for (let i=0; i < names.length; i++) {
        thanksCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return thanksCards;
}

function countDown (integer) {
    let num = 0
    while (num <= integer) {
        console.log(num++);
    }
}