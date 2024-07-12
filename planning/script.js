// LES DONNEES DE L'APPLICATION PROVENANT D'UNE BASE DE DONNEES

//CLASSES------------------------------------------------------------------------------
let classes = [
    {id:1, nom: 'L2 GLRS A', effectif: 29, semaine: '', planning: [[],[],[],[],[],[]]},
    {id:2, nom: 'L2 GLRS B', effectif: 25, semaine: '', 
        planning: [
            [
                {id: 1, day: 1 , module: 'LC', prof: 'Aly', duree: 4, debut: 10,salle: '101'},
            ],[],[],[],[],
            [
                {id: 1, day: 6 , module: 'Algo', prof: 'Baila', duree: 3, debut: 9,salle: '104'},
            ]
        ]
    },
    {id:3, nom: 'L2 ETSE', effectif: 29, semaine: '', 
        planning: [
            [
                {id: 1, day: 1 , module: 'PHP', prof: 'Baila', duree: 2, debut: 13,salle: '204'}
            ],[],[],[],[],
            [
                {id: 1, day: 6 , module: 'FLASK', prof: 'Aly', duree: 2, debut: 15,salle: '102'}
            ]
        ]
    },
    {id:4, nom: 'L1 A', effectif: 40, semaine: '', planning: [[],[],[],[],[],[]]},
    {id:5, nom: 'IAGE B', effectif: 21, semaine: '', planning: [[],[],[],[],[],[]]},
    {id:6, nom: 'L2 CDSD', effectif: 4, semaine: '', 
        planning: [
            [ 
                {id: 1, day: 1 , module: 'Python', prof: 'Aly', duree: 3, debut: 9,salle: '201'},
                {id: 2, day: 1 , module: 'PHP', prof: 'Baila', duree: 4, debut: 13,salle: '402'}
            ],[],
            [
                {id: 1, day: 3 , module: 'FLASK', prof: 'Aly', duree: 2, debut: 15,salle: '102'},
            ],
            [
                {id: 1, day: 4 , module: 'SGBD', prof: 'Mbaye', duree: 2, debut: 8,salle: 'incub'},
            ],[],[]
        ]
    }
];
//---------------------------------------------------------------------------------------------------

//MODULES----------------------------------------------------------------------------------------------
let modules = [
    {id:1, nom: 'ALGO', semaine: '', 
        planning: [
            [
                {id: 1, day: 1 , classe: 'L2 GLRS B', prof: 'Baila', duree: 4, debut: 13,salle: '402'}
            ],[],
            [
                {id: 1, day: 3 , classe: 'L2 GLRS A', prof: 'Aly', duree: 4, debut: 8,salle: '101'}
            ]
            ,[],[],[]
        ]
    },
    {id:2, nom: 'PHP', semaine: '', planning: [[],[],[],[],[],[]]},
    {id:3, nom: 'PYTHON', semaine: '', 
        planning: [
            [
                {id: 1, day: 1 , classe: 'L2 GLRS A', prof: 'Aly', duree: 4, debut: 10,salle: '101'},
                {id: 2, day: 1 , classe: 'L2 GLRS B', prof: 'Aly', duree: 2, debut: 15,salle: '201'}
            ],
            [
                {id: 1, day: 1 , classe: 'L2 GLRS A', prof: 'Aly', duree: 4, debut: 10,salle: '401'}
            ],[],[],[],[]
        ]
    },
    {id:4, nom: 'LC', semaine: '', planning: [[],[],[],[],[],[]]},
    {id:5, nom: 'JAVASCRIPT', semaine: '', planning: [[],[],[],[],[],[]]},
    {id:6, nom: 'JAVA', semaine: '', planning: [[],[],[],[],[],[]]}
];
//--------------------------------------------------------------------------------------------------

