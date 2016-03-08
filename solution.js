function greetUser(userTyped) {
      $("#greeting").text("Hello, " + userTyped);
    }
 function switchImage(picElephant) {
   $("#gallery-main").attr("src", picElephant);
 }

function changeBackgroundColor(){
    var blue = Math.floor(Math.random() * 225);
    var green = Math.floor(Math.random() * 225);
    var red = Math.floor(Math.random() * 225);
    $("body").css("background-color","rgb("+red+","+green+","+blue+")" );
    
}