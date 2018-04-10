// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var cacheName = 'cashfe';
var filesToCache = [
  '/',
  '/index.html',
  '/home.html',
  '/CSS/home.css',
  '/CSS/index.css',
  '/CSS/sample.css',
  '/CSS/Backgrounds/french-style-coffee-shops.jpeg',
  '/CSS/Logos/31082.svg',
  '/CSS/Logos/66315-coffee-beans-200x200.png',
  '/CSS/Logos/cashe-logo.png',
  '/CSS/Logos/img_478308.png',
  '/CSS/Logos/roasted_coffee_beans-512.png',
  '/CSS/Fonts/Altoysitalic personal only.otf',
  '/CSS/Fonts/Altoysitalic personal only.ttf',
  '/CSS/Fonts/ExpressoCaffe.ttf',
  '/CSS/Fonts/Quesha.ttf',
  '/scripts/app.js',
  '/scripts/indexedDB.js',
  '/scripts/modal.js',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

