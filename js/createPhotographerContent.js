"use strict";
 
/** 
  * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
  * @param {array} data
  * @param {array} id
  * @return {html}

When I will call the function, I will replace data with createPhotographers(data?.media)
Il faut un match entre data.id et data.photographerId
*/ 

function createPhotographerContent(data){

   let htmlContent = "";

   const j = data.length;

   for(let i=0; i<j; i++){
       htmlContent+= `
       <article class="photographer__content__article lb-modal-btn">
                <img src="img/photographs/${data[i].image}" alt="${data[i].alt}">
                <div class="photographer__content__text_wrapper">
                    <h3 class="photographer_content_post">${data[i].title}</h3>
                    <div class="photographer_content_likes">
                        <span class="nbr_of_likes">${data[i].likes}</span>
                        <img src="img/heart.svg" alt="heart">
                    </div>
                </div>
        </article>
       `
   }


   return htmlContent;


}