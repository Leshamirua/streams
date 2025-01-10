const fs = require('fs');

const buffer = Buffer.from('Hello, Node.js!');

console.log(buffer.toString());

fs.writeFile('output.txt', buffer, (err) => {
    if (err) throw err;
    console.log('Текст сохранен в файл output.txt');
});

// - - -

const randomBuffer = Buffer.alloc(20);
for (let i = 0; i < randomBuffer.length; i++) {
    randomBuffer[i] = Math.floor(Math.random() * 256);
}

fs.writeFile('randomData.txt', randomBuffer, (err) => {
    if (err) throw err;
    console.log('Случайные данные сохранены в randomData.txt');

    fs.readFile('randomData.txt', (err, data) => {
        if (err) throw err;
        console.log('Прочитанные данные из файла:', data);
    });
});

// - - -

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите строку: ', (inputString) => {
    const buffer = Buffer.from(inputString);
    console.log('Буфер:', buffer);

    const stringFromBuffer = buffer.toString();
    console.log('Строка из буфера:', stringFromBuffer);

    rl.close();
});

// - - -

const buffer1 = Buffer.from('Hello, ');
const buffer2 = Buffer.from('World!');

const combinedBuffer = Buffer.concat([buffer1, buffer2]);

fs.writeFile('combined.txt', combinedBuffer, (err) => {
    if (err) throw err;
    console.log('Буферы объединены и сохранены в combined.txt');
});


