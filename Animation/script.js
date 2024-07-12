const scare = document.querySelector('.scare');
const container = document.querySelector('.container');




// setTimeout(function(){
//     alert('Bonjour toto');
// },5000);
// let i = 0;
// const myInterval = setInterval(function(){
//     console.log('breukh '+i)
//     i++;
//     if(i==6){
//         clearInterval(myInterval);
//     }
// },1000);



for (let i = 0; i < 2499; i++) {
    const scareCopy = scare.cloneNode();
    scareCopy.style.backgroundColor = 'black';
    //
    scareCopy.addEventListener('mouseover',function(){
        //changer la couleur
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        scareCopy.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        //
        const myInterval = setInterval(function(){
            if(!scareCopy.style.opacity){//si le scare est invisible
                scareCopy.style.opacity = 1; //afficher le scare
            }
            if(scareCopy.style.opacity > 0){
                scareCopy.style.opacity -= 0.1;
            }else{
                scareCopy.style.opacity=1;
                scareCopy.style.backgroundColor = 'black';
                clearInterval(myInterval);
            }
        },100);
    });
    


    container.appendChild(scareCopy);
}