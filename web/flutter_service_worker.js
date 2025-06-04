'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6483b894511a8e503e7be92c70d44271",
"assets/AssetManifest.bin.json": "572ac4daa3d4d295964128f1d661b66d",
"assets/AssetManifest.json": "5cec39d6ff8a9bfe44c8f7e77f5083a7",
"assets/assets/images/20250527_1744_Character%2520with%2520Elements_remix_01jw91byk7e83b4h5x42ejzzbf.png": "b404cbf9fe74cb3a2df6d53a2e698479",
"assets/assets/images/20250527_1757_Gender%2520Swap%2520Illustration_remix_01jw924p74fndrws3w597z74fa.png": "1c0b0f84cf6a7d7b4632e9b158978d30",
"assets/assets/images/icons8-github-120.png": "3922fd50e5eec805439f869f0e1ea7d9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ce9bc3aa2367019f9f92ccd61f012fc0",
"assets/NOTICES": "ea3e74e589b998bbb92d669e1199144d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "8858bc60d227c805fdbda2e7235a8d8e",
"icons/android-icon-144x144.png": "a1879b9e341db608262b26e506a3e38d",
"icons/android-icon-192x192.png": "13c289863de8805544c865bea1824851",
"icons/android-icon-36x36.png": "2ad5321523aa9e8eb46dbac6241d54d3",
"icons/android-icon-48x48.png": "eed95f80e284c927a201ca0d42323233",
"icons/android-icon-72x72.png": "af140dd42d3a019bfd3cade53981b5c7",
"icons/android-icon-96x96.png": "4e840faef45d6c1e2a1acc233352b070",
"icons/apple-icon-114x114.png": "2bc1800af6cfc3fd6a48088c037e19b9",
"icons/apple-icon-120x120.png": "9883547a4c5f43162bd11cb939a7ca36",
"icons/apple-icon-144x144.png": "a1879b9e341db608262b26e506a3e38d",
"icons/apple-icon-152x152.png": "f16be469e58c2888099e58bcbb211f03",
"icons/apple-icon-180x180.png": "ef960fb682f992cc7fea207647b5268f",
"icons/apple-icon-57x57.png": "3093d070a06f18d356f88df208e214d8",
"icons/apple-icon-60x60.png": "b12b8c4ece6794fd28a87a70fd411743",
"icons/apple-icon-72x72.png": "af140dd42d3a019bfd3cade53981b5c7",
"icons/apple-icon-76x76.png": "7e9c8f2aaf07c04e33cb373e608aae16",
"icons/apple-icon-precomposed.png": "08bc435deabdcc9787dff39776fadc22",
"icons/apple-icon.png": "08bc435deabdcc9787dff39776fadc22",
"icons/favicon-16x16.png": "8f1c465779e5c2f394f4efec05feaee4",
"icons/favicon-32x32.png": "e94d6e508f6a0c4e7e31e240b36a58ba",
"icons/favicon-96x96.png": "4e840faef45d6c1e2a1acc233352b070",
"icons/favicon.ico": "c4072dd8af305c498fd994cc76b1b165",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/ms-icon-144x144.png": "a1879b9e341db608262b26e506a3e38d",
"icons/ms-icon-150x150.png": "6d34196cb321f0ed87ddab9214aa7b4a",
"icons/ms-icon-310x310.png": "a6626e6ef63f0f9554a90c4c76ddb614",
"icons/ms-icon-70x70.png": "2be64b62902dca063022d2d140b5f02e",
"index.html": "e920f04dae48d87e62e8c50e1e172b68",
"/": "e920f04dae48d87e62e8c50e1e172b68",
"main.dart.js": "3d5df473be18db370214c4c3b964450b",
"main.dart.mjs": "e6260b0e320e184d8a34222af307177f",
"main.dart.wasm": "cae69338ec61391d5e6220cf36f1ba5d",
"main.dart.wasm.map": "a40083b658f85e8e016946f36997609c",
"manifest.json": "d2d66c4a1d58c336578980ba9a7a2a11",
"version.json": "c123d931b125b9de5ceeaac788022c30"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
