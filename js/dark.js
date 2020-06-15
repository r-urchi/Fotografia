const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.querySelector('.header__nombre').classList.toggle("dark");
    document.querySelector('.header__descripcion').classList.toggle("dark");
    document.querySelector('.contenedor__contacto-titulo').classList.toggle("dark");
    btnSwitch.classList.toggle("activo");

    // guarda en localstorage ------------------------------------------
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    }else{
        localStorage.setItem("dark-mode", "false");
    }
});

// obtiene el modo actual
if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    document.querySelector('.header__nombre').classList.add("dark");
    document.querySelector('.header__descripcion').classList.add("dark");
    document.querySelector('.contenedor__contacto-titulo').classList.add("dark");
    
    btnSwitch.classList.add("activo");
    
}else{
    document.body.classList.remove("dark");
    document.querySelector('.header__nombre').classList.remove("dark");
    document.querySelector('.header__descripcion').classList.remove("dark");
    document.querySelector('.contenedor__contacto-titulo').classList.remove("dark");

    btnSwitch.classList.remove("activo");
}
