"use strict";

 /** 
   * Fonction qui recupere des donnees du fichiers json
   * @param {string} url
   * @return {promise}

 */  
function fetchData(url){

    return new Promise((resolve, reject)=>{

         //FETCH JSON DATA 

        fetch(url).then(function (response) {

            return response.json();
            // convertit le body du JSON, et le convertit en un objet js. Puis retourne une nouvelle promesse
        })
        .then(function (data) {
            
            resolve(data);
            //This is where we create the code which will append the data to our page.
        })
        .catch(function (err) {
             resolve("Impossible de recupérer les données");
            // If an error occured, you will catch it here
        });

    });

}