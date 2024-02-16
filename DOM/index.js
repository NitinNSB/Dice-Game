var val = confirm("Changing color to red");
if (val == true) {
    document.querySelector("h1").style.color = "red";
}else{
    document.querySelector("h1").style.color = "yellow";
}
