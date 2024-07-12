// LES DONNEES DE L'APPLICATION PROVENANT D'UNE BASE DE DONNEES
const classes = [
    { id: 1, nom: 'L2 GLRS A', effectif: 29, semaine: '', planning: [[
        {module: 'PYTHON', prof: 'Aly', duree: 3, debut: 9,salle: '', etat: 'en ligne'},
        {module: 'PHP', prof: 'Baila', duree: 4, debut: 13,salle: '402', etat: ''}
    ], [], [], [], [], []] },
    { id: 2, nom: 'L2 GLRS B', effectif: 29, semaine: '', planning: [[], [], [], [], [
        {module: 'PHP', prof: 'Baila', duree: 4, debut: 13,salle: '402', etat: ''}
    ], []] },
    { id: 3, nom: 'L2 ETSE', effectif: 29, semaine: '', planning: [[], [], [], [], [], []], statut: '' },
    { id: 4, nom: 'L1 A', effectif: 40, semaine: '', planning: [[], [], [], [], [], []], statut: '' },
    { id: 5, nom: 'IAGE B', effectif: 21, semaine: '', planning: [[], [], [], [], [], []], statut: '' },
    { id: 6, nom: 'L2 CDSD', effectif: 4, semaine: '', planning: [[], [], [], [], [], []], statut: '' },
];

const modules = [
    { id: 1, nom: 'ALGO', semaine: '', planning: [[], [], [], [], [], []]},
    { id: 2, nom: 'PHP', semaine: '', planning: [[], [], [], [], [], []] },
    { id: 3, nom: 'PYTHON', semaine: '', planning: [[], [], [], [], [], []] },
    { id: 4, nom: 'LC', semaine: '', planning: [[], [], [], [], [], []] },
    { id: 5, nom: 'JAVASCRIPT', semaine: '', planning: [[], [], [], [], [], []] },
    { id: 6, nom: 'JAVA', semaine: '', planning: [[], [], [], [], [], []] },
];

const enseignants = [
    { id: 1, nom: 'Aly', semaine: '', planning: [[], [], [], [], [], []], modules: [1, 3, 4, 5] },
    { id: 2, nom: 'Baila', semaine: '', planning: [[], [], [], [], [], []], modules: [1, 2, 4, 5, 6] },
    { id: 3, nom: 'Ndoye', semaine: '', planning: [[], [], [], [], [], []], modules: [1] },
    { id: 4, nom: 'Mbaye', semaine: '', planning: [[], [], [], [], [], []], modules: [3, 5] },
    { id: 5, nom: 'Djiby', semaine: '', planning: [[], [], [], [], [], []], modules: [1, 2, 6] },
    { id: 6, nom: 'Seckouba', semaine: '', planning: [[], [], [], [], [], []], modules: [5, 6] },
];

const salles = [
    { id: 1, nom: 'en ligne',semaine: '',planning: [[], [], [], [], [], []], nbrPlaces: 250},
    { id: 2, nom: '101', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 10 },
    { id: 3, nom: '102', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 20 },
    { id: 4, nom: '103', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 30 },
    { id: 5, nom: '104', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 10 },
    { id: 6, nom: '201', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 50 },
    { id: 7, nom: 'incub', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 15 },
];

const statut = [
    {id: 1, nom: 'presentiel', semaine: '', planning: [[], [], [], [], [], []],},
    {id: 2, nom: 'en ligne', semaine: '', planning: [[], [], [], [], [], []],}
];
//-------------------------------------------

//Classe actuelle
const classe = {
    id: 1,
    nom: 'L2 GLRS A',
    effectif: '',
    semaine: '01/02/2023 - 31/02/2023',
    planning: [],
};
// -----------------------------------------
const colors = ['da974b', '#E8B01F', '#DBCB89', '#71BCF3', '#E0474C', '#7FB8B4', '#B2B1B1', '#9F4C9D'];
const cards = document.querySelectorAll('.card');
const select = document.querySelector("#select");
const divClasses = document.querySelector('#classes');
const divEnseignants = document.querySelector('#enseignants');
const divSalles = document.querySelector('#salles');
const divModule = document.querySelector('#modules');
const addCours = document.querySelectorAll('.add-cours');
const selectModule = document.querySelector('#select_module');
const selectStatut = document.querySelector('#select_statut');
const selectEnseignant = document.querySelector('#select_enseignant');
const selectDebut = document.querySelector('#select_debut');
const selectFin = document.querySelector('#select_fin');
const selectSalle = document.querySelector('#select_salle');
const errorModal = document.querySelector('.error-modal');
const btnSaveModal = document.querySelector('#save');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#closeModal');

