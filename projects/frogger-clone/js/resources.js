// Resources.js
// Image loading utility, it eases the process of loading image files for the game
// If attemt is made to load the same image multiple times, cached images will be reused (works as "caching" layer)
// It is self executing anonymous function that creates Resources object

(function() {
  var resourceCache = {};
  var loading = [];
  var readyCallbacks = [];

  // load function is the publicly accessible and takes in an array of strings pointing to image files (or a string for a single image)

  function load(urlOrArr) {
    if(urlOrArr instanceof Array) {

      // If array is passed, loop through each value and calls image loader on it

      urlOrArr.forEach(function(url) {
        _load(url);
      });
    } else {

      // Assumes that single string was passed and calls image loader directly

      _load(urlOrArr);
    }
  }

  // _load function (private, not added to Resouces object)

  function _load(url) {
    if(resourceCache[url]) {

      // If URL has been previously loaded (exists within resourceCache array), return that image instead of re-loading the image

      return resourceCache[url];
    } else {

      // If URL has not been previously loaded (not present in resourceCache array), new image object is created

      var img = new Image();

      img.onload = function() {

          // Function is called when image object is loaded (created) and it is added to resourceCache array

          resourceCache[url] = img;

          // Once the image is actually loaded and properly cached, call all of the onReady() callbacks that were defined

          if(isReady()) {
            readyCallbacks.forEach(function(func) { func(); });
          }
      };

      // Sets the inital cache value to false (it changes when onload event handler is called on img object) and point image's src attribute to the passed in URL

      resourceCache[url] = false;
      img.src = url;
    }
  }

  // Function that returns reference to image that has been previously loaded (if image is cached, it is the same as calling load() on that URL)

  function get(url) {
    return resourceCache[url];
  }

  // This function determines if all of the images that have been requested have been loaded

  function isReady() {
    var ready = true;
    for(var k in resourceCache) {
      if(resourceCache.hasOwnProperty(k) &&
        !resourceCache[k]) {
          ready = false;
      }
    }
    return ready;
  }

  // Function adds function that is passed to it to the callback stack that is called when all requested images are loaded

  function onReady(func) {
    readyCallbacks.push(func);
  }

  // Resources object (added to window object) defines publicly accessible functions from Resources.js file

  window.Resources = {
    load: load,
    get: get,
    onReady: onReady,
    isReady: isReady
  };
})();
