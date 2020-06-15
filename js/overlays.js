window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach( (elemento) => {
        elemento.addEventListener('click', (e) => {
            e.preventDefault();
            enlaces.forEach( (enlace) => enlace.classList.remove('activo') );
            e.target.classList.add('activo');

            
            const categoria = e.target.innerHTML.toLowerCase();
            if(categoria == 'todas'){
                grid.filter('[data-categoria]');
            }else{
            grid.filter(`[data-categoria="${categoria}"]`);
            };
        });

        
    });

    // agrandar imagenes 

    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item__imagen').forEach( (elemento) => {
        
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');

            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
        });
    });

    // abrir info

    const fotoInfo = document.getElementById('header__foto-perfil');
    const overlayInfo = document.getElementById('overlay-info');
    const sobreMi = document.getElementById('header__info');

    fotoInfo.addEventListener('click', () =>{
        overlayInfo.classList.add('activo');
    })

    sobreMi.addEventListener('click', () =>{
        overlayInfo.classList.add('activo');
        
    })

    //boton cerrar info

    document.querySelector('#btn-cerrar-info').addEventListener('click', () => {
        overlayInfo.classList.remove('activo');
    })

    // boton cerrar 

    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('activo');
    });

    // cerrar con el overlay 

    overlayInfo.addEventListener('click', (e) => {

        if(e.target.id === 'overlay-info'){
            overlayInfo.classList.remove('activo');
        };
    });

    overlay.addEventListener('click', (e) => {
        
        if(e.target.id === 'overlay'){
            overlay.classList.remove('activo');
        }

    });

});