self.addEventListener('push', function(event) {
  if (event.data) {
    var data = {};
    try {
      data = event.data.json();
    } catch(e) {
      data = { title: '📢 Duyuru', body: event.data.text() };
    }

    var options = {
      body: data.body || '',
      icon: data.icon || 'icons/Icon-192.png',
      badge: data.badge || 'icons/Icon-192.png',
      vibrate: [200, 100, 200, 100, 200],
      data: {
        dateOfArrival: Date.now()
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title || '📢 Yönetici Duyurusu', options)
    );
  }
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      if (clientList.length > 0) {
        let client = clientList[0];
        for (let i = 0; i < clientList.length; i++) {
          if (clientList[i].focused) {
            client = clientList[i];
          }
        }
        return client.focus();
      }
      return clients.openWindow('/garson/');
    })
  );
});
