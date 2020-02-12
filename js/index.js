// Your code goes here


// 1. "mouseover"
let nav = document.querySelector('nav'); 

nav.addEventListener("mouseover", function( event ) {   
  
    event.target.style.color = "gold";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


// prevent default

nav.addEventListener('click', event => {
    event.preventDefault();
});


// stop propogation example

let navA = document.querySelector('a'); 

navA.addEventListener("mouseover", event => {   
    event.stopPropagation();
  
    event.target.style.color = "blue";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


// 2. "click"
let footer = document.querySelector('footer');

footer.addEventListener('click', event => {
    event.target.style.backgroundColor = "blue";
});


// stop propogation example 2

let footerP = document.querySelector('footer p');

footerP.addEventListener('click', event => {
    event.stopPropagation();
    event.target.style.backgroundColor = "lightgrey";
});


// 3. "mouseout"
let h1 = document.querySelector('h1');

h1.addEventListener("mouseout", event => {   
    event.target.style.color = "gold";
  
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);


// 4. "dblclick"
let h2 = document.querySelector('h2');

h2.addEventListener('dblclick', event => {
    event.target.style.color = "gold";
});


// 5. "mouseleave"
let header = document.querySelector('header');

header.addEventListener("mouseleave", event => {   
    event.target.style.backgroundColor = "gold";
  
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 500);
  }, false);


  // 6. "mouseenter"
let p = document.querySelector('p');

p.addEventListener("mouseenter", event => {   
    event.target.style.color = "gold";

    setTimeout(function() {
    event.target.style.color = "";
    }, 500);
}, false);


// 7. "mousemove"
let section = document.querySelector('section');

section.addEventListener("mousemove", event => {   
    function generateRandomColor() {
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
    
    event.target.style.color = generateRandomColor();
}, false);


// 8. "contextmenu"
let body = document.querySelector('body');

body.addEventListener('contextmenu', event => {
    event.preventDefault();
});


// 9. "mousedown"
let h4 = document.querySelector('h4');

h4.addEventListener("mousedown", event => {   
    event.target.style.color = "gold";
  
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
}, false);


// 10. "mouseup"
let div = document.querySelector('div');

div.addEventListener("mouseup", event => {   
    event.target.style.color = "gold";
  
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
}, false);