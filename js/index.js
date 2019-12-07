// Your code goes here



let home = document.querySelector('header div nav .nav-link');
home.addEventListener("mouseover", function () {
    alert('Hey there, this link takes you to the home page !');
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

