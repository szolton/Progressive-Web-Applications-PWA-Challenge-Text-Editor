// This is where you can define your custom service worker logic
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Precache and route assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache strategy for API calls or other routes
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images',
  })
);
