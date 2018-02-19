console.log('app.js started');

const updateButton = document.getElementById('update-sw');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((reg) => {
    if (reg.installing) {
      console.log('sw installing');
    } else if (reg.waiting) {
      console.log('sw waiting');
    } else if (reg.active) {
      console.log('sw active');
    }

    updateButton.addEventListener('click', e => {
      console.log('update button clicked');
      reg.update();
    });
  }).catch(e => console.log('registration failed with ' + e));
}

const jsRequest = new Request('http://code.jquery.com/jquery-2.2.4.js');

fetch(jsRequest)
  .then(response => {
    return response.text();
  })
  .then(text => {
/*     console.log(text); */
  }) 
  .catch(e => {
    console.error(e);
  });