"use strict";

 /** 
   * Faire apparaître un boutton lorsque l'utilisateur scroll, afin de le ramener au header
 */

  const passerAuContenu = document.querySelector("#passer_au_contenu");


 /* Faire apparaître le boutton lorsque que l'utilisateur scroll un peu */

 window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        passerAuContenu.style.display = "block";
    }else{
        passerAuContenu.style.display = "none";
    }
 })

 /* Au click sur passerAuContenu, je veux renvoyer l'utilisateur en haut de page */

 passerAuContenu.addEventListener("click", function() {
    window.scrollTo(0, 0);
    passerAuContenu.className("invisible");
 });