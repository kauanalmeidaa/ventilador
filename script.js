// let a=document.querySelector("img");
let a=document.getElementById("img");

function myfunon()
{
    a.style.animationDuration = 3+"s";
}
function myfunoff()
{
    a.style.animationDuration=0+"s";
    var audio = document.getElementById("myAudio");
    audio.pause();
}
function myfun2()
{
    a.style.animationDuration=1+"s";
    var audio = document.getElementById("myAudio");
    audio.currentTime = 0;
    audio.play();
}
function myfun3()
{
    a.style.animationDuration=0.5+"s";
    var audio = document.getElementById("myAudio");
    audio.currentTime = 2;
    audio.play();
}
function myfun4()
{
    a.style.animationDuration=0.1+"s";
    var audio = document.getElementById("myAudio");
    audio.currentTime = 3;
    audio.play();
}
