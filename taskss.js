// Two dates Start Date and end Date
// Print the dates between
// let Start = "1st April 21"
// let end= "31st march 23"

let start = new Date("2021-04-01")
let end=  new Date("2023-03-31")
let arr=[]
while(true){
    let next=new Date(Date.parse(start)+1000*60*60*24)
    if(next.getDay()==0){
        console.log(next)
    }
    if(next==end){
        break;
    }
    arr.push(next)
}
console.log(arr)

// path
// iterate the folders recursively
// count of files and folders
const fs =require("fs")
const path = require("path")

let dirPath="./frontend"
let files=0
let folders=0

let countFilesAndFolders=(dir)=>{
    let data=fs.readdirSync(dir,{withFileTypes:true})
    for(let i of data){
        if(i.isFile()){
            files++;
        }else{
            folders++
            countFilesAndFolders(path.join(dir,i.name))
        }
    }
}
countFilesAndFolders(dirPath)
console.log(files,folders)



// password generator
// user will specify the restriction like case, length, special
