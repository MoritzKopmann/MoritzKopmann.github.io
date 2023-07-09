'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "6e944ced6ceb15652c663840cfb8a972",
".git/refs/remotes/origin/master": "99de2a73afd90296862d72833c67dfcd",
".git/refs/remotes/origin/main": "ab68c30656e0e5134416b71ff0729f34",
".git/refs/heads/main": "ab68c30656e0e5134416b71ff0729f34",
".git/index": "e6b1d905ddcacbf8a4bbee6ce7cfab93",
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
".git/logs/refs/remotes/origin/main": "bbcae7cac39cb421839667b2fe76422b",
".git/logs/refs/heads/main": "fc88910e12428808951b91773d3456e9",
".git/logs/HEAD": "dc977c6d812bb4d955b511feb47eafc0",
".git/ORIG_HEAD": "ab68c30656e0e5134416b71ff0729f34",
".git/COMMIT_EDITMSG": "8595a5a958e732e3ed9abc2283dce8b6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "db386d8cbdbd526c37c4611ffd2e98c8",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/objects/27/c72b248f932071d872b39f41dc24530825addc": "321f5449ea23cb667231ca1184db35b0",
".git/objects/79/a55105f5dbf4b8d1bed289eec9673c83498453": "386585fc64e0a7613813071539ccb820",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/50/6bf471d645980992ce49ac8ce6c952c8fb1efb": "7c9f01a40855465fa1ef822293af08a2",
".git/objects/0a/30cf9f61258beff6e29409d5181d6ed13df476": "fd686d9b9006844ec36e775d63a3b59e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/c3/4144daf078d312cc7689bf6e9ad79c37df5a15": "c3a02907bc191711ec5ca605c78a14a8",
".git/objects/22/83ce7f1d637be909d662e62f1bf4dffa5cd0e3": "ac22d748aef639cf5b6dcf895611d167",
".git/objects/ce/8fe13dbae6e9d6e5120d2bec04657b50527913": "0653875264699c2696b6d2c6ba3c7a21",
".git/objects/b8/fa1af5c0577b6525bc4b4bbb5654c0be190180": "acdf8702059a4c62ebf20df5dbda0d7b",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/3b/cd5dd091932d046fb762eabfb398e965d359b3": "af48fb30ec57185765414aa86731d432",
".git/objects/15/60add5ff40a72e5617ed18c26dff2751890583": "af645193c2edd3bba9167b7756f1a0f8",
".git/objects/26/334723eccd33e6bdf4d3943ac0d3a8420addd1": "e977b9112d7b0fb3cdff577b7b319628",
".git/objects/7f/b35793dff2eedf1e752220f82c7150468c6b67": "4aeea373584254165391fb7aa6c6548e",
".git/objects/e9/b04d6aa031eda49a911f3eb49bb7004bc284cb": "bc209d5301d528fd3f2d1e5313bdfaac",
".git/objects/e4/be0f3f71b8aa8f82c9d86c37642314f7b84d9b": "3623548d2cdb1982c77340b63bfd1e65",
".git/objects/e4/7a98b4ea9abe8fc683ce77cb7d29c03cc14966": "9b58a0c7c4c06751952b2669396a54d5",
".git/objects/30/a5677b8567879911478d02166cc4a337fb92e7": "26492419b9efdf0f3a1f4e83102efa98",
".git/objects/30/33e5a037ad9ceecb0fd6ea673c9f7c3dbc4478": "7a26a8ce637fbea89cdc67424e5a923b",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2d/277a62ccf61eba86dad73a49c45dc505b545bf": "91822a60c51dd446173cea9be904ddba",
".git/objects/d9/2a20a4d1a06c3ce53a70b8b2f0301b5e118dfe": "4b8bb02d7f12e7f90bf31e8da1078f40",
".git/objects/5a/f4e5e7466f021716e0ba78313c565237e944a1": "198f1d6bb409356009fc1ab389696731",
".git/objects/36/dc373713f35d6fb33d1ecfe79af73e0bb057ff": "5c8cb78748097d5604528fcd32c56742",
".git/objects/bd/3a08f53a38fad67107e194283d16a4325ae7de": "d8067fb602b1eff02715e31209355d1d",
".git/objects/3f/94ce8e280e1df07bcf866a24776b844a7acf25": "11b8c9dceee14718b1076ea8a44a7425",
".git/objects/3f/a88e5c341014601d87b15ec8cab5a0321ff691": "4783f4471f3523f28df36c00f22ad7ac",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/45/7a936f24cc7fc7369c805e7af04dc2bfe38821": "3bb50c9281baab5951c317df25e51cf8",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/32/ada7c2587786f870ea0b6547531c0f20ecebe7": "22a91d701be04eb6acf151fac6b21d10",
".git/objects/01/1f7b183e1f1e8376322400dff90818a181e648": "955287bbeffe0c2fc0489a6ebd78f92a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/36445925db8216b23b45556ca36294f67d4adc": "1771bf576f84e991f47fad7d07458ad0",
".git/objects/84/b45d54ab55f86fbb646bd053ad65488e5c53ba": "8903c1e98f2af8a01ed0372c470e6db5",
".git/objects/48/e928fd9dcad4a1987ae280d58f073b3c842bfd": "8581fa4308d5570ec6ad45975d0e70b3",
".git/objects/bc/51140997886f9ee473fc5e1b866c6442c4b1bf": "f8316705e4660bbfc277dd48b946dc5d",
".git/objects/11/cccbcbc3a3dc90a74f7d3d2e482fa66ecbe09e": "f5a742c2c467e6eb417a6171de6ae4a8",
".git/objects/99/eca213af6b787532c0ea4b87ecc8d4a6374b1f": "027e95c1ac2fb164000db4099a760a0f",
".git/objects/0c/036208595fb96a5305137dec5d63dc22d79e04": "e5dadfdbdb0da217cf787ab954a0a534",
".git/objects/be/913501ca431089e8da345cbf155d4fee564a76": "1405d92a59855586e029743b3d0f2a0b",
".git/objects/be/00dd7b0c9ebdb7f4a4c8741883ec8a9f7466f3": "282a2c42b4c1de1a4bd3fd0e92257746",
".git/objects/3e/dc63f96b36873053870ac02fc4da5527b8d726": "839ca8272846206c7c7d8c322c9f2ac7",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/85/f9335fe59055d067f432ff0b8d332c793412bf": "2dcba01e728168554c65641d48ab545a",
".git/objects/85/6abf29fe94ba2bee1e8494000e48f39dfc64ab": "68af8c1c7e412f9e823a0a37ec2c4249",
".git/objects/57/caee624ac23323d5e6f276e24e8244c1d0bd59": "b61aea1f30c97c8d78305ca6e7b2c0a3",
".git/objects/c2/36250aa1a7af64c7b62d525fd8c430d62256ce": "794565545ae6fb0adb19d2ef10ffc9c2",
".git/objects/4f/fb88fa1bdbf802d55a123cc1b3adb1a18972a5": "3ca14ce82d20107c575ee9cb9e702ac6",
".git/objects/d1/7339941461917f3d18fa4ec6b0988201ab3bf7": "df8821e296cc949eb3b5f45533d336fd",
".git/objects/0f/1530246c86ec906e86e21cac02927af23b019e": "915f452a6c4d126198cc664aa6c2d916",
".git/objects/a0/61688210f859b0672bb3151f075a31d14d9c08": "ef6863100661d347e4da38b3997b8671",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e2cee76694885bd0a9ca2470522d3d2c60a3b3": "b744efabb3e7d4174d134653e21ef6e0",
".git/objects/94/d7f107db62dfb6e2b24506056cb9af9964a4d5": "4d8523d791ecbd29404f9796ea437ec3",
".git/objects/f7/2b647a324f1211713315efe19baa8afb8022aa": "8b4eefeaa51673fe1ec54ba15a2d9010",
".git/objects/f4/4f1738856d4563a7e592a97cc02c946215c5c7": "786076282c9edf05cf07ac7b8bdcee44",
".git/objects/95/5101534d9d059921891794db49bb1ffb118077": "35020de073e6d89ba1f0ce27822eff2a",
".git/objects/5c/9824f35608635a8ee368b4ccded070784d3f42": "4b9662bceafe2a77f7938b86ebc2ee34",
".git/objects/38/618f85978f2a6d315958e5c4a334db38da0fa4": "accdb131556bfeb1fd5509dcd4fd3689",
".git/objects/86/79b306aae6e38854d1e35545823450668478d6": "e336af90cbcb66419c8c2e63812569da",
".git/objects/a8/c1edce3b5abe20dff962f4436a75aff9e60101": "ab67b0f66756c9c140589a5a513cb227",
".git/objects/8f/cbe3c410ae00dd91ffb3f168c6b2f3e6c8be3a": "b80e2ab80ffb68b7f93106cd3d7720c8",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/25/790e45f35c4a4568ddca95e85badba2af68565": "1232b86f48cd93559dc1cd6a5610b77c",
".git/objects/25/1409eb00e23c2c5fb4945bb669a60f8f02577f": "7f498b785ee86f41f2dec175ebff8647",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/97/55db2f7271f549015e50ef33bae191572b7d49": "bb2c5f9bf77964d0323415d3658e9bff",
".git/objects/ab/990bcdab0d014e0193ea5fc8ce9ada9acfc875": "6f7d2a3e16bf994214ae298f772899b9",
".git/objects/ab/9827ebfe8550c12dc530a300b46895aac8675e": "61cae9d9d96b02044c6fa9abb34d930c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/61/51f0d9ff88b5dc3d47ca044c41ad112e7ddb4d": "ddc404e26ebbf392865dc9ec9e29d30a",
".git/objects/0e/97f4f688485e7bcd47122f23d55b6ef819f30f": "da605020b80c3c772a1191502fa7d8e4",
".git/objects/0e/cbbb3c0e06655da8102caad05f54d0e6ea9f91": "36c0a59ecebd075cb11c6e14d4e68411",
".git/objects/a7/4160859c28d26b8f6e2658bc716c939cfb37e6": "59b7c730c37be4efc166bcc752963f43",
".git/objects/68/48f0e80e552137eaf269327bdfa7c10d157485": "cd4017a8eee2cf2d02945df864f8c680",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/1efbad6ccdead2363a1ce2063c2c9a8315d4ec": "b5f89d54fa8ce3f76e9afe4c050a6dff",
".git/objects/f3/4b6d07f4fd717d91ed4b8aecd15374dc760d0a": "cbcaabd4c40d973569883016215111c7",
".git/objects/bf/67a72a780652c6853da343ec5a1ac6e39ecd92": "89ad8800bc8d1157ca7be2ad2a87e64f",
".git/objects/bf/413678e8378ec7502eebc24c1df41f14392f49": "56a3e09b968482a08c0c1012b0e39489",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/fe76b6567f52b0e6f46c4e5d85c2b7faa3ed3b": "07b5c3c7639ef65f02487fbf732f9e38",
".git/objects/7a/003b35f884207bd03e70fd97e460803b80a946": "fba51773c6bb2ec73ec21d7627abf946",
".git/objects/c1/0866b347eccc3a7263cd7358264bee40fa68f8": "f54627394a4d9f79e77472d940eccbcc",
".git/objects/d5/e99baf8d37dae0264e12be9e7cbc5df6f60bd8": "5c5a6c2875165b3c444cbb5648b36e05",
".git/objects/20/587b492b2a8f1413701181d8a7578cdf28a000": "d4d98eab796be5abf73ccaff5525055d",
".git/objects/20/ed56cb433e614910679db5bff41168e4d0786f": "dda64a6db530ad2bbadf40ac0512e9dc",
".git/objects/d0/40b5a467529bb25f73d196af19a27d172f17f2": "b4a722d1faa722aeb087c6fcea4faa9a",
".git/objects/ba/69207c780cc557b520faeabcb509cf240141e2": "498591c70408e85e69733a834f82a654",
".git/objects/ba/c968e284a53b4ccb37b1927cce6b48b12bc88d": "dc6a37873a98c3e181a239566ee780c9",
".git/objects/02/45020590f5232abd7c42c9b2b864153c83c118": "08b78fe1b1cdfdc021dfc644acd690ef",
".git/objects/74/d9a29a2c5ef4ce90edf5abda6fe144f9c57f38": "e3468a2c229103ff83fe97ee263002c2",
".git/objects/9b/9acd64591239d3d315258cfc41aca8f997fce3": "d13c20e0e8158d3e869d21aae4e06200",
".git/objects/e7/3a5e4b7a923c57ae3b170521f43edadb39ca01": "8e8633297a13df6a858e07151c638bb7",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/cd/73014e3217320d4e6b0245afdb3fdf715293ea": "fd8cc1f1f950a8b9fd8a674892a7e76a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/c5/3dcd2610a0dc56bd0251f2b81eb0bed033d2dc": "8c5bd8adf1cf8f800f5e573323f15a30",
".git/FETCH_HEAD": "a6c6319d9e55236f9f30bb77e0f62d77",
"assets/fonts/MaterialIcons-Regular.otf": "d78c101f126a915c3c870805a387fe87",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/NOTICES": "a91e083be9a6739466a2e54bb284fe59",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"main.dart.js": "6381a328c325b63d0f133ca2bea35db4",
"index.html": "aa06dcc7225e29b007d43b0b6e0298c9",
"/": "aa06dcc7225e29b007d43b0b6e0298c9",
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
