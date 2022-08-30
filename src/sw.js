self.addEventListener('install', event => {
  self.skipWaiting();
  const files = self.__WB_MANIFEST.map(it => it.url).concat(['/']);
  event.waitUntil(caches.open('v1').then(cache => cache.addAll(files)));
});

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
  event.respondWith(caches.open('v1').then(cache => {
    return fetch(event.request).catch(() => {
      if (event.request.mode === 'navigate') return cache.match('/');
      return cache.match(event.request);
    });
  }))
});

self.addEventListener('push', (event) => {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return;
  }
  event.target.registration.showNotification('RADIDIIDIDID', {
    actions: [{ action: 'akcija', title: 'nu klik' }],
    body: 'Nova urtk stzew',
    data: 'stagod'
  });
});

self.addEventListener('notificationclick', event => {
  event.waitUntil(clients.matchAll().then(windows => {
    if (!windows.length) {
      return clients.openWindow('http://localhost:5173/popa');
    }
    windows[0].navigate('http://localhost:5173/popa');
  }));
});
