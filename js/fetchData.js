"use strict";

 /** 
   * Fonction qui recupere des donnees du fichiers json
   * @param {string} url
   * @return {promise}

 */  
function fetchData(url){

    return new Promise((resolve, reject)=>{

         //FETCH JSON DATA 

        fetch(url)
        .then(function (response) {
            return response.json();
            // The JSON data will arrive here as a response
        })
        .then(function (data) {
            resolve(data);
            //récupérer la donnée lisible  
            //This is where we create the code which will append the data to our page.
        })
        .catch(function (err) {
            alert(err);
            // If an error occured, you will catch it here
        });

    });

}