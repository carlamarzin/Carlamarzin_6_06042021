"use strict";
 
 /** 
   * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
   * @param {array} photographerPersonalInfo
   * @return {html}

 */ 

 // D'après la fonction filterByPhotographerId(), j'ai récupéré un array avec les infos, et ces médias
 // D'après cet array, et ces infos, je renvoie du html
 
function createPhotographerProfile(photographerPersonalInfo){

    let htmlPhotographerPersonalInfo = "";

    const j = photographerPersonalInfo.length;

    for(let i=0; i<j; i++){

        htmlPhotographerPersonalInfo+=`
                <div class="photographer__text">
                    <header>${photographerPersonalInfo[i].name}</header>
                    <p class="photographer__text__location" role="text" >${photographerPersonalInfo[i].city}</p>
                    <p class="photographer__text__leitmotiv" role="text">${photographerPersonalInfo[i].tagline}</p>
                    <div class="photographer__link">
                    ${photographerPersonalInfo[i].tags.map((detail)=>{
                        return `<span class="tag"> #${detail}</span>`
                    }).join("")}
                    </div>
                </div>         
                <button id="display-form" class="photographer__contacter modal-btn" role="button" aria-describedby="Fenêtre pour contacter le photographe">Contactez-moi</button>
                <a href="" alt="" class="photographer__image">
                    <img src="${photographerPersonalInfo[i].portrait}" alt="portrait of${photographerPersonalInfo[i].name}">              
                </a>
            `
    }

    return htmlPhotographerPersonalInfo;

}