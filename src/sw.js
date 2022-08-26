// import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
// import { clientsClaim } from 'workbox-core';

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// cleanupOutdatedCaches();

// precacheAndRoute(self.__WB_MANIFEST);

// self.addEventListener('push', event => {
//   console.log(event);
// });

console.log('aaaaaaa');

self.addEventListener('push', (event) => {
  console.log('aaaaaaa');
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return;
  }
  console.log(event);
  event.target.registration.showNotification('RADIDIIDIDID', {
    actions: [{ action: 'akcija', title: 'nu klik' }],
    body: 'Nova urtk stzew',
    data: 'stagod'
  });
});

self.addEventListener('notificationclick', event => {
  console.log('klik', event);
  event.waitUntil(clients.matchAll().then(clients => {
    console.log(clients[0]);
    clients[0].navigate('http://www.stoperica.live');
  }));
});
