var alldata = [];

async function getMango() {
  let req = await fetch("https://forkify-api.herokuapp.com/api/search?q=mango");
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

async function getMelon() {
  let req = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=melon");
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

async function getNectarine() {
  let req = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=nectarine");
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

async function getOrange() {
  let req = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=orange");
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

async function getPapaya() {
  let req = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=papaya");
  let responseBody = await req.json();
  alldata = responseBody.recipes;
  displayData();
}

async function getAll() {
  getMango();
  getMelon();
  getNectarine();
  getOrange();
  getPapaya();
}
getAll()

var rowData = document.getElementById("rowData");
function displayData() {
  var str = "";
  for (var i = 0; i < alldata.length; i++) {
    str += `<div class="col-md-3">
    <div class="item">
    <img src="${alldata[i].image_url}" class="w-100" >
      <h1>${alldata[i].title}</h1>
      <p>${alldata[i].publisher}</p>

    </div>
  </div>`;
  }
  rowData.innerHTML = str;
}