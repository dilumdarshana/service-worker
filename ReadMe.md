# Service Worker using Vanilla JS

Why service worker?
Service worker runs on different thread separate from the browser.
Once the service worker implemented, all the http requests go though it


Service worker has main 3 steps to complete before fetch
1. Register
2. Install
3. Activate

Register - This can be done through the main js file. Must check the service worker browser support first

```
if ('serviceWorker' in navigator) {....
```

Install - 

Activate - 