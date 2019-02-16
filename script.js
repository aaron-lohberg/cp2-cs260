document.getElementById("changePicsSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://api.thecatapi.com/v1/images/search";
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
  //  console.log(json);
    let results = "";
    for (let i=0; i < json.length; i++) {
      results += '</br></br><img src="' + json[i].url + '" style="max-height:500px;max-width:500px; border: solid; border-color: black; border-radius:.5%;"/>';
      document.getElementById("catResults").innerHTML = results;
    }
  });

  const Url = "https://icanhazdadjoke.com/";
  const otherParam={
    headers:{
      "Accept": "application/json"
    }
  }
  fetch(Url, otherParam)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let joke = "</br>";
    joke += json.joke + '</br></br>';
    document.getElementById("dadJokeResults").innerHTML = joke;
  });
});
