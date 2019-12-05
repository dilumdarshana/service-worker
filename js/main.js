if ('serviceWorker' in navigator) { // check browser support
    window.addEventListener('load', () => { // event when whole page has loaded, including all dependent resources such as stylesheets and images
        navigator.serviceWorker
            .register('../sw.js') // register actual service worker file
            .then(() => console.log('Service Worker: Registered'))
            .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
}
