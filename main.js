function getData(cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readystate == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}

getData(function(data){
    console.log(data)
});