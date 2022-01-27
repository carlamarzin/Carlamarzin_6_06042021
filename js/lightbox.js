"use strict";

/** 
   * Fonction qui ajoute augmente le nombre de like en fonction du nombre de clique
   * @param {array} medias
   * @param {object} media
   * @return {html}
 */ 



function lightbox(medias, media){

    const lbBground = document.querySelector(".lb-bground");

    lbBground.style.display = "block";

    // Le media actuel qui est dans la lightbox
    let actualMediaId = media.id;

   //La lightbox est créée, je récupère l'emplacement du contenu de la photo ou de la vidéo

    const lightboxContent = document.querySelector('#photographer-media');

    lightboxContent.innerHTML = `
        
          ${factory(media)}
          <span id="lightbox-modal_text">${media.title}</span>
    
    `;

    if(media.video !== undefined){

        lbBground.querySelector(".photographer__content__article_media").setAttribute("controls", true);
    }


    //Je récupère l'emplacement des flèches suivantes et précédentes

    const next = document.querySelector(".next");

    const previous = document.querySelector(".previous");

    //J'écoute l'évènement clique sur la flèche suivante > au clique, je change le contenu de la lightbox

    next.addEventListener("click", ()=>{
    
        // Premièrement il faut déterminer l'index du media actuel dans la lightbox
    
        const actualIndex = medias.findIndex((element)=>{
        
            return element.id === actualMediaId;
        
        });

        //Ensuite, si l'index n'est pas le dernier > donc si son index est différent de la longueur de l'array
        //Alors j'affiche le média suivant
        //Mon factory me renvoie alors un HTML, avec une balise img ou vidéo
    
        if(actualIndex !== medias.length){
            
            // Alors j'affiche l'image ayant l'index suivant

            lightboxContent.innerHTML = `
            
               ${factory(medias[actualIndex + 1])}
               <span id="lightbox-modal_text">${medias[actualIndex + 1].title}</span>
            
            `;

            if(medias[actualIndex + 1].video !== undefined){

                lbBground.querySelector(".photographer__content__article_media").setAttribute("controls", true);
            }

            //Et j'update la variable actualMediaId
        
            return actualMediaId = medias[actualIndex + 1].id;
        
        }
    
    });

    //J'écoute l'évènement clique sur la flèche précédente > au clique, je change le contenu de la lightbox

    previous.addEventListener("click", ()=>{
    
        const actualIndex = medias.findIndex((element)=>{
        
            return element.id === actualMediaId;
        
        });
        
        //Si l'index n'est pas égal à 0, alors il n'y a pas d'image précédente, et rien à afficher 

        if(actualIndex !== 0){

            // Alors j'affiche l'image ayant l'index précédent
            // Mon factory me renvoie alors un HTML, avec une balise img ou vidéo
        
            lightboxContent.innerHTML =`
            
            ${factory(medias[actualIndex - 1])}
            <span id="lightbox-modal_text" controls >${medias[actualIndex - 1].title}</span>
            
            `;

            if(medias[actualIndex - 1].video !== undefined){

                lbBground.querySelector(".photographer__content__article_media").setAttribute("controls", true);
            }
        
            return actualMediaId = medias[actualIndex - 1].id;
        
        };
    
    });
 

    document.addEventListener("keydown", (event)=>{

            if(event.key === "Escape"){

                return lbBground.style.display = "none";

            }
            
            if(event.key === "ArrowRight"){

                alert("flèche droite");

                let actualMediaId = media.id;

                const actualIndex = medias.findIndex((element)=>{
        
                    return element.id === actualMediaId;
                
                });

                return actualMediaId = medias[actualIndex + 1].id;

            }

            if(event.key === "ArrowLeft"){

                alert("flèche gauche");

                let actualMediaId = media.id;

                const actualIndex = medias.findIndex((element)=>{
            
                    return element.id === actualMediaId;
                
                });

                return actualMediaId = medias[actualIndex - 1].id;

            }

    });
};