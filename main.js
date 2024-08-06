const cookie = document.querySelector(".cookie");
const cookieOpen = document.querySelector(".cookieOpen");
const btnOpen = document.querySelector("#btnOpen");
const btnNew = document.querySelector("#btnNew");
const fortunes = [
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "A juventude não é uma época da vida, é um estado de espírito.",
];
let currentFortune = "";

btnOpen.addEventListener('click', handleOpenClick);
btnNew.addEventListener('click', handleNewClick);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && cookie.classList.contains('hide')) {
        handleNewClick(event);
    }
});

function handleOpenClick(event) {
    event.preventDefault(); 

    currentFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    cookieOpen.querySelector("h2").innerText = currentFortune;
    toggleScreen();
}

function handleNewClick() {
    toggleScreen();
}

function toggleScreen() {
    cookie.classList.toggle("hide");
    cookieOpen.classList.toggle("hide");
}
