 "use strict";
 
 /** 
   * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
   * @param {array} data
   * @return {html}

 */ 

function createPhotographers(data){

    let html = "";

    const j = data.length;

    for(let i=0; i<j; i++){
        html+= `
        <article class="photographer">
            <a href="photographer-page.html/user${data[i].id}" class="photographer__image">
                <img src=${data[i].portrait} alt= Photo de ${data[i].name} />
                <h2>${data[i].name}</h2>
            </a>
            <div class="photographer__text">
                <p class="photographer__text__location">${data[i].city}</p>
                <p class="photographer__text__leitmotiv">${data[i].tagline}</p>
                <p class="photographer__text__price">${data[i].price}€/jour</p>
            </div>
            <div class="photographer__link">
                ${data[i].tags.map((detail)=>{
                    return `<span class="tag"> #${detail}</span>`
                }).join("")}
            </div>
        </article>
        `
    }


    return html;


}