let aboutSection = document.querySelector("#about");

window.onscroll = _ => {
    if ((window.scrollY >= (document.querySelector("#about").offsetTop - 260)) && (window.scrollY <= document.querySelector("#about").offsetTop + 800)) {
        document.querySelector("#about header .head").classList.add("active-sec")
    }else{
        document.querySelector("#about header .head").classList.remove("active-sec")
    }
    if ((window.scrollY >= (document.querySelector("#our-works").offsetTop - 260)) && (window.scrollY <= document.querySelector("#our-works").offsetTop + 800)) {
        document.querySelector("#our-works header .head").classList.add("active-sec")
    }else{
        document.querySelector("#our-works header .head").classList.remove("active-sec")
    }
    if ((window.scrollY >= (document.querySelector("#contact").offsetTop - 260)) && (window.scrollY <= document.querySelector("#contact").offsetTop + 800)) {
        document.querySelector("#contact header .head").classList.add("active-sec")
    }else{
        document.querySelector("#contact header .head").classList.remove("active-sec")
    }
}