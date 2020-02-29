function alertMessage(a) {
    let b = a + 1;
    return b;
}
let input = parseInt(document.getElementById("inputText").value);
document.getElementById("result").innerHTML = alertMessage(input);


