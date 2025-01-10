// Task №3
class Dice extends EventEmitter {
    roll() {
        const result = Math.floor(Math.random() * 6) + 1;
        this.emit('rolled', result);
    }
}

const dice = new Dice();

dice.on('rolled', (result) => {
    console.log(`Кость выдала: ${result}`);
});

dice.roll();
dice.roll();
