console.log('app.js started');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-experiments/sw.js').then((reg) => {
    if (reg.installing) {
      console.log('sw installing');
    } else if (reg.waiting) {
      console.log('sw waiting');
    } else if (reg.active) {
      console.llog('sw active');
    }
  }).catch(e => console.log('registration failed with ' + e));
}