//ENSEIGNANTS----------------------------------------------------------------------------------------
let enseignants = [
    {id:1, nom: 'ALY', semaine: '', modules:[1,3,4,5], planning: [[],[],[],[],[],[]]},
    {id:2, nom: 'BAILA', semaine: '', modules:[1,2,4,5,6],
        planning: [
            [
                {id: 1, day: 1 , classe: 'L2 GLRS A', module: 'ALGO', duree: 4, debut: 10,salle: '403'},
                {id: 2, day: 1 , classe: 'L2 GLRS B', module: 'PHP', duree: 2, debut: 15,salle: '101'}
            ],[],[],[],
            [
                {id: 1, day: 5 , classe: 'L2 ETSE', module: 'Algo', duree: 4, debut: 13,salle: '104'}
            ],[]
        ]
    },
    {id:3, nom: 'NDOYE', semaine: '', modules:[1],planning: [[],[],[],[],[],[]]},
    {id:4, nom: 'MBAYE', semaine: '', modules:[3,5],
        planning: [
            [],
            [
                {id: 1, day: 2 , classe: 'L2 ETSE', module: 'SGBD', duree: 3, debut: 14,salle: '104'},
                {id: 2, day: 2 , classe: 'L2 GLRS A', module: 'SGBD', duree: 4, debut: 8,salle: '204'},
            ],[],[],
            [
                {id: 1, day: 5 , classe: 'L2 ETSE', module: 'SGBD', duree: 3, debut: 14,salle: '104'},
            ],[]]},
    {id:5, nom: 'DJIBY', semaine: '', modules:[1,2,6],planning: [[],[],[],[],[],[]]},
    {id:6, nom: 'SECKOUBA', semaine: '', modules:[5,6],planning: [[],[],[],[],[],[]]}
];
//-----------------------------------------------------------------------------------------------

//SALLES-----------------------------------------------------------------------------------------
let salles = [
    {id:1, nom: 'En ligne', semaine: '', nbrPlaces:500, planning: [[],[],[],[],[],[]]},
    {id:2, nom: '101', semaine: '', nbrPlaces:40, 
        planning: [
            [
                {id: 1, day: 1 , classe: 'L2 ETSE', module: 'SGBD', duree: 3, debut: 8,prof: 'Mbaye'},
                {id: 2, day: 1 , classe: 'L2 CDSD', module: 'WORDPRESS', duree: 4, debut: 13,prof: 'Seckouba'},
            ],[],[],
            [
                {id: 1, day: 4 , classe: 'L2 GLRS A', module: 'Algo', duree: 4, debut: 8,prof: 'Baila'},
                {id: 2, day: 4 , classe: 'L2 CDSD', module: 'WORDPRESS', duree: 3, debut: 13,prof: 'Seckouba'},
            ],[],[]
        ]
    },
    {id:3, nom: '102', semaine: '', nbrPlaces:20, planning: [[],[],[],[],[],[]]},
    {id:4, nom: '103', semaine: '', nbrPlaces:30, 
        planning: [
            [
                {id: 1, day: 1 , classe: 'L2 ETSE', module: 'SGBD', duree: 2, debut: 10,prof: 'Mbaye'},
                {id: 2, day: 1 , classe: 'L2 IAGE', module: 'Algo', duree: 3, debut: 14,prof: 'Baila'}, 
            ],[],[],[],[],
            [
                {id: 1, day: 6 , classe: 'L2 GLRS A', module: 'Python', duree: 4, debut: 8,prof: 'Aly'},
                {id: 2, day: 6 , classe: 'L2 GLRS B', module: 'PHP', duree: 3, debut: 13,prof: 'Baila'},
            ]
        ]
    },
    {id:5, nom: '104', semaine: '', nbrPlaces:10, planning: [[],[],[],[],[],[]]},
    {id:6, nom: '201', semaine: '', nbrPlaces:50, planning: [[],[],[],[],[],[]]},
    {id:7, nom: 'incub', semaine: '', nbrPlaces:15, planning: [[],[],[],[],[],[]]}
];
//---------------------------------------------------------------------------------------------


/*Classe actuelle
let classeActuelle = {
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
};*/

// ------------------ Couleur -----------------------------
const colors = ['da974b','#E8B01F','#DBCB89','#71BCF3','#E0474C','#7FB8B4','#B2B1B1','#9F4C9D','#0073BC','#94918d', '#5dffe3','#1d96d5','#FFFA00','#e40090','#21FF19','#f20089','#41dfa8','#FF1493','#6A5ACD','#FFDEAD','#7FFF00','#00FA9A','#00FFFF','#00CED1','#1E90FF','#FF6347','#DA70D6'];
const cards = document.querySelectorAll('.card');
const select = document.querySelector("#select");

//-------------- Side bar---------------------------------------
const divClasses = document.querySelector('#classes');
const divEnseignants = document.querySelector('#enseignants');
const divSalles = document.querySelector('#salles');
const divModules = document.querySelector('#modules');

