// GREETING USER
function greetUser() {
    var time = new Date().getHours();
    if (time < 11) {
        return "Good Morning!";
    } else if (time < 18) {
        return "Good Day!";
    } else{
        return "Good Evening!";
    }
}
document.getElementById("greet").innerHTML = greetUser();
//menu
function OpenSlide(){
    document.getElementById("sideNav").style.width = "100%";
}
function CloseSlide(){
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

