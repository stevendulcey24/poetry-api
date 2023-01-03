import connection from '../db/connection.js'
import authors from '../models/authors.js'
import data from './authors.json' assert {type: 'json'}

let insertData = async () => {
    await authors.deleteMany({})
    await authors.create(data)
    console.log("It's finished")
    connection.close()
}
insertData()