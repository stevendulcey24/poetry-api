import mongoose from 'mongoose'
import connection from './connection.js'
import authors from '../models/authors.js'
import data from './authors.json' assert {type: 'json'}

let insertData = async () => {
    await authors.deleteMany({})
    await authors.create(data)
    await console.log("It's finished")
    mongoose.disconnect()
}
insertData()