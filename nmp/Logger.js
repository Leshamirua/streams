// Task №4
class Logger extends EventEmitter {
    info(message) {
        this.emit('info', message);
    }

    warn(message) {
        this.emit('warn', message);
    }

    error(message) {
        this.emit('error', message);
    }
}

const logger = new Logger();

logger.on('info', (message) => {
    console.log(`Информация: ${message}`);
});

logger.on('warn', (message) => {
    console.log(`Предупреждение: ${message}`);
});

logger.on('error', (message) => {
    console.log(`Ошибка: ${message}`);
});

logger.info('Система работает нормально.');
logger.warn('Низкий уровень памяти.');
logger.error('Произошла критическая ошибка.');
