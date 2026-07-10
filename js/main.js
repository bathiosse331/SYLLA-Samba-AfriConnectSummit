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


// compte à rebours
 // 1. Définir la date de fin (Exemple : 31 Décembre de l'année en cours) date cible qui sera soustrait par la date d'aujrdh
        //new date 
        const date_souhaitee = new Date("July 29, 2026 16:00:00").getTime();
        //convertit en milliseconde le temps

        // 2. Lancer la boucle de calcul toutes les 1 seconde (1000 ms)
        const interval_calcul = setInterval(function() {

            // Obtenir l'heure actuelle
            const heure_actuelle = new Date().getTime();

            // 3. Calculer l'écart entre maintenant et la cible
            const distance = date_souhaitee - heure_actuelle;

            // Calculs mathématiques pour convertir les millisecondes: 1000ms*60s*60mn*24h
            //math.floor supp les virgules pour garder les nombres entiers et la division permet de convertir les millisecondes en unité visible(jr,hr,mn,s)
            const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
            const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondes = Math.floor((distance % (1000 * 60)) / 1000);

            // 4. Afficher le résultat dans les éléments HTML correspondants
            document.getElementById("jours").innerText = jours < 10 ? "0" + jours : jours;
            document.getElementById("heures").innerText = heures < 10 ? "0" + heures : heures;
            document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("secondes").innerText = secondes < 10 ? "0" + secondes : secondes;

            // Si le compte à rebours est fini, on arrête la boucle
            if (distance < 0) {
                clearInterval(interval_calcul);
                document.querySelector(".div_temps").innerHTML = "<h2>L'événement a commencé !</h2>";
            }

        }, 1000);

        // annee dynamique du footer
        // Récupère l'année en cours et l'injecte dans la balise HTML et .getFY extrait unqm l'annee sous 4chiffres
        document.getElementById("annee_dynamique").innerText = new Date().getFullYear();



//  Sélection du bouton retour en haut
const btnRetour = document.getElementById('bouton-retour-haut');

// Afficher/Masquer le bouton selon la hauteur de défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnRetour.style.display = 'block';
    } else {
        btnRetour.style.display = 'none';
    }
});

// Remonter en haut de manière fluide au clic
btnRetour.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// On attend que la page (et le bouton du header) soit bien chargée
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        // 1. Récupérer le thème actuel sur l'élément HTML racine
        const actuelTheme = document.documentElement.getAttribute('data-theme');
        
        // 2. Définir le nouveau thème opposé
        const nouveauTheme = actuelTheme === 'dark' ? 'light' : 'dark';
        
        // 3. Appliquer le nouveau thème à la page
        document.documentElement.setAttribute('data-theme', nouveauTheme);
        
        // 4. Sauvegarder le choix de l'utilisateur dans le localStorage
        localStorage.setItem('theme', nouveauTheme);
    });
});


// changement de fond a 80px défilement
 // Récupérer l'élément de la navbar
let navbar = document.getElementById("navbar");

// Écouter l'événement de scroll sur la fenêtre
window.addEventListener("scroll", () => {
  // Si on a défilé de plus de 80 pixels
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    // Si on est tout en haut
    navbar.classList.remove("scrolled");
  }
});


// attend que la page soit complétement chargée avant de lancer le script
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    // 1. On filtre pour ne garder que les éléments qui entrent actuellement à l'écran
    const intersectingEntries = entries.filter(entry => entry.isIntersecting);

    // 2. entry est l'element et index son indice
    intersectingEntries.forEach((entry, index) => {
      // appllique un delai de0.2s sur chaq apparition d'un element
      entry.target.style.transitionDelay = `${index * 0.2}s`; 
      entry.target.classList.add("visible");
    });

    // 3. On gère les éléments qui sortent de l'écran séparément
    entries.forEach(entry => {
// si l'elemnt n'est plus visible 
      if (!entry.isIntersecting) {
        entry.target.classList.remove("visible");
        entry.target.style.transitionDelay = "0s";
      }
    });
  }, {
    threshold: 0.05
  });
// une boucle qui dit a l'observateur de prendre en compte l'element en train d'etre observer
  elements.forEach(el => observer.observe(el));
});



// plannings qui s'affichent au click
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab_btn");
  const panels = document.querySelectorAll(".planning");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // 1. Récupérer l'identifiant du tableau ciblé
      const targetTabId = button.getAttribute("data-tab");

      // 2. Retirer la classe 'active' de tous les boutons
      buttons.forEach(btn => btn.classList.remove("active"));

      // 3. Masquer temporairement tous les tableaux et réinitialiser leur opacité
      panels.forEach(panel => {
        panel.classList.remove("active");
      });

      // 4. Activer le bouton sur lequel on a cliqué
      button.classList.add("active");

      // 5. Afficher le tableau correspondant
      const targetPanel = document.getElementById(targetTabId);
      targetPanel.classList.add("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab_btn");
  const panels = document.querySelectorAll(".planning");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // 1. Nettoyer la classe active sur les boutons et les tableaux
      buttons.forEach(btn => btn.classList.remove("active"));
      panels.forEach(panel => panel.classList.remove("active"));

      // 2. Activer le bouton cliqué
      button.classList.add("active");

      // 3. Activer le tableau ayant le même numéro de position (index)
      if (panels[index]) {
        panels[index].classList.add("active");
      }
    });
  });
});
