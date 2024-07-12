// BASE DE DONNEES
const classes= [
    {id:1, nom:'L2 GLRS A',effectif:29,semaine:'',planning:[[],[],[],[],[],[]]},
    {id:2, nom:'L2 GLRS B',effectif:29,semaine:'',planning:[[],[],[],[],[],[]]},
    {id:3, nom:'L2 ETSE',effectif:29,semaine:'',planning:[[],[],[],[],[],[]]},
    {id:4, nom:'L1 GLRS A',effectif:29,semaine:'',planning:[[],[],[],[],[],[]]},
    {id:5, nom:'L1 IAEGE B',effectif:29,semaine:'',planning:[[],[],[],[],[],[]]},
    {id:6, nom:'L1 IAEGE B',effectif:29,semaine:'',planning:[[],[],[],[],[],[]]},
];

const  modules= [
    {id:1, nom:'ALGO',semaine:'',planning:[[],[],[],[],[],[]]},
    {id:2, nom:'PHP',semaine:'',planning:[[],[],[],[],[],[]]},
    {id:3, nom:'PYTHON',semaine:'',planning:[[],[],[],[],[],[]]},
    {id:4, nom:'LC',semaine:'',planning:[[],[],[],[],[],[]]},
    {id:5, nom:'JAVASCRIPT',semaine:'',planning:[[],[],[],[],[],[]]},
    {id:6, nom:'UML',semaine:'',planning:[[],[],[],[],[],[]]},
];

const enseigants= [
    {id:1, nom:'Aly',semaine:'',planning:[[],[],[],[],[],[]],modules:[1,3,4,5]},
    {id:2, nom:'Baila',semaine:'',planning:[[],[],[],[],[],[]],modules:[1,2,4,5,6]},
    {id:3, nom:'Ndoye',semaine:'',planning:[[],[],[],[],[],[]],modules:[1]},
    {id:4, nom:'Mbaye',semaine:'',planning:[[],[],[],[],[],[]],modules:[4,5]},
    {id:5, nom:'Djiby',semaine:'',planning:[[],[],[],[],[],[]],modules:[1,3,6]},
    {id:6, nom:'Seckou',semaine:'',planning:[[],[],[],[],[],[]],modules:[5,6]},
];

const salles= [
    {id:1, nom:'incub',semaine:'',planning:[[],[],[],[],[],[]],nbrPlaces:10},
    {id:2, nom:'101',semaine:'',planning:[[],[],[],[],[],[]],nbrPlaces:30},
    {id:3, nom:'102',semaine:'',planning:[[],[],[],[],[],[]],nbrPlaces:50},
    {id:4, nom:'201',semaine:'',planning:[[],[],[],[],[],[]],nbrPlaces:20},
    {id:5, nom:'203',semaine:'',planning:[[],[],[],[],[],[]],nbrPlaces:35},
    {id:6, nom:'302',semaine:'',planning:[[],[],[],[],[],[]],nbrPlaces:43},
];
//------------------------------------------------------
//classe actule
let classe= {
    id:12,
    nom:'CDSD',
    effectif:43,
    semaine:'16/01/2023 - 21/01/2023',
    planning:[
        [
            { module:'PYthon',prof:'Aly NIANG',duree:3,debut:9,salle:'201'},
            { module:'PHP',prof:'Mr Wane',duree:4,debut:13,salle:'402'},
        ],
        [],
        [],
        [
            { module:'SGBD',prof:'Mr Mbaye',duree:2,debut:8,salle:'incub'},
        ],
        [],
        []
    ]
};
//---------------------------------------------------

// console.table(classe.planning[0][0].duree);
//--------------------------------

const colors= ['#da974b','#BBE1E6','#F6F3F4','#DC2829'];//COULEUR POUR LES COURS
const cards = document.querySelector('.card');
const select = document.querySelector('#select');

const divClasses = document.querySelector('#classes');
const divSalles = document.querySelector('#salles');
const divModules = document.querySelector('#modules');
const divEnseignants = document.querySelector('#enseignants');

const addCours = document.querySelectorAll('.add-cours');
const selectModule = document.querySelector('#select_module');
const selectEnseignant = document.querySelector('#select_enseignant');
const selectDebut = document.querySelector('#select_debut');
const selectFin = document.querySelector('#select_fin');
const selectSalle = document.querySelector('#select_salle');
const errorModal = document.querySelector('error_modal');
const btnSaveModal = document.querySelector('#save');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#closeModal');
//
let jour=0;

// debut appel

//charger les heures
chargerHeure(8,16,selectDebut);
chargerHeure(9,17,selectFin);  

