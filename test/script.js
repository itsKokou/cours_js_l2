const body = document.querySelector('#body')
const container = document.querySelector(".container")
const control = document.querySelector(".control") 

body.addEventListener("click",_=>{
    body.className="body success"
})

function build (e){
    e.addEventListener("click",_=>{
        const papa = e.parentNode //document.body.firstElementChild;
        papa.style.backgroundColor = "white"
        let h2 = document.createElement('h2')
        h2.innerHTML="BONJOUR OHHH"
        e.style.display=
        papa.appendChild(h2)
        
    })
}

build(control)