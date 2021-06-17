let projs = [
    {nome: "Project A", 
    src: "imgs/projs/projA.png",
    href: "#"},
    {nome: "Project B", 
    src: "imgs/projs/projB.png",
    href: "#"},
    {nome: "Project C", 
    src: "imgs/projs/projC.png",
    href: "#"},
    {nome: "Project D", 
    src: "imgs/projs/projD.png",
    href: "#"},
    {nome: "Serralves", 
    src: "imgs/projs/serralves.png",
    href: "projs/serralves/index.html"},
    {nome: "Spotipimba", 
    src: "imgs/projs/spotipimba.png",
    href: "#"}
]

//Carregar imagens na pagina no load 
document.addEventListener("DOMContentLoaded", show('default'));

function show(check){
    let container = document.querySelector(".container-article");
    container.innerHTML = ""; //Para quando a função for chamada novamente

    console.log("ok")
    if (check=='default'){
        console.log("ok2")
        for (const p of projs)
            container.innerHTML += '<div class="container2-img"><a href="' + p.href + '"><img src="' + p.src + '" alt="' + p.nome + '"></a><p>'+p.nome+'</p></div>'
    }else
        for (const p of projs) 
            container.innerHTML += '<div class="container2-img"><img src="imgs/temp.jpg" alt="temp"></div>'
}


//Ao clicar no botão de ordenar
function reOrdenar(){
    let elem = document.querySelector(".container-article");

    show('temp'); //colocar uma imagem temporária nos cards
    projs.reverse() 

    //Adiciona uma class que tem uma animação em CSS
    elem.classList.add('lauchAnimation');

    setTimeout(() => { //executar codigo ao fim de 4 seg
        elem.classList.remove('lauchAnimation');
        show('default');
    }, 4000); 
    

    let btn = document.querySelector(".btnOrdenar");
    btn.value == 'Asc' ? btn.value='Desc' : btn.value='Asc'
}

//Função menu navbar
function navBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



//Validação form 
const formEl = document.querySelector('form')

formEl.addEventListener('submit', (e)=>{
  // Impedir o envio do formulario
  e.preventDefault()
  console.log(formEl)

  const errors = formValidtion(formEl)
  console.log(errors) 
  if(errors.length == 0){
    //Submeter
    e.currentTarget.submit();
    console.log('Form submitted')
  }else{  
    console.error('Form not submitted')
    e.preventDefault()
  }
})


function formValidtion(form){
    const error = []
    console.log('validation')
  
    const name = form.querySelector('#input_name').value
    const email = form.querySelector('#input_email').value
    const subject = form.querySelector('#input_subject').value
    const message = form.querySelector('#input_message').value
  
    if(name === '')
        error.push('Name cannot be empty')
    else if(email === '')
        error.push('Email cannot be empty')
    else if(subject === '')
        error.push('subject cannot be empty')
    else if(message === '')
        error.push('message cannot be empty')
    return error
  }