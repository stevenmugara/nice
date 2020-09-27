const express = require('express')
const chalk = require('chalk')

const app = express()

const port = process.env.PORT || 3000


// const allowToUse = ({ username, password } = user, req, res) => {


//     if (username === 'username2020') {
//         if (password === 'password!2020') {
//             return res.send({
//                 statuscode: 200,
//                 message: true
//             })
//         }

//         return res.send({
//             statuscode: 400,
//             message: false,
//             reason: 'sory password is incorect please Try again'
//         })
//     }

//     return res.send({
//         statuscode: 400,
//         message: false,
//         reason: 'Sorry username not found try again'
//     })

// }

// app.get('/', (req, res) => {


//     allowToUse({ username: 'usernamee2020', password: 'password!2020' }, req, res)
// })













const myObj = {
    'key': 'value',
    'subObj': {
        'key2': 'value2'
    }
}

//console.log(chalk.red(myObj.key), chalk.bgGreen(myObj.subObj.key2))


//  object distruction

const { key, subObj } = myObj

// console.log(key, subObj)




const student = {
    username: 'Emmanuel',
    department: 'Software Enginnering',
    isMale: true,
    level: 5
}

const { username, department, isMale, level } = student

//console.log(username, department, isMale, level)

// SHORTHAND OBJECT

// console.log({
//     message: 'hello',
//     statuscode: 400
// })

//console.log({ username, department, isMale, level })



// FUNCTION


const myfunction = function({ username, isMale } = obj) {
    return { username, isMale }
}

console.log(myfunction(student))


























app.listen(port, () => console.log(`Server is running on POrt ${port}`))