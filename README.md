Detecting polygon self-intersection in Javascript
============================================


An implementation of the O((n + k) log n) Bentley–Ottmann sweep line algorithm for detecting crossings in a set of line segments. Works in both Node.JS and the browser.

Originally forked from https://github.com/tokumine/sweepline. Various cleanups, and ported to work in browser via Browserify.

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
