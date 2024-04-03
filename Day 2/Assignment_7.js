const { copyFileSync } = require("fs");

let str=" fly me to the           WORLD "
let chars=str.trim();
//console.log(chars)
let words = chars.split (" ")
let result= words[words.length-1]
let result2 = "liril"
console.log (result.length)



