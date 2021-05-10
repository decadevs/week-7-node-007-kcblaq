import fs from 'fs'
// let database = require("../../data/database.json")
let database = require("../data/database.json")
const path = "/Users/decagon/Documents/works/week-7-node-007-kcblaq/data/database.json"

export async function getAll(){
return await new Promise((resolve,reject)=> {
    resolve(database)
})
}
export async function createOne(data:object) {
return await new Promise((resolve,reject)=> {
    database.push(data);
  
    fs.writeFileSync(path,JSON.stringify(database), 'utf8');  
    resolve(data);
})
}