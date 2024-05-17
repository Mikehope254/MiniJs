let input = document.getElementById("myInput")

//function to reverse strings of words
function reverseString(str){
    return str.split("").reverse("").join("")
}

function check(){
    const value = input.value;
    const reverse = reverseString(value)
    
    alert(value == reverse ? "PALINDROME" : "Not Palindrome, try again")
}
