// code qui colorie en bleu lors du survol des tableaux
const programme = document.querySelectorAll("tbody tr");
programme.forEach((pro)=>{
    pro.addEventListener("mouseover",()=>{
        pro.style.backgroundColor = "blue"
    })
    pro.addEventListener("mouseout",()=>{
        pro.style.backgroundColor = "";
    })
})

// compteur qui s'incremente au scroll
let participant = 0;
let nbr_arrive = 12000;
let interval = setInterval(()=>{
    participant++;
    document.getElementById("participant").innerHTML = participant;
    if(participant >= nbr_arrive){clearInterval(interval);}
},30)

let intervenant = 0;
let intervenant_arrive = 48;
let intervalle = setInterval(()=>{
    intervenant++;
    document.getElementById("intervenant").innerHTML = intervenant;
    if(intervenant >= intervenant_arrive){clearInterval(intervalle);}
},100)

let jour = 0;
let jour_arrive = 3;
let intervall = setInterval(()=>{
    jour++;
    document.getElementById("jour").innerHTML = jour;
    if(jour >= jour_arrive){clearInterval(intervall);}
},1000)

let pays = 0;
let pays_arrive = 12;
let interva = setInterval(()=>{
    pays++;
    document.getElementById("pays").innerHTML = pays;
    if(pays >= pays_arrive){clearInterval(interva);}
},200)



const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.nav_menu');

// Écoute du clic
burgerBtn.addEventListener('click', () => {
    // Ajoute .open si elle n'y est pas, la retire si elle y est
    navMenu.classList.toggle('open');
});