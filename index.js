//FETCH JSON DATA 

fetch('photographers.json')
  .then(function (response) {
    return response.json();
   // The JSON data will arrive here as a response
  })
  .then(function (data) {
    appendData(data);
   //récupérer la donnée lisible  
   //This is where we create the code which will append the data to our page.
  })
  .catch(function (err) {
    alert(err);
    // If an error occured, you will catch it here
  });

  
  
  //DISPLAY THE JSON DATA 
  //Fill the JSON data into the div id photographers dynamically 
  //Loop through every object in our JSON object

  let html = "";

  for(let i=0; i<data.length; i++){
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

  //récupérer la div, intégrer le html
  document.querySelector("#photographers").innerHTML = html;



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
