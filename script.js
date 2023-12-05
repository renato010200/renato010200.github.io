const toggleButton =  document.getElementById("toggleButton");
const mainArea = document.getElementById("main");
const sidiebar = document.querySelector(".sidebar");
const main = document.getElementById("main");


toggleButton.addEventListener ("click",function() {
    sidiebar.classList.toggle("opened");
    main.classList.toggle("main");
});

mainArea.addEventListener("click",function(){
    sidiebar.classList.remove("opened");
    main.classList.remove("main");
});

function imprimir(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if( name && email && message){
        alert("Nome: " + name + " " + "\nEmail: " + email + " " + "\nMensagem " + message);
    }else{
        alert("Preencha todos os campos");
    }
}