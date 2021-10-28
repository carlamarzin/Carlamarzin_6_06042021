  "use strict";

  fetchData("../json/fishEyeData.json").then((data)=>{

      if(data === "Impossible de recupérer les données"){

             return alert(data);

      }

      document.querySelector("#photographers").innerHTML = createPhotographers(data?.photographers);

      const tags = document.querySelectorAll('.buttonTag');

      const j = tags.length;

      for(let i=0; i<j; i++){

           tags[i].addEventListener("click", function(){


                // On recupere la valeur textuelle du tag
                // https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/data-*

                const actualTag = this.dataset?.tag;

                const filterPhotographers = filterByTag(data?.photographers, actualTag);

                document.querySelector("#photographers").innerHTML = createPhotographers(filterPhotographers);


           });

      }
    
  });

  