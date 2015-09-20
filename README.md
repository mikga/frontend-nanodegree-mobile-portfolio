## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Optimisation for Part 1.

1. Use Web Font Loader to load Google Fonts and move the script tag to the bottom of the body element
1. Move the analytics JavaScript file to the bottom of the body element and make it asynchronous
1. Inline style.css (index.html)
1. Minify/uglify the CSS and JavaScript files
1. Add media query to load print.css only when printing
1. Resize views/images/pizzeria.jpg to 100px width
1. Compress img/\*.jpg and img/\*.png files using ImageOptim and ImageMagic

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

####Optimisation for Part 2.

In main.js:

1. Specify the width using percent rather than px. This requires changes to the determineDx function (line 426). This eliminates forced syhcronous layout (line 450)
1. Change querySelectorAll to getElementsByClassName to get better performance (line 455, 516)
1. Store the array length in a local variable in the for loop so that the length is checked once at the beginning (line 457, 517)
1. Store the DOM elements selected by getElementByClassName in a local variable so that DOM is not searched repeatedly in the loop (line 463)
1. Move the pizzasDiv definition out of the for loop so that the DOM is not searched repeatedly in the for loop (line 479)
1. In updatePositions function, create a variable to store the value of document.body.scrollTop. This also eliminates forced syhcronous layout (line 506)
1. Declare the variable phase outside the for loop to prevent the variable to be created repeatedly in the loop (line 519, 543, 544)
1. Calculate the number of pizzas based on the screen height (line 540)
1. Change querySelector to getElementById to get better performance (line 544)

In style.css:

1. Specify "will-change: transform;" to the .mover element in style.css. This puts the elements into separate layers and reduces paint. For the browsers which don't support will-change, "transform: translateZ(0);" is also specified (including the vender prefixes). This will trigger GPU acceleration in modern desktop and mobile browsers.
1. Specify "backface-visibility: hidden" to get better performance
