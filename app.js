let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Escribe un nombre en el campo por favor");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
    } else {
        alert("No hay nombres en la lista para sortear.");
    }
}
function reiniciar(){
    amigos = [];
    let lista = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");
    lista.innerHTML = "";
    resultado.innerHTML = "";
}