'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "06edd59c10ad4de241b05613b8dd4d5f",
".git/config": "e72d4d4a5f3050258bd30d943aa745cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8c91b36b8a1f80acdc977e7ba137267b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75a5e1e1175090ed089dbed0998596d3",
".git/logs/refs/heads/main": "aaf3b9db6ef83a5801956e36b4eee59b",
".git/logs/refs/remotes/origin/main": "65728711e0be2ff77560cfaea9447eb3",
".git/objects/18/cdc8bfed2b5914715666aef6c7040c9a84d362": "9ace4e64a7e3cdda67c5a165349ffc1f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/3a/348acae716ac350c6fb8dbe80ae9083280dc28": "41c89cca5989d959e25000d5921ae36f",
".git/objects/4f/0dd183e23a34918c8587f70d9f7465a7075d48": "4e5a410c2c94c90f1cc1523a84f1a8ea",
".git/objects/54/4559538133885c9a959bf197ed9e5f0fc0160c": "3d678afe6305ba03e13cc31fe35fd590",
".git/objects/6d/f7693b15a85cf4f53847f1eb153e01ba55e0bc": "797faa11184e15b2cdcfc88ace35d10b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/3ef14f3ff7682d3151326ee33bead87b47c9cf": "1cea2fa7063a50cfed7e6b7fe35adf59",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/fe/fe0ec7064570d9e1feec5e5420a1c6c5e9ca1a": "a49ed2ea0d995fe7e6c38358cab0b0fe",
".git/refs/heads/main": "c6968f01a9e6e55841c6e854b7ac812f",
".git/refs/remotes/origin/main": "c6968f01a9e6e55841c6e854b7ac812f",
"assets/AssetManifest.json": "5bce609aa94b37420fb37a7695eb1a8c",
"assets/assets/api": "74fb4247c299370ca6d7d58aacb6051f",
"assets/assets/bgs/homepage_bg.png": "e52a76186baf9b5680a6d5bb4cee8275",
"assets/assets/bgs/login_header.png": "91c9e27f4fff2db1d01b5e0b3323e77c",
"assets/assets/chat_icon/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/assets/chat_icon/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/assets/chat_icon/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/assets/chat_icon/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/assets/chat_icon/3.0x/icon-reply.png": "9115385c23e964c5c88ade6310b5d4a0",
"assets/assets/chat_icon/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/assets/chat_icon/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/assets/chat_icon/3.0x/icon-x.png": "2310e3591b6192cf4d91329b4fab3a6e",
"assets/assets/chat_icon/add.png": "41506ae31977aaad70d5b5b7298f89e7",
"assets/assets/chat_icon/loading_dot.gif": "009c4de92f0c989fa0001aec393d605d",
"assets/assets/chat_icon/paper-plane.png": "22b8db6ca2ef666874bbbea8e41ec9b1",
"assets/assets/hanhchinhvn/locations.json": "afbc64969f632d09172de8643e57c2f3",
"assets/assets/icons/app_function/014-medical%2520record.png": "07d0e143996d9c98b99f1934b4f385ae",
"assets/assets/icons/app_function/Clinic%2520Visit.png": "f6b586b45b085b7bd20317858fc233ff",
"assets/assets/icons/app_function/hospital%2520(2).png": "e2ef47360f47d8e75c54e75e7b2ff9c0",
"assets/assets/icons/app_function/Nurse.png": "53fcf939fe49df6e2f645cd4581172b1",
"assets/assets/icons/app_function/Serum.png": "61ed4205b6dad1be02913607498a5864",
"assets/assets/icons/app_function/Video%2520Consult.png": "9f84461c11f0cdc4d84dd7625f3e21b5",
"assets/assets/icons/bottom_bar/datlich.png": "7182ad3615660bea041c171ebb9e2e9c",
"assets/assets/icons/bottom_bar/home.png": "d60a48489e0353ab2d5ca61280a3661a",
"assets/assets/icons/bottom_bar/taikhoan.png": "ae9947d84e41b7eb4622dd27092425aa",
"assets/assets/icons/bottom_bar/thongbao.png": "3e61992d52bc0d71485f375a3b5e10d3",
"assets/assets/icons/calendar.png": "c52ea5f65f0c6dce55b26aebf8ba166f",
"assets/assets/icons/Email.png": "066c552a2aab1a17c81d86eae4bbe57e",
"assets/assets/icons/facebook.png": "a60a68f999efe339703265b1b74ca0e6",
"assets/assets/icons/filter.png": "23ec652c655b28da38a4016bf8a0e287",
"assets/assets/icons/google-maps.png": "e87e882c2659b4fadf8fad828894c749",
"assets/assets/icons/google.png": "9061288c6a6c477035a1e492f1295bbe",
"assets/assets/icons/location.jpg": "ae03a10344508b41119ff49872a91aac",
"assets/assets/icons/logout.png": "547c9330e1e16ebd10579ff83aa41cd9",
"assets/assets/icons/message-question.png": "7e7a2c4a13a3e9b29bf2d2d03edad2b6",
"assets/assets/icons/mobile.png": "a61f69d263c4a392b23a4704dba36c6c",
"assets/assets/icons/person.png": "965a9acf19a67df5a203b4783cd8c864",
"assets/assets/icons/setting.png": "2a189bdc5e08e69e7d620d2a768ab3ed",
"assets/assets/icons/test_results.png": "be7826d874ae115ea8406bd6fd6ae6a0",
"assets/assets/icons/thongtinxn.png": "56f8017423309b51270f9cb58d6ac1c1",
"assets/assets/icons/tiemchung.png": "32331124f8a59e1205c9d090e487027c",
"assets/assets/illustration/error.png": "2b49bf2570684f71a8f4d7674b3b04ce",
"assets/assets/illustration/failed_inslutration.png": "073aa93939d0e1728969035467ce8544",
"assets/assets/illustration/manager.jpg": "ef9e2c0c4c7699a4c60553bbe626abe7",
"assets/assets/illustration/parent.jpg": "e31a1eb6c01eb7f34f0881128435b1a7",
"assets/assets/illustration/success_inslustration.png": "1109c028d3e3ae02c7a745d5689e801d",
"assets/assets/illustration/teacher.png": "ff63b77fc1b0e3edd8f9f7138ec57b79",
"assets/assets/illustration/using_teach.jpg": "fef80a6423750d8c6f005d95e94c72fe",
"assets/assets/images/Doctor-rafiki%25201.png": "6bcbf476d304e72888360ad894151af8",
"assets/assets/images/enmergency.png": "78c42ad1431531420a20736900d0ceb1",
"assets/assets/images/hospital_image.png": "c5218171c95c2ab2719899ff7187fafd",
"assets/assets/images/illustration.png": "ba5bf291a273757374a13ab2b2e23e7a",
"assets/assets/images/loading_gif.gif": "0c44dacf1b038014a6f941131c5e8aa2",
"assets/assets/images/welcome.png": "133594dd2219350fa884cfa188032aaa",
"assets/assets/messages.json": "156bf5c946934556c3e7024eeb7ea843",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "40389f861db357f327201a556a019e02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3c625eeb890a2d39b627183371aba33a",
"/": "3c625eeb890a2d39b627183371aba33a",
"main.dart.js": "9fbe0d9db7b2e097a5f89f1d20eda2cb",
"manifest.json": "6c70d295dc0ba38855d99972ef065893",
"version.json": "066b897fe3ee2f424eddb91a4960ed0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
