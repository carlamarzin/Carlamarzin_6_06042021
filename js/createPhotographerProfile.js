"use strict";
 
 /** 
   * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
   * @param {array} photographerPersonalInfo
   * @return {html}

 */ 

 // D'après la fonction filterByPhotographerIs(), j'ai récupéré un array avec les infos, et ces médias
 // D'après cet array, et ces infos, je renvoie du html
 
function createPhotographerProfile(photographerPersonalInfo){

    let htmlPhotographerPersonalInfo = "";

    const j = photographerPersonalInfo.length;

    for(let i=0; i<j; i++){

        htmlPhotographerPersonalInfo+=`
                <div class="photographer__text">
                    <h2>${photographerPersonalInfo[i].name}</h2>
                    <p class="photographer__text__location">${photographerPersonalInfo[i].city}</p>
                    <p class="photographer__text__leitmotiv">${photographerPersonalInfo[i].tagline}</p>
                    <div class="photographer__link">
                    ${photographerPersonalInfo[i].tags.map((detail)=>{
                        return `<span class="tag"> #${detail}</span>`
                    }).join("")}
                    </div>
                </div>         
                <div id="display-form" class="photographer__contacter modal-btn" role="dialog" aria-describedby="Fenêtre pour contacter le photographe">Contactez-moi</div>
                <a href="" class="photographer__image">
                    <img src="${photographerPersonalInfo[i].portrait}" alt="portrait of${photographerPersonalInfo[i].name}">              
                </a>
            `
    }

    return htmlPhotographerPersonalInfo;

}