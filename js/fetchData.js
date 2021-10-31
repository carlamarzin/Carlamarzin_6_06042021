"use strict";

 /** 
   * Fonction qui recupere des donnees du fichiers json
   * @param {string} url
   * @return {promise}

 */  
function fetchData(url){

    return new Promise((resolve, reject)=>{

         // FETCH JSON DATA 
         // Fetch démarre le chargement d'une ressource sur le réseau et retourne une promesse qui est résolue dès que la réponse est disponible
         // La méthode then renvoie un objet promise, elle prend un argument callback à utiliser en cas d'échec de la promise

        fetch(url)
        .then(function (response) {
            
            return response.json();
            // convertit le body du JSON, et le convertit en un objet js. Puis retourne une nouvelle promesse
        })
        .then(function (data) {
            
            resolve(data);
            // La promesse résoud l'objet Response représentant la réponse de votre requête
            // La méthode Promise.resolve(valeur) renvoie un objet Promise qui est résolu avec la valeur donnée.
            // This is where we create the code which will append the data to our page.
        })
        .catch(function (err) {
             resolve("Impossible de recupérer les données");
            // If an error occured, you will catch it here
            // La méthode catch() renvoie un objet Promise et ne traite que des cas où la promesse initiale est rejetée
        });

    });

}