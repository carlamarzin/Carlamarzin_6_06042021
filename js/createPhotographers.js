function createPhotographers(data){

    let html = "";

    const j = data.length;

    for(let i=0; i<j; i++){
        html+= `
        <article class="photographer">
            <a href="" class="photographer__image">
                <img src="img/users/ERW.jpg" alt="Portrait de Ellie-Rose Wilkens">

                <img src=${data[i].portrait} alt= Photo de ${data[i].name} />

                <h2>${data[i].name}</h2>
            </a>
            <div class="photographer__text">
                <p class="photographer__text__location">${data[i].city}</p>
                <p class="photographer__text__leitmotiv">${data[i].tagline}</p>
                <p class="photographer__text__price">${data[i].price}€/jour</p>
            </div>
            <div class="photographer__link">
                <a href="" class="tag">#${data[i].tags.map((detail)=>{
                    return `<a href="" class="tag"> ${detail}</a>`
                }).join("")}
            </div>
        </article>
    `
    }


    return html;


}