const spanClasses = document.querySelector('#span-classes');
const spanEnseignants = document.querySelector('#span-enseignants');
const spanSalles = document.querySelector('#span-salles');
const spanModules = document.querySelector('#span-modules');

const titrePlanning = document.querySelector('#titre');

const nbreTache = document.querySelector('#tache');

const btnAfficher = document.querySelector('#bouton-afficher');
const afficherMoi = document.querySelector('.afficher');

//---------------- Ajouter element -------------------------------
const plus = document.querySelector('#ajout');
const ajouter = document.querySelector('.ajouter');
const btnModules = document.querySelector('#btn-modules');
const btnClasses = document.querySelector('#btn-classes');
const btnSalles = document.querySelector('#btn-salles');
const btnEnseignants = document.querySelector('#btn-enseignants');
const btnFermer = document.querySelector('#btn-fermer');

//-------------------- Ajouter Module---------------------------------
const ajouterModule = document.querySelector('.ajouter-module');
const moduleName = document.querySelector('#modulename');
const btnAjouterModule = document.querySelector('#btn-ajouter-module');
const btnAnnulerModule = document.querySelector('#btn-annuler-module');

//----------------------- Ajouter SAlle---------------------------------
const ajouterSalle = document.querySelector('.ajouter-salle');
const salleName = document.querySelector('#sallename');
const salleNumber = document.querySelector('#sallenumber');
const btnAjouterSalle = document.querySelector('#btn-ajouter-salle');
const btnAnnulerSalle = document.querySelector('#btn-annuler-salle');

//-------------------- Ajouter Classe-----------------------------------
const ajouterClasse = document.querySelector('.ajouter-classe');
const classeName = document.querySelector('#classename');
const effectifClasse = document.querySelector('#effectifclasse');
const btnAjouterClasse = document.querySelector('#btn-ajouter-classe');
const btnAnnulerClasse = document.querySelector('#btn-annuler-classe');

//-------------------- Ajouter Enseignant---------------------------------
const ajouterEnseignant = document.querySelector('.ajouter-enseignant');
const enseignantName = document.querySelector('#enseignantname');
const enseignantCheckbox = document.querySelector('.checkbox');
const btnAjouterEnseignant = document.querySelector('#btn-ajouter-enseignant');
const btnAnnulerEnseignant = document.querySelector('#btn-annuler-enseignant');

//------------------------ Modal ---------------------------------------------- 

const addCours = document.querySelectorAll('.add-cours');
const selectModule = document.querySelector('#select_module');
const selectEnseignant = document.querySelector('#select_enseignant');
const selectDebut = document.querySelector('#select_debut');
const selectFin = document.querySelector('#select_fin');
const selectSalle = document.querySelector('#select_salle');
const errorModal = document.querySelector('.error-modal'); // pour passer le message d'erreur
const btnSaveModal = document.querySelector('#save');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#closeModal');



//---------------------------------------------------------------------------------------------------------------------



// changer couleur div-----------------------------------------------------------
function changerCouleurDiv(e1,e2,e3,e4,span){
    e1.addEventListener('click',_=>{
        e1.classList.add("active");
    })
    e2.addEventListener('click',_=>{
        e1.classList.remove("active");
        span.innerText=0;
    })
    e3.addEventListener('click',_=>{
        e1.classList.remove("active");
        span.innerText=0;
    })
    e4.addEventListener('click',_=>{
        e1.classList.remove("active");
        span.innerText=0;
    })
}
// 
changerCouleurDiv(divEnseignants,divSalles,divClasses,divModules,spanEnseignants);
changerCouleurDiv(divSalles,divEnseignants,divClasses,divModules,spanSalles);
changerCouleurDiv(divClasses,divEnseignants,divSalles,divModules,spanClasses);
changerCouleurDiv(divModules,divEnseignants,divSalles,divClasses,spanModules);


// charger le select en bas des div ----------------------------------------------------------------
function chargerDivSelect(div,data,span){
    div.addEventListener('click',_=>{
        select.innerHTML='' ;
        const option = document.createElement('option');
        option.innerText='' ;
        option.value=0 ;
        select.appendChild(option);
        data.forEach(d => {
            if (d.nom != "En ligne"){
                const option = document.createElement('option');
                option.innerText=d.nom;
                option.value=d.id;
                select.appendChild(option);
            }
        });
        if (div == divSalles){
            span.innerText=data.length-1;
        }else{
            span.innerText=data.length;
        }
        
        
    })
}

