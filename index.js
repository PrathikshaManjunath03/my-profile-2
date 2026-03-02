//Multiple tabs//
var tabs = document.querySelectorAll(".tab");
var sections = document.querySelectorAll(".tab-section");

var isAutoScrolling = false;  

for (var i = 0; i < tabs.length; i++) {// tabs
    tabs[i].addEventListener("click", function () {

        var targetId = this.getAttribute("data-tab");
        isAutoScrolling = true;  

        for (var j = 0; j < sections.length; j++) {// sections
            if (sections[j].id === targetId) {  //f clicked tab = profile
                sections[j].classList.add("focus");
                sections[j].classList.remove("dim");
                sections[j].scrollIntoView(true);
            } else {
                sections[j].classList.add("dim");
                sections[j].classList.remove("focus");
            }
        }

       
        setTimeout(function () {
            isAutoScrolling = false;
        }, 700);
    });
} 
window.addEventListener("scroll", function () {
    if (isAutoScrolling) return;

    for (var k = 0; k < sections.length; k++) {
        sections[k].classList.remove("focus");
        sections[k].classList.remove("dim");
    }
});



// Photo Gallery
function showImage(clickedImage) {
    var bigImage = document.getElementById("largeImage");

    bigImage.src = clickedImage.src;
    bigImage.style.display = "block";
}



//Greeting Button
var button = document.getElementById("greetBtn");
var message = document.getElementById("message");

button.addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        message.textContent = "こんにちは！";
    } 
    else if (randomNumber === 1) {
        message.textContent = "ようこそ！";
    } 
    else {
        message.textContent = "はじめまして！";
    }
});




//Time based greeting
window.addEventListener("load", () => {
    const msg = document.getElementById("greetMessage");
    const hour = new Date().getHours();

    if(hour < 12) {
        msg.textContent = "おはようございます!";
    } else if(hour < 18) {
        msg.textContent = "こんにちは!";
    } else {
        msg.textContent = "こんばんは!";
    }
});




//Contact Form
function changeLang(lang) {

    if(lang === "en") {
        document.getElementById("contactHead").innerHTML =
            '<i class="fa-solid fa-envelope"></i> Contact Form';

        document.getElementById("n1").innerText = "Name";
        document.getElementById("e1").innerText = "Email";
        document.getElementById("m1").innerText = "Message";
        document.getElementById("subBtn").innerText = "Submit";
        document.getElementById("transBtn").innerText = "Translate";
        document.getElementById("resetBtn").innerText = "Reset";
    }
    else {
        document.getElementById("contactHead").innerHTML =
            '<i class="fa-solid fa-envelope"></i> おといあわせ ふぉーむ';

        document.getElementById("n1").innerText = "なまえ";
        document.getElementById("e1").innerText = "メール";
        document.getElementById("m1").innerText = "メッセージ";
        document.getElementById("subBtn").innerText = "そうしん";
        document.getElementById("transBtn").innerText = "ほんやく";
        document.getElementById("resetBtn").innerText = "りせっと";
    }
}

//translate button
var tBtn = document.getElementById("transBtn");

tBtn.addEventListener("click", function() {

    var txt = document.getElementById("msg1").value;
    var result = txt;

    if(txt.includes("hello")) {
        result = txt.replace("hello", "こんにちは");
    }
    if(txt.includes("こんにちは")) {
        result = txt.replace("こんにちは", "hello");
    }

    if(txt.includes("thank you")) {
        result = txt.replace("thank you", "ありがとう");
    }
    if(txt.includes("ありがとう")) {
        result = txt.replace("ありがとう", "thank you");
    }

    document.getElementById("showTranslate").innerText = result;

});


//Reset button 
var rBtn = document.getElementById("resetBtn");

rBtn.addEventListener("click", function(){

    var f1 = document.getElementById("form1");

    f1.reset();  
    document.getElementById("showTranslate").innerText = ""; 

});


// Dummy submit
var f1 = document.getElementById("form1");

f1.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("submitted");

    f1.reset();  
    document.getElementById("showTranslate").innerText = "";

});




