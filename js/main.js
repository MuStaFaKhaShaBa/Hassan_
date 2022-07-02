let aboutSection = document.querySelector("#about");

window.onscroll = _ => {
    if ((window.scrollY >= (document.querySelector("#about").offsetTop - 260)) && (window.scrollY <= document.querySelector("#about").offsetTop + 800)) {
        document.querySelector("#about header .head").classList.add("active-sec")
    } else {
        document.querySelector("#about header .head").classList.remove("active-sec")
    }
    if ((window.scrollY >= (document.querySelector("#our-works").offsetTop - 260)) && (window.scrollY <= document.querySelector("#our-works").offsetTop + 800)) {
        document.querySelector("#our-works header .head").classList.add("active-sec")
    } else {
        document.querySelector("#our-works header .head").classList.remove("active-sec")
    }
    if ((window.scrollY >= (document.querySelector("#contact").offsetTop - 260)) && (window.scrollY <= document.querySelector("#contact").offsetTop + 800)) {
        document.querySelector("#contact header .head").classList.add("active-sec")
    } else {
        document.querySelector("#contact header .head").classList.remove("active-sec")
    }
}

// ------------------------------------------------------------ ----------------------------------------

window.onload = _ => {
    document.body.classList.add('over-lay');

    document.body.innerHTML += `
    <div class='welcome-msg' title="wel" >
        <h1>صباغ الكويت</h1>
        <p>هل تريد رقم صباغ شاطر ومحترف بسعر رخيص ؟</p>
        <a name="tele contact" href="tel:+0096596930778" target="_blank">
            <i class="fa-solid fa-square-phone-flip" title="0096596930778"></i>
            <hr/>
            <p>0096596930778</p>
        </a>
    </div>
    `;
}
const eventClick = event => {

    if (event.target == document.body) {
        removeWelcome();
    }
    else {

        setTimeout(removeWelcome, 3000)
    }
}

document.body.addEventListener('click',eventClick)

function removeWelcome() {
    document.body.removeEventListener('click',eventClick)
    document.body.classList.remove('over-lay');
    document.querySelector(".welcome-msg").style.display = 'none';
}
