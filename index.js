//Fetch JSON data 

fetch('./photographers.json')
  .then(function (response) {
    return response.json();
   // The JSON data will arrive here as a response
  })
  .then(function (data) {
    appendData(data);
   //we get the actual JSON data as a parameter. This data looks just like the data in our JSON file. 
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