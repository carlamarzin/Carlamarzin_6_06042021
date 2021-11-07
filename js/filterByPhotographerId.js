"use strict";
 
/** 
  * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
  * @param {string} id
  * @param {json} photographersData
  * @return {object}

*/



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

    console.log(photographerPersonalInfo);
    return { 
        infos: photographerPersonalInfo,
        medias: photographerMedias
    }
};