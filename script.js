//ACTIVE CLASS IN JS TO ADD OR REMOVE ACTIVE USING CLASSLIST :

var navlinks=document.querySelectorAll("ul li a");
 navlinks.forEach((links)=>{
    links.addEventListener("click",()=>{
       navlinks.forEach((item)=>{
         item.classList.remove("active")
       });
        links.classList.add("active")
    });
   
 })

//  NAV MENU TOGGLE :
var sidenavbar=document.getElementById("mobilenav");
var icons=document.getElementById("nav-menu-toggle");
var close=document.getElementById("close");

icons.addEventListener("click",()=>{
     sidenavbar.style.left="0px";
})

close.addEventListener("click",()=>{
   sidenavbar.style.left="-50%";
})


// SLIDE CHANGING SLIDE :

var slideimage=document.querySelector(".slide-image");
var slidetitle=document.querySelector(".slide-title");
var slidedes=document.querySelector(".slide-desc");
var leftbtn=document.querySelector(".left-btn");
var rightbtn=document.querySelector(".right-btn");


// SLIDE DATA :

var slide=[
    {
    image: "images/Banner-image-1.jpg",
    title: "Chocolate Cake",
    desc: "Fresh and Delicious Cake"
  },

  {
    image: "images/Banner-image-2.jpg",
    title: "Strawberry Cake",
    desc: "Sweet Strawberry Flavor"
  },

  {
    image: "images/Banner-image-3.jpg",
    title: "Vanilla Cake",
    desc: "Soft Vanilla Cream Cake"
  }
];

// current slide :

var currentslide=0;

// show slide function :

function showslide(){
   slideimage.src=slide[currentslide].image;
   slidetitle.textContent=slide[currentslide].title;
   slidedes.textContent=slide[currentslide].desc;
}

// RIGHT BUTTON CLICK :
rightbtn.addEventListener("click",()=>{
   currentslide++;

   if(currentslide>=slide.length){
      currentslide=0;
   }
   showslide();
})

// LEFT BUTTON :

leftbtn.addEventListener("click",()=>{
   currentslide--;
   if(currentslide<0){
      currentslide=slide.length-1;
   }
   showslide();
})
