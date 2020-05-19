const baseUrl = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", baseUrl + type + "/");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readystate == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}
function writeToDocument(type) {
  getData(type, function (data) {
      data = data.results;
      data.forEach(function(item) {
      document.getElementById("data").innerHTML = item.name;    
      });
    
  });
}
