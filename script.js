var market = localStorage.getItem("Market")
if(market != 1){ 
    window.location.replace("index.html")
} 
else{
let money = prompt("How much money do you have?")
let total = 0
function pizza() {
    let buy = 50
    var piz = parseInt(buy)
    var mone = parseInt(money)
    var result = mone - piz
    if (mone >= piz) {
        prompt("Enter your address")
        alert("Pizza is Buy")
        alert("You Have " + result + " Money")
        money = money - piz
    }
    else {
        alert("You can not buy pizza")
    }
}
function Lays() {
    let buy = 15
    var piz = parseInt(buy)
    var mone = parseInt(money)
    var result = mone - piz
    if (mone >= piz) {
        prompt("Enter your address")
        alert("Lays is Buy")
        alert("You Have " + result + " Money")
        money = money - piz
    }
    else {
        alert("You can not buy Lays")
    }
}
function Barbecue() {
    let buy = 100
    var piz = parseInt(buy)
    var mone = parseInt(money)
    var result = mone - piz
    if (mone >= piz) {
        prompt("Enter your address")
        alert("Barbecue is Buy")
        alert("You Have " + result + " Money")
        money = money - piz
    }
    else {
        alert("You can not buy Barbecue")
    }
}    
function basket(name, price){
    total+=price
    var totalc = document.getElementById("prie")
    totalc.innerText = total;
 
}
function buy(){
    var totalc = document.getElementById("prie")
    if(money>=total){
        money-=total
        total=0
        totalc.innerText = total;
        alert("you buy")
        alert("your money is "+money)
    }
    else{
        alert("You can't buy")
    }
}
function ran(){
    random = Math.floor(Math.random() * 1000)
    alert("You have "+random+" Money")
    money = random;
}
}