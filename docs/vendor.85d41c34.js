// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"js/components/vendor.js":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // install a JSONP callback for chunk loading

  /******/
  var parentJsonpFunction = window["webpackJsonp"];
  /******/

  window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
    /******/
    // add "moreModules" to the modules object,

    /******/
    // then flag all "chunkIds" as loaded and fire callback

    /******/
    var moduleId,
        chunkId,
        i = 0,
        resolves = [],
        result;
    /******/

    for (; i < chunkIds.length; i++) {
      /******/
      chunkId = chunkIds[i];
      /******/

      if (installedChunks[chunkId]) {
        /******/
        resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/


      installedChunks[chunkId] = 0;
      /******/
    }
    /******/


    for (moduleId in moreModules) {
      /******/
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        /******/
        modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/

    }
    /******/


    if (parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
    /******/

    while (resolves.length) {
      /******/
      resolves.shift()();
      /******/
    }
    /******/


    if (executeModules) {
      /******/
      for (i = 0; i < executeModules.length; i++) {
        /******/
        result = __webpack_require__(__webpack_require__.s = executeModules[i]);
        /******/
      }
      /******/

    }
    /******/


    return result;
    /******/
  };
  /******/

  /******/
  // The module cache

  /******/


  var installedModules = {};
  /******/

  /******/
  // objects to store loaded and loading chunks

  /******/

  var installedChunks = {
    /******/
    1: 0
    /******/

  };
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/
  // This file contains only the entry chunk.

  /******/
  // The chunk loading function for additional chunks

  /******/


  __webpack_require__.e = function requireEnsure(chunkId) {
    /******/
    var installedChunkData = installedChunks[chunkId];
    /******/

    if (installedChunkData === 0) {
      /******/
      return new Promise(function (resolve) {
        resolve();
      });
      /******/
    }
    /******/

    /******/
    // a Promise means "currently loading".

    /******/


    if (installedChunkData) {
      /******/
      return installedChunkData[2];
      /******/
    }
    /******/

    /******/
    // setup Promise in chunk cache

    /******/


    var promise = new Promise(function (resolve, reject) {
      /******/
      installedChunkData = installedChunks[chunkId] = [resolve, reject];
      /******/
    });
    /******/

    installedChunkData[2] = promise;
    /******/

    /******/
    // start chunk loading

    /******/

    var head = document.getElementsByTagName('head')[0];
    /******/

    var script = document.createElement('script');
    /******/

    script.type = 'text/javascript';
    /******/

    script.charset = 'utf-8';
    /******/

    script.async = true;
    /******/

    script.timeout = 120000;
    /******/

    /******/

    if (__webpack_require__.nc) {
      /******/
      script.setAttribute("nonce", __webpack_require__.nc);
      /******/
    }
    /******/


    script.src = __webpack_require__.p + "" + chunkId + ".js";
    /******/

    var timeout = setTimeout(onScriptComplete, 120000);
    /******/

    script.onerror = script.onload = onScriptComplete;
    /******/

    function onScriptComplete() {
      /******/
      // avoid mem leaks in IE.

      /******/
      script.onerror = script.onload = null;
      /******/

      clearTimeout(timeout);
      /******/

      var chunk = installedChunks[chunkId];
      /******/

      if (chunk !== 0) {
        /******/
        if (chunk) {
          /******/
          chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
          /******/
        }
        /******/


        installedChunks[chunkId] = undefined;
        /******/
      }
      /******/

    }

    ;
    /******/

    head.appendChild(script);
    /******/

    /******/

    return promise;
    /******/
  };
  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // identity function for calling harmony imports with the correct context

  /******/

  __webpack_require__.i = function (value) {
    return value;
  };
  /******/

  /******/
  // define getter function for harmony exports

  /******/


  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/
        configurable: false,

        /******/
        enumerable: true,

        /******/
        get: getter
        /******/

      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/
  // on error function for async loading

  /******/

  __webpack_require__.oe = function (err) {
    console.error(err);
    throw err;
  };
  /******/

  /******/
  // Load entry module and return exports

  /******/


  return __webpack_require__(__webpack_require__.s = 23);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", {
    value: true
  });
  /* harmony import */

  var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(19);
  /* harmony reexport (binding) */


  __webpack_require__.d(__webpack_exports__, "h", function () {
    return __WEBPACK_IMPORTED_MODULE_0__h__["a"];
  });
  /* harmony import */


  var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(18);
  /* harmony reexport (binding) */


  __webpack_require__.d(__webpack_exports__, "app", function () {
    return __WEBPACK_IMPORTED_MODULE_1__app__["a"];
  });
  /***/

},,,,,,
/* 1 */

/* 2 */

/* 3 */

/* 4 */

/* 5 */

/* 6 */

