// Task №1
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('click', () => {
    console.log('Первый обработчик: Клик!');
});

emitter.on('click', () => {
    console.log('Второй обработчик: Еще один клик!');
});

emitter.emit('click');

// - - -

// Task №2
const emitter2 = new EventEmitter();

const errorHandler1 = () => {
    console.log('Первый обработчик: Произошла ошибка!');
};

const errorHandler2 = () => {
    console.log('Второй обработчик: Это тоже ошибка!');
};

emitter2.on('error', errorHandler1);
emitter2.on('error', errorHandler2);

emitter2.removeListener('error', errorHandler2);

emitter2.emit('error');
