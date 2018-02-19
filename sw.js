console.log('sw.js started');

self.addEventListener('fetch', event => {
  console.log(event);
  if (event.request.url.includes('jquery')) {
    console.log('request for jquery');
    const jsStr = `console.log('custom js response')`;
    const init = {
      stats: 200,
      statusText: 'OK',
      headers: {
        'Content-Type': 'application/javascript'
      }
    };
    const customRep = new Response(jsStr, init);
    console.log(customRep);
    event.respondWith(customRep);
  }
});