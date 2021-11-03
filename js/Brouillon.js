
/*

        htmlPhotographerPageContent+=`
            <article class="photographer__content__article lb-modal-btn">
                <img src=${data[i].image} alt=${data[i].alt}>
                <div class="photographer__content__text_wrapper">
                    <h3 class="photographer_content_post">${data[i].title}</h3>
                    <div class="photographer_content_likes">
                        <span class="nbr_of_likes">${data[i].like}</span>
                        <img src="img/heart.svg" alt="heart">
                    </div>
                </div>
            </article>
        `;
        }


                if (data[i].photographerId === data[i].id){
/*


            <div class="selectionner">
              <select name="trierPar" id="trier_par">
                <option value="popularite" class="trier_par_border" data-trier="popularite">Popularité</option>
                <option value="date" class="trier_par_border" data-trier="date">Date</option>
                <option value="titre" class="trier_par_border"data-trier="titre">Titre</option>
              </select>
            </div>