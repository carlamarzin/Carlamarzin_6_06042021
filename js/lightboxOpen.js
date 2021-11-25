"use strict";

/** 
   * Fonction qui affiche la lightbox
   * @return {true}

 */ 

function lightboxOpen(){

   // je surveille le clique sur le bouton contactez moi

    document.querySelector(".lb-modal-btn").addEventListener("click", ()=>{

       return document.querySelector(".lb-bground").style.display = "block";

    });

}