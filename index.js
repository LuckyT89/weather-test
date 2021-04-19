console.log('Weather stuff');



fetch('https://www.7timer.info/bin/civillight.php?lon=-80.1&lat=26.1&ac=0&unit=british&output=json&tzshift=0')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json)

  let body = document.getElementById('body');
  let p = document.createElement('p');
  p.textContent = `Today will have a temperature low of ${json.dataseries[0].temp2m.min} and a high of ${json.dataseries[0].temp2m.max}.`;
  body.appendChild(p);

});

