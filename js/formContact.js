"use strict";

/** 
   * Fonction qui affiche le formulaire de contact
   * @return {true}

 */ 

function formContact(){

     // On clique sur le bouton contactez moi

    document.querySelector("#display-form").addEventListener("click", ()=>{

       return document.querySelector("#form-contact").style.display = "block";

    });

}