//
chargerDivSelect(divEnseignants,enseignants,spanEnseignants);
chargerDivSelect(divSalles,salles,spanSalles);
chargerDivSelect(divClasses,classes,spanClasses);
chargerDivSelect(divModules,modules,spanModules);

// Ajouter modules, enseignants, classes, salles -----------------------------------------------------------

function fermerAjouter(btn,div){
    btn.addEventListener('click',_=>{
        div.classList.toggle("open");
    })
}
fermerAjouter(plus,ajouter);
fermerAjouter(btnFermer,ajouter);

// Ajouter MODULES-------------------------------------------------------------------------------------------------
function ouvrirFermerForm(btn,div){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        ajouter.classList.remove("open");
        div.classList.toggle("open");
    })
}


ouvrirFermerForm(btnModules,ajouterModule);
ouvrirFermerForm(btnAnnulerModule,ajouterModule);

function checkLength(input,min,max){
    let cpt=1 ;
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters!`);
        cpt=0 ;
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less that ${max} characters!`);
        cpt= 0 ;
    }else{
        const formControl=input.parentElement;//reccupère le parent de l'element
        formControl.className="form-control";
    }
    return cpt ;
}

function check_required(input){
    if(input.value.trim()===""){
        // showError(input,getFieldName(input) +' is required');
        showError(input,`${getFieldName(input)} is required!!!`);
        return 0 ;
    }else{
        return 1 ; 
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1,15);
}

function showError(input,message){
    const formControl=input.parentElement;//reccupère le parent de l'element
    formControl.className="form-control error";
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function recherche(nom,input,list,message){
    let cpt = 1;
    list.forEach(l =>{
        if(l.nom == nom){
            showError(input,message);
            cpt=0 ;
        }
    })
    return cpt;
}

btnAjouterModule.addEventListener('click',function(e){
    e.preventDefault();
    if(check_required(moduleName)==1 && checkLength(moduleName,2,20)==1 && recherche(moduleName.value.toUpperCase(),moduleName,modules,"Module already exists")==1){
        const module = {
            id:modules.length+1,
            nom: '', 
            semaine: '', 
            planning: [[],[],[],[],[],[]]
        };
        module.nom= moduleName.value.toUpperCase();
        modules.push(module);
        moduleName.value="" ;
        ajouterModule.classList.toggle("open"); 
    }
});

btnAnnulerModule.addEventListener('click',_=>{
    moduleName.value = "" ;
    showError(moduleName,"");
});
//----------------------------------------------------------------------------------------------------------------


// Ajouter SALLE--------------------------------------------------------------------------------------------------
ouvrirFermerForm(btnSalles,ajouterSalle);
ouvrirFermerForm(btnAnnulerSalle,ajouterSalle);

//Fonction pour nombre pofistif
function check_number(input,min,max){
    if(input.value.trim()<=0){
        showError(input,`${getFieldName(input)} must be positive!!!`);
        return 0 ;
    }else if (input.value.trim()<min){
        showError(input,`${getFieldName(input)} must be at least ${min} !!!`);
        return 0 ;
    }else if (input.value.trim()>max){
        showError(input,`${getFieldName(input)} must be less than ${max} !!!`);
        return 0 ;
    }else{
        showError(input,"");
        return 1 ;
    }
};

btnAjouterSalle.addEventListener('click',function(e){
    e.preventDefault();
    if(check_required(salleName)==1 && checkLength(salleName,3,10)==1 && recherche(salleName.value.toUpperCase(),salleName,salles,"Salle already exists")==1 && check_required(salleNumber)==1 && check_number(salleNumber,10,100)==1){
        const salle = {
            id:salles.length+1, 
            nom: '', 
            semaine: '', 
            planning: [[],[],[],[],[],[]],
            nbrPlaces: 0
        };
        salle.nom = salleName.value.toUpperCase();
        salle.nbrPlaces = +salleNumber.value;
        salles.push(salle) ;
        salleName.value = "" ;
        salleNumber.value = "" ;
        ajouterSalle.classList.toggle("open");  
    }
});

btnAnnulerSalle.addEventListener('click',_=>{
    salleName.value = "" ;
    salleNumber.value = "" ;
    showError(salleName,"");
    showError(salleNumber,"");
});
//----------------------------------------------------------------------------------------------------------------


// Ajouter CLASSE------------------------------------------------------------------------------------------------
ouvrirFermerForm(btnClasses,ajouterClasse);
ouvrirFermerForm(btnAnnulerClasse,ajouterClasse);

btnAjouterClasse.addEventListener('click',function(e){
    e.preventDefault();
    if(check_required(classeName)==1 && checkLength(classeName,3,10)==1 && recherche(classeName.value.toUpperCase(),classeName,classes,"Class already exists")==1 && check_required(effectifClasse)==1 && check_number(effectifClasse,5,40)==1){
        const classe = {
            id:classes.length+1, 
            nom: '', 
            effectif: 0,
            semaine: '', 
            planning: [[],[],[],[],[],[]]
        };
        classe.nom = classeName.value.toUpperCase();
        classe.effectif = +effectifClasse.value;
        classes.push(classe);
        classeName.value = "" ;
        effectifClasse.value = "" ;
        ajouterClasse.classList.toggle("open");  
    }
});

btnAnnulerClasse.addEventListener('click',_=>{
    classeName.value = "" ;
    effectifClasse.value = "" ;
    showError(classeName,"");
    showError(effectifClasse,""); 
});
//----------------------------------------------------------------------------------------------------------------



// Ajouter ENSEIGNANTS--------------------------------------------------------------------------------------------
ouvrirFermerForm(btnEnseignants,ajouterEnseignant);
ouvrirFermerForm(btnAnnulerEnseignant,ajouterEnseignant);

btnEnseignants.addEventListener('click',_=>{
    modules.forEach(module => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = module.id ;
        checkbox.name = 'modules';
        const label = document.createElement('label');
        label.htmlFor = module.id;
        label.innerText = module.nom ;
        label.classList.add("option");
        enseignantCheckbox.appendChild(checkbox);
        enseignantCheckbox.appendChild(label);
    });
})