//
let jour = 0;
//
chargerHeure(8, 16, selectDebut);
chargerHeure(9, 17, selectFin);
//
chargerSelect(modules, selectModule, 'Choisir un Module');
chargerSelect(salles, selectSalle, 'Choisir une Salle');
chargerSelect(statut, selectStatut, "choisir l'etat du cours")
//
afficherPlanning();
//

/* fonction pour l'affichage du boutton ajouter */
document.querySelector('.window').style.display = 'none';
const addButton = document.getElementById('add_elements');
addButton.addEventListener('click', function() {
  const window = document.querySelector('.window');
  window.style.display = 'block';
  const cancelButton = document.querySelector('.cancel-button');
  cancelButton.addEventListener('click', function() {
    window.style.display = 'none';
  });
});/*fin de la fonction */

/* fontion d'ajout d'un cours */
btnSaveModal.addEventListener("click", () => {
    const module=modules[selectModule.value-1].nom;
    const debut=selectDebut.value;
    const prof=enseignants[selectEnseignant.value-1].nom;
    const duree=selectFin.value-debut;
    const salle=salles[selectSalle.value-1].nom;
    const etat=statut[selectStatut.value-1].nom;
    ajouterCours(module, prof, duree, debut, salle, etat);
    modal.classList.remove('open')
});


function ajouterCours(module, prof, duree, debut, salle, etat) {
    const coursExistant = classe.planning[jour - 1].find(c => c.salle === salle && c.debut === debut);
    if (coursExistant) {
        alert(`Impossible de créer ce cours : un cours est déjà prévu dans la salle ${salle} à ${debut}.`);
        return;
    }
    let cours = {};
    if (etat === 'presentiel') {
        cours = {
            module: module,
            prof: prof,
            duree: duree,
            debut: debut,
            salle: salle,
            etat: '',
        };
    } else {
        cours = {
            module: module,
            prof: prof,
            duree: duree,
            debut: debut,
            salle: etat === 'en ligne' ? '' : salle,
            etat: etat,
        };
    }
    if (etat !== 'en ligne') {
        const salleObj = salles.find(s => s.nom === salle);
        if (classe.effectif > salleObj.nbrPlaces) {
            alert(`Impossible de créer ce cours : la classe ${classe.nom} a un effectif de ${classe.effectif} étudiants, mais la salle ${salle} ne peut accueillir que ${salleObj.nbrPlaces} personnes.`);
            return;
        }
    }
    classe.planning[jour - 1].push(cours);
    afficherPlanning();
}



/* fontion d'ajout d'une classe */
const addClassButton = document.getElementById("add-class");
addClassButton.addEventListener("click", function() {
  const nom = prompt("Entrez le nom de la classe :");
  const effectif = prompt("Entrez l'effectif de la classe :");
  const newClass = {
    id: classes.length + 1,
    nom: nom,
    effectif: effectif,
    semaine: '',
    planning: [[], [], [], [], [], []],
    statut: statut
  };
  classes.push(newClass);
});/*fin de la fonction */

/* fonction d'ajout d'un prof */
const addProfButton = document.getElementById("add-prof");
addProfButton.addEventListener("click", function() {
    const nom = prompt("entrer votre nom: ")
    const newProf = {
        id: enseignants.length + 1,
        nom: nom,
        semaine: '',
        planning: [[], [], [], [], [], []],
        modules: []
    };
    enseignants.push(newProf);
});/*fin de la fonction */

/* fonction d'ajout d'une salle */
const addSalleButton = document.getElementById("add-salle");
addSalleButton.addEventListener("click", function() {
    const nom = prompt("Entrer le nom de la salle: ")
    const nbrPlaces = prompt("Nombre de place de la salle: ")
    const newSalle = {
        id: salles.length + 1,
        nom: nom,
        semaine: '',
        planning: [[], [], [], [], [], []],
        nbrPlaces: nbrPlaces
    };
    salles.push(newSalle);
});/*fin de la fonction */

