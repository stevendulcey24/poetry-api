import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

fetch('https://poetrydb.org/author/amy%20levy')
  .then(response=> response.json())
  .then(data => fsPromises.writeFile("./authors.json", JSON.stringify(data)))