btnAjouterEnseignant.addEventListener('click',function(e){
    e.preventDefault();
    if(check_required(enseignantName)==1 && checkLength(enseignantName,3,15)==1 && recherche(enseignantName.value.toUpperCase(),enseignantName,enseignants,"Teacher already exists")==1){
        const prof = {
            id: enseignants.length+1, 
            nom: '', 
            semaine: '', 
            planning: [[],[],[],[],[],[]],
            modules: []
        };
        let k = 0;
        for (let i = 1; i < modules.length+1; i++) {
            if (document.getElementById(i).checked === true){
                k = 1;
                prof.modules.push(i);
            }
        }
        if (k===0){
            showError(document.querySelector("#kokou"),"You have to choose at least one modules");
        }else{
            const formControl=document.querySelector("#kokou").parentElement;
            formControl.className="form-control";
            prof.nom = enseignantName.value.toUpperCase();
            enseignants.push(prof);
            ajouterEnseignant.classList.toggle("open");
            enseignantName.value ="" ;
            enseignantCheckbox.innerHTML="" ;
        }  
    }
});

btnAnnulerEnseignant.addEventListener('click',_=>{
    enseignantName.value ="" ;
    enseignantCheckbox.innerHTML="" ;
    showError(enseignantName,"");
    showError(enseignantCheckbox,"");
});
//----------------------------------------------------------------------------------------------------------------


//--------------------------------PLANNING-----------------------------------------------------------------------

//---------------- Efface le planning------------
function effacerCours(){
    const cours = document.querySelectorAll('.day-content');
    cours.forEach(c => {
        c.innerHTML = '';
    });
}

