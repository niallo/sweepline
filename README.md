Detecting polygon self-intersection in Javascript
============================================

Originally forked from https://github.com/tokumine/sweepline. Various cleanups, and ported to work in browser via Browserify.

An implementation of the O((n + k) log n) Bentley–Ottmann sweep line algorithm for detecting crossings in a set of line segments. The aim was to make something to speedily detect self-intersecting polygons for client side validation before serialisation and storage, but there's not much to stop it being used serverside (except it being more a statement of intent than actual production ready code).  

Despite intending it for the browser, it probably still needs some fettling to make sure the CommonJS-esque code I've written works in your target browser.

Browser usage
==============

`browserify --standalone sweepline -d -e index.js -o sweepline.js`

You can then require `sweepline.js` via a standard script tag. It will be available in the global namespace under `sweepline`.

You can find a pre-generated copy of this as `sweepline-bundle.js` in the repo.

Tests
======
$ npm test

Note that this implementation currently doesn't validate polygons that share the same start and end vertex. Look at the tests for workarounds to this issue.


Licence
========
free
