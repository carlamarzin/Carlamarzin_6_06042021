"use strict";

 /** 
   * Fonction qui recupere des donnees du fichiers json
   * @param {string} url
   * @return {promise}

 */  
function fetchData(url){

    return new Promise((resolve, reject)=>{

         //FETCH JSON DATA 

        fetch('./dataPhotographers/fishEyeData.json').then(function (response) {
            return response.json();
            // convertit le body du JSON, et le convertit en un objet js. Puis retourne une nouvelle promesse
        })
        .then(function (data) {
            console.log(data);
            //resolve(data);
            //récupérer la donnée lisible  
            //This is where we create the code which will append the data to our page.
        })
        .catch(function (err) {
            alert('Error');
            // If an error occured, you will catch it here
        });

    });

}