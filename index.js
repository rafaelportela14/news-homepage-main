let menuBtn = document.querySelector('.menu')
let backDrop = document.querySelector('.backdrop')
let closeBtn = document.querySelector('.close-btn')

menuBtn.addEventListener('click', e => {
    document.body.classList.add('lock');
    backDrop.style.display = "block";
    backDrop.classList.add("show");
});

closeBtn.addEventListener('click', e => {
    document.body.classList.remove('lock');
    backDrop.style.display = "none";
    backDrop.classList.remove("show");
});