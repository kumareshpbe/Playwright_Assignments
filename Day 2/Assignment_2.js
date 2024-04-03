function palindrome(word) {
    let chars = word.split("");
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverse = reverse + chars[i];
    }
    console.log(reverse);
    if (word === reverse) {
        console.log("TRUE "+ word +" is a palindrome");
    }
    else {
        console.log("FALSE "+ word +" is not a palindrome");
    }
}

let word = "LIRIL"
palindrome(word)