//Fonction qui permet de creer un cours---------------
function createDivCours(JourCours,idCours,debut, duree, color, module, prof, salle){
    col = debut - 8;
    //
    const div = document.createElement('div');
    div.className = 'cours';

    const spanDelete = document.createElement('span');
    spanDelete.innerText = 'x';
    spanDelete.className = 'delete-cours';
    spanDelete.setAttribute('id',idCours)
    spanDelete.setAttribute('day',JourCours)
    
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

// -------------------Les fonctions pour afficher le planning-------------------------

let tache = 0;

function afficherPlanningClasse(classe){
    //Effacer tout le planning
    effacerCours();
    tache=0;
    //Afficher le nouveau planning
    titrePlanning.innerText = `Planning : ${classe.nom}`;
    classe.planning.forEach((p,i) => { 
        const jour = document.querySelector(`#day_${i+1}`);
        p.forEach(c => {
            tache=tache+1;
            let posColor = Math.floor(Math.random() * colors.length);
            jour.appendChild(createDivCours(c.day,c.id,c.debut,c.duree,colors[posColor],c.module,c.prof.toUpperCase(),c.salle));
        });
    });
}
//
function afficherPlanningModule(module){
    //Effacer tout le planning
    effacerCours();
    tache=0;
    //Afficher le nouveau planning
    titrePlanning.innerText = `Planning : ${module.nom}`;
    module.planning.forEach((p,i) => { 
        const jour = document.querySelector(`#day_${i+1}`);
        p.forEach(c => {
            tache=tache+1;
            let posColor = Math.floor(Math.random() * colors.length);
            jour.appendChild(createDivCours(c.day,c.id,c.debut,c.duree,colors[posColor],module.nom,c.prof.toUpperCase(),c.salle));
        });
    });
}
//
function afficherPlanningSalle(salle){
    //Effacer tout le planning
    effacerCours();
    tache=0;
    //Afficher le nouveau planning
    titrePlanning.innerText = `Planning : ${salle.nom}`;
    salle.planning.forEach((p,i) => { 
        const jour = document.querySelector(`#day_${i+1}`);
        p.forEach(c => {
            tache=tache+1;
            let posColor = Math.floor(Math.random() * colors.length);
            jour.appendChild(createDivCours(c.day,c.id,c.debut,c.duree,colors[posColor],c.module,c.prof.toUpperCase(),salle.nom));
        });
    });
}
//
function afficherPlanningEnseignant(enseignant){
    //Effacer tout le planning
    effacerCours();
    tache=0;
    //Afficher le nouveau planning
    titrePlanning.innerText = `Planning : ${enseignant.nom}`;
    enseignant.planning.forEach((p,i) => { 
        const jour = document.querySelector(`#day_${i+1}`);
        p.forEach(c => {
            tache=tache+1;
            let posColor = Math.floor(Math.random() * colors.length);
            jour.appendChild(createDivCours(c.day,c.id,c.debut,c.duree,colors[posColor],c.module,enseignant.nom.toUpperCase(),c.salle));
        });
    });
}
//----------------------------------------------------------------------------------------------


// fonction qui prend le tableau puis retourne l'élément correspondant à id

function findElementById(tableau,id){
    let cpt = -1 ;
    tableau.forEach((tab,i) => {
        if (tab.id === id){
            cpt = i ;
        }
    });
    if(cpt!==-1){
        return tableau[cpt] ;
    }
}

//Afficher le planning-------------------------------------------------------------------------
function afficherPlanning(div,tableau,msg){
    div.addEventListener('click',_=>{
        select.addEventListener('change',_=>{
            const id = getSeletedValue(select);
            let element = findElementById(tableau,+id);
            msg(element);
            if(tache==1 || tache ==0){
                nbreTache.innerText= `${tache} tâche`;
            }else{
                nbreTache.innerText= `${tache} tâches`;
            };
        })
    })
}

afficherPlanning(divEnseignants,enseignants,afficherPlanningEnseignant);
afficherPlanning(divSalles,salles,afficherPlanningSalle);
afficherPlanning(divClasses,classes,afficherPlanningClasse);
afficherPlanning(divModules,modules,afficherPlanningModule);


//-----------------------------------FIN PLANNING---------------------------------------------------------------------




function getSeletedValue(select){
    return select.options[select.selectedIndex].value;
}

function getProfsByIdModule(idModule){
    // const profs = [];
    // enseignants.forEach(e => {
    //     e.modules.forEach(idMod => {
    //         if(idModule == idMod){
    //             profs.push(e)
    //         }
    //     });
    // });
    // return profs;
    return enseignants.filter(e=>e.modules.includes(+idModule)); // + convertit string en int 
}

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



//Charger les heures dans le modal---------------------

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
        select.appendChild(option);
        
    }
}
//
chargerHeure(8,16,selectDebut);
chargerHeure(9,17,selectFin);
//----------------------------------------------------------------------------------------------------------------------------


//SUPPRIMER COURS ------------------------------------------------------------------------------------------------------------

function SupprimerCours(data,idElement,dayCours,idCours){
    data.forEach(d => {      //on parcourt les donnees
        if (d.id == idElement){  // on teste si c'est la classe/module... correspondant 
            d.planning[dayCours-1].splice(idCours-1,1); // on marque le jour dans le planning puis on supprime le cours par sa position
        }
    });
}

