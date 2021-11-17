"use strict";
 
/** 
  * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
  * @param {array} photographerPersonalInfo
  * @return {html}
*/ 

function createPhotographerMedia(photographerPersonalInfo){

   let htmlMediaContent = "";

   const k = photographerPersonalInfo.length;

   for(let i=0; i<k; i++){

        //si le media contient un fichier JSON avec une image, alors ajouter cela :
        htmlMediaContent+= `
            <article class="photographer__content__article lb-modal-btn">
                        <img src="img/photographs/${photographerPersonalInfo[i].image}" alt="${photographerPersonalInfo[i].alt}">
                        <video class="video">
                            <source src="img/photographs/${photographerPersonalInfo[i].video}" type="video/mp4">
                        </video>
                        <div class="photographer__content__text_wrapper">
                            <h3 class="photographer_content_post">${photographerPersonalInfo[i].title}</h3>
                            <div class="photographer_content_likes">
                                <span class="nbr_of_likes">${photographerPersonalInfo[i].likes}</span>
                                <img src="img/heart.svg" alt="heart">
                            </div>
                        </div>
                </article>
            `
        
        //si le media contient un fichier JSON avec une video, alors ajouter cela : 

   }

   return htmlMediaContent;




}