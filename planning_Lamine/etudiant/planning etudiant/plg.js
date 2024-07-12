// LES DONNEES DE L'APPLICATION PROVENANT D'UNE BASE DE DONNEES
const classes = [
    { id: 1, nom: 'L2 GLRS A', effectif: 29, semaine: '', planning: [[
        {module: 'PYTHON', prof: 'Aly NIANG', duree: 3, debut: 9,salle: '201', etat: 'en ligne'},
        {module: 'PHP', prof: 'Mr Wane', duree: 4, debut: 13,salle: '402', etat: 'presentiel'}
    ], [], [
        {module: 'FLUTTER', prof: 'Mr Wane', duree: 4, debut: 13,salle: '402', etat: 'presentiel'}

    ], [], [
        {module: 'LC', prof: 'Mr Wane', duree: 4, debut: 13,salle: '302', etat: 'presentiel'},
        {module: 'PHP', prof: 'Mr Wane', duree: 4, debut: 13,salle: '402', etat: 'presentiel'}
    ], [
        {module: 'JAVA', prof: 'Mr Wane', duree: 4, debut: 8,salle: '101', etat: 'presentiel'}
    ]] },
    { id: 2, nom: 'L2 GLRS B', effectif: 29, semaine: '', planning: [[], [
        {module: 'PHP', prof: 'Mr Wane', duree: 4, debut: 13,salle: '402', etat: 'presentiel'}

    ], [], [], [
        {module: 'LARAVEL', prof: 'Mr Wane', duree: 4, debut: 13,salle: 'incub', etat: 'presentiel'}
  
    ], []] },
    { id: 3, nom: 'L2 ETSE', effectif: 29, semaine: '', planning: [[], [], [
        {module: 'RUBY', prof: 'Mr Wane', duree: 4, debut: 9,salle: '', etat: 'en ligne'}

    ], [], [], [
        {module: 'PHP', prof: 'Mr Wane', duree: 4, debut: 8,salle: '402', etat: 'presentiel'}

    ]], statut: '' },
    { id: 4, nom: 'L1 A', effectif: 40, semaine: '', planning: [[], [
        {module: 'PYTHON', prof: 'Mr Wane', duree: 4, debut: 13,salle: 'incub', etat: 'presentiel'}

    ], [], [
        {module: 'PHP', prof: 'Mr Wane', duree: 2, debut: 15,salle: '402', etat: 'presentiel'}

    ], [], []], statut: '' },
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
    { id: 7, nom: 'FLUTTER', semaine: '', planning: [[], [], [], [], [], []] },
    { id: 8, nom: 'LARAVEL', semaine: '', planning: [[], [], [], [], [], []] },
    { id: 9, nom: 'RUBY', semaine: '', planning: [[], [], [], [], [], []] },
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
    { id: 1, nom: '101', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 10 },
    { id: 2, nom: '102', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 20 },
    { id: 3, nom: '103', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 30 },
    { id: 4, nom: '104', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 10 },
    { id: 5, nom: '201', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 50 },
    { id: 6, nom: 'incub', semaine: '', planning: [[], [], [], [], [], []], nbrPlaces: 15 },
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
  
  // ---------------------------------------
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
  
  //
  let jour = 0;
  afficherPlanning();

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
      let elements;
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
            elements = salles;
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
  updateSpan(salles, 'salles');
  updateSpan(modules, 'modules');
  updateSpan(classes, 'classes');
  
  function afficherPlanning() {
    //Effacer tout le planning
    effacerCours();
    //Afficher le nouveau planning
    classe.planning.forEach((p, i) => {
        const jour = document.querySelector(`#day_${i + 1}`);
        p.forEach(c => {
            let posColor = Math.floor(Math.random() * colors.length);
            jour.appendChild(createDivCours(c.debut, c.duree, colors[posColor], c.module, c.prof, c.salle, c.etat));
        });
    });  
  }
  
  //Fonction qui permet de creer un cours
  function createDivCours(debut, duree, color, module, prof, salle, statut) {
    col = debut - 8;
    
    const div = document.createElement('div');
    div.className = 'cours';
    
    const spanDelete = document.createElement('span');
    spanDelete.innerText = '';
    spanDelete.className = 'delete-cours';
  
    const small1 = document.createElement('small');
    small1.innerText = prof;
  
    const small2 = document.createElement('small');
    small2.innerText = salle;
  
    const h3 = document.createElement('h3');
    h3.innerText = module;
  
    const small3 = document.createElement('small');
    small3.innerText = statut;
  
    div.style.backgroundColor = color;
    div.style.width = `${duree * 10}%`;
    div.style.marginLeft = `${col * 10}%`;
  
    div.append(spanDelete, small1, h3, small2, small3);
    return div;
  }
  function effacerCours() {
    const cours = document.querySelectorAll('.day-content');
    cours.forEach(c => {
        c.innerHTML = '';
    });
  }