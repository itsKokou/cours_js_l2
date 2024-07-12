// LES DONNEES DE L'APPLICATION PROVENANT D'UNE BASE DE DONNEES
const classes = [
    {id:1, nom: 'L2 GLRS A', effectif: 29, semaine: '', planning: [[],[],[],[],[],[]]},
    {id:2, nom: 'L2 GLRS B', effectif: 25, semaine: '', planning: [[],[],[],[],[],[]]},
    {id:3, nom: 'L2 ETSE', effectif: 29, semaine: '', planning: [[],[],[],[],[],[]]},
    {id:4, nom: 'L1 A', effectif: 40, semaine: '', planning: [[],[],[],[],[],[]]},
    {id:5, nom: 'IAGE B', effectif: 21, semaine: '', planning: [[],[],[],[],[],[]]},
    {id:6, nom: 'CDSD', effectif: 4, semaine: '', planning: [[],[],[],[],[],[]]},
];

const modules = [
    {id:1, nom: 'ALGO', semaine: '', planning: [[],[],[],[],[],[]]},
    {id:2, nom: 'PHP', semaine: '', planning: [[],[],[],[],[],[]]},
    {id:3, nom: 'PYTHON', semaine: '', planning: [[],[],[],[],[],[]]},
    {id:4, nom: 'LC', semaine: '', planning: [[],[],[],[],[],[]]},
    {id:5, nom: 'JAVASCRIPT', semaine: '', planning: [[],[],[],[],[],[]]},
    {id:6, nom: 'JAVA', semaine: '', planning: [[],[],[],[],[],[]]},
];

const enseignants = [
    {id:1, nom: 'Aly', semaine: '', planning: [[],[],[],[],[],[]], modules:[1,3,4,5]},
    {id:2, nom: 'Baila', semaine: '', planning: [[],[],[],[],[],[]], modules:[1,2,4,5,6]},
    {id:3, nom: 'Ndoye', semaine: '', planning: [[],[],[],[],[],[]], modules:[1]},
    {id:4, nom: 'Mbaye', semaine: '', planning: [[],[],[],[],[],[]], modules:[3,5]},
    {id:5, nom: 'Djiby', semaine: '', planning: [[],[],[],[],[],[]], modules:[1,2,6]},
    {id:6, nom: 'Seckouba', semaine: '', planning: [[],[],[],[],[],[]], modules:[5,6]},
];

const salles = [
    {id:1, nom: '101', semaine: '', planning: [[],[],[],[],[],[]], nbrPlaces:10},
    {id:2, nom: '102', semaine: '', planning: [[],[],[],[],[],[]], nbrPlaces:20},
    {id:3, nom: '103', semaine: '', planning: [[],[],[],[],[],[]], nbrPlaces:30},
    {id:4, nom: '104', semaine: '', planning: [[],[],[],[],[],[]], nbrPlaces:10},
    {id:5, nom: '201', semaine: '', planning: [[],[],[],[],[],[]], nbrPlaces:50},
    {id:6, nom: 'incub', semaine: '', planning: [[],[],[],[],[],[]], nbrPlaces:15},
];
//-------------------------------------------


//Classe actuelle
const classe = {
    id: 12,
    nom: 'L2 CDSD',
    effectif: 43,
    semaine: '16/01/2023 - 21/01/2023',
    planning: [
        [
            {module: 'Python', prof: 'Aly NIANG', duree: 3, debut: 9,salle: '201'},
            {module: 'PHP', prof: 'Mr Wane', duree: 4, debut: 13,salle: '402'},
        ],
        [],
        [
            {module: 'FLASK', prof: 'Aly', duree: 2, debut: 15,salle: '102'},
        ],
        [
            {module: 'SGBD', prof: 'Mr Mbaye', duree: 2, debut: 8,salle: 'incub'},
        ],
        [],
        []
    ]
};

// ---------------------------------------
const colors = ['da974b','#E8B01F','#DBCB89','#71BCF3','#E0474C','#7FB8B4','#B2B1B1','#9F4C9D','#0073BC'];
const cards = document.querySelectorAll('.card');
const select = document.querySelector("#select");

const divClasses = document.querySelector('#classes');
const divEnseignants = document.querySelector('#enseignants');
const divSalles = document.querySelector('#salles');
const divModule = document.querySelector('#modules');

const addCours = document.querySelectorAll('.add-cours');
const selectModule = document.querySelector('#select_module');
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
chargerHeure(8,16,selectDebut);
chargerHeure(9,17,selectFin);
//
chargerSelect(modules,selectModule, 'Choisir un Module');
chargerSelect(salles,selectSalle, 'Choisir une Salle');
//
afficherPlanning();



function afficherPlanning(){
    //Effacer tout le planning
    effacerCours();
    //Afficher le nouveau planning
    classe.planning.forEach((p,i) => {
        const jour = document.querySelector(`#day_${i+1}`);
        p.forEach(c => {
            let posColor = Math.floor(Math.random() * colors.length);
            jour.appendChild(createDivCours(c.debut,c.duree,colors[posColor],c.module,c.prof,c.salle));
        });
    });
}

//Fonction qui permet de creer un cours
function createDivCours(debut, duree, color, module, prof, salle){
    col = debut - 8;
    //
    const div = document.createElement('div');
    div.className = 'cours';

    const spanDelete = document.createElement('span');
    spanDelete.innerText = 'x';
    spanDelete.className = 'delete-cours';
    
    const small1 = document.createElement('small');
    small1.innerText = prof;
    
    const small2 = document.createElement('small');
    small2.innerText = salle;

    const h3 = document.createElement('h3');
    h3.innerText = module;

    div.style.backgroundColor = color;
    div.style.width = `${duree*10}%`;
    div.style.marginLeft = `${col*10}%`;

    div.append(spanDelete,small1,h3,small2);
    return div;
}

function effacerCours(){
    const cours = document.querySelectorAll('.day-content');
    cours.forEach(c => {
        c.innerHTML = '';
    });
}
//
function chargerSelect(data, select, label){
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
//
function chargerHeure(min,max,select){
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


// ======================== DEVOIR ======================


function ChangerCouleur(e1,e2,e3,e4){
    e1.addEventListener('click',_=>{
        e1.className="card active"
    });
    e2.addEventListener("click",_=>{
        e1.className="card"
    });
    e3.addEventListener("click",_=>{
        e1.className="card"
    });
    e4.addEventListener("click",_=>{
        e1.className="card"
    });
}

function chargerOption(e,base){
    e.addEventListener('click',_=>{
        select.innerHTML=''
        const option = document.createElement('option')
        select.appendChild(option)
        let cpt=0
        base.forEach(i => {
            cpt= cpt+1
            const option = document.createElement('option')
            option.value= i.id
            option.innerText=i.nom
            select.appendChild(option)
        })
        e.Child.innerText="${cpt}"
    })
}

ChangerCouleur(divClasses,divEnseignants,divModule,divSalles)
ChangerCouleur(divEnseignants,divClasses,divModule,divSalles)
ChangerCouleur(divModule,divClasses,divEnseignants,divSalles)
ChangerCouleur(divSalles,divClasses,divEnseignants,divModule)

chargerOption(divClasses,classes)
chargerOption(divEnseignants,enseignants)
chargerOption(divModule,modules)
chargerOption(divSalles,salles)
/*divClasses = document.querySelector('#classes');
const divEnseignants = document.querySelector('#enseignants');
const divSalles = document.querySelector('#salles');
const divModule = document.querySelector('#modules');*/
