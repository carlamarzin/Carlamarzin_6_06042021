"use strict";
 
/** 
  * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
  * @param {string} id
  * @param {json} photographersData
  * @return {object}

*/

    // La reference de l'ID est ${data[i].photographerId} chez les médias et ${data[i].id} chez les photographes


function getPhotographerInfo(id, photographersData){
    
    const photographerPersonalInfo = photographersData.photographers.filter( (photographer) => {

        if (Number(photographer.id) === Number(id)){

            return photographer;
        };

    });

    const photographerMedias = photographersData.media.filter( (media) =>{

        if (Number(media.photographerId) === Number(id)){

            return media;
        }

    });

    return { 
        infos: photographerPersonalInfo,
        medias: photographerMedias
    }
};

