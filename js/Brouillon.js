
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