//charger les selects
chargerSelect(modules,selectModule,'Choisir un Module');
chargerSelect(salles,selectSalle,'Chosir une Salle');
afficherPlanning();
//changer les couleurs

ActiveCouleurs2();


//charger btn select
chargeDiv(divClasses,classes);
chargeDiv(divEnseignants,enseigants);
chargeDiv(divModules,modules);
chargeDiv(divSalles,salles);



// event
// afficher modal
addCours.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        jour = e.target.getAttribute('day')
        // modal.className='modal open';
        modal.classList.toggle('open');
    });

});

// fermer modal
closeModal.addEventListener('click',()=>{
    modal.classList.toggle('open');
});

// charger enseignants
selectModule.addEventListener('change',()=>{
    const idModule = getSelectedValue(selectModule);
    const profs= getProfsByIdModule(idModule);
    //charger les profs dans le select

    chargerSelect(profs,selectEnseignant,'Chosir un enseignant')
});

// debut des fonctions

//pour charger les heures
function chargerHeure(min,max,select){
    select.innerHTML='';
    const option=document.createElement('option');
    option.innerText ='Choisir une Heure';
    select.appendChild(option);
    //
    for (let i =min; i <= max; i++) {
      const option =document.createElement('option')
      option.innerText=`${i} H`
      option.value=i;
      select.appendChild(option);
        
    }
}

//charger select

function chargerSelect(data,select,label){
    select.innerHTML='';
    //
    const option = document.createElement('option');
    option.innerText=label;
    option.value=0;
    select.appendChild(option);
    data.forEach(d => {
        const option = document.createElement('option');
        option.innerText=d.nom;
        option.value=d.id;
        select.appendChild(option);
    });
}

//afficher planning

function afficherPlanning(){
    //effacer tout le planning
   effacerPlanning();
   //afficher le nouveau planning
   classe.planning.forEach((p,i) => {
        const jour = document.querySelector(`#day_${i+1}`);
        p.forEach(c => {
            let col= Math.floor(Math.random()*colors.length);
            // jour.appendChild(...);
            jour.appendChild(createDivCours(c.debut,c.duree,colors[col],c.module,c.prof,c.salle))
        });
   });
}

function effacerPlanning(){
    const cours=document.querySelectorAll('.day-content');
    cours.forEach(c => {
        c.innerHTML='';
    });
}

//Create div cours

function createDivCours(debut,duree,color,module,prof,salle){
    col = debut - 8;
    const div =document.createElement('div');
    div.className='cours';
    const spanDelete=document.createElement('span');
    spanDelete.innerText='x';
    spanDelete.className='delete-course';

    const small1=document.createElement('small');
    small1.innerText=prof;

    const small2=document.createElement('small');
    small2.innerText=salle;

    const h3=document.createElement('h3');
    h3.innerText=module;

    div.style.backgroundColor=color;
    div.style.width=`${duree*10}%`;
    div.style.marginLeft=`${col*10}%`;

    div.append(spanDelete,small1,h3,small2);
    return div;

}

//Activer les fonds 

function ActiveCouleurs(btn){
    btn.addEventListener('click',_=>{
            btn.className='card active';
            
        }
    );
    btn.addEventListener('mouseleave',_=>{
        btn.className='card';
    }
);
}

function ActiveCouleurs2(){
    divClasses.addEventListener('click',_=>{
            divClasses.className='card active';
            divEnseignants.className='card';
            divModules.className='card';
            divSalles.className='card';
            
        }
    );
    divEnseignants.addEventListener('click',_=>{
        divClasses.className='card';
        divEnseignants.className='card active';
        divModules.className='card';
        divSalles.className='card';
        
    }
    );
    divModules.addEventListener('click',_=>{
        divClasses.className='card ';
        divEnseignants.className='card';
        divModules.className='card active';
        divSalles.className='card';
        
    }
    );
    divSalles.addEventListener('click',_=>{
        divClasses.className='card ';
        divEnseignants.className='card';
        divModules.className='card';
        divSalles.className='card active';
    
    }
    );
}

function chargeDiv(btn,data){
    btn.addEventListener('click',_=>{
            btn
           select.innerHTML=''
           const option = document.createElement('option');
           option.value=0;
           select.appendChild(option);
           data.forEach(d => {
               const option = document.createElement('option');
               option.innerText=d.nom;
               option.value=d.id;
               select.appendChild(option);
           });
        }
    );
}

// 

function getSelectedValue(select){
    return select.options[select.selectedIndex].value;
}

//
function getProfsByIdModule(idModule){
    return enseigants.filter(e=>e.modules.includes(+idModule));
}

