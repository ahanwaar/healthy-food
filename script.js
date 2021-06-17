function changeColor() {
    confirm('Are you sure?')
    var favColor = prompt("what is your fav color(1.beige, 2.white, or 3.green)?")
    while (favColor != "beige" && favColor != "white" && x != "green") {
        favColor = prompt("you entered wrong color please try gain ")
    }

    if(favColor == "beige"){
        document.getElementById('main').style.backgroundColor ='beige'
    } else if(favColor == "green"){
        document.getElementById('main').style.backgroundColor ='#8FBC8F'
    }else if(favColor == "white")
    {
        document.getElementById('main').style.backgroundColor ='white'

    }else{
        alert("Sorry the color name is incorrect!")
    }
}