/***/
function (module, exports) {
  var g; // This works in non-strict mode

  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
  } // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}


  module.exports = g;
  /***/
},,,,,,,,,,,,
/* 7 */

/* 8 */

/* 9 */

/* 10 */

/* 11 */

/* 12 */

/* 13 */

/* 14 */

/* 15 */

/* 16 */

/* 17 */

/* 18 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony export (immutable) */

  __webpack_exports__["a"] = app;
  var globalInvokeLaterStack = [];

  function app(props) {
    var appState;
    var appView = props.view;
    var appActions = {};
    var appEvents = {};
    var appMixins = props.mixins || [];
    var appRoot = props.root || document.body;
    var element;
    var oldNode;
    var renderLock;
    appMixins.concat(props).map(function (mixin) {
      mixin = typeof mixin === "function" ? mixin(emit) : mixin;
      Object.keys(mixin.events || []).map(function (key) {
        appEvents[key] = (appEvents[key] || []).concat(mixin.events[key]);
      });
      appState = merge(appState, mixin.state);
      initialize(appActions, mixin.actions);
    });
    requestRender((oldNode = emit("load", element = appRoot.children[0])) === element && (oldNode = element = null));
    return emit;

    function initialize(actions, withActions, lastName) {
      Object.keys(withActions || []).map(function (key) {
        var action = withActions[key];
        var name = lastName ? lastName + "." + key : key;

        if (typeof action === "function") {
          actions[key] = function (data) {
            emit("action", {
              name: name,
              data: data
            });
            var result = emit("resolve", action(appState, appActions, data));
            return typeof result === "function" ? result(update) : update(result);
          };
        } else {
          initialize(actions[key] || (actions[key] = {}), action, name);
        }
      });
    }

    function render(cb) {
      element = patch(appRoot, element, oldNode, oldNode = emit("render", appView)(appState, appActions), renderLock = !renderLock);

      while (cb = globalInvokeLaterStack.pop()) {
        cb();
      }
    }

    function requestRender() {
      if (appView && !renderLock) {
        requestAnimationFrame(render, renderLock = !renderLock);
      }
    }

    function update(withState) {
      if (typeof withState === "function") {
        return update(withState(appState));
      }

      if (withState && (withState = emit("update", merge(appState, withState)))) {
        requestRender(appState = withState);
      }

      return appState;
    }

    function emit(name, data) {
      return (appEvents[name] || []).map(function (cb) {
        var result = cb(appState, appActions, data);

        if (result != null) {
          data = result;
        }
      }), data;
    }

    function merge(a, b) {
      var obj = {};

      for (var i in a) {
        obj[i] = a[i];
      }

      for (var i in b) {
        obj[i] = b[i];
      }

      return obj;
    }

    function getKey(node) {
      if (node && (node = node.data)) {
        return node.key;
      }
    }

    function createElement(node, isSVG) {
      if (typeof node === "string") {
        var element = document.createTextNode(node);
      } else {
        var element = (isSVG = isSVG || node.tag === "svg") ? document.createElementNS("http://www.w3.org/2000/svg", node.tag) : document.createElement(node.tag);

        if (node.data && node.data.oncreate) {
          globalInvokeLaterStack.push(function () {
            node.data.oncreate(element);
          });
        }

        for (var i in node.data) {
          setData(element, i, node.data[i]);
        }

        for (var i = 0; i < node.children.length;) {
          element.appendChild(createElement(node.children[i++], isSVG));
        }
      }

      return element;
    }

    function setData(element, name, value, oldValue) {
      if (name === "key") {} else if (name === "style") {
        for (var i in merge(oldValue, value = value || {})) {
          element.style[i] = value[i] || "";
        }
      } else {
        try {
          element[name] = value;
        } catch (_) {}

        if (typeof value !== "function") {
          if (value) {
            element.setAttribute(name, value);
          } else {
            element.removeAttribute(name);
          }
        }
      }
    }

    function updateElement(element, oldData, data) {
      for (var i in merge(oldData, data)) {
        var value = data[i];
        var oldValue = i === "value" || i === "checked" ? element[i] : oldData[i];

        if (value !== oldValue) {
          setData(element, i, value, oldValue);
        }
      }

      if (data && data.onupdate) {
        globalInvokeLaterStack.push(function () {
          data.onupdate(element, oldData);
        });
      }
    }

    function removeElement(parent, element, data) {
      if (data && data.onremove) {
        data.onremove(element);
      } else {
        parent.removeChild(element);
      }
    }

    function patch(parent, element, oldNode, node, isSVG, nextSibling) {
      if (oldNode == null) {
        element = parent.insertBefore(createElement(node, isSVG), element);
      } else if (node.tag != null && node.tag === oldNode.tag) {
        updateElement(element, oldNode.data, node.data);
        isSVG = isSVG || node.tag === "svg";
        var len = node.children.length;
        var oldLen = oldNode.children.length;
        var oldKeyed = {};
        var oldElements = [];
        var keyed = {};

        for (var i = 0; i < oldLen; i++) {
          var oldElement = oldElements[i] = element.childNodes[i];
          var oldChild = oldNode.children[i];
          var oldKey = getKey(oldChild);

          if (null != oldKey) {
            oldKeyed[oldKey] = [oldElement, oldChild];
          }
        }

        var i = 0;
        var j = 0;

        while (j < len) {
          var oldElement = oldElements[i];
          var oldChild = oldNode.children[i];
          var newChild = node.children[j];
          var oldKey = getKey(oldChild);

          if (keyed[oldKey]) {
            i++;
            continue;
          }

          var newKey = getKey(newChild);
          var keyedNode = oldKeyed[newKey] || [];

          if (null == newKey) {
            if (null == oldKey) {
              patch(element, oldElement, oldChild, newChild, isSVG);
              j++;
            }

            i++;
          } else {
            if (oldKey === newKey) {
              patch(element, keyedNode[0], keyedNode[1], newChild, isSVG);
              i++;
            } else if (keyedNode[0]) {
              element.insertBefore(keyedNode[0], oldElement);
              patch(element, keyedNode[0], keyedNode[1], newChild, isSVG);
            } else {
              patch(element, oldElement, null, newChild, isSVG);
            }

            j++;
            keyed[newKey] = newChild;
          }
        }

        while (i < oldLen) {
          var oldChild = oldNode.children[i];
          var oldKey = getKey(oldChild);

          if (null == oldKey) {
            removeElement(element, oldElements[i], oldChild.data);
          }

          i++;
        }

        for (var i in oldKeyed) {
          var keyedNode = oldKeyed[i];
          var reusableNode = keyedNode[1];

          if (!keyed[reusableNode.data.key]) {
            removeElement(element, keyedNode[0], reusableNode.data);
          }
        }
      } else if (element && node !== element.nodeValue) {
        if (typeof node === "string" && typeof oldNode === "string") {
          element.nodeValue = node;
        } else {
          element = parent.insertBefore(createElement(node, isSVG), nextSibling = element);
          removeElement(parent, nextSibling, oldNode.data);
        }
      }

      return element;
    }
  }
  /***/

},
/* 19 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";
  /* harmony export (immutable) */

  __webpack_exports__["a"] = h;
  var i;
  var stack = [];

  function h(tag, data) {
    var node;
    var children = [];

    for (i = arguments.length; i-- > 2;) {
      stack.push(arguments[i]);
    }

    while (stack.length) {
      if (Array.isArray(node = stack.pop())) {
        for (i = node.length; i--;) {
          stack.push(node[i]);
        }
      } else if (node != null && node !== true && node !== false) {
        if (typeof node === "number") {
          node = node + "";
        }

        children.push(node);
      }
    }

    return typeof tag === "string" ? {
      tag: tag,
      data: data || {},
      children: children
    } : tag(data, children);
  }
  /***/

},
/* 20 */

