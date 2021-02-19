function Reg() {
    var name = document.getElementById("username");
    var email = document.getElementById("email");
    var pas = document.getElementById("pas");
    var pasr = document.getElementById("pasr");
    if (name.value == "") {
      alert("Enter Name");
    }
    else if (email.value == "") {
      alert("Enter Email");
    }
    else if (pas.value == "") {
      alert("Enter Password");
    }
    else if (pasr.value == "") {
      alert("Repeat Password");
    }
    else if (pasr.value != pas.value) {
      alert("Password Don't Match");
    }
    else{
      alert("You Are register") 
      localStorage.setItem("user", name.value) ;
      localStorage.setItem("email", email.value) ;
      localStorage.setItem("password", pas.value);
      window.location.replace("index.html")
    }
}
function log() {
 var login = document.getElementById("username")
 var password = document.getElementById("pas");
 var user = localStorage.getItem("user");
 var pas = localStorage.getItem("password");
 if(login.value == "Admin" && password.value == "12345"){
  window.open("Admin.html",'_self');  
}
else if(login.value != user){
alert("User don't Found")
}
else if(password.value != pas){
    alert("Not Write Password")
}
else{
  window.open("market.html",'_self');  
}
}
function fpass(){
let email = document.getElementById("forgot").value;
let emar = localStorage.getItem("email");
let pas = localStorage.getItem("password");
if(email == ""){
alert("Enter email")
}
else if(email == emar){
  alert("Your password is "+pas)
}
else{
  alert("Email don't Register")
}
}