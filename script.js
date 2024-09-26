var username = document.getElementById("username");
var pwd = document.getElementById("pwd");
var btn = document.getElementById("btn");
var jsonText = document.getElementById("jsontext");


btn.addEventListener("click", function(){
    var data = {
        "username": username.value,
        "pwd": pwd.value
    }
    jsonText.innerHTML = JSON.stringify(data);
})