/*fonction d'ajout d'un module */
const addModuleButton = document.getElementById("add-module");
addModuleButton.addEventListener("click", function() {
    const nom = prompt("Entrer le nom du module: ")
    const newModule = {
        id: modules.length + 1,
        nom: nom,
        semaine: '',
        planning: [[], [], [], [], [], []],
    };
    modules.push(newModule);
});/*fin de la fonction */

/* fonction pour changer le titre des pages en fonction des choix du select */
function updateTitle(selectedClass) {
    const title = document.querySelector('#planning');
    title.innerText = `Planning : ${selectedClass}`;
}
document.querySelector('#select').addEventListener('change', function() {
let selectedClass = this.value;
updateTitle(selectedClass);
});

/*fonction de recherche input avec le legnth des elements du span pour voir combien d'element on a*/
const inputField = document.querySelector('.input input[type="text"]');
const enseignantsSpan = document.querySelector('#enseignants span:first-child');
const sallesSpan = document.querySelector('#salles span:first-child');
const classesSpan = document.querySelector('#classes span:first-child');
const modulesSpan = document.querySelector('#modules span:first-child');
inputField.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    let enseignantsCount = 0;
    let sallesCount = 0;
    let classesCount = 0;
    let modulesCount = 0;

    enseignants.forEach(enseignant => {
        if (enseignant.nom.toLowerCase().includes(inputValue)) {
            enseignantsCount++;
        }
    });
    salles.forEach(salle => {
        if (salle.nom.toLowerCase().includes(inputValue)) {
            sallesCount++;
        }
    });
    classes.forEach(classe => {
        if (classe.nom.toLowerCase().includes(inputValue)) {
            classesCount++;
        }
    });
    modules.forEach(module => {
        if (module.nom.toLowerCase().includes(inputValue)) {
            modulesCount++;
        }
    });
    enseignantsSpan.innerText = enseignantsCount;
    sallesSpan.innerText = sallesCount;
    classesSpan.innerText = classesCount;
    modulesSpan.innerText = modulesCount;
});

/*fonction pour les taches*/
function updateTasks(tasks) {
    const taskCounter = document.querySelector('.sm-l');
    taskCounter.innerText = `${tasks.length} tâches`;
}
const tasks = [
{ id: 1, name: 'Tâche 1' },
{ id: 2, name: 'Tâche 2' },
{ id: 3, name: 'Tâche 3' },
];
updateTasks(tasks);


/*fonction des card de couleurs et affichage dans le select*/
const colorss = ["red", "green", "blue", "purple"];      
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
      document.querySelectorAll('.card').forEach(function(c) {
        c.style.backgroundColor = '';
      });
      this.style.backgroundColor = colorss[Math.floor(Math.random() * colorss.length)];
      let select = document.querySelector('#select');
      select.innerHTML = '';
      let elements = [];
      switch (this.id) {
        case 'classes':
          elements = classes;
          /*cette partie permet d'afficher le select dans le planning principal*/
          select.addEventListener('change', function() {
            let selectedClasse = classes.find(c => c.nom === this.value);
            classe.id = selectedClasse.id;
            classe.nom = selectedClasse.nom;
            classe.effectif = selectedClasse.effectif;
            classe.semaine = selectedClasse.semaine;
            classe.planning = selectedClasse.planning;
            classe.statut = selectedClasse.statut;
            afficherPlanning();
          });
          break;
        case 'modules':
            elements = modules;
            select.addEventListener('change', function() {
                let selectedModule = modules.find(m => m.nom === this.value);
                let selectedClass = classes.find(c => c.planning.find(p => p.find(pm => pm.module === selectedModule.nom)));
                classe.id = selectedClass.id;
                classe.nom = selectedClass.nom;
                classe.effectif = selectedClass.effectif;
                classe.semaine = selectedClass.semaine;
                classe.planning = selectedClass.planning.map(plan => plan.filter(p => p.module === selectedModule.nom));
                afficherPlanning();
            });
            break;
        case 'enseignants':
          elements = enseignants;
          break;
        case 'salles':
          elements = salles.slice(1);
          break;
      } 
      elements.forEach(function(element) {
        let option = document.createElement('option');
        option.innerText = element.nom;
        select.appendChild(option);
      });
    });
});

