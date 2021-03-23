const os = require('os')

//Платформа
console.log(os.platform())

//Архитектура
console.log(os.arch())

//CPU info
console.log(os.cpus())

//свободная память
console.log(os.freemem())

//сколько всего памяти
console.log(os.totalmem())

//корневая директория
console.log(os.homedir())

//сколько система работает
console.log(os.uptime())
