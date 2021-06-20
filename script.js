var welcome = function (name){
    return alert("hello," + name)
}

function rate(num){
    if(num <= 5) {
        for (var j = 0; j < num; j++) {
            document.getElementById("rate").innerHTML += '<img src="assets/star.png" alt="star">'
        }
    }
}


var name = prompt("Hello, What's Your name?")
welcome(name);

var num = prompt("how do you rate the site out of 5?")
rate(num);




function changeColor() {
    confirm('Are you sure?')
    var favColor = prompt("what is your fav color(1.beige, 2.silver, or 3.green)?")
    while (favColor !== "beige" && favColor !== "silver" && favColor !== "green") {
        favColor = prompt("you entered wrong color please try gain ")
    }
    if(favColor === "beige"){
        document.getElementById('main').style.backgroundColor ='beige'
    } else if(favColor === "green"){
        document.getElementById('main').style.backgroundColor ='#8FBC8F'
    }else if(favColor === "silver") {
        document.getElementById('main').style.backgroundColor = 'silver'
    }
}

