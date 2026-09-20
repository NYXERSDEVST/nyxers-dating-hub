const CACHE='velvet-nyxers-v3-cast-expand';
const ASSETS=['./', './index.html', './manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', './assets/generated/fatima_discover.png', './assets/generated/kayla_hub_cast.png', './assets/generated/lianne_chat_bg_v2.png', './assets/generated/velvet/velvet_lianne_neon_sisters.png', './assets/generated/velvet/velvet_caoimhe_niamh_sisters.png', './assets/generated/velvet/velvet_siobhan_discover.png', './assets/generated/sabine_discover.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request).then(r=>{
    const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;
  }).catch(()=>caches.match('./index.html'))));
});