/*gestion des span en fonction des constantes*/
function updateSpan(elements, id) {
    const spanElement = document.querySelector(`#${id} span`);
    spanElement.innerText = elements.length;
}
updateSpan(enseignants, 'enseignants');
updateSpan(salles.slice(1), 'salles');
updateSpan(modules, 'modules');
updateSpan(classes, 'classes');

addCours.forEach(btn => {
    btn.addEventListener('click', (e) => {
        jour = e.target.getAttribute('day');
        modal.classList.toggle('open')
    })
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('open')
})

selectModule.addEventListener('change', () => {
    const idModule = getSelectValue(selectModule)
    const profs = getProfsByIdModule(idModule)
    chargerSelect(profs, selectEnseignant, 'choisir un enseingant')
})

function getProfsByIdModule(idModule) {
    return enseignants.filter(e => e.modules.includes(+idModule))
}

function getSelectValue(select) {
    return select.options[select.selectedIndex].value
}

function afficherPlanning() {
    effacerCours();
    classe.planning.forEach((p, i) => {
        const jour = document.querySelector(`#day_${i + 1}`);
        p.forEach((c, j) => {
            let posColor = Math.floor(Math.random() * colors.length);
            const divCours = createDivCours(c.debut, c.duree, colors[posColor], c.module, c.prof, c.salle, c.etat, i, j);
            divCours.addEventListener('click', () => {
                const modal = document.getElementById("modal-info");
                modal.style.display = "block";
                document.getElementById("module").innerHTML = `Module: ${c.module}`;
                document.getElementById("prof").innerHTML = `Enseignant: ${c.prof}`;
                document.getElementById("salle").innerHTML = `Salle: ${c.salle}`;
                document.getElementById("duree").innerHTML = `Durée: ${c.duree}`;
                document.getElementById("debut").innerHTML = `Début: ${c.debut}`;
                document.getElementById("etat").innerHTML = `Etat: ${c.etat}`;
            });
            jour.appendChild(divCours);
        });
    });
}

const cancelButton = document.querySelector('.cancel-buttonn');
cancelButton.addEventListener('click', () => {
    const modal = document.getElementById("modal-info");
    modal.style.display = "none";
});

  
function supprimerCours(jour, index) {
    classe.planning[jour].splice(index, 1);
    afficherPlanning();
}
function createDivCours(debut, duree, color, module, prof, salle, statut, jour, index){
    col = debut - 8;
    //
    const div = document.createElement('div');
    div.className = 'cours';

    const spanDelete = document.createElement('span');
    spanDelete.innerText = 'x';
    spanDelete.className = 'delete-cours';
    spanDelete.addEventListener('click', () => supprimerCours(jour, index));
    
    const small1 = document.createElement('small');
    small1.innerText = prof;
    
    const small2 = document.createElement('small');
    small2.innerText = salle;

    const h3 = document.createElement('h3');
    h3.innerText = module;

    const small3 = document.createElement('small');
    small3.innerText = statut;

    div.style.backgroundColor = color;
    div.style.width = `${duree*10}%`;
    div.style.marginLeft = `${col*10}%`;

    div.append(spanDelete,small1,h3,small2, small3);
    return div;
}
//Fonction pour effacer planning
function effacerCours() {
    const cours = document.querySelectorAll('.day-content');
    cours.forEach(c => {
        c.innerHTML = '';
    });
}
//fonction pour charger les select
function chargerSelect(data, select, label) {
    select.innerHTML = '';
    //
    const option = document.createElement('option');
    option.innerText = label;
    option.value = 0;
    select.appendChild(option);
    //
    data.forEach(d => {
        const option = document.createElement('option');
        option.innerText = d.nom;
        option.value = d.id;
        select.appendChild(option);
    });
} 
//fonction pour charger les heures
function chargerHeure(min, max, select) {
    select.innerHTML = '';
    const option = document.createElement('option');
    option.innerText = 'Choisir une Heure';
    option.value = 0;
    select.appendChild(option);
    //
    for (let i = min; i <= max; i++) {
        const option = document.createElement('option');
        option.innerText = `${i} H`;
        option.value = i;
        select.appendChild(option)
    }
}



