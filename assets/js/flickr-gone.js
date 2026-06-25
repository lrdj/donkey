/*
 * flickr-gone.js
 * Dug deleted his Flickr account in 2018, so every image hosted on Flickr's
 * static servers is permanently gone. Rather than show a broken-image icon,
 * swap each dead <img> for a tidy placeholder that keeps the original caption
 * (read from the image's alt text) and explains why the photo is missing.
 * Pure client-side; GitHub Pages only runs Jekyll, never scripts.
 */
(function () {
  'use strict';

  var NOTE = 'Dug deleted his Flickr account in 2018';
  // Flickr image hosts only (anchor links to flickr.com/photos are left alone).
  var DEAD = /\/\/(static\.flickr\.com|farm\d+\.static\.flickr\.com|photos\d+\.flickr\.com|[\w.-]*staticflickr\.com)\//i;

  function lengthOrPx(v) {
    return /^\d+$/.test(v) ? v + 'px' : v;
  }

  function swap(img) {
    var caption = (img.getAttribute('alt') || '').trim();

    var box = document.createElement('span');
    box.className = 'flickr-gone';
    // Carry over the image's footprint and float so surrounding text wraps
    // exactly as it did before, preserving the page's look and feel.
    var w = img.getAttribute('width');
    var h = img.getAttribute('height');
    if (w) box.style.width = lengthOrPx(w);
    if (h) box.style.minHeight = lengthOrPx(h);
    if (img.getAttribute('style')) box.style.cssText += ';' + img.getAttribute('style');
    if (img.className) box.className += ' ' + img.className;

    var cap = document.createElement('span');
    cap.className = 'flickr-gone__caption';
    cap.textContent = caption; // empty stays empty; CSS hides it

    var note = document.createElement('span');
    note.className = 'flickr-gone__note';
    note.textContent = NOTE;

    box.appendChild(cap);
    box.appendChild(note);
    img.parentNode.replaceChild(box, img);
  }

  function run() {
    var imgs = document.getElementsByTagName('img');
    var dead = [];
    for (var i = 0; i < imgs.length; i++) {
      if (DEAD.test(imgs[i].getAttribute('src') || '')) dead.push(imgs[i]);
    }
    for (var j = 0; j < dead.length; j++) swap(dead[j]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
