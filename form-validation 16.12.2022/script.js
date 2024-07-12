//Recuperer les elements à manipuler
//const myForm = document.getElementById('form');
//const myForm = document.getElementsByTagName('form') //retourne un tableau
//const myForme= document.querySelector('nom balise')// donne le premier element
//const myEx= document.querySelectorAll('.form-control')// prends tout(balise,class...)

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//fonctions
function checkEmail(input){
   const re= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   if(re.test(input.value.trim().toLowerCase())){
    showSucces(input)
   }else{
    showError(input,'Email is not valid !')
   }
}

function checkPasswordsMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'Passwords do not match')
    }
}

function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters!`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less that ${max} characters!`);
    }else{
        showSucces(input)
    }
}

function check_required(inputsArray){
    inputsArray.forEach(function(input){
        if(input.value.trim()===""){
            // showError(input,getFieldName(input) +' is required')
            showError(input,`${getFieldName(input)} is required!!!`)
        }else{
            showSucces(input) 
        } 
    });
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1,9);
}

function showSucces(input){
    const formControl=input.parentElement;//reccupère le parent de l'element
    formControl.className="form-control succes";
}

function showError(input,message){
    const formControl=input.parentElement;//reccupère le parent de l'element
    formControl.className="form-control error";
    const small=formControl.querySelector('small')
    small.innerText=message;
}
// Bloquer la soumission d'un formulaire 
//Events 
form.addEventListener('submit',function(e){
    //bloquer la soumission 
    e.preventDefault(); 
    console.log("Formulaire Valide");
    //Valider les champs de saisi :
    /*check_required(username);
    check_required(email);
    check_required(password);
    check_required(password2);*/
    check_required([username,email,password,password2])
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
})
