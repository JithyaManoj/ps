x = "";
y = "";
to_number=Number(food);
milkshake="";
function preload(){
    img=loadImage("rainbowm milkshake.jpg");
}

rec= new window.webkitSpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "system can hear you so start TALKING !!";
    rec.start();
}
rec.onresult = function (food) {
    console.log(food);
    content = food.results[0][0].transcript;
    if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = " you said " + content;
        milkshake = true ;
    }

}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (milkshake == true) {
        image(img, 100, 100, 50, 50);
        document.getElementById("status").innerHTML = to_number+"milkshas has been drawn"
    }
    for(i = 1; i <= to_number; i++){
        x=Math.floor(Math.random()  *700);
        y=Math.floor(Math.random()  *400);
    }
}