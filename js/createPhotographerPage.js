"use strict";
 
 /** 
   * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
   * @param {array} data
   * @return {html}

 */ 

 // let media = mediaArray.find(media => media.id == 150) pour récupérer le média à l'id 150 

 
function createPhotographerPage(data){

    let htmlPhotographerPage = "";

    const j = data.length;

    // Je ne veux pas looper dans tous les photographes > juste dans ceux ayant le même ID
    // La reference de l'ID est ${data[i].photographerId} chez les médias et ${data[i].id} chez les photographes

    for(let i=0; i<j; i++){

            htmlPhotographerPage+=`
            <section id="photographer">
                <div class="photographer__text">
                    <h2>${data[i].name}</h2>
                    <p class="photographer__text__location">${data[i].city}</p>
                    <p class="photographer__text__leitmotiv">${data[i].tagline}</p>
                    <div class="photographer__link">
                    ${data[i].tags.map((detail)=>{
                        return `<span class="tag"> #${detail}</span>`
                    }).join("")}
                    </div>
                </div>         
                <div class="photographer__contacter modal-btn" role="dialog">Contactez-moi</div>
                <a href="" class="photographer__image">
                    <img src="${data[i].portrait}" alt="portrait of${data[i].name}">              
                </a>
            </section>

            <div class="photographer__trier">
                <label for="trier_par">Trier par</label>
                <select name="trierPar" id="trier_par">
                    <option value="popularite" class="trier_par_border" data-trier="popularite">Popularité</option>
                    <option value="date" class="trier_par_border" data-trier="date">Date</option>
                    <option value="titre" class="trier_par_border"data-trier="titre">Titre</option>
                </select>
            </div>
            `
    }

    return htmlPhotographerPage;

}