function supprimerCoursPlanning(div,data){
    div.addEventListener('click',_=>{
        select.addEventListener('change',_=>{
            const idSelect = getSeletedValue(select);
            if (data[idSelect-1].planning !=[]){
                const deleteCours = document.querySelectorAll('.delete-cours');
                deleteCours.forEach(btn => {
                    btn.addEventListener('click',(e)=>{
                        const idCours = e.target.getAttribute('id');
                        const dayCours = e.target.getAttribute('day');
                        const parent= e.target.parentElement;
                        parent.classList.add("efface");
                        const idSelect = getSeletedValue(select);
                        SupprimerCours(data,idSelect,dayCours,idCours);
                        tache = tache - 1 ;
                        if(tache==1 || tache==0){
                            nbreTache.innerText = `${tache} tâche`;
                        }else{
                            nbreTache.innerText = `${tache} tâches`;
                        };
                    }); 
                });  
            } 
        })
    })
}

supprimerCoursPlanning(divClasses,classes);
supprimerCoursPlanning(divSalles,salles);
supprimerCoursPlanning(divModules,modules);
supprimerCoursPlanning(divEnseignants,enseignants);


//----------------------------------------------------------------------------------------------------------------------------



//---------------- Pour ajouter cours------------------------------------------------------------------------------------------
 
//fermer le modal---------------

closeModal.addEventListener('click',_=>{
    modal.classList.remove('open');
})


//charger les elements du modal et ajouter cours----------------------------------------------------
//Le cours ne s'ajoute que pour une classe

let jourClique = 0;

divClasses.addEventListener('click',_=>{
    select.addEventListener('change',_=>{
        idClasse = getSeletedValue(select);
        addCours.forEach(btn => {
            btn.addEventListener('click',(e)=>{
                jourClique = e.target.getAttribute('day'); // prend l'attribut day de l'element cliqué
                modal.classList.toggle('open'); // si pas open ajouter, sinon retirer 
                // charger les modules et les salles de classes----------
                chargerSelect(modules,selectModule, 'Choisir un Module');
                chargerSelect(salles,selectSalle, 'Choisir une Salle');
            });
        });
    });
});



//Les variables qui recupèrent les id des selects
let idClasse = 0;
let idModule = 0;
let idEnseignant = 0;
let idSalle = 0;
let idDebut = 0;
let idFin = 0;


//Verifier s'il a choisi un select Module/Enseignant/classe/salle---------------------------------------

selectModule.addEventListener('change',()=>{
    errorModal.innerText="" ;
    idModule = getSeletedValue(selectModule);
    const profs = getProfsByIdModule(idModule); // retourne un tableau avec les id des profs trouvés
    //Charger les profs trouves dans le select // Les prof se chargent que si on choisit le module-----
    chargerSelect(profs,selectEnseignant,'Choisir un Enseignant');
});

selectEnseignant.addEventListener('change',()=>{
    idEnseignant =getSeletedValue(selectEnseignant);
    errorModal.innerText="";
});

selectSalle.addEventListener('change',()=>{
    idSalle =getSeletedValue(selectSalle);
    errorModal.innerText="";
});
selectDebut.addEventListener('change',()=>{
    idDebut =getSeletedValue(selectDebut);
    errorModal.innerText="";
});
selectFin.addEventListener('change',()=>{
    idFin =getSeletedValue(selectFin);
    errorModal.innerText="";
    
});

//Voir si classe/prof/salle est libre pour le cours ---------------------------------------

function verifierDisponibilite(id,jour,idDebut,idFin,data){
    let cpt=1 ;
    data[id-1].planning[jour-1].forEach(p =>{
        if(!(idFin <= p.debut || idDebut >= (p.debut+p.duree))){
            cpt=0;
        }
    })
    return cpt;
}

//Enregistrer le cours -------------------------------------------------------------------

function EnregistrerCoursClasse(idjour,idClasse,idModule,idProf,idSalle,idDebut,idFin){
    const cours={id: 0, day: 0 , module: '', prof: '', duree: 0, debut: 0, salle: ''};
    cours.id = classes[idClasse-1].planning[idjour-1].length + 1 ;
    cours.day = idjour ;
    cours.module = modules[idModule-1].nom ;
    cours.prof = enseignants[idProf-1].nom ;
    cours.debut = idDebut ;
    cours.duree = idFin - idDebut;
    cours.salle = salles[idSalle-1].nom;

    classes[idClasse-1].planning[idjour-1].push(cours);
}

