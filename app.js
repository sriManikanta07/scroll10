// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear(); 
// ********** close links ************
const toggle = document.querySelector(".nav-toggle");
const container = document.querySelector(".links-container");
const links = document.querySelector(".links");
// ********** fixed navbar ************
toggle.addEventListener("click",function(){
  //container.classList.toggle("show-links")
  const reqheight = links.getBoundingClientRect().height;
//   console.log(reqheight);
  const contheight = container.getBoundingClientRect().height;
  if(contheight === 0){
    container.style.height = `${reqheight}px`;
  }
  else{
    container.style.height = 0;
  }
})
// navbar
const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");
window.addEventListener("scroll",function(){
    const scrollheight = window.pageYOffset;
    //console.log(scrollheight); 
    const navheight = navbar.getBoundingClientRect().height;
    if(navheight < scrollheight ) {
       navbar.classList.add("fixed-nav");
    }
    else{
      navbar.classList.remove("fixed-nav");
    }
    //top link
    if(scrollheight > 500){
        toplink.classList.add("show-link");
        
    }
    else{
      toplink.classList.remove("show-link");
    }
});

// ********** smooth scroll ************
// select links
const scrolllinks = document.querySelectorAll(".scroll-link");
scrolllinks.forEach( (link) => {
  link.addEventListener("click",(e) => {
    //dismiss pre-existing funtioning
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    //console.log(id);
    const element =document.getElementById(id);
    //console.log(element);
    //finding position
    const navheight = navbar.getBoundingClientRect().height;
    var position = element.offsetTop - navheight;
    // console.log(position);
    const fixednav = navbar.classList.contains(".fixed-nav");
    const contheight = container.getBoundingClientRect().height;
     if(!fixednav){
        position = position - navheight;
     }
     const scrollheight = window.pageYOffset;
     if (scrollheight > 82) {
      position = position + navheight;
    }
    if (navheight > 82) {
      position = position + contheight;
    }
     window.scrollTo({
        left : 0 ,
        top : position,
     });


    //closing container
    container.style.height = 0;

  });
   
   
  
});

