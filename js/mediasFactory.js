"use strict";

/** 
   * Fonction(factory) qui permet de creer les images ou les videos de chaque photographes
   * @param {string} typeOfMedia
   * @param {string} mediaUrl
   * @return {function}
 */ 

function factory(media){

      // Utilisation de la decomposition par affectation (destructuring assignment) https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
      
      const {image, video, alt} = media;

      if(image !== undefined){

       
           return createImage(image, alt);

      }

      return createVideo(video, alt);

}


function createImage(mediaSrc, altText){


       return `<img class="photographer__content__article_media" src="img/photographs/${mediaSrc}" alt="${altText}" />`;
   

}

function createVideo(mediaSrc, altText){


     return `
        <video class="photographer__content__article_media video" alt="${altText}">
            <source src="img/photographs/${mediaSrc}" type="video/mp4">
        </video>`;

}