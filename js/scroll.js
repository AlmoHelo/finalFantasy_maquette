
    const layer1 = document.querySelector(".fondEcran")
    const layer2 = document.querySelector(".fondEcran2")
    const layer3 = document.querySelector(".fondEcran3")
    const layer4 = document.querySelector(".fondEcran4")
    const layer5 = document.querySelector(".fondEcran5")
    const layer6 = document.querySelector(".fondEcran6")
    const layer7 = document.querySelector(".fondEcran7")

document.addEventListener('scroll', ()=>{
    if(scrollY > 20) {
        layer1.style.top = scrollY/2 + "%";
        layer4.style.top = "-" + scrollY/4 + "%";
        layer5.style.top = "-" + scrollY/4 + "%";
        layer7.style.top = "-" + scrollY/4 + "%" ;
    } else if (scrollY < 20 && scrollY > 0) {
        layer4.style.top = "-26%"
        layer5.style.top = "-26%"
        layer7.style.top = "20%"
    }
});