/***/
function (module, exports) {
  // shim for using process in browser
  var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.

  var cachedSetTimeout;
  var cachedClearTimeout;

  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }

  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }

  (function () {
    try {
      if (typeof setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }

    try {
      if (typeof clearTimeout === 'function') {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();

  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      //normal enviroments in sane situations
      return setTimeout(fun, 0);
    } // if setTimeout wasn't available but was latter defined


    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }

  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      //normal enviroments in sane situations
      return clearTimeout(marker);
    } // if clearTimeout wasn't available but was latter defined


    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
        return cachedClearTimeout.call(this, marker);
      }
    }
  }

  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }

    draining = false;

    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }

    if (queue.length) {
      drainQueue();
    }
  }

  function drainQueue() {
    if (draining) {
      return;
    }

    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;

    while (len) {
      currentQueue = queue;
      queue = [];

      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }

      queueIndex = -1;
      len = queue.length;
    }

    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }

  process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);

    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }

    queue.push(new Item(fun, args));

    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  }; // v8 likes predictible objects


  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }

  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };

  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues

  process.versions = {};

  function noop() {}

  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;

  process.listeners = function (name) {
    return [];
  };

  process.binding = function (name) {
    throw new Error('process.binding is not supported');
  };

  process.cwd = function () {
    return '/';
  };

  process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
  };

  process.umask = function () {
    return 0;
  };
  /***/

},
/* 21 */

