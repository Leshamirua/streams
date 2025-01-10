const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', {
    encoding: 'utf8',
    highWaterMark: 1
});

readableStream.on('data', (chunk) => {
    for (let i = 0; i < chunk.length; i++) {
        setTimeout(() => {
            process.stdout.write(chunk[i]);
        }, i * 100);
    }
});

readableStream.on('end', () => {
    console.log('\nЧтение завершено.');
});

// - - -

const { Transform } = require('stream');

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const upperChunk = chunk.toString().toUpperCase();
        callback(null, upperChunk);
    }
});

const readableStream2 = fs.createReadStream('input.txt', {
    encoding: 'utf8'
});

readableStream2.pipe(upperCaseTransform).pipe(process.stdout);
