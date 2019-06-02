module.exports = {
  "globDirectory": "dist/demoangular8/",
  "globPatterns": [
    "index.html",
    "favicon.ico",
    "*.js",
    "*.css",
    "assets/**/*.png",
    "manifest.json"
  ],
  "dontCacheBustURLsMatching": new RegExp('.+\.[a-f0-9]{20}\..+'),
  "maximumFileSizeToCacheInBytes": 5000000,
  "swSrc": "src/service-worker.js",
  "swDest": "dist/demoangular8/service-worker.js"
};
