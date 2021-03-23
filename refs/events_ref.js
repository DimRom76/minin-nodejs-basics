const EventEmitter = require('events')


class Logger extends EventEmitter {

    log(message) {
        //эммитем событие
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger()

//прослушиваем событие
logger.on('message', data => { console.log(data) })

logger.log('Hello')