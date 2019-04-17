---
templateKey: blog-post
title: 'Good way to install GSAP,ScrollMagic'
date: 2019-04-17T21:20:53.910Z
description: |
  How to install properly these libraries to avoid headaches.
tags:
  - js
  - libraries
  - animation
---
First things first you need to install the libraries

```
npm install gsap scrollmagic imports-loader jquery
```

then we need to import these to our project:

```
import $ from 'jquery';
import {TweenMax, TimelineMax,} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
```
the trick is in use `import-loader` package to get properly work with gsap
