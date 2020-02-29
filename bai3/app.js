function sum(a,b) {
    if (a>b){
        alert("so a lon hon so b ");
    }else{
        return a+b;
    }
}
let number1 = parseInt(document.getElementById("number1").value);
let number2 = parseInt(document.getElementById("number2").value);
document.getElementById("result").innerHTML=sum(number1,number2);