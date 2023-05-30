'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "6e944ced6ceb15652c663840cfb8a972",
".git/refs/remotes/origin/master": "99de2a73afd90296862d72833c67dfcd",
".git/refs/remotes/origin/main": "8c8d530f8a1ffd92ee690193920cd2a1",
".git/refs/heads/main": "8c8d530f8a1ffd92ee690193920cd2a1",
".git/index": "1a6b99d36890521abe299c70f9026df6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/logs/refs/remotes/origin/master": "62dab7be954688727ef3d5d05b4e65d7",
".git/logs/refs/remotes/origin/main": "aedb8e0bc1af678f247cd61dfbf9d2a2",
".git/logs/refs/heads/main": "2197d9325370e5d7da58ad5ded60efab",
".git/logs/HEAD": "f3c6d35988e8d066ccafb717d7930260",
".git/ORIG_HEAD": "5913671e145875b67b17aa8347569a44",
".git/COMMIT_EDITMSG": "d49015f17a67d86d0167ee802d0c84f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "db386d8cbdbd526c37c4611ffd2e98c8",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/objects/27/c72b248f932071d872b39f41dc24530825addc": "321f5449ea23cb667231ca1184db35b0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/50/6bf471d645980992ce49ac8ce6c952c8fb1efb": "7c9f01a40855465fa1ef822293af08a2",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/c3/4144daf078d312cc7689bf6e9ad79c37df5a15": "c3a02907bc191711ec5ca605c78a14a8",
".git/objects/22/83ce7f1d637be909d662e62f1bf4dffa5cd0e3": "ac22d748aef639cf5b6dcf895611d167",
".git/objects/ce/8fe13dbae6e9d6e5120d2bec04657b50527913": "0653875264699c2696b6d2c6ba3c7a21",
".git/objects/b8/fa1af5c0577b6525bc4b4bbb5654c0be190180": "acdf8702059a4c62ebf20df5dbda0d7b",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/15/60add5ff40a72e5617ed18c26dff2751890583": "af645193c2edd3bba9167b7756f1a0f8",
".git/objects/7f/b35793dff2eedf1e752220f82c7150468c6b67": "4aeea373584254165391fb7aa6c6548e",
".git/objects/e9/b04d6aa031eda49a911f3eb49bb7004bc284cb": "bc209d5301d528fd3f2d1e5313bdfaac",
".git/objects/e4/be0f3f71b8aa8f82c9d86c37642314f7b84d9b": "3623548d2cdb1982c77340b63bfd1e65",
".git/objects/e4/7a98b4ea9abe8fc683ce77cb7d29c03cc14966": "9b58a0c7c4c06751952b2669396a54d5",
".git/objects/30/33e5a037ad9ceecb0fd6ea673c9f7c3dbc4478": "7a26a8ce637fbea89cdc67424e5a923b",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/5a/f4e5e7466f021716e0ba78313c565237e944a1": "198f1d6bb409356009fc1ab389696731",
".git/objects/36/dc373713f35d6fb33d1ecfe79af73e0bb057ff": "5c8cb78748097d5604528fcd32c56742",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/45/7a936f24cc7fc7369c805e7af04dc2bfe38821": "3bb50c9281baab5951c317df25e51cf8",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/01/1f7b183e1f1e8376322400dff90818a181e648": "955287bbeffe0c2fc0489a6ebd78f92a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/36445925db8216b23b45556ca36294f67d4adc": "1771bf576f84e991f47fad7d07458ad0",
".git/objects/84/b45d54ab55f86fbb646bd053ad65488e5c53ba": "8903c1e98f2af8a01ed0372c470e6db5",
".git/objects/11/cccbcbc3a3dc90a74f7d3d2e482fa66ecbe09e": "f5a742c2c467e6eb417a6171de6ae4a8",
".git/objects/3e/dc63f96b36873053870ac02fc4da5527b8d726": "839ca8272846206c7c7d8c322c9f2ac7",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/85/6abf29fe94ba2bee1e8494000e48f39dfc64ab": "68af8c1c7e412f9e823a0a37ec2c4249",
".git/objects/c2/36250aa1a7af64c7b62d525fd8c430d62256ce": "794565545ae6fb0adb19d2ef10ffc9c2",
".git/objects/4f/fb88fa1bdbf802d55a123cc1b3adb1a18972a5": "3ca14ce82d20107c575ee9cb9e702ac6",
".git/objects/0f/1530246c86ec906e86e21cac02927af23b019e": "915f452a6c4d126198cc664aa6c2d916",
".git/objects/a0/61688210f859b0672bb3151f075a31d14d9c08": "ef6863100661d347e4da38b3997b8671",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f7/2b647a324f1211713315efe19baa8afb8022aa": "8b4eefeaa51673fe1ec54ba15a2d9010",
".git/objects/5c/9824f35608635a8ee368b4ccded070784d3f42": "4b9662bceafe2a77f7938b86ebc2ee34",
".git/objects/38/618f85978f2a6d315958e5c4a334db38da0fa4": "accdb131556bfeb1fd5509dcd4fd3689",
".git/objects/86/79b306aae6e38854d1e35545823450668478d6": "e336af90cbcb66419c8c2e63812569da",
".git/objects/8f/cbe3c410ae00dd91ffb3f168c6b2f3e6c8be3a": "b80e2ab80ffb68b7f93106cd3d7720c8",
".git/objects/25/1409eb00e23c2c5fb4945bb669a60f8f02577f": "7f498b785ee86f41f2dec175ebff8647",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ab/9827ebfe8550c12dc530a300b46895aac8675e": "61cae9d9d96b02044c6fa9abb34d930c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/97f4f688485e7bcd47122f23d55b6ef819f30f": "da605020b80c3c772a1191502fa7d8e4",
".git/objects/68/48f0e80e552137eaf269327bdfa7c10d157485": "cd4017a8eee2cf2d02945df864f8c680",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/1efbad6ccdead2363a1ce2063c2c9a8315d4ec": "b5f89d54fa8ce3f76e9afe4c050a6dff",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/ba/c968e284a53b4ccb37b1927cce6b48b12bc88d": "dc6a37873a98c3e181a239566ee780c9",
".git/objects/9b/9acd64591239d3d315258cfc41aca8f997fce3": "d13c20e0e8158d3e869d21aae4e06200",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/c5/3dcd2610a0dc56bd0251f2b81eb0bed033d2dc": "8c5bd8adf1cf8f800f5e573323f15a30",
".git/FETCH_HEAD": "1d07276b56f99f29db3f55470ab2e21f",
"assets/fonts/MaterialIcons-Regular.otf": "e6b45f709314a8e8db6c731635a1ed10",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/AssetManifest.smcbin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/NOTICES": "1e20d4539afedecf33f514011e9ca3da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"main.dart.js": "7641bf96d2908ee2f9bbe17e8ed6dcbc",
"index.html": "e1d92dbb953959a1df6ebe056f3ce271",
"/": "e1d92dbb953959a1df6ebe056f3ce271",
"manifest.json": "d4ead21b1f18bdbba7801d3d011de666",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
