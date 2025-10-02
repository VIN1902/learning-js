// promisification => converting a legacy code running on callbacks to support promises by building a wrapper function.
// make promise versions of readFile, writeFile, unlink

const fs = require('fs')

function readFilePromise(filename, encoding) {
    return new Promise( (resolve, reject)=>{
        fs.readFile(filename, encoding , (err, data)=>{
            if(err){
                reject(err)
            } else{
                resolve(data)
            }
        })
    } )
}
// reject(), resolve() signal that user's .catch(), .then() method to be called 

function writeFilePromise(filename, content) {
    return new Promise( (resolve, reject)=>{
        fs.writeFile(filename, content, (e)=>{
            if(e){
                reject(e)
            } else{
                resolve()
            }
        })
    } )
}

function unlinkPromise(filename) {
    return new Promise( (resolve,reject)=>{
        fs.unlink(filename, (e)=>{
            if(e){
                reject(e)
            } else{
                resolve()
            }
        })
    } )
}