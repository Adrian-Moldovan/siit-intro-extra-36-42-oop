console.log('js file loaded');

let t1 = new TurtlePlayer('Thunder', 1);
let t2 = new TurtlePlayer('Flash', 5);
let dice = new Dice(6);

for (let i = 1; i < 11; i++) {
    console.log('');
    console.log('== ROUND ' + i + ' STARTS ==');

    t1.move(dice.roll());
    t2.move(dice.roll());
}

console.log(t1);
console.log(t2);