const main = document.querySelector("main");
const botonEjecutar = document.getElementById("boton");
 
// crea un boton al hacer click al boton ejecutar
botonEjecutar.addEventListener('click', ()=>{
    // const boton = createButtonSuccess();
    // const botonParaEliminar = selectOneButton();
    // con appendchild añade un hijo
    main.appendChild(boton);
    // segunda manera con innethtml
//     main.innerHTML +=`  <button type="button" class="btn btn-primary" id="boton"
//     style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
// Hi
// </button>`

// selectOneButton()
// main.removeChild(botonParaEliminar); //eliminar boton, hijo del main

const existentButton = selectOneButton()
const newButton = createButtonSuccess();
;

//actualizar o cambiar un boton por otro
//elemento padre

// main.replaceChild(newButton,existentButton); // primero elemento nuevo, luego elemento existente

// insetar boton antes de un elemento

main.insertBefore(existentButton,newButton)
})

function createButtonSuccess(){
    const button = document.createElement("button");
    // button.setAttribute("type","button");
    button.type = "button";
    // button.className = ("boton-m");
    button.classList.add("boton-m", "bg-primary","btn");
    button.textContent = "hi";
return button;
}

//funcion para llamar al boton que vamos a eliminar y retornarlo
function selectOneButton(){
    const btnFound = document.getElementById("two");
return btnFound; 
}
