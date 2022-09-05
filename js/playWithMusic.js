const playFree = document.querySelector(".playFreeImg");

const music1 = new Audio("https://gh.cdn.sewest.net/assets/ident/ffxiv-freetrial/images/sound/sound_01.mp3");
const music2 = new Audio("https://gh.cdn.sewest.net/assets/ident/ffxiv-freetrial/images/sound/sound_02.mp3");

playFree.addEventListener("mouseover", function () {
    music1.play()
})

const isbtn_hover__none = document.querySelector(".is-btn_hover__none");
const twitter = document.querySelector(".twitter");
const facebook = document.querySelector(".facebook");
const haveAccountImg = document.querySelector(".haveAccountImg");


isbtn_hover__none.addEventListener("mouseover", function(){
    music2.play()
})
twitter.addEventListener("mouseover", function(){
    music2.play()
})
facebook.addEventListener("mouseover", function(){
    music2.play()
})
haveAccountImg.addEventListener("mouseover", function(){
    music2.play()
})
