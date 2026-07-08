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
let parrticipant = document.getElementById("participant");
if(parrticipant){
    let interval = setInterval(()=>{
    parrticipant.innerHTML = participant;
    participant++;
    if(participant >= nbr_arrive){
        clearInterval(interval);
    }
},30);
}
    


let intervenan = 0;
let intervenant_arrive = 48;
let intervenant = document.getElementById("intervenant");
if(intervenant){
    let intervalle = setInterval(()=>{
    intervenant.innerHTML = intervenan;
    intervenan++;
    if(intervenan >= intervenant_arrive){
        clearInterval(intervalle);
    }
},100)
    
}

let jour = 0;
let jour_arrive = 3;
let jours = document.getElementById("jour");
if(jours){
    let intervall = setInterval(()=>{
    jour.innerHTML = jour;
    jour++;
    if(jour >= jour_arrive){
        clearInterval(intervall);
    }

},1000)
}

let pay = 0;
let pays_arrive = 12;
let pays = document.getElementById("pays");
if(pays){
    let interva = setInterval(()=>{
    pays.innerHTML = pay;
    pay++;
    if(pay >= pays_arrive){
        clearInterval(interva);
    }

},200)
}



const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.nav_menu');

// Écoute du clic
burgerBtn.addEventListener('click', () => {
    // Ajoute .open si elle n'y est pas, la retire si elle y est
    navMenu.classList.toggle('open');
});



// filtrage des intervenants

let btne = document.querySelectorAll(".filtre")
let carte = document.querySelectorAll(".profil")
btne.forEach((bt) =>{
  bt.addEventListener("click",function(){
    let filter = this.getAttribute("data-cat")
    carte.forEach((cart) =>{
      let cat = cart.getAttribute("data-target")
      if (filter === "tous"){
        cart.style.display = "";
      }else if(filter === cat){
        cart.style.display = "";
      }else{
        cart.style.display = "none";
      }
    });
  });
});