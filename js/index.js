// Your code goes here

let logo = document.querySelector('.main-navigation .container .logo-heading');
let paragraph = document.createElement('p');
paragraph.textContent = 'This is the logo of the company. If you click on it, its color will turn to red';
paragraph.style.fontFamily = 'Arial, Helvetica, sans-serif';
paragraph.style.fontSize = '1rem';
logo.addEventListener('mouseover', function () {
    logo.appendChild(paragraph);

});
logo.addEventListener('click', function (e) {
    logo.style.color = 'red';
    paragraph.style.color = 'gray';
    e.stopPropagation;
});
logo.addEventListener('mouseleave', function () {
    logo.style.color = 'black';
    logo.removeChild(paragraph);
});

let par = document.createElement('p');
par.textContent = 'Leaving ? Good bye !';
par.style.color = 'red';
par.style.fontSize = '1rem';

let home = document.querySelector('header div nav .nav-link');
home.addEventListener("mouseleave", function () {
    setTimeout(() => {
        home.replaceChild(par);
    }, 5000);
});

let topImage = document.querySelector('div header img');

topImage.addEventListener("mouseenter", function () {
    // topImage.style.width = '1000000px';
    topImage.style.height = '400px';
});

topImage.addEventListener("mouseleave", function () {
    topImage.style.width = '100%';
    topImage.style.height = 'auto';
});

let button = document.querySelector('.btn');

button.addEventListener("click", function(){
    button.style.color = 'white';
    button.style.backgroundColor = 'black';
    button.innerHTML ="All Set !"
});

button.addEventListener("mouseleave", function () {
    button.style.color = 'white';
    button.style.background ='#17A2B8';
    button.innerHTML ="Sign Me Up !"
})

let destination = document.querySelector('.destination');
destination.addEventListener('dblclick', function () {
    destination.style.color = 'blue';
    destination.style.backgroundColor = 'snow';

});
destination.addEventListener('mouseleave', function () {
    destination.style.color = 'black';
    destination.style.backgroundColor = 'white';
});

let navElement = document.querySelector('.nav-link');
let note = document.createElement('p');
    note.textContent = 'Hey there, welcome to the home link !';
    note.style.color = 'green';
    note.style.fontSize = '1rem';
    
navElement.addEventListener('mouseover', function (e) {
     navElement.replaceChild(note, par);
    navElement.appendChild(note);
    // setTimeout(() => { navElement.removeChild(note) }, 3000);
    e.stopPropagation();
});

navElement.addEventListener('mouseleave', function (e) {
    navElement.appendChild(note);
    navElement.replaceChild(par, note);
    setTimeout(() => {
        navElement.removeChild(par);
    },10000);
});



