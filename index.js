// const Obj = require('./user')

// console.log('hello', __dirname)
// console.log(__filename)

// console.log(Obj.user)
// Obj.seyHello()

const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }

                    res.end(content)
                }
            )
        } else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }

                    res.end(content)
                }
            )
        } else if (req.url === '/api/users') {
            res.writeHead(200, {
            'Content-Type': 'text/json'
            })

            const users = [
                { name: "Dmitriy", age: 44 },
                { name: "Elena", age: 44 }
            ]

            res.end(JSON.stringify(users))
        }

    } else if (req.method === 'POST') {
        const body = []

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        //вызовется столько раз сколько будут прилетать данные, которые мы собираем из буфера
        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        //вызоветьяс когда все данные прийдут
        req.on('end', () => {
            const message = body.toString().split('=')[1]; //преобразует буффер в строку

            res.end(`
                <h1>Ваше сообщение: ${message}</h1>
            `)
        })


    }


})

server.listen(3000, () => {
    console.log('Server is running...')
})