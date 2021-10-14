   "use strict";
  

  //DISPLAY THE JSON DATA 
  //Fill the JSON data into the div id photographers dynamically 
  //Loop through every object in our JSON object


  fetchData("../data/photographers.json").then((data)=>{

       //récupérer la div, intégrer le html
      //  document.querySelector("#photographers").innerHTML = createPhotographers(data);
  });

  



//SELECTION PAR LES TAGS 

//je store les tags dans une variable
var portraits = document.getElementsByClassName(portraits);
var art = document.getElementsByClassName(art);
var fashion = document.getElementsByClassName(fashion); 
var architecture = document.getElementsByClassName(architecture);
var travel = document.getElementsByClassName(travel);
var sport = document.getElementsByClassName(sport);
var animals = document.getElementsByClassName(animals);
var events = document.getElementsByClassName(events);

var photographerTag = data.tag;

//au click sur le tag, j'affiche les photographes selectionnés
const tag = document.getElementsByClassName(tag);
//const filteredTag = tag.checked >>>>> faire un addEventListenner sur le click du tag
// const tag = ['portraits', 'art', 'fashion', 'architecture', 'travel', 'sport', 'animals', 'events']
// const filtered = photographers.filter( function(photographer){
//   return photographer.tag === tagChecked;})
//console.log(filtered)
tag.addEventListener("click", tagFiltering);

//Si le photographe ne contient pas le tag choisis
function tagFiltering(e){
  //si le tag est checké, alors je veux que les photographes qui ont ce tag, s'affichent
  if (portrait.checked){
    tag.className = "";
    return true;
  //sinon, je ne veux pas que le photographe s'affiche, je lui ajoute la className "invisible", avec un display none en css
  }else{
    tag.className = "invisible";
    return false;
  }
}
