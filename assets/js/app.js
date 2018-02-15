const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('newContainer');
let searchedForText;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
})

function handleError() {
  console.log('Se ha presentado un error');
}

function addNews() {
  const data = JSON.parse(this.responseText);
    let li = document.createElement('li');
  li.className = 'newList';
  
  const result = [];
  for (var i = 0; data.length; i++) {
    result.push(data[i].name);
  }

  li.innerText = result;

  responseContainer.appendChild(li);
}

function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://swapi.co/api/`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError
  articleRequest.send();
}