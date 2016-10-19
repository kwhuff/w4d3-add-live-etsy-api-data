// var items = [{
//   image: 'http://unsplash.it/400?image=234',
//   title: 'Vintage Board Game',
//   seller: 'franz66',
//   price: 15.00
// },
// {
//   image: 'http://unsplash.it/400?image=663',
//   title: 'Monopoly',
//   seller: 'Jamie Foxx',
//   price: 20
// },
// {
//   image: 'http://unsplash.it/400?image=22',
//   title: 'Sorry',
//   seller: 'Harrison Ford',
//   price: 5
// },
// {
//   image: 'http://unsplash.it/400?image=55',
//   title: 'Trouble',
//   seller: 'Royce Clayton',
//   price: 9
// },
// {
//   image: 'http://unsplash.it/400?image=54',
//   title: 'Hungry Hippos',
//   seller: 'Tom Hanks',
//   price: 25.00
// },
// {
//   image: 'http://unsplash.it/400?image=85',
//   title: 'Life',
//   seller: 'Sigfried and Roy',
//   price: 95.00
// },
// {
//   image: 'http://unsplash.it/400?image=21',
//   title: 'Sequence',
//   seller: 'Paul Simon',
//   price: 85.00
// },
// {
//   image: 'http://unsplash.it/400?image=99',
//   title: 'Chutes and Ladders',
//   seller: 'Peter Frampton',
//   price: 5.00
// },
// {
//   image: 'http://unsplash.it/400?image=64',
//   title: 'Mouse Trap',
//   seller: 'Donald Trump',
//   price: 999.00
// },
// {
//   image: 'http://unsplash.it/400?image=39',
//   title: 'Risk',
//   seller: 'Bob Newhart',
//   price: 25.00
// },
// {
//   image: 'http://unsplash.it/400?image=900',
//   title: 'Dominos',
//   seller: 'Domino Fats',
//   price: 35.00
// },
// {
//   image: 'http://unsplash.it/400?image=63',
//   title: 'Operation',
//   seller: 'Gregory House',
//   price: 100.00
// }]

fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('Ohio State') + '&includes=Images,Shop'))
.then(response => response.json())
// .then(response => console.log(response.results[0]))
.then(response => response.results.forEach(function(item){
  createCardResults(item)
}))


var rowResults = document.createElement('div')
rowResults.classList.add('row')
rowResults.style.marginRight = '25px'
rowResults.style.marginLeft = '10px'
document.getElementById('searchResults').appendChild(rowResults)


function createCardResults(object){
  var col = document.createElement('div')
  col.style.marginBottom = '7px'
  col.style.marginTop = '7px'
  // col.style.border = '1px solid lightgrey'
  // col.style.boxShadow = '1px 1px 5px #888888'
  col.className = 'col-sm-3 img-rounded'
  col.setAttribute('title','Wow, what a nice listing')
  rowResults.appendChild(col)

  var card = document.createElement('div')
  card.className = 'cardStyling'
  col.appendChild(card)

  var cardRow1 = document.createElement('img')
  cardRow1.classList.add('cardPicture')
  cardRow1.classList.add('img-responsive')
  cardRow1.setAttribute('src', object.Images[0].url_170x135)
  // cardRow1.innerHTML = img src = object.Images.url_fullxfull
  card.appendChild(cardRow1)

  var cardRow2 = document.createElement('div')
  cardRow2.classList.add('cardTitle')
  cardRow2.innerHTML = object.title
  cardRow2.style.textOverflow = 'ellipsis'
  cardRow2.style.whiteSpace = 'nowrap'
  cardRow2.style.overflow = 'hidden'
  cardRow2.style.backgroundColor = 'white'
  cardRow2.style.marginBottom = '10px'
  cardRow2.style.marginTop = '5px'
  card.appendChild(cardRow2)

  var cardRow3 = document.createElement('div')
  cardRow3.classList.add('cardPriceAndBrand')
  card.appendChild(cardRow3)

  var cardRow3Brand = document.createElement('div')
  cardRow3Brand.classList.add('brandText')
  cardRow3Brand.classList.add('col-xs-6')
  cardRow3Brand.style.padding = 0
  cardRow3Brand.style.backgroundColor = 'white'
  cardRow3Brand.classList.add('text-muted')
  cardRow3Brand.innerHTML = object.who_made
  cardRow3.appendChild(cardRow3Brand)

  var cardRow3Price = document.createElement('div')
  cardRow3Price.classList.add('priceText')
  cardRow3Price.classList.add('col-xs-6')
  cardRow3Price.style.backgroundColor = 'white'
  cardRow3Price.classList.add('text-success')
  cardRow3Price.classList.add('text-right')
  cardRow3Price.innerHTML = '$' + object.price
  cardRow3.appendChild(cardRow3Price)
}
var button = document.getElementById('buttonSearch')
var searchInput = document.getElementById('searchValue')
button.addEventListener('click', search)
searchInput.addEventListener('keypress', searchEnter)

function searchEnter(event) {
  if(event.key === 'Enter') {
    search()
  }
}

function search(){
  rowResults.innerHTML = ''
  var searchTerm = document.querySelector('#searchValue').value
  fetch('https://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent(searchTerm) + '&includes=Images,Shop'))
  .then(response => response.json())
  .then(response => response.results.forEach(function(item){
    createCardResults(item)
  }))

}

// items.forEach(function(item){
//   createCardResults(item)

//^^^^^^^^^^^HOW TO LOOP YOUR RESULTS FROM AN ARRAY^^^^^^^^^
// createCardResults(testObject)
// createCardResults(testObject2)
// createCardResults(testObject3)
// createCardResults(testObject4)
// createCardResults(testObject5)
// createCardResults(testObject6)
// createCardResults(testObject7)
// createCardResults(testObject8)
// createCardResults(testObject9)
// createCardResults(testObject10)
// createCardResults(testObject11)
// createCardResults(testObject12)

//Collin's Solution