function EnregistrerCoursModule(idjour,idClasse,idModule,idProf,idSalle,idDebut,idFin){
    const cours = {id: 0, day: 0 , classe: '', prof: '', duree: 0, debut: 0, salle: ''};
    cours.id = modules[idModule-1].planning[idjour-1].length + 1 ;
    cours.day = idjour ;
    cours.classe = classes[idClasse-1].nom ;
    cours.prof = enseignants[idProf-1].nom ;
    cours.debut = idDebut ;
    cours.duree = idFin - idDebut;
    cours.salle = salles[idSalle-1].nom;

    modules[idModule-1].planning[idjour-1].push(cours);
}

function EnregistrerCoursEnseignant(idjour,idClasse,idModule,idProf,idSalle,idDebut,idFin){
    const cours = {id: 0, day: 0 , classe: '', module: '', duree: 0, debut: 0, salle: ''};
    cours.id = enseignants[idProf-1].planning[idjour-1].length + 1 ;
    cours.day = idjour ;
    cours.module = modules[idModule-1].nom ;
    cours.classe = classes[idClasse-1].nom ;
    cours.debut = idDebut ;
    cours.duree = idFin - idDebut;
    cours.salle = salles[idSalle-1].nom;

    enseignants[idProf-1].planning[idjour-1].push(cours);
}

function EnregistrerCoursSalle(idjour,idClasse,idModule,idProf,idSalle,idDebut,idFin){
    if(idClasse!=1){
        const cours = {id: 0, day: 0, classe: '', module: '', duree: 0, debut: 0, prof: ''};
        cours.id = salles[idSalle-1].planning[idjour-1].length + 1 ;
        cours.day = idjour ;
        cours.module = modules[idModule-1].nom ;
        cours.classe = classes[idClasse-1].nom ;
        cours.debut = idDebut ;
        cours.duree = idFin - idDebut;
        cours.prof = enseignants[idProf-1].nom;

        salles[idSalle-1].planning[idjour-1].push(cours);
    }
}


btnSaveModal.addEventListener('click',function(e){
    e.preventDefault();
    if (idModule==0){
        errorModal.innerText="Choose a Module !";
    }else{
        if(idEnseignant==0){
            errorModal.innerText="Choose a Professor !";
        }else{
            if(idSalle==0){
                errorModal.innerText="Choose a Classroom !";
            }else{
                if(classes[idClasse-1].effectif>salles[idSalle-1].nbrPlaces){
                    errorModal.innerText="The room cannot hold this class !";
                }else{
                    if(idDebut==0){
                        errorModal.innerText="Choose a Start Time !";
                    }else{
                        if(idFin==0){
                            errorModal.innerText="Choose an End time !";
                        }else{
                            if( +idDebut >= +idFin ){
                                errorModal.innerText="The End Time must be later than the Start Time !";
                            }else{
                                if(idFin-idDebut>4){
                                    errorModal.innerText="A course lasts no more than 4 hours !";
                                }else{
                                    if(verifierDisponibilite(idEnseignant,jourClique,idDebut,idFin,enseignants)==0){
                                        errorModal.innerText="The Professor is not free at this time !";
                                    }else{
                                        if(verifierDisponibilite(idClasse,jourClique,idDebut,idFin,classes)==0){
                                            errorModal.innerText="This Class already has a course at this time !";
                                        }
                                        else{
                                            if(verifierDisponibilite(idSalle,jourClique,idDebut,idFin,salles)==0){
                                                errorModal.innerText="The Classroom is not free at that moment !";
                                            }else{
                                                EnregistrerCoursClasse(jourClique,idClasse,idModule,idEnseignant,idSalle,idDebut,idFin);
                                                EnregistrerCoursEnseignant(jourClique,idClasse,idModule,idEnseignant,idSalle,idDebut,idFin);
                                                EnregistrerCoursModule(jourClique,idClasse,idModule,idEnseignant,idSalle,idDebut,idFin);
                                                EnregistrerCoursSalle(jourClique,idClasse,idModule,idEnseignant,idSalle,idDebut,idFin);
                                                modal.classList.remove('open');
                                                afficherPlanningClasse(classes[idClasse-1]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});

btnAfficher.addEventListener('click',()=>{
    afficherMoi.classList.add('open');
})

afficherMoi.addEventListener('click',_=>{
    afficherMoi.classList.remove('open');
})