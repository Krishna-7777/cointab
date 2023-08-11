// write a program to organize filename based on their user
// let Input= {"file.txt": "raj", "file2.txt": "sam", "file3.txt": "raj"};
// let Output= {"raj": ["file.txt", "file3.txt"], "sam": ["file2.txt"]};

// let obj={}
// for(let i in Input){
//     if(!obj[Input[i]]){
//         obj[Input[i]]=[i]
//     }else{
//         obj[Input[i]].push(i)
//     }
// }
// console.log(obj)

// write a program in javascript that will convert the given string into object
let Input= "1234john-name&34-age1234&1234mumbai-location";
// Output {"name": "john", "age": 34, "location": "mumbai"};
let arr=Input.split("1234").join('')
arr=arr.split("&")
let obj={}
for(let i of arr){
    let data = i.split('-')
    obj[data[1]]=data[0]
}
console.log(obj)