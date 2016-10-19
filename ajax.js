//http://swapi.co/api/planets/1/

// var starwarsPlanets = new XMLHttpRequest()//creating a new object that can make an AJAX request
// starwarsPlanets.addEventListener('load', planetListener)//when we get data, run this function
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=2')//here's the URL to use
// starwarsPlanets.send()
//
// var starwarsPlanets = new XMLHttpRequest()//creating a new object that can make an AJAX request
// starwarsPlanets.addEventListener('load', planetListener)//when we get data, run this function
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=3')//here's the URL to use
// starwarsPlanets.send()

// function planetListener() {
//   var planets = JSON.parse(this.responseText)
//   console.log(planets)
//   listPlanets(planets.results)
// }

fetch('http://swapi.co/api/planets/')//I promise to run this code when I get done with something else
  .then(response => response.json())//Super Common.  Take text response from ^ request and put it into JSON.
  .then(response => listPlanets(response.results))
  fetch('http://swapi.co/api/planets/1/')//I promise to run this code when I get done with something else
    .then(response => response.json())//SUPER COMMON.  Take text response from ^ request and put it into JSON.
    .then(response => listPlanet(response))

//SAME THING AS ABOVE:
  //^ .then(function(response){
//   return response.json()
// })
//   .then(function(responseJson) {
//     listPlanets(responseJson)
//   })

function listPlanets(planetsArray){
  console.log('this comes after the first one')
  planetsArray.forEach(function(planet){
    var planetTitle = document.createElement('h4')
    planetTitle.innerHTML = planet.name

    document.querySelector('body').appendChild(planetTitle)
  })
}
function listPlanet(planet){
  var list = document.createElement('ul')
  var planetName = document.createElement('li')
  planetName.innerHTML = planet.name
  list.appendChild(planetName)

  var planetGravity = document.createElement('li')
  planetGravity.innerHTML = planet.gravity
  list.appendChild(planetGravity)

  var planetPopulation = document.createElement('li')
  planetPopulation.innerHTML = planet.population
  list.appendChild(planetPopulation)

  document.querySelector('body').appendChild(list)

}

console.log('this comes first')
