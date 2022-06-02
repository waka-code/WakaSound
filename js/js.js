window.onload = inicio;

function inicio(){
    let audio = document.getElementById(`audio`).Value;
    document.getElementById(`play`).onclick = reproducir;
    document.getElementById(`pause`).onclick = pause;
    document.getElementById(`menu_Config`).onclick = configuracion;
    document.getElementById(`search_config`).onclick = search;
    document.getElementById(`favoryte`).onclick = cancionesFavoritas;
    document.getElementById(`canciones`).onclick = bibliotecaCanciones;
    document.getElementById(`senal`).onclick = Informacion;
    
    
}

function reproducir(){
    let title = document.querySelector(`.title`);
    audio.play();
    title.style.display=`block`;
     
}

function pause(){
    let title = document.querySelector(`.title`);
    audio.pause();
    title.style.display=`none`
}

const configuracion = ()=>{
    let menu = document.querySelector(`.menu`);
   
        if(menu.style.display==`none`){
            menu.style.display=`block`;
            document.querySelector(`.menu`).innerHTML = `
              <div class="contener">
              <article class="articulos">
               <h4>Music Player</h4>
               <h4>Account</h4>
               <h4>Events</h4>
               <h4>Settings</h4>
               <h4>Log out</h4>
              </article>
            </div>`;
            
        }else{
            menu.style.display=`none`
        }
}

const search =()=>{
    const SEARCH = document.querySelector(`.search`)
    if(SEARCH.style.display==`none`){
        SEARCH.style.display=`block`
        document.querySelector(`.search`).innerHTML=` <div class="contener__search">
        <article class="articulos__search">
         <input class="input_search" type="text" placeholder="Search">
         </article> 
         </div>`;
        
    }else{
        SEARCH.style.display=`none`
    }    
}

const cancionesFavoritas =()=>{
    const FAV = document.querySelector(`.favoritas`);
    if(FAV.style.display==`none`){
        FAV.style.display=`block`;
        document.querySelector(`.favoritas`).innerHTML=` <div class="contener__search">
        <article class="articulos__favoritas">
           <h4>Canciones Favoritas</h4>
         </article> 
         </div>`;
    }else{
        FAV.style.display=`none`
    }
}

const bibliotecaCanciones =()=>{
    const BIBLIOTECA = document.querySelector(`.biblioteca`);
    if(BIBLIOTECA.style.display==`none`){
        BIBLIOTECA.style.display=`block`;
        document.querySelector(`.biblioteca`).innerHTML=` <div class="contener__biblioteca">
        <article class="articulos__biblioteca">
           <h4>BIBLIOTECA</h4>
         </article> 
         </div>`;
    }else{
        BIBLIOTECA.style.display=`none`
    }
}

const Informacion =()=>{
    const INFO = document.querySelector(`.INfo`);
    if(INFO.style.display==`none`){
        INFO.style.display=`block`;
        document.querySelector(`.INfo`).innerHTML=` <div class="contener__INfo">
        <article class="articulos__INfo">
           <h4>INFO</h4>
           <h4>Terminos y condiciones</h4>
           <h4>Terminos de privacidad</h4>
           <h4>Sitio Web oficial</h4>
           <h4>Version 3.0.0.0</h4>
         </article> 
         </div>`;
    }else{
        INFO.style.display=`none`
    }
}

