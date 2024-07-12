let myList = [
    {description:'Bernie Shu', checked: true},
    {description:'Awa Dieune', checked: false},
];
//
const btnAdd = document.getElementById('addNew');
// const output = document.getElementsByClassName('output')[0];
const output = document.querySelector('.output');
const newItem = document.getElementById('addItem');


//Functions
const build = ()=>{ // Mettre a jour le document
    //Activer le champs de saisie
    newItem.focus();
    //title
    output.innerHTML = '<h1>My list </h1>';
    //
    const tbl = document.createElement('table'); // =>  <table></table>
    //

    for (let i = 0; i < myList.length; i++) {
        const tr = document.createElement('tr'); // => <tr></tr>
        //1ere Cellule
        const td1 = document.createElement('td')// => <td></td>
        td1.innerHTML = myList[i].description;
        if(myList[i].checked){
            td1.innerHTML = `<strike>${myList[i].description}</strike>`;
        }
        //
        td1.addEventListener('click',()=>{
            myList[i].checked = !myList[i].checked;
            build();
        });
        //
        tr.appendChild(td1);
        //2ieme cellule
        const td2 = document.createElement('td')// => <td></td>
        //les deux span de la cellule 2
        const span1 = document.createElement('span'); 
        span1.innerText = 'Delete';
        td2.appendChild(span1);
        span1.addEventListener('click',()=>{
            const itemOut = myList.splice(i,1);
            build();
        });
        //
        const span2 = document.createElement('span'); 
        span2.innerText = 'Edit';
        span2.addEventListener('click',()=>{
            tr.style.backgroundColor = '#F78357';
            const oldDesc = myList[i].description;
            //
            const textArea = document.createElement('textarea');
            textArea.setAttribute('cols','30');
            textArea.value = oldDesc;
            //
            td1.innerHTML = '';
            textArea.addEventListener('blur',()=>{
                //Enregistrer les modifications
                myList[i].description = textArea.value.trim() == ''
                ? oldDesc : textArea.value;
                build();
            });
            td1.appendChild(textArea);
            textArea.focus();
        });
        td2.appendChild(span2);
        //
        tr.appendChild(td2);
        //
        tbl.appendChild(tr);
    }
    //Mettre le tbl dans le document (plus precicement dans output)
    output.appendChild(tbl);

};



//Events
btnAdd.addEventListener('click',()=>{
    const desc = newItem.value.trim();
    // if(desc.length != 0){
    if(desc != ''){
        const newTodo = {
            description: desc,
            checked: false
        }
        // myList.push({description: desc,checked: false});
        myList.push(newTodo);
        //Vider le input
        newItem.value = ''
        //Actualiser la page => mettre a jour le DOM
        build();
    }
});


window.onload = build;

