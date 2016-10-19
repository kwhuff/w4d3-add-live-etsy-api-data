var container = document.createElement('div')//specifies the element that you want to create
//console.dir(container)
//document.body.appendChild(container)//body is a property on the document object.  appendChild places obj at the bottom of the parent (body)
container.classList.add('container')//creates class 'container'

var row = document.createElement('div')
row.classList.add('row')
container.appendChild(row)

var col = document.createElement('div')
col.classList.add('col-sm-4')
col.setAttribute('title', 'A fancy column')//Creates an attribute
var col2 = col.cloneNode(true)
var col3 = col.cloneNode(true)


col.innerHTML = 'Column A'
col2.innerHTML = 'Column B'
col3.innerHTML = 'Column C'

row.appendChild(col)
row.appendChild(col2)
row.appendChild(col3)

// var col = document.createElement('div')  LONGER WAY TO DO IT.  USE cloneNode WHEN YOU CAN
// col.classList.add('col-sm-4')
// col.innerHTML = 'Column B'
// row.appendChild(col)
//
// var col = document.createElement('div')
// col.classList.add('col-sm-4')
// col.innerHTML = 'Column C'
// row.appendChild(col)

// <input type='text' id='search' placeholder='Search...'

/*<div class="input-group">
      <input type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
      </span>
    </div>
    */

var searchDiv = document.createElement('div')
searchDiv.classList.add('input-group')

var span = document.createElement('span')
span.classList.add('input-group-btn')

var button = document.createElement('button')
button.type = 'button'
button.className = 'btn btn-default'//.className allows for multiple class declarations
button.innerHTML = 'Search'

var searchInput = document.createElement('input')
searchInput.type = 'text'
searchInput.placeholder = 'Search...'
searchInput.id = 'search'
searchInput.className = 'form-control'//need to do this because we're using Boostrap

searchDiv.appendChild(searchInput)
span.appendChild(button)
searchDiv.appendChild(span)

container.insertBefore(searchDiv, row)//how to place something before another element (row in this instance)
container.insertBefore(document.createElement('br'), searchDiv)
container.insertBefore(document.createElement('br'), row)

button.addEventListener('click', search)
searchInput.addEventListener('keypress', searchEnter)

function searchEnter(event) {
  if(event.key === 'Enter') {
    search()
  }
}
function search(){
  var searchTerm = document.querySelector('#searchValue').value//above we defined searchInput.id='search'
  //alert(searchTerm)//grabs value user typed into search field and places it into pop up box 'alert'
  var searchResult = {
    term: searchTerm,
    image: 'http://unsplash.it/400?random'
  }
  createSearchResult(searchResult)
  document.querySelector('#search').value = ''
}
function createSearchResult(result){
  var card = document.createElement('div')
  card.className = 'well'
  card.innerHTML = result.term
  document.querySelector('.col-sm-4:first-child').appendChild(card)
}



document.getElementById('searchResults').appendChild(container)
