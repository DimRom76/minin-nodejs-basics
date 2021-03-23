//https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
// To use this module:

const fs = require('fs');
const path = require('path')

//асинхронный метод, не блокирует поток
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw err
    
//     console.log('Папка была создана')
// })


//создаем файл mynotes.txt и записіваем туда Hello World
// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello World', (err) => {
//     if (err) throw err

//     console.log('Файл был создан')

//     //добавление текста в файл
//     fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), ' From append file', 
//         (err) => {
//             if (err) throw err
//             console.log('Файл был изменен')

//             //читаем файл
//             fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'),
//                 'utf-8',
//                 (err, data) => {
//                     if (err) throw err

//                     // console.log(Buffer.from(data))
//                     console.log(data)
//                 }
//             )            
//         }
//     )
// } )

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if (err) throw err
        console.log('Файл переименован')
    }
)
