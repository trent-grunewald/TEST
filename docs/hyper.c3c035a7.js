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
})({"js/components/hyper.js":[function(require,module,exports) {
webpackJsonp([0], [,
/* 0 */

/* 1 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var companyInfo = {
    title: 'Over-Seasoned Steakhouse',
    phone: '(206)-643-0185',
    location: 'Granger, ',
    state: 'Texas',
    directions: '901 Co Rd 336, In the basement, ',
    zip: 'TX 76530',
    email: 'seasoned@overseasoned.com'
  };
  var specialMenu = [{
    image: 'card1',
    title: 'Grilled NY Strip',
    description: 'A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato.',
    price: '$32'
  }, {
    image: 'card2',
    title: 'Charbroiled T-Bone',
    description: 'An over-charred T-Bone with dry leaves from a nearby tree sprinkled on top.',
    price: '$52'
  }, {
    image: 'card3',
    title: 'Steamed Ribeye',
    description: 'A delicious 16oz Ribeye, dowsed in seasonsings, you will need water.',
    price: '$72'
  }, {
    image: 'card4',
    title: 'Porterhouse',
    description: 'A juicy 14oz Porterhouse, by far one of our most popular steaks available.',
    price: '$47'
  }, {
    image: 'card5',
    title: 'Top Sirloin',
    description: 'A delicious 24oz Top Sirloin, this thing is juicy! Comes as is, no special orders.',
    price: '$92'
  }];
  var quotes = [{
    quote: 'I Love Cooking A Big Steak\, For Myself and For My Cat.',
    author: '- Tommy Tammisimo -',
    authorInfo: 'The lonely head chef ',
    authorInfo2: '- Over-Seasoned Steakhouse '
  }, {
    quote: 'Could these steaks BE anymore seasoned!?',
    author: '- Chandler Bing -',
    authorInfo: 'Overactor ',
    authorInfo2: '- Can\'t smile'
  }, {
    quote: 'I don\'t eat any form of meat\,\ so this place is terrible!',
    author: '- Shilo -',
    authorInfo: 'Vegan ',
    authorInfo2: '- Our Lady Health '
  }, {
    quote: 'Being vegetarian is a big missed steak',
    author: '- Random meat fan -',
    authorInfo: 'Dude, Bro',
    authorInfo2: '- Best if you don\'t talk to him '
  }, {
    quote: 'If you\'re not supposed to eat cows, why are they made of food?',
    author: '- Homer Simpson -',
    authorInfo: 'Dad',
    authorInfo2: '- Springfield '
  }, {
    quote: 'My family\'s always been in meat.',
    author: '- Drayton Sawyer-',
    authorInfo: 'Chili master',
    authorInfo2: '- Resturaunt Owner'
  }];
  var reviews = [{
    title: '"Way too many spices, I threw up!"',
    review: 'There was so much damn pepper on my steak that it was actually spicy! My fiance and I didn\'t finish our meals and the amount of "side" you get with your meal is laughable... We were still hungry after, so we went to McDonalds. Terrible honeymoon dinner.',
    author: 'Jack Torrance -',
    author2: 'Overlook Hotel employee'
  }, {
    title: '"A real treat in the form of a steak house"',
    review: 'To say I know the secret of the steak would be ruin half of my enjoyment in coming here... I enjoy watching the fellow guests enjoy their new found delicacy, these steaks are truly one of a kind and you won\'t find them anywhere else.',
    author: 'Hannibal Lecter -',
    author2: 'Enjoy!'
  }, {
    title: '"One Groovy place, with terrible steaks"',
    review: 'I gotta tell you, This place serves some of the best drinks I have ever had... But, the steak tastes like cigarette spit.',
    author: 'Ash Williams - Demon slayer',
    author2: 'S-Mart'
  }]; // let mathVar = 0;
  // function test(){
  //    mathVar = (Math.floor(Math.random() * 6) + 0 ) 
  //   return mathVar
  // };
  // let test2 = setInterval(function(){
  //   console.log(test())
  // },1000);

  var globalState = exports.globalState = {
    count: 0,
    companyInfo: companyInfo,
    specialMenu: specialMenu,
    quotes: quotes,
    reviews: reviews,
    setReview: {
      currentReview: 0
    },
    setQuote: {
      currentQuote: Math.floor(Math.random() * 6)
    }
  };
  /***/
},
/* 2 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Contact;

  var _hyperapp = __webpack_require__(0);

  function Contact(_ref) {
    var state = _ref.state,
        actions = _ref.actions;
    return (0, _hyperapp.h)("section", {
      "class": "contact",
      id: "contact"
    }, (0, _hyperapp.h)("div", {
      "class": "container contact-container"
    }, (0, _hyperapp.h)("h5", {
      "class": "contact-head"
    }, "CONTACT US"), (0, _hyperapp.h)("h1", {
      "class": "contact-title"
    }, "COME ENJOY OUR MEAT!"), (0, _hyperapp.h)("div", {
      "class": "container contact-box"
    }, (0, _hyperapp.h)("div", {
      "class": "col-md-6"
    }, (0, _hyperapp.h)("h5", {
      "class": "contact-location"
    }, "Granger, ", (0, _hyperapp.h)("span", null, "Texas")), (0, _hyperapp.h)("h5", {
      "class": "contact-address"
    }, "901 Co Rd 336, In the basement,", (0, _hyperapp.h)("br", null), " Granger, TX 76530"), (0, _hyperapp.h)("h5", {
      "class": "contact-email"
    }, "Email: ", (0, _hyperapp.h)("span", null, "seasoned@overseasoned.com")), (0, _hyperapp.h)("h1", {
      "class": "contact-underline"
    }, "       ")), (0, _hyperapp.h)("div", {
      "class": "col-md-6"
    }, (0, _hyperapp.h)("h5", {
      "class": "contact-call"
    }, "Call for reservations:"), (0, _hyperapp.h)("h1", {
      "class": "contact-number"
    }, "(206)-643-0185"), (0, _hyperapp.h)("h5", {
      "class": "contact-hours-title"
    }, "Weekday Hours:"), (0, _hyperapp.h)("h5", {
      "class": "contact-street"
    }, "from 4pm-9pm", (0, _hyperapp.h)("br", null), "Call for reservations"), (0, _hyperapp.h)("h5", {
      "class": "contact-hours-title"
    }, "Weekend Hours:"), (0, _hyperapp.h)("h5", {
      "class": "contact-street"
    }, "from 3pm-10pm", (0, _hyperapp.h)("br", null), "Call for reservations"))), (0, _hyperapp.h)("div", {
      id: "map"
    }, setTimeout(mapBox, 1))));

    function mapBox() {
      if (document.querySelector('#map').children.length > 0) return; // LEAFLET MAP

      var mymap = L.map('map').setView([30.6928582, -97.4577975], 7);
      var marker = L.marker([30.6928582, -97.4577975]).addTo(mymap);
      var marker2 = L.marker([30.6602051, -98.4371652]).addTo(mymap);
      var marker3 = L.marker([30.4062185, -97.5596615]).addTo(mymap);
      var marker4 = L.marker([30.8822347, -97.589399]).addTo(mymap);
      marker.bindPopup("<b>Just park out front,</b><br>we will come get you.").openPopup();
      marker2.bindPopup("<b>Come enjoy family dinner,</b><br>with us!").openPopup();
      marker3.bindPopup("<b>Come on in,</b><br>meet our family.").openPopup();
      marker4.bindPopup("<b>Try our Award winning,</b><br>chili, family recipe.").openPopup();
      var circle = L.circle([30.6928582, -97.4577975], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10
      }).addTo(mymap);
      var circle2 = L.circle([30.6602051, -98.4371652], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10
      }).addTo(mymap);
      var circle3 = L.circle([30.4062185, -97.5596615], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10
      }).addTo(mymap);
      var circle4 = L.circle([30.8822347, -97.589399], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 10
      }).addTo(mymap);
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Our locations',
        maxZoom: 20,
        id: 'mapbox.streets',
        mapId: 'map',
        token: 'pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g',
        accessToken: 'pk.eyJ1IjoidHJlbnRnIiwiYSI6ImNqbWZlZ291OTA4MWgzdXFwMWZhcjRxcjYifQ.JX8sZBfAm_hx2lkliZ1F5g'
      }).addTo(mymap);
    }
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 3 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ourStory;

  var _hyperapp = __webpack_require__(0);

  function ourStory(_ref) {
    var state = _ref.state,
        actions = _ref.actions; // const test = document.querySelector('#reservations').classList.remove('hidden');
    // const reservation = document.getElementById('reservations')
    // reservation.style.display = 'unset'
    //  }

    return (0, _hyperapp.h)("section", {
      "class": "ourStory",
      id: "ourStory"
    }, (0, _hyperapp.h)("div", {
      "class": "container"
    }, (0, _hyperapp.h)("div", {
      "class": "row"
    }, (0, _hyperapp.h)("div", {
      "class": "col-md-6 story-body"
    }, (0, _hyperapp.h)("h5", {
      "class": "story-head"
    }, "OUR STORY"), (0, _hyperapp.h)("h2", {
      "class": "storyTitle"
    }, "Cooking Is The Art Of The Seasoning"), (0, _hyperapp.h)("p", {
      "class": "story"
    }, "Each steak is seared to perfection, finished with a perfect amount of butter, freshly chopped parsley, pepper, garlic, garlic salt, garlic butter, onion powder, onion salt, pepper salt, chili powder, and 1/4 cup of our secret seasoning all served sizzling on a 500-degree plate."), (0, _hyperapp.h)("p", {
      "class": "story-quote"
    }, (0, _hyperapp.h)("strong", null, "'Chop-Top' Sawyer"), " ", (0, _hyperapp.h)("span", {
      "class": "quote2"
    }, "- Master Seasoner at Over-Seasoned")), (0, _hyperapp.h)("a", {
      "class": "story-button reservationRequest",
      href: "#reservations"
    }, "Reservation")), (0, _hyperapp.h)("div", {
      "class": "col-md-6"
    }, (0, _hyperapp.h)("img", {
      src: "http://www.justlookaround.nl/wordpress/wp-content/uploads/2016/06/Food-photography-Spareribs-Cookers-Just-Look-Around.jpg",
      "class": "story-img"
    })))));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 4 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Promotions;

  var _hyperapp = __webpack_require__(0);

  function Promotions(_ref) {
    var state = _ref.state,
        actions = _ref.actions;
    return (0, _hyperapp.h)("section", {
      "class": "promotions",
      id: "promotions"
    }, (0, _hyperapp.h)("div", {
      "class": "container promotion-container"
    }, (0, _hyperapp.h)("h5", {
      "class": "promotions-head"
    }, "JOIN US"), (0, _hyperapp.h)("h1", {
      "class": "promotions-title"
    }, "NEWS & PROMOTIONS"), (0, _hyperapp.h)("div", {
      "class": "container grid-container"
    }, (0, _hyperapp.h)("div", {
      id: "grid-item1"
    }), (0, _hyperapp.h)("div", {
      id: "grid-item2"
    }, (0, _hyperapp.h)("h5", {
      "class": "grid-item-title"
    }, "Learn how to chop a steak!"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-seperator"
    }, "-------"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-desc"
    }, "Camp Crystal Lake, Cunningham, New Jersey"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-desc"
    }, "10:00AM - 11:30PM"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-desc"
    }, "Friday, June 13, 1979")), (0, _hyperapp.h)("div", {
      id: "grid-item3"
    }), (0, _hyperapp.h)("div", {
      id: "grid-item4"
    }, (0, _hyperapp.h)("h5", {
      "class": "grid-item-title"
    }, "Over searing is a myth!"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-seperator"
    }, "-------"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-desc"
    }, "1428 Elm Street, Springwood, Ohio"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-desc"
    }, "10:00PM - 7:00AM"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-desc"
    }, "Friday, November 9, 1984")), (0, _hyperapp.h)("div", {
      id: "grid-item5"
    }), (0, _hyperapp.h)("div", {
      id: "grid-item6"
    }, (0, _hyperapp.h)("h5", {
      "class": "grid-item-title"
    }, "Steak carving classes!"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-seperator"
    }, "-------"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-desc"
    }, "24 N 6th ave, Haddonfield, Illinois"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-desc"
    }, "8:00PM - 5:30AM"), (0, _hyperapp.h)("h5", {
      "class": "grid-item-desc"
    }, "Tuesday, October 31, 1978")))));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 5 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Reservation;

  var _hyperapp = __webpack_require__(0);

  var _timers = __webpack_require__(22);

  function Reservation(_ref) {
    var state = _ref.state,
        actions = _ref.actions;
    setTimeout(function reserve() {
      var reserveEmail = document.getElementById('reserve-email');
      var reservationSubmit = document.getElementById('reservation-submit');
      var emailWarning = document.getElementById('reserve-warning');
      var reservationModal = document.getElementById('reservations'); //on modal submit

      reservationSubmit.onclick = function (_) {
        //checks that the user input anything
        if (reserveEmail.value === "") {
          //
          emailWarning.style.color = 'red'; //if not, alerts with red text to enter valid email

          emailWarning.innerHTML = "Please enter a valid email address";
        } else {
          //if they input something, removes the modal
          reservationModal.classList.replace('show', 'hidden');
          emailWarning.innerHTML = "";
        }
      }; //modal load delay

    }, 3000);
    return (0, _hyperapp.h)('section', {
      id: 'reservations',
      'class': 'hidden'
    }, (0, _hyperapp.h)('div', {
      'class': 'reservation-overlay'
    }), (0, _hyperapp.h)('div', {
      'class': 'container reservation-container'
    }, (0, _hyperapp.h)('div', {
      'class': 'reservation-body'
    }, (0, _hyperapp.h)('div', {
      'class': 'reservation-logo'
    }), (0, _hyperapp.h)('h1', {
      'class': 'reservation-title'
    }, 'All booked up'), (0, _hyperapp.h)('h5', {
      'class': 'reservation-description'
    }, 'Please try again tomorrow.'), (0, _hyperapp.h)('form', {
      id: 'email-form'
    }, (0, _hyperapp.h)('h5', {
      'class': 'email-validation'
    }), (0, _hyperapp.h)('input', {
      type: 'text',
      'class': 'name',
      placeholder: 'Name',
      disabled: true
    }), (0, _hyperapp.h)('input', {
      type: 'text',
      'class': 'last',
      placeholder: 'Last',
      disabled: true
    }), (0, _hyperapp.h)('input', {
      type: 'number',
      'class': 'telephone',
      placeholder: 'Phone',
      disabled: true
    }), (0, _hyperapp.h)('input', {
      type: 'text',
      id: 'reserve-email',
      action: 'mailto:',
      placeholder: 'Email Address'
    }), (0, _hyperapp.h)('input', {
      type: 'submit',
      id: 'reservation-submit'
    }, 'Submit'), (0, _hyperapp.h)('h5', {
      id: 'reserve-warning'
    })), (0, _hyperapp.h)('a', {
      id: 'close-reservation'
    }, (0, _hyperapp.h)('i', {
      'class': 'fas fa-times'
    })))));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},,
/* 6 */

/* 7 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var nextReview = function nextReview(state, actions) {
    return {
      setReview: {
        currentReview: state.globalState.setReview.currentReview++
      }
    };
  };

  var previousReview = function previousReview(state, actions) {
    return {
      setReview: {
        currentReview: state.globalState.setReview.currentReview--
      }
    };
  };

  var actions = exports.actions = {
    nextReview: nextReview,
    previousReview: previousReview
  };
  /***/
},
/* 8 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = App;

  var _hyperapp = __webpack_require__(0);

  var _modal = __webpack_require__(12);

  var _modal2 = _interopRequireDefault(_modal);

  var _reservations = __webpack_require__(5);

  var _reservations2 = _interopRequireDefault(_reservations);

  var _menu = __webpack_require__(11);

  var _menu2 = _interopRequireDefault(_menu);

  var _header = __webpack_require__(10);

  var _header2 = _interopRequireDefault(_header);

  var _topimg = __webpack_require__(16);

  var _topimg2 = _interopRequireDefault(_topimg);

  var _ourstory = __webpack_require__(3);

  var _ourstory2 = _interopRequireDefault(_ourstory);

  var _specialmenu = __webpack_require__(15);

  var _specialmenu2 = _interopRequireDefault(_specialmenu);

  var _quote = __webpack_require__(13);

  var _quote2 = _interopRequireDefault(_quote);

  var _reviews = __webpack_require__(14);

  var _reviews2 = _interopRequireDefault(_reviews);

  var _promotions = __webpack_require__(4);

  var _promotions2 = _interopRequireDefault(_promotions);

  var _contact = __webpack_require__(2);

  var _contact2 = _interopRequireDefault(_contact);

  var _footer = __webpack_require__(9);

  var _footer2 = _interopRequireDefault(_footer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function App(_ref) {
    var state = _ref.state,
        actions = _ref.actions;
    return (0, _hyperapp.h)('div', {
      'class': 'app'
    }, (0, _hyperapp.h)(_modal2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_reservations2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_menu2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_header2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_topimg2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_ourstory2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_specialmenu2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_quote2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_reviews2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_promotions2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_contact2.default, {
      state: state,
      actions: actions
    }), (0, _hyperapp.h)(_footer2.default, {
      state: state,
      actions: actions
    }));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 9 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Footer;

  var _hyperapp = __webpack_require__(0);

  function Footer(_ref) {
    var state = _ref.state,
        actions = _ref.actions;
    return (0, _hyperapp.h)("section", {
      "class": "footer"
    }, (0, _hyperapp.h)("div", {
      "class": "container"
    }, (0, _hyperapp.h)("a", {
      href: "#header",
      "class": "footer-logo"
    }), (0, _hyperapp.h)("a", {
      href: "#menu",
      "class": "footer-item openMenu"
    }, "Menu"), (0, _hyperapp.h)("a", {
      href: "#contact",
      "class": "footer-item"
    }, "Locations"), (0, _hyperapp.h)("a", {
      href: "#reservations",
      "class": "footer-item reservationRequest"
    }, "Reservations ", (0, _hyperapp.h)("i", {
      "class": "fa fa-angle-right"
    })), (0, _hyperapp.h)("div", {
      "class": "footer-logo-social"
    }, (0, _hyperapp.h)("a", {
      "class": "twitter"
    }, (0, _hyperapp.h)("i", {
      "class": "fab fa-twitter"
    })), (0, _hyperapp.h)("a", {
      "class": "facebook"
    }, (0, _hyperapp.h)("i", {
      "class": "fab fa-facebook-f"
    })), (0, _hyperapp.h)("a", {
      "class": "google+"
    }, (0, _hyperapp.h)("i", {
      "class": "fab fa-google-plus-g"
    })), (0, _hyperapp.h)("a", {
      "class": "instagram"
    }, (0, _hyperapp.h)("i", {
      "class": "fab fa-instagram"
    }))), (0, _hyperapp.h)("div", {
      "class": "copyright"
    }, "Trent Grunewald 10/8/2018 ", (0, _hyperapp.h)("i", {
      "class": "far fa-copyright"
    })), (0, _hyperapp.h)("span", {
      "class": "not"
    }, "Not actually copyrighted")));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 10 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Header;

  var _hyperapp = __webpack_require__(0);

  var _reservations = __webpack_require__(5);

  var _reservations2 = _interopRequireDefault(_reservations);

  var _ourstory = __webpack_require__(3);

  var _ourstory2 = _interopRequireDefault(_ourstory);

  var _promotions = __webpack_require__(4);

  var _promotions2 = _interopRequireDefault(_promotions);

  var _contact = __webpack_require__(2);

  var _contact2 = _interopRequireDefault(_contact);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function Header(_ref) {
    var state = _ref.state,
        actions = _ref.actions; // NAV COLLAPSE

    function navToggle() {
      var navs = document.querySelectorAll('.nav-item');
      var collapsed = document.querySelectorAll('.nav-collapse'); //Targets the nav-item css class and replaces it with nav-collapse;

      navs.forEach(function (nav) {
        return nav.classList.replace('nav-item', 'nav-collapse');
      }); //targets the nav-collapse css class and replaces it with nav-item;

      collapsed.forEach(function (nav) {
        return nav.classList.replace('nav-collapse', 'nav-item');
      });
    }

    window.onload = function (_) {
      var butt = document.querySelector('.logo'); //checks the window size on load  

      if (window.innerWidth <= 1000) {
        //adds the "Click" event listener to collapse menu if the page is less to or equal to 1000 px wide and initiates the navToggle function.
        butt.addEventListener('click', navToggle);
      } //if the window is not 1000 px wide, it adds an event listener to the window resize.


      window.addEventListener("resize", function () {
        var butt = document.querySelector('.logo'); //checks the window width on resize.

        if (window.innerWidth <= 1000) {
          //adds "click" event listener to collapse menu at 1000px
          butt.addEventListener('click', navToggle);
        } else {
          butt.removeEventListener('click', navToggle);
        }
      }); //RESERVATION MODAL

      var requestRes = document.getElementsByClassName('reservationRequest');
      var reservationBody = document.getElementById('reservations');
      var closeRes = document.getElementById('close-reservation'); //For Loop targeting all Reservation buttons

      for (var i = 0; i < requestRes.length; i++) {
        var z = requestRes[i]; //Adds Click Listener to each button

        z.addEventListener('click', function () {
          //Toggles the display class on click
          reservationBody.classList.replace('hidden', 'show');
        });
      } //Hides the modal when the user clicks the X icon


      closeRes.onclick = function () {
        reservationBody.classList.replace('show', 'hidden');
      }; //MENU MODAL


      var openMenu = document.getElementsByClassName('openMenu');
      var menuBody = document.getElementById('menu');
      var closeMenu = document.getElementById('close-menu');

      for (var t = 0; t < openMenu.length; t++) {
        var x = openMenu[t];
        x.addEventListener('click', function () {
          menuBody.classList.replace('hidden', 'show');
        });
      }

      closeMenu.addEventListener('click', function () {
        menuBody.classList.replace('show', 'hidden');
      });
    };

    return (0, _hyperapp.h)('header', {
      id: 'header'
    }, (0, _hyperapp.h)('div', {
      'class': 'container'
    }, (0, _hyperapp.h)('nav', {
      'class': 'nav'
    }, (0, _hyperapp.h)('div', {
      'class': 'logo'
    }), (0, _hyperapp.h)('a', {
      href: '#menu',
      'class': 'openMenu nav-item nav-box'
    }, 'Menu'), (0, _hyperapp.h)('a', {
      href: '#ourStory',
      'class': 'nav-item nav-box'
    }, 'Our Story'), (0, _hyperapp.h)('a', {
      href: '#promotions',
      'class': 'nav-item nav-box'
    }, 'Private Events'), (0, _hyperapp.h)('a', {
      href: '#contact',
      'class': 'nav-item nav-box'
    }, 'Locations'), (0, _hyperapp.h)('a', {
      href: '#reservations',
      'class': 'nav-item nav-box reservations reservationRequest'
    }, 'Reservations ', (0, _hyperapp.h)('i', {
      'class': 'fa fa-angle-right'
    })))));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 11 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Menu;

  var _hyperapp = __webpack_require__(0);

  function Menu(_ref) {
    var state = _ref.state,
        actions = _ref.actions;
    return (0, _hyperapp.h)("section", {
      id: "menu",
      "class": "menu hidden"
    }, (0, _hyperapp.h)("div", {
      "class": "reservation-overlay"
    }), (0, _hyperapp.h)("div", {
      "class": "container menu-body"
    }, (0, _hyperapp.h)("h1", {
      "class": "restName"
    }, "Over-Seasoned"), (0, _hyperapp.h)("a", null, (0, _hyperapp.h)("i", {
      id: "close-menu",
      "class": "fas fa-times"
    })), (0, _hyperapp.h)("h2", {
      "class": "menu_logo"
    }), (0, _hyperapp.h)("div", {
      "class": "menu_section menu_section_15386190772"
    }, (0, _hyperapp.h)("h3", null, "Appetizers"), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386190982"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Skins"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$12.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "Sun dried, hand cut, skins."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386191426"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Deep Fried Pee Pods"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$8.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "Deep fried in our hand crafted batter, delicious!"), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386191997"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Finger-Eaters"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$16.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "These delicious small meat bites are a fan favorite, tastes just like chicken!"), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386196829"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Armadillo"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$22"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "Shredded, smoked armadillo mixed with garlic and Gouda cheese, delicious!"), (0, _hyperapp.h)("hr", null))), (0, _hyperapp.h)("div", {
      "class": "menu_section menu_section_15386193034"
    }, (0, _hyperapp.h)("h3", null, "Steaks"), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386193111"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Grilled NY Strip"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$32"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386193127"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Charbroiled T-Bone"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$52"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "An over-charred T-Bone with dry leaves from a nearby tree sprinkled on top."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386193137"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Steamed Ribeye"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$72"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "A delicious 16oz Rib eye, dowsed in seasonings, you will need water."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386193146"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Porterhouse"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$47"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "A juicy 14oz Porterhouse, by far one of our most popular steaks available."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386195256"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Top Sirloin"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$92"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "A delicious 24oz Top Sirloin, this thing is juicy! Comes as is, no special orders."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386195279"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Filet Mignon"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$47"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "10oz A well seasoned and month long aged cut that might just bring you back tomorrow."), (0, _hyperapp.h)("hr", null))), (0, _hyperapp.h)("div", {
      "class": "menu_section menu_section_15386195899"
    }, (0, _hyperapp.h)("h3", null, "Sides"), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386195966"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Green Beans"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$7.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "Lightly salted, seared to perfection"), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386197901"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Cheese wheel"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$432.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "A full size, white cheddar cheese wheel."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386198239"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Drayton's Chili"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$14.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "A two time award-winning chili, watch out for peppercorns!"), (0, _hyperapp.h)("hr", null))), (0, _hyperapp.h)("div", {
      "class": "menu_section menu_section_15386200957"
    }, (0, _hyperapp.h)("h3", null, "Drinks"), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386201010"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Red Wine"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$14.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "Our own house brand."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386201238"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Black Eye Whiskey"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$7.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "Distilled in the Black Eyed hills of Louisiana."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386201921"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "The Red Raven"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$12.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "Our own mixture containing Gin, Code Red and another secret ingredient."), (0, _hyperapp.h)("hr", null)), (0, _hyperapp.h)("div", {
      "class": "menu_item menu_item_15386202849"
    }, (0, _hyperapp.h)("h4", {
      "class": "item--name"
    }, "Coffee"), (0, _hyperapp.h)("span", {
      "class": "price"
    }, "$2.99"), (0, _hyperapp.h)("p", {
      "class": "description"
    }, "Just brewed a fresh pot!"), (0, _hyperapp.h)("hr", null))), (0, _hyperapp.h)("footer", {
      "class": "warning"
    }, "*Consuming raw or undercooked meats, poultry, seafood, shellfish, eggs or unpasteurized milk may increase your risk of foodborne illness.")));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 12 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Modal;

  var _hyperapp = __webpack_require__(0);

  function Modal(_ref) {
    var state = _ref.state,
        actions = _ref.actions; // modal popup

    setTimeout(function modalFunc() {
      var popup = document.getElementById('modal');
      var userInputV = document.getElementById('email');
      var emailValidation = document.querySelector('.email-validation');
      var closeIcon = document.getElementById('close-modal');
      var modalSubmit = document.getElementById('modal-submit'); //Targets the close icon in the bottom right of the modal.

      closeIcon.onclick = function (_) {
        //on icon click, closes the modal (Display: none - scss)
        popup.style.display = 'none';
      }; //replaces the modal scss display from none to show


      popup.classList.replace('hidden', 'show'); //on modal submit

      modalSubmit.onclick = function (_) {
        //checks that the user input anything
        if (userInputV.value === "") {
          //if not, alerts with red text to enter valid email
          emailValidation.style.color = 'red';
          emailValidation.innerHTML = "Please enter a valid email address";
        } else {
          //if they input something, removes the modal
          popup.style.display = 'none';
        }
      }; //modal load delay

    }, 3000);
    return (0, _hyperapp.h)('section', {
      id: 'modal',
      'class': 'hidden'
    }, (0, _hyperapp.h)('div', {
      'class': 'modal-overlay'
    }), (0, _hyperapp.h)('div', {
      'class': 'container modal-container'
    }, (0, _hyperapp.h)('div', {
      'class': 'modal-body'
    }, (0, _hyperapp.h)('div', {
      'class': 'modal-img'
    }), (0, _hyperapp.h)('h1', {
      'class': 'modal-title'
    }, 'Receive 25% off!'), (0, _hyperapp.h)('h5', {
      'class': 'modal-description'
    }, 'Receive free coupons for our delicious resturaunt daily, when you surrender your email address below!'), (0, _hyperapp.h)('form', {
      id: 'email-form'
    }, (0, _hyperapp.h)('h5', {
      'class': 'email-validation'
    }), (0, _hyperapp.h)('input', {
      type: 'text',
      'class': 'address-input',
      id: 'email',
      action: 'mailto:',
      placeholder: 'Email Address'
    }), (0, _hyperapp.h)('input', {
      type: 'submit',
      id: 'modal-submit'
    }, 'Submit')), (0, _hyperapp.h)('a', null, (0, _hyperapp.h)('i', {
      id: 'close-modal',
      'class': 'fas fa-times'
    })))));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 13 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Quote;

  var _hyperapp = __webpack_require__(0);

  function Quote(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    var currentQuote = function currentQuote() {
      return (0, _hyperapp.h)("div", null, (0, _hyperapp.h)("h1", {
        "class": "quote"
      }, state.globalState.quotes[state.globalState.setQuote.currentQuote].quote), (0, _hyperapp.h)("h5", {
        "class": "quote-author"
      }, state.globalState.quotes[state.globalState.setQuote.currentQuote].author), (0, _hyperapp.h)("h5", {
        "class": "quote-name"
      }, state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo, " ", (0, _hyperapp.h)("span", {
        "class": "quote2"
      }, state.globalState.quotes[state.globalState.setQuote.currentQuote].authorInfo2)));
    };

    return (0, _hyperapp.h)("section", {
      "class": "quote-body"
    }, (0, _hyperapp.h)("div", {
      "class": "container"
    }, (0, _hyperapp.h)("q", {
      lang: "en"
    }), currentQuote()));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 14 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Reviews;

  var _hyperapp = __webpack_require__(0);

  function Reviews(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    var currentReview = function currentReview(_) {
      return (0, _hyperapp.h)("div", {
        "class": "review-body"
      }, (0, _hyperapp.h)("h5", {
        "class": "review-quote"
      }, state.globalState.reviews[state.globalState.setReview.currentReview].title), (0, _hyperapp.h)("p", {
        "class": "review-quote-body"
      }, state.globalState.reviews[state.globalState.setReview.currentReview].review), (0, _hyperapp.h)("h5", {
        "class": "reviewer"
      }, state.globalState.reviews[state.globalState.setReview.currentReview].author, " ", (0, _hyperapp.h)("span", {
        "class": "quote2"
      }, state.globalState.reviews[state.globalState.setReview.currentReview].author2)));
    };

    var leftArrow = function leftArrow() {
      if (state.globalState.setReview.currentReview !== 0) {
        actions.previousReview();
      }
    };

    var rightArrow = function rightArrow() {
      if (state.globalState.setReview.currentReview !== state.globalState.reviews.length - 1) {
        actions.nextReview();
      }
    };

    return (0, _hyperapp.h)("section", {
      "class": "review"
    }, (0, _hyperapp.h)("div", {
      "class": "container"
    }, (0, _hyperapp.h)("div", {
      "class": "col-md-6 chef"
    }), (0, _hyperapp.h)("div", {
      "class": "col-md-6 review-body"
    }, (0, _hyperapp.h)("h5", {
      "class": "review-head"
    }, "REVIEW"), (0, _hyperapp.h)("h1", {
      "class": "review-title"
    }, "What Everybody Say's About Us"), currentReview(), (0, _hyperapp.h)("div", {
      "class": "arrows"
    }, (0, _hyperapp.h)("i", {
      onclick: leftArrow,
      "class": "fa fa-arrow-left " + (state.globalState.setReview.currentReview > 0 ? 'ready' : ''),
      "aria-hidden": "true"
    }), (0, _hyperapp.h)("i", {
      onclick: rightArrow,
      "class": "fa fa-arrow-right " + (state.globalState.setReview.currentReview === state.globalState.reviews.length - 1 ? '' : 'ready'),
      "aria-hidden": "true"
    })))));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 15 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = SpecialMenu;

  var _hyperapp = __webpack_require__(0);

  var _globalState = __webpack_require__(1);

  function SpecialMenu(_ref) {
    var state = _ref.state,
        actions = _ref.actions; //Cards flip on click

    var clickFlip = function clickFlip() {
      var card = document.querySelectorAll('.card'); //For each card

      for (var i = 0; i < card.length; i++) {
        //toggle the class "Flipped" on the selected card
        this.classList.toggle('flipped');
      }

      ;
    };

    return (0, _hyperapp.h)('section', {
      'class': 'specialMenu'
    }, (0, _hyperapp.h)('div', {
      'class': 'container'
    }, (0, _hyperapp.h)('div', {
      'class': 'row'
    }, (0, _hyperapp.h)('div', {
      'class': 'special-top'
    }, (0, _hyperapp.h)('h5', {
      'class': 'special-head'
    }, 'SPECIAL MENU'), (0, _hyperapp.h)('h1', {
      'class': 'special-title'
    }, 'Delicious Flavour Of Spice')), (0, _hyperapp.h)('div', {
      'class': 'container card-grid'
    }, (0, _hyperapp.h)('div', {
      'class': 'card',
      onclick: clickFlip
    }, (0, _hyperapp.h)('div', {
      'class': 'side'
    }, (0, _hyperapp.h)('img', {
      id: 'card1'
    }), (0, _hyperapp.h)('div', {
      'class': 'light-circle'
    }), (0, _hyperapp.h)('div', {
      'class': 'special-price'
    }, '$32')), (0, _hyperapp.h)('div', {
      'class': 'container card-container'
    }, (0, _hyperapp.h)('p', {
      'class': 'special-menu-title'
    }, 'Grilled NY Strip'), (0, _hyperapp.h)('p', {
      'class': 'special-menu-description'
    }, 'A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato.')), (0, _hyperapp.h)('div', {
      'class': 'side back'
    }, (0, _hyperapp.h)('div', {
      'class': 'side'
    }, (0, _hyperapp.h)('img', {
      id: 'card2'
    }), (0, _hyperapp.h)('div', {
      'class': 'light-circle'
    }), (0, _hyperapp.h)('div', {
      'class': 'special-price-back'
    }, '$52')), (0, _hyperapp.h)('div', {
      'class': 'container card-container'
    }, (0, _hyperapp.h)('p', {
      'class': 'special-menu-title-back'
    }, 'Charbroiled T-Bone'), (0, _hyperapp.h)('p', {
      'class': 'special-menu-description-back'
    }, 'An over-charred T-Bone with dry leaves from a nearby tree sprinkled on top.')))), (0, _hyperapp.h)('div', {
      'class': 'card',
      onclick: clickFlip
    }, (0, _hyperapp.h)('div', {
      'class': 'side'
    }, (0, _hyperapp.h)('img', {
      id: 'card3'
    }), (0, _hyperapp.h)('div', {
      'class': 'light-circle'
    }), (0, _hyperapp.h)('div', {
      'class': 'special-price'
    }, '$72')), (0, _hyperapp.h)('div', {
      'class': 'container card-container'
    }, (0, _hyperapp.h)('p', {
      'class': 'special-menu-title'
    }, 'Steamed Ribeye'), (0, _hyperapp.h)('p', {
      'class': 'special-menu-description'
    }, 'A delicious 16oz Rib eye, dowsed in seasonings, you will need water.')), (0, _hyperapp.h)('div', {
      'class': 'side back'
    }, (0, _hyperapp.h)('div', {
      'class': 'side'
    }, (0, _hyperapp.h)('img', {
      id: 'card4'
    }), (0, _hyperapp.h)('div', {
      'class': 'light-circle'
    }), (0, _hyperapp.h)('div', {
      'class': 'special-price'
    }, '$47')), (0, _hyperapp.h)('div', {
      'class': 'container card-container'
    }, (0, _hyperapp.h)('p', {
      'class': 'special-menu-title'
    }, 'Porterhouse'), (0, _hyperapp.h)('p', {
      'class': 'special-menu-description'
    }, 'A juicy 14oz Porterhouse, by far one of our most popular steaks available.')))), (0, _hyperapp.h)('div', {
      'class': 'card',
      onclick: clickFlip
    }, (0, _hyperapp.h)('div', {
      'class': 'side'
    }, (0, _hyperapp.h)('img', {
      id: 'card5'
    }), (0, _hyperapp.h)('div', {
      'class': 'light-circle'
    }), (0, _hyperapp.h)('div', {
      'class': 'special-price'
    }, '$92')), (0, _hyperapp.h)('div', {
      'class': 'container card-container'
    }, (0, _hyperapp.h)('p', {
      'class': 'special-menu-title'
    }, 'Top Sirloin'), (0, _hyperapp.h)('p', {
      'class': 'special-menu-description'
    }, 'A delicious 24oz Top Sirloin, this thing is juicy! Comes as is, no special orders.')), (0, _hyperapp.h)('div', {
      'class': 'side back'
    }, (0, _hyperapp.h)('div', {
      'class': 'side'
    }, (0, _hyperapp.h)('img', {
      id: 'card6'
    }), (0, _hyperapp.h)('div', {
      'class': 'light-circle'
    }), (0, _hyperapp.h)('div', {
      'class': 'special-price'
    }, '$47')), (0, _hyperapp.h)('div', {
      'class': 'container card-container'
    }, (0, _hyperapp.h)('p', {
      'class': 'special-menu-title'
    }, 'Filet Mignon'), (0, _hyperapp.h)('p', {
      'class': 'special-menu-description'
    }, '10oz A well seasoned and month long aged cut that might just bring you back tomorrow')))), (0, _hyperapp.h)('div', {
      'class': 'menuCard'
    }, (0, _hyperapp.h)('a', {
      'class': 'view-menu openMenu menuCard-text',
      href: '#menu'
    }, 'VIEW', (0, _hyperapp.h)('br', null), 'OUR', (0, _hyperapp.h)('br', null), 'FULL', (0, _hyperapp.h)('br', null), ' MENU')))), (0, _hyperapp.h)('a', {
      'class': 'view-menu openMenu menuCard-small',
      href: '#menu'
    }, 'VIEW FULL MENU')));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 16 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = TopImg;

  var _hyperapp = __webpack_require__(0);

  function TopImg(_ref) {
    var state = _ref.state,
        actions = _ref.actions;
    return (0, _hyperapp.h)("section", {
      "class": "topImg",
      id: "topImg"
    }, (0, _hyperapp.h)("div", {
      "class": "img-cover"
    }), (0, _hyperapp.h)("div", {
      "class": "container"
    }, (0, _hyperapp.h)("div", {
      "class": "intro"
    }, (0, _hyperapp.h)("h5", {
      "class": "welcome"
    }, "WELCOME TO"), (0, _hyperapp.h)("h1", {
      "class": "title"
    }, "Over-Seasoned"), (0, _hyperapp.h)("h2", {
      "class": "below"
    }, "Steak House")), (0, _hyperapp.h)("div", {
      "class": "contact-info"
    }, (0, _hyperapp.h)("p", {
      "class": "small-text"
    }, "Call for seating"), (0, _hyperapp.h)("h4", {
      "class": "phone"
    }, "(206)-643-0185"), (0, _hyperapp.h)("p", {
      "class": "hours"
    }, (0, _hyperapp.h)("strong", null, "Operating hours:"), " 4pm-9pm, ", (0, _hyperapp.h)("strong", null, "Weekends:"), " 3pm - 10pm")), (0, _hyperapp.h)("div", {
      "class": "bowl"
    })));
  } // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>

  /***/

},
/* 17 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  var _hyperapp = __webpack_require__(0);

  var _actions = __webpack_require__(7);

  var _globalState = __webpack_require__(1);

  var _App = __webpack_require__(8);

  var _App2 = _interopRequireDefault(_App);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _hyperapp.app)({
    state: {
      globalState: _globalState.globalState
    },
    view: function view(state, actions) {
      return (0, _hyperapp.h)(_App2.default, {
        state: state,
        actions: actions
      });
    },
    root: document.getElementById('app'),
    actions: _actions.actions,
    events: {
      action: function action(state, actions, _ref) {
        // console.group("Action Info")
        // console.log("Name:", name)
        // console.log("Data:", data)
        // console.groupEnd()
        var name = _ref.name,
            data = _ref.data;
      }
    }
  });
  /***/
}], [17]);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/components/hyper.js"], null)
//# sourceMappingURL=/hyper.c3c035a7.map