

var navlinks=document.querySelectorAll("ul li a");
 navlinks.forEach((links)=>{
    links.addEventListener("click",()=>{
       navlinks.forEach((item)=>{
         item.classList.remove("active")
       });
        links.classList.add("active")
    });
   
 })

let menu = document.getElementById("menu")
let mobilenav = document.getElementById("mobile-nav")
let closebtn = document.getElementById("close-btn")

menu.addEventListener("click",function(){

    mobilenav.style.left = "0"

})

closebtn.addEventListener("click",function(){

    mobilenav.style.left = "-250px"

})

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
const bar = document.getElementById("progressBar");

let current = 0;
let timer = null;


function goToSlide(next) {


    slides[current].classList.remove("active");
    slides[current].classList.add("leaving");


    setTimeout(() => {
        slides[current].classList.remove("leaving");
    }, 700);


    dots[current].classList.remove("active");
    dots[next].classList.add("active");


    current = next;


    slides[current].classList.add("active");


    restartBar();
}


function changeSlide(direction) {

    let next = (current + direction + slides.length) % slides.length;

    goToSlide(next);
    resetTimer();
}


function startTimer() {
    timer = setInterval(() => {
        let next = (current + 1) % slides.length;
        goToSlide(next);
    }, 5000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}


function restartBar() {
    bar.classList.remove("running");

    setTimeout(() => {
        bar.classList.add("running");
    }, 30);
}


document.querySelector(".hero").addEventListener("mouseenter", () => {
    clearInterval(timer);
    bar.style.animationPlayState = "paused";
});
document.querySelector(".hero").addEventListener("mouseleave", () => {
    resetTimer();
    restartBar();
});


startTimer();
restartBar();


let btnad = document.getElementById("btn-ad")
let adbar = document.querySelector(".ad")

btnad.addEventListener("click", function () {
    adbar.remove()
})

let feedback = [
    {
        text: "Amazing cakes and fast delivery!",
        name: "Deva",
        city: "Chennai",
        emoji: "👩",
        star: 5
    },

    {
        text: "Soft and delicious red velvet cake.",
        name: "Arun",
        city: "Tambaram",
        emoji: "👨",
        star: 4
    },

    {
        text: "Beautiful cake designs and great taste.",
        name: "Priya",
        city: "Velachery",
        emoji: "👩",
        star: 5
    },
    {
        text: "Amazing cakes and fast delivery!",
        name: "Deva",
        city: "Chennai",
        emoji: "👩",
        star: 5
    }

]
let card = document.getElementById("review-wrap")

function build() {
    let allfeedback = [...feedback, ...feedback]

    allfeedback.forEach(function (feedback) {

        let box = document.createElement("div")
        box.classList.add("box")
        box.innerHTML = `<div class=star>${"★".repeat(feedback.star)}</div>
    <P>${feedback.text}</P>
    
    <div class="info">
    <div class=rev-icon>${feedback.emoji}</div>
    

    <div >
    <div class=rev-name>${feedback.name}</div>
    <div class=rev-city>${feedback.city}</div>
    </div>
    </div>`

        card.append(box)
    })
}
build()

let counts = document.querySelectorAll(".count");

counts.forEach((count) => {

    let target = Number(count.dataset.target);

    let start = 0;

    let speed = target / 100;

    let interval = setInterval(() => {

        start += Math.ceil(speed);

        if (start >= target) {

            start = target;

            clearInterval(interval);
        }

        if (count.classList.contains("percent")) {

            count.innerHTML = start + "%";

        } else {

            count.innerHTML = start + "+";
        }

    }, 50);

});

let f1 = document.querySelector(".footer-logo__content")
f1.innerHTML = `
          <h1 id="logo" >
            <span id="logo-text1" style="color: white">Sweet</span
              ><span id="logo-text2" style="color: chocolate">Bakes</span>
          </h1>
          <p>
            Handcrafted with love in Chennai since<br/> 2014. Every bite tells a
            story of tradition,<br/> craft and pure ingredients.
          </p>
        `

let f2 = document.querySelector(".navigate")
f2.innerHTML = `
          <h4>NAVIGATE</h4>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        `

let f3 = document.querySelector(".popular")
f3.innerHTML = `
          <h4>POPULAR</h4>
          <ul>
            <li><a href="">Birthday Cakes</a></li>
            <li><a href="">Croissants</a></li>
            <li><a href="">Cupcakes</a></li>
            <li><a href="">Sourdough</a></li>
          </ul>
`

let f4 = document.querySelector(".team")
f4.innerHTML = `
          <h4>WEBSITE-CREATION(TEAM-GitHub(ID))</h4>
          <ul>
            <li><a target="_blank" href="https://github.com/devadharshini062005-ux">Home : devadharshini062005-ux</a></li>
            <li><a target="_blank" href="https://github.com/subbaiyanarayanan306-cmd/TeamProject">AboutUs : subbaiyanarayanan306-cmd</a></li>
             <li><a target="_blank" href="https://github.com/chavithran">Product : chavithran</a></li>
            <li><a target="_blank" href="https://github.com/mohanprasad0512">ContactUs : Mohan Prasad S</a></li>
          </ul>
        `

let f5 = document.querySelector(".contact")
f5.innerHTML = `
          <h4>CONTACT</h4>
          <p>
            14 Gandhi Nagar, Adyar +91 98400 12345 hello@sweetbakes.in Mon–Sat:
            7 AM – 8 PM
          </p>
        </div>
      `