/***/
function (module, exports, __webpack_require__) {
  /* WEBPACK VAR INJECTION */
  (function (global, process) {
    (function (global, undefined) {
      "use strict";

      if (global.setImmediate) {
        return;
      }

      var nextHandle = 1; // Spec says greater than zero

      var tasksByHandle = {};
      var currentlyRunningATask = false;
      var doc = global.document;
      var registerImmediate;

      function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
          callback = new Function("" + callback);
        } // Copy function arguments


        var args = new Array(arguments.length - 1);

        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
        } // Store and register the task


        var task = {
          callback: callback,
          args: args
        };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
      }

      function clearImmediate(handle) {
        delete tasksByHandle[handle];
      }

      function run(task) {
        var callback = task.callback;
        var args = task.args;

        switch (args.length) {
          case 0:
            callback();
            break;

          case 1:
            callback(args[0]);
            break;

          case 2:
            callback(args[0], args[1]);
            break;

          case 3:
            callback(args[0], args[1], args[2]);
            break;

          default:
            callback.apply(undefined, args);
            break;
        }
      }

      function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
          // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
          // "too much recursion" error.
          setTimeout(runIfPresent, 0, handle);
        } else {
          var task = tasksByHandle[handle];

          if (task) {
            currentlyRunningATask = true;

            try {
              run(task);
            } finally {
              clearImmediate(handle);
              currentlyRunningATask = false;
            }
          }
        }
      }

      function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
          process.nextTick(function () {
            runIfPresent(handle);
          });
        };
      }

      function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
          var postMessageIsAsynchronous = true;
          var oldOnMessage = global.onmessage;

          global.onmessage = function () {
            postMessageIsAsynchronous = false;
          };

          global.postMessage("", "*");
          global.onmessage = oldOnMessage;
          return postMessageIsAsynchronous;
        }
      }

      function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var messagePrefix = "setImmediate$" + Math.random() + "$";

        var onGlobalMessage = function onGlobalMessage(event) {
          if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
            runIfPresent(+event.data.slice(messagePrefix.length));
          }
        };

        if (global.addEventListener) {
          global.addEventListener("message", onGlobalMessage, false);
        } else {
          global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
          global.postMessage(messagePrefix + handle, "*");
        };
      }

      function installMessageChannelImplementation() {
        var channel = new MessageChannel();

        channel.port1.onmessage = function (event) {
          var handle = event.data;
          runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
          channel.port2.postMessage(handle);
        };
      }

      function installReadyStateChangeImplementation() {
        var html = doc.documentElement;

        registerImmediate = function registerImmediate(handle) {
          // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
          // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
          var script = doc.createElement("script");

          script.onreadystatechange = function () {
            runIfPresent(handle);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
          };

          html.appendChild(script);
        };
      }

      function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
          setTimeout(runIfPresent, 0, handle);
        };
      } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


      var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
      attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

      if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
      } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
      } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
      } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
      } else {
        // For older browsers
        installSetTimeoutImplementation();
      }

      attachTo.setImmediate = setImmediate;
      attachTo.clearImmediate = clearImmediate;
    })(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
    /* WEBPACK VAR INJECTION */

  }).call(exports, __webpack_require__(6), __webpack_require__(20));
  /***/
},
/* 22 */

/***/
function (module, exports, __webpack_require__) {
  /* WEBPACK VAR INJECTION */
  (function (global) {
    var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
    var apply = Function.prototype.apply; // DOM APIs, for completeness

    exports.setTimeout = function () {
      return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
    };

    exports.setInterval = function () {
      return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
    };

    exports.clearTimeout = exports.clearInterval = function (timeout) {
      if (timeout) {
        timeout.close();
      }
    };

    function Timeout(id, clearFn) {
      this._id = id;
      this._clearFn = clearFn;
    }

    Timeout.prototype.unref = Timeout.prototype.ref = function () {};

    Timeout.prototype.close = function () {
      this._clearFn.call(scope, this._id);
    }; // Does not start the time, just sets up the members needed.


    exports.enroll = function (item, msecs) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = msecs;
    };

    exports.unenroll = function (item) {
      clearTimeout(item._idleTimeoutId);
      item._idleTimeout = -1;
    };

    exports._unrefActive = exports.active = function (item) {
      clearTimeout(item._idleTimeoutId);
      var msecs = item._idleTimeout;

      if (msecs >= 0) {
        item._idleTimeoutId = setTimeout(function onTimeout() {
          if (item._onTimeout) item._onTimeout();
        }, msecs);
      }
    }; // setimmediate attaches itself to the global object


    __webpack_require__(21); // On some exotic environments, it's not clear which object `setimmediate` was
    // able to install onto.  Search each possibility in the same order as the
    // `setimmediate` library.


    exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
    exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(6));
  /***/
},
/* 23 */

/***/
function (module, exports, __webpack_require__) {
  module.exports = __webpack_require__(0);
  /***/
}]
/******/
);
},{"process":"../node_modules/process/browser.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63877" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/components/vendor.js"], null)
//# sourceMappingURL=/vendor.85d41c34.map