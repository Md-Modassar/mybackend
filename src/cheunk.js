const { merge, filter } = require("lodash")
const { chunk } = require("underscore")

const array=["jan","feb","mar","apl","may","jun","july","augt","sep","oct","nov","dce"]
let c=chunk(array,4)
let chunk1=function(){
    console.log(c)
}
let a=[1,3,5,7,9,11,13,15,17,19]
let [b1,...b]=a
let tail=function(){
     console.log(b)
     return "done"
}

const arr1=[3,4,6,5,1]
const arr2=[2,4,8,9,1]
const arr3=[1,6,7,5,1]
const arr4=[3,6,8,9,4]
const arr5=[1,5,7,6,2]
const arr6=[...arr1,...arr2,...arr3,...arr4,...arr5]
let union=function(){
    
    
    const arruniq=arr6.filter((item,index)=>arr6.indexOf(item)===index)
    arruniq.sort()
    console.log(arruniq)
    return "done"
}

const key1="horror"
const key2="drama"
const key3="thriller"
const key4="fanasty"
const value1="The Shining"
const value2="Titanic"
const value3="Shutter Island"
const value4="Pans Labyrinth"
const object={}
let pairs=function(){
    object[key1]=value1
    object[key2]=value2
    object[key3]=value3
    object[key4]=value4
    console.log(object)
    return "done"
}
let abc = 2022
module.exports.mychunk=chunk1
module.exports.mytail=tail
module.exports.myunion=union
module.exports.mypairs=pairs

