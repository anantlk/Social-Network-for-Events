(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-detail/event-detail.component */ "./src/app/event-detail/event-detail.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-view/main-view.component */ "./src/app/main-view/main-view.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chapters_view_chapters_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chapters-view/chapters-view.component */ "./src/app/chapters-view/chapters-view.component.ts");
/* harmony import */ var _chapter_events_chapter_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chapter-events/chapter-events.component */ "./src/app/chapter-events/chapter-events.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _chapterdetails_chapterdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chapterdetails/chapterdetails.component */ "./src/app/chapterdetails/chapterdetails.component.ts");
/* harmony import */ var _main_view_chapter_main_view_chapter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../main-view-chapter/main-view-chapter.component */ "./src/app/main-view-chapter/main-view-chapter.component.ts");
/* harmony import */ var _chapter_profile_chapter_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chapter-profile/chapter-profile.component */ "./src/app/chapter-profile/chapter-profile.component.ts");
/* harmony import */ var _chapters_view_ch_chapters_view_ch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../chapters-view-ch/chapters-view-ch.component */ "./src/app/chapters-view-ch/chapters-view-ch.component.ts");
/* harmony import */ var _chaptereventsch_chaptereventsch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../chaptereventsch/chaptereventsch.component */ "./src/app/chaptereventsch/chaptereventsch.component.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../create-event/create-event.component */ "./src/app/create-event/create-event.component.ts");
/* harmony import */ var _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../attendance/attendance.component */ "./src/app/attendance/attendance.component.ts");
/* harmony import */ var _chapter_attendance_chapter_attendance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../chapter-attendance/chapter-attendance.component */ "./src/app/chapter-attendance/chapter-attendance.component.ts");
/* harmony import */ var _view_attendance_view_attendance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../view-attendance/view-attendance.component */ "./src/app/view-attendance/view-attendance.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _google_auth_google_auth_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../google-auth/google-auth.component */ "./src/app/google-auth/google-auth.component.ts");


















var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user', component: _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__["MainViewComponent"], children: [
            { path: '', redirectTo: '/user/feed', pathMatch: 'full' },
            { path: 'profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
            { path: 'chapters', component: _chapters_view_chapters_view_component__WEBPACK_IMPORTED_MODULE_4__["ChaptersViewComponent"] },
            { path: 'events', component: _chapter_events_chapter_events_component__WEBPACK_IMPORTED_MODULE_5__["ChapterEventsComponent"] },
            { path: 'feed', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"] },
            { path: 'event/:id', component: _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_0__["EventDetailComponent"] },
            { path: 'chapter/:id', component: _chapterdetails_chapterdetails_component__WEBPACK_IMPORTED_MODULE_7__["ChapterdetailsComponent"] },
        ] },
    { path: 'chapter', component: _main_view_chapter_main_view_chapter_component__WEBPACK_IMPORTED_MODULE_8__["MainViewChapterComponent"], children: [
            { path: '', redirectTo: '/chapter/feed', pathMatch: 'full' },
            { path: 'feed', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"] },
            { path: 'profile', component: _chapter_profile_chapter_profile_component__WEBPACK_IMPORTED_MODULE_9__["ChapterProfileComponent"] },
            { path: 'event/:id', component: _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_0__["EventDetailComponent"] },
            { path: 'chapters/:id', component: _chapterdetails_chapterdetails_component__WEBPACK_IMPORTED_MODULE_7__["ChapterdetailsComponent"] },
            { path: 'chapters', component: _chapters_view_ch_chapters_view_ch_component__WEBPACK_IMPORTED_MODULE_10__["ChaptersViewChComponent"] },
            { path: 'events', component: _chaptereventsch_chaptereventsch_component__WEBPACK_IMPORTED_MODULE_11__["ChaptereventschComponent"] },
            { path: 'newEvent', component: _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_12__["CreateEventComponent"] },
            { path: 'attendance/:id', component: _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_13__["AttendanceComponent"] },
            { path: 'attendance', component: _chapter_attendance_chapter_attendance_component__WEBPACK_IMPORTED_MODULE_14__["ChapterAttendanceComponent"] },
            { path: 'viewAttendance/:id', component: _view_attendance_view_attendance_component__WEBPACK_IMPORTED_MODULE_15__["ViewAttendanceComponent"] }
        ] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"] },
    { path: 'google', component: _google_auth_google_auth_component__WEBPACK_IMPORTED_MODULE_17__["GoogleAuthComponent"] }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-main-view></app-main-view> -->\r\n<!-- <app-login></app-login> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'iwp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
/* harmony import */ var _shared_restConfig__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/restConfig */ "./src/app/shared/restConfig.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _shared_social__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/social */ "./src/app/shared/social.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./event-detail/event-detail.component */ "./src/app/event-detail/event-detail.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./main-view/main-view.component */ "./src/app/main-view/main-view.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chapters_view_chapters_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./chapters-view/chapters-view.component */ "./src/app/chapters-view/chapters-view.component.ts");
/* harmony import */ var _chapter_events_chapter_events_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./chapter-events/chapter-events.component */ "./src/app/chapter-events/chapter-events.component.ts");
/* harmony import */ var _chapterdetails_chapterdetails_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./chapterdetails/chapterdetails.component */ "./src/app/chapterdetails/chapterdetails.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/feed.service */ "./src/app/services/feed.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _main_view_chapter_main_view_chapter_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./main-view-chapter/main-view-chapter.component */ "./src/app/main-view-chapter/main-view-chapter.component.ts");
/* harmony import */ var _chapter_profile_chapter_profile_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./chapter-profile/chapter-profile.component */ "./src/app/chapter-profile/chapter-profile.component.ts");
/* harmony import */ var _chapters_view_ch_chapters_view_ch_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./chapters-view-ch/chapters-view-ch.component */ "./src/app/chapters-view-ch/chapters-view-ch.component.ts");
/* harmony import */ var _chaptereventsch_chaptereventsch_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./chaptereventsch/chaptereventsch.component */ "./src/app/chaptereventsch/chaptereventsch.component.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./create-event/create-event.component */ "./src/app/create-event/create-event.component.ts");
/* harmony import */ var _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./attendance/attendance.component */ "./src/app/attendance/attendance.component.ts");
/* harmony import */ var _chapter_attendance_chapter_attendance_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./chapter-attendance/chapter-attendance.component */ "./src/app/chapter-attendance/chapter-attendance.component.ts");
/* harmony import */ var _view_attendance_view_attendance_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./view-attendance/view-attendance.component */ "./src/app/view-attendance/view-attendance.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _google_auth_google_auth_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./google-auth/google-auth.component */ "./src/app/google-auth/google-auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































// Services














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_8__["FeedComponent"],
                _event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_33__["EventDetailComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_34__["UserProfileComponent"],
                _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_35__["MainViewComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"],
                _chapters_view_chapters_view_component__WEBPACK_IMPORTED_MODULE_37__["ChaptersViewComponent"],
                _chapter_events_chapter_events_component__WEBPACK_IMPORTED_MODULE_38__["ChapterEventsComponent"],
                _chapterdetails_chapterdetails_component__WEBPACK_IMPORTED_MODULE_39__["ChapterdetailsComponent"],
                _main_view_chapter_main_view_chapter_component__WEBPACK_IMPORTED_MODULE_46__["MainViewChapterComponent"],
                _chapter_profile_chapter_profile_component__WEBPACK_IMPORTED_MODULE_47__["ChapterProfileComponent"],
                _chapters_view_ch_chapters_view_ch_component__WEBPACK_IMPORTED_MODULE_48__["ChaptersViewChComponent"],
                _chaptereventsch_chaptereventsch_component__WEBPACK_IMPORTED_MODULE_49__["ChaptereventschComponent"],
                _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_50__["CreateEventComponent"],
                _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_51__["AttendanceComponent"],
                _chapter_attendance_chapter_attendance_component__WEBPACK_IMPORTED_MODULE_52__["ChapterAttendanceComponent"],
                _view_attendance_view_attendance_component__WEBPACK_IMPORTED_MODULE_53__["ViewAttendanceComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_54__["RegisterComponent"],
                _google_auth_google_auth_component__WEBPACK_IMPORTED_MODULE_55__["GoogleAuthComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_40__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_30__["SocialLoginModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"],
                ngx_restangular__WEBPACK_IMPORTED_MODULE_28__["RestangularModule"].forRoot(_shared_restConfig__WEBPACK_IMPORTED_MODULE_29__["RestangularConfigFactory"])
            ],
            providers: [_services_feed_service__WEBPACK_IMPORTED_MODULE_42__["FeedService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_43__["ProfileService"], _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_44__["EventdetailService"], _services_feedback_service__WEBPACK_IMPORTED_MODULE_45__["FeedbackService"], { provide: 'BaseURL', useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_27__["baseURL"] }, {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_30__["AuthServiceConfig"],
                    useFactory: _shared_social__WEBPACK_IMPORTED_MODULE_31__["getAuthServiceConfigs"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attendance/attendance.component.css":
/*!*****************************************************!*\
  !*** ./src/app/attendance/attendance.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n}\r\n.attendance{\r\n    width: 90%;\r\n    display: flex;\r\n    margin: auto;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center\r\n}\r\n.example-card {\r\n    max-width: 90%;\r\n    margin: auto\r\n  }\r\n.example-header-image {\r\n    background-image: url('chapter.png');\r\n    background-size: cover;\r\n  }\r\n.form{\r\n      width: 100%;\r\n  }\r\n.row{\r\n      display: flex;\r\n      justify-content: space-between;\r\n      padding: 0px 20px;\r\n      margin: 10px 0px;\r\n      border-bottom: 1px solid rgba(0, 0, 0, 0.15);\r\n  }\r\n.lol{\r\n      display: block;\r\n      width: 60%;\r\n      margin: 10px auto\r\n  }"

/***/ }),

/***/ "./src/app/attendance/attendance.component.html":
/*!******************************************************!*\
  !*** ./src/app/attendance/attendance.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"attendance\" *ngIf=\"created\">\n    <p>{{ attendanceForm.value | json }}</p>\n</div> -->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!created\" color=\"accent\"></mat-progress-bar>\n<mat-card class=\"example-card\" *ngIf=\"created\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{event.eventName}}</mat-card-title>\n      <mat-card-subtitle>Attendance</mat-card-subtitle>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <mat-card-content>\n        <form class=\"form\" novalidate [formGroup]=\"attendanceForm\" #aform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <p class=\"row\" *ngFor=\"let participant of participants\">\n              <span>{{participant.name}}</span>\n              <mat-slide-toggle formControlName=\"{{participant.userId}}\"></mat-slide-toggle>\n            <p>\n              <br>\n              <button style=\"margin:auto;display:block\" type=\"submit\" mat-stroked-button color=\"accent\">Submit</button>\n            </p>\n        </form>\n        <mat-progress-bar class=\"lol\" *ngIf=\"successUpload\" mode=\"buffer\"></mat-progress-bar>\n    </mat-card-content>\n    <!-- <mat-card-actions>\n      \n    </mat-card-actions> -->\n  </mat-card>"

/***/ }),

/***/ "./src/app/attendance/attendance.component.ts":
/*!****************************************************!*\
  !*** ./src/app/attendance/attendance.component.ts ***!
  \****************************************************/
/*! exports provided: AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/attendance.service */ "./src/app/services/attendance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(fb, route, attendanceservice, restangular, eventdetailservice, snackBar) {
        this.fb = fb;
        this.route = route;
        this.attendanceservice = attendanceservice;
        this.restangular = restangular;
        this.eventdetailservice = eventdetailservice;
        this.snackBar = snackBar;
        this.created = false;
        this.successUpload = false;
    }
    AttendanceComponent.prototype.createForm = function (x) {
        this.attendanceForm = this.fb.group(x);
    };
    AttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        console.log(id);
        this.eventdetailservice.getEventbyId(id).subscribe(function (data) {
            _this.event = data.event;
            console.log(data.event);
            _this.attendanceservice.getUsersByevent(id).subscribe(function (data) {
                _this.participants = data.users;
                console.log(_this.participants);
                _this.formdata(_this.participants);
                _this.created = true;
            });
        });
    };
    AttendanceComponent.prototype.formdata = function (data) {
        var x = {};
        var y;
        var num;
        for (num = 0; num < data.length; num++) {
            y = data[num].userId;
            x[y] = data[num].attended;
            // console.log(y)
        }
        console.log(x);
        this.createForm(x);
    };
    AttendanceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.finalAttendance = this.attendanceForm.value;
        console.log(this.finalAttendance);
        this.successUpload = true;
        var num;
        var key;
        var attended_flag;
        var data = this.participants;
        for (num = 0; num < this.participants.length; num++) {
            key = data[num].userId;
            // console.log(this.finalAttendance[key]);
            attended_flag = this.finalAttendance[key];
            data[num].attended = attended_flag;
        }
        console.log(data);
        var id = this.route.snapshot.params['id'];
        this.restangular.all('api/organization/' + id + '/post-attendance').post(data).subscribe(function (data) {
            console.log(data);
            _this.openSnackBar("Uploaded Successfully", ':)');
            _this.successUpload = false;
        });
    };
    AttendanceComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aform'),
        __metadata("design:type", Object)
    ], AttendanceComponent.prototype, "aFormDirective", void 0);
    AttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! ./attendance.component.html */ "./src/app/attendance/attendance.component.html"),
            styles: [__webpack_require__(/*! ./attendance.component.css */ "./src/app/attendance/attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_attendance_service__WEBPACK_IMPORTED_MODULE_2__["AttendanceService"], ngx_restangular__WEBPACK_IMPORTED_MODULE_4__["Restangular"], _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_5__["EventdetailService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "./src/app/chapter-attendance/chapter-attendance.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/chapter-attendance/chapter-attendance.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-panel-description{\r\n    justify-content: flex-end\r\n}"

/***/ }),

/***/ "./src/app/chapter-attendance/chapter-attendance.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/chapter-attendance/chapter-attendance.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!pastEvents && ! upcomingEvents\" color=\"accent\"></mat-progress-bar>\n<mat-tab-group color=\"primary\" backgroundColor=\"primary\" *ngIf=\"pastEvents && upcomingEvents\">\n  <mat-tab label=\"Attendance History\">\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let event of pastEvents\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{event.eventName}}\n          </mat-panel-title>\n          <mat-panel-description>\n            Conducted By {{event.organiser}}\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <p>Event Description</p>\n        <p>{{event.description}}</p>\n        <button mat-stroked-button color=\"accent\" [routerLink]=\"['/chapter/viewAttendance/', event._id]\">View Attendance</button>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-tab>\n  <mat-tab label=\"Attendance Update\">\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let event of upcomingEvents\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{event.eventName}}\n          </mat-panel-title>\n          <mat-panel-description>\n            Conducted By {{event.organiser}}\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <p>Event Description</p>\n        <p>{{event.description}}</p>\n        <button mat-stroked-button color=\"accent\" [routerLink]=\"['/chapter/attendance/', event._id]\">Mark Attendance</button>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-tab>\n</mat-tab-group>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/chapter-attendance/chapter-attendance.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/chapter-attendance/chapter-attendance.component.ts ***!
  \********************************************************************/
/*! exports provided: ChapterAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterAttendanceComponent", function() { return ChapterAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
/* harmony import */ var _services_chapters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chapters.service */ "./src/app/services/chapters.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChapterAttendanceComponent = /** @class */ (function () {
    function ChapterAttendanceComponent(eventdetailservice, chapterservice) {
        this.eventdetailservice = eventdetailservice;
        this.chapterservice = chapterservice;
    }
    ChapterAttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chapterservice.getChapterProfile().subscribe(function (data) {
            _this.profile = data.organization;
            console.log(_this.profile);
            var id = _this.profile.userId._id;
            console.log(id);
            _this.eventdetailservice.getEventsByChapter(id).subscribe(function (data) {
                _this.upcomingEvents = data.upcomingEvents;
                _this.pastEvents = data.conductedEvents;
                console.log(_this.upcomingEvents);
                console.log(_this.pastEvents);
            });
        });
    };
    ChapterAttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapter-attendance',
            template: __webpack_require__(/*! ./chapter-attendance.component.html */ "./src/app/chapter-attendance/chapter-attendance.component.html"),
            styles: [__webpack_require__(/*! ./chapter-attendance.component.css */ "./src/app/chapter-attendance/chapter-attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__["EventdetailService"], _services_chapters_service__WEBPACK_IMPORTED_MODULE_2__["ChaptersService"]])
    ], ChapterAttendanceComponent);
    return ChapterAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/chapter-events/chapter-events.component.css":
/*!*************************************************************!*\
  !*** ./src/app/chapter-events/chapter-events.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-panel-description{\r\n    justify-content: flex-end\r\n}"

/***/ }),

/***/ "./src/app/chapter-events/chapter-events.component.html":
/*!**************************************************************!*\
  !*** ./src/app/chapter-events/chapter-events.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!events\" color=\"accent\"></mat-progress-bar>\r\n<mat-accordion>\r\n  <mat-expansion-panel *ngFor=\"let event of events\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        {{event.eventName}}\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Conducted By {{event.organiser}}\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <p>Event Description</p>\r\n    <p>{{event.description}}</p>\r\n    <button mat-raised-button color=\"primary\" [routerLink]=\"['/user/event', event._id]\">View Details</button>\r\n  </mat-expansion-panel>\r\n</mat-accordion>"

/***/ }),

/***/ "./src/app/chapter-events/chapter-events.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chapter-events/chapter-events.component.ts ***!
  \************************************************************/
/*! exports provided: ChapterEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterEventsComponent", function() { return ChapterEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChapterEventsComponent = /** @class */ (function () {
    function ChapterEventsComponent(eventdetailservice) {
        this.eventdetailservice = eventdetailservice;
    }
    ChapterEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventdetailservice.getEvents().subscribe(function (events) { _this.events = events.events; console.log(_this.events); });
    };
    ChapterEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapter-events',
            template: __webpack_require__(/*! ./chapter-events.component.html */ "./src/app/chapter-events/chapter-events.component.html"),
            styles: [__webpack_require__(/*! ./chapter-events.component.css */ "./src/app/chapter-events/chapter-events.component.css")]
        }),
        __metadata("design:paramtypes", [_services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__["EventdetailService"]])
    ], ChapterEventsComponent);
    return ChapterEventsComponent;
}());



/***/ }),

/***/ "./src/app/chapter-profile/chapter-profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/chapter-profile/chapter-profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    padding: 0px;\r\n    margin: 0px\r\n}\r\n\r\n.profile-top{\r\n    background: url('form_bg.png');\r\n    width: 100%;\r\n    height: 200px;\r\n    background-position: center;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.profile-header{\r\n    display: flex;\r\n    justify-content: center;\r\n    position: relative;\r\n    top: -77px\r\n}\r\n\r\n.profile-head{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-left: 50px\r\n}\r\n\r\n.profile-img{\r\n    height: 154px;\r\n    width: 154px;\r\n    margin-right: 50px;\r\n    border-radius: 50%;\r\n    border:1px solid #484848\r\n}\r\n\r\n.profile-img img{\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n\r\n.flex{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 20px 0px;\r\n}\r\n\r\n.card{\r\n    width: 30%;\r\n}\r\n\r\n.history{\r\n    padding: 10px;\r\n    width: 70%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.leaders{\r\n    padding:10px;\r\n}\r\n\r\nmat-panel-description{\r\n    justify-content: flex-end\r\n}\r\n\r\n.location{\r\n    padding: 30px 0px;\r\n    min-height: 250px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around\r\n}\r\n\r\n.loc_text,.map{\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center\r\n}\r\n\r\n.pad{\r\n    padding-left: 40px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.half-width{\r\n    width: 40%;\r\n    padding: 0px 10px;\r\n}\r\n\r\n.full-width{\r\n    width: 80%;\r\n}\r\n\r\n.feedback{\r\n    padding: 0px 20px;\r\n}\r\n\r\n.lol{\r\n    padding: 0px 20px;\r\n}\r\n\r\nmat-card-title{\r\n    font-size: 15px;\r\n    font-weight: bold\r\n}\r\n\r\n.head{\r\n    font-size: 17px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.contact-btn>*{\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.motto{\r\n\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    .pad{\r\n        padding: 5px;\r\n    }\r\n    .location{\r\n        flex-direction: column;\r\n    }\r\n    .loc_text,.map{\r\n        width: 100%;\r\n    }\r\n    .flex{\r\n        flex-direction: column;\r\n    }\r\n    .card{\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/chapter-profile/chapter-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/chapter-profile/chapter-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!profile\" color=\"accent\"></mat-progress-bar>\n<mat-tab-group color=\"primary\" *ngIf=\"profile\">\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">local_library</mat-icon>\n      About\n    </ng-template>\n    <div class=\"profile-top\">\n    </div>\n      <div class=\"profile-header\">\n        <div class=\"profile-img\"><img src=\"../../assets/images/alberto.png\" height=\"150px\" width=\"150px\"></div>\n        <div class=\"profile-head\"><h4 style=\"color:white\">{{profile.userId.name}}</h4><h4>{{profile.domain}}</h4></div>\n      </div>\n    <div>\n      <div>\n      <hr>\n      <div class=\"flex\">\n          <div class=\"history\">\n            <h2>Our History</h2>\n            <p>{{profile.userId.description}}</p>\n          </div>\n        <div class=\"card\">\n          <mat-card>\n            <mat-card-header>\n              <mat-card-title>\n              <h3>Facts At a Glance</h3>\n              </mat-card-title>\n            </mat-card-header>\n            <mat-card-content class=\"lol\">\n              <dl>\n                <dt>Started</dt>\n                <dd>3 Feb. 2013</dd>\n                <dt>Major Stake Holder</dt>\n                <dd>HK Fine Foods Inc.</dd>\n                <dt>Last Year's Turnover</dt>\n                <dd>$1,250,375</dd>\n                <dt>Employees</dt>\n                <dd>40</dd>\n              </dl>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n      \n    <div>\n      <mat-card class=\"motto\">\n        \n          <h4>You better cut the pizza in four pieces because\n              I'm not hungry enough to eat six.</h4>\n          <footer>-- Yogi Berra,\n            <cite>The Wit and Wisdom of Yogi Berra,\n              P. Pepe, Diversion Books, 2014</cite>\n          </footer>\n        \n      </mat-card>\n    </div>\n    <div class=\"leaders\">\n        <h3>Board Members</h3>\n        <mat-list>\n            <mat-list-item >\n                    <img matListAvatar src=\"../../assets/images/alberto.png\" alt=\"fgsd\">\n                    <h3 matLine>Lorem Ipsum</h3>\n                    <p matLine>\n                      <span>Lorem Dolor MAtis ipsum Lorem Dolor MAtis ipsum Lorem Dolor MAtis ipsum</span> \n                    </p>\n                    <p matLine>\n                        <span> Lorem Dolor MAtis ipsum </span>\n                    </p>\n            </mat-list-item>\n            <mat-list-item >\n                <img matListAvatar src=\"../../assets/images/alberto.png\" alt=\"fgsd\">\n                <h3 matLine>Lorem Ipsum</h3>\n                <p matLine>\n                  <span>Lorem Dolor MAtis ipsum Lorem Dolor MAtis ipsum Lorem Dolor MAtis ipsum</span> \n                </p>\n                <p matLine>\n                    <span> Lorem Dolor MAtis ipsum </span>\n                </p>\n            </mat-list-item>\n        </mat-list>  \n      </div>\n    </div>\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">school</mat-icon>\n      Events\n    </ng-template>\n    <p class=\"head\" *ngIf=\"upcomingEvent\">\n      Upcoming Events\n      <mat-icon  matBadge=\"{{upcomingEvent.length}}\" matBadgeColor=\"accent\">school</mat-icon>\n    </p>\n    <mat-accordion>\n        <mat-expansion-panel *ngFor=\"let event of upcomingEvent\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              {{event.eventName}}\n            </mat-panel-title>\n            <mat-panel-description>\n              Conducted By {{event.organiser}}\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <p>Event Description</p>\n          <p>{{event.description}}</p>\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/chapter/event', event._id]\">View Details</button>\n        </mat-expansion-panel>\n      </mat-accordion>\n      <p class=\"head\" *ngIf=\"pastEvent\">\n        Past Events\n        <mat-icon matBadge=\"{{pastEvent.length}}\" matBadgeColor=\"accent\">school</mat-icon>\n      </p>\n      <mat-accordion>\n        <mat-expansion-panel *ngFor=\"let event of pastEvent\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              {{event.eventName}}\n            </mat-panel-title>\n            <mat-panel-description>\n              Conducted By {{event.organiser}}\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <p>Event Description</p>\n          <p>{{event.description}}</p>\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/chapter/event', event._id]\">View Details</button>\n        </mat-expansion-panel>\n      </mat-accordion>\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">message</mat-icon>\n      Contact\n    </ng-template>\n\n    <div class=\"container\" fxLayout=\"column\"  fxLayoutGap=\"10px\">\n    <div>\n      <div class=\"location\">\n        <div class=\"loc_text pad\">\n          <h4>Our Address</h4>\n          <address>\n            <p>{{profile.userId.name}}</p>\n            <p>VIT University</p>\n            <p>Vellore</p><br>\n            <i class=\"fa fa-phone\"></i>: +{{profile.userId.phone}}<br>\n            <i class=\"fa fa-envelope\"></i>: \n            <a href=\"mailto:{{profile.userId.email}}\">{{profile.userId.email}}</a>\n          </address>\n          <p></p>\n          <div class=\"contact-btn\">\n            <a mat-stroked-button color=\"accent\" href=\"tel:+{{profile.userId.phone}}\"><i class=\"fa fa-phone\"></i> Call</a>\n            <a mat-stroked-button color=\"accent\" href=\"mailto:{{profile.userId.email}}\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n          </div>\n        </div>\n        <div class=\"map\"> \n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.936449711567!2d79.15989618518067!3d12.973884160513077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1538511589452\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <mat-card>\n      <mat-card-header>\n          <div mat-card-avatar><i class=\"material-icons\">\n              notification_important\n              </i></div>\n          <mat-card-title>Recieved Feedback</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n          <div class=\"feedback\" *ngFor=\"let feedback of feedbacks\">\n                <p>\n                  <span>{{feedback.firstname}} {{feedback.lastname}}</span>\n                </p>\n                <p>\n                  <span *ngIf=\"feedback.contactMethod == 'Tel'\"><i class=\"material-icons\">\n                      call\n                      </i>{{feedback.telnum}}\n                    </span>\n                    <span *ngIf=\"feedback.contactMethod == 'Email'\"><i class=\"material-icons\">\n                          mail_outline\n                          </i> {{feedback.email}}\n                  </span>\n                </p>\n                <p>\n                  <span>{{feedback.message}}</span>\n                </p>\n                <mat-divider></mat-divider>\n          </div>   \n      </mat-card-content>\n    </mat-card>\n\n\n\n\n  <!-- <mat-list>\n    <mat-list-item>\n\n      <mat-divider></mat-divider>\n    </mat-list-item>\n \n    <mat-list-item>Item 2</mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>Item 3</mat-list-item>\n  </mat-list>-->\n  </mat-tab> \n</mat-tab-group>\n<div *ngIf=\"profile\" style=\"display:flex;justify-content:center\">\n  <button mat-stroked-button color=\"accent\" (click)=\"goBack()\">BACK</button>\n</div>"

/***/ }),

/***/ "./src/app/chapter-profile/chapter-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/chapter-profile/chapter-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ChapterProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterProfileComponent", function() { return ChapterProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chapters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chapters.service */ "./src/app/services/chapters.service.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChapterProfileComponent = /** @class */ (function () {
    function ChapterProfileComponent(chapterservice, eventdetailservice, feedbackservice) {
        this.chapterservice = chapterservice;
        this.eventdetailservice = eventdetailservice;
        this.feedbackservice = feedbackservice;
    }
    ChapterProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chapterservice.getChapterProfile().subscribe(function (data) {
            _this.profile = data.organization;
            console.log(_this.profile);
            var id = _this.profile.userId._id;
            _this.feedbacks = _this.profile.feedback;
            console.log(id);
            _this.eventdetailservice.getEventsByChapter(id).subscribe(function (data) {
                _this.upcomingEvent = data.upcomingEvents;
                _this.upcomingEvent.length = data.upcomingEvents.length;
                _this.pastEvent = data.conductedEvents;
                _this.pastEvent.length = data.conductedEvents.length;
                console.log(_this.upcomingEvent);
                console.log(_this.pastEvent);
            });
            // this.feedbackservice.getFeedback().subscribe((data) => {
            //   console.log(data.feedbacks);
            //   this.feedbacks = data.feedbacks;
            //   console.log("hahha")
            // })
        });
    };
    ChapterProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapter-profile',
            template: __webpack_require__(/*! ./chapter-profile.component.html */ "./src/app/chapter-profile/chapter-profile.component.html"),
            styles: [__webpack_require__(/*! ./chapter-profile.component.css */ "./src/app/chapter-profile/chapter-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chapters_service__WEBPACK_IMPORTED_MODULE_1__["ChaptersService"], _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_3__["EventdetailService"], _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"]])
    ], ChapterProfileComponent);
    return ChapterProfileComponent;
}());



/***/ }),

/***/ "./src/app/chapterdetails/chapterdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/chapterdetails/chapterdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    padding: 0px;\r\n    margin: 0px\r\n}\r\n\r\n.profile-top{\r\n    background: url('form_bg.png');\r\n    width: 100%;\r\n    height: 200px;\r\n    background-position: center;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.profile-header{\r\n    display: flex;\r\n    justify-content: center;\r\n    position: relative;\r\n    top: -77px\r\n}\r\n\r\n.profile-head{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-left: 50px\r\n}\r\n\r\n.profile-img{\r\n    height: 154px;\r\n    width: 154px;\r\n    margin-right: 50px;\r\n    border-radius: 50%;\r\n    border:1px solid #484848\r\n}\r\n\r\n.profile-img img{\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n\r\n.flex{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 20px 0px;\r\n}\r\n\r\n.card{\r\n    width: 30%;\r\n}\r\n\r\n.history{\r\n    padding: 10px;\r\n    width: 70%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.leaders{\r\n    padding:10px;\r\n}\r\n\r\nmat-panel-description{\r\n    justify-content: flex-end\r\n}\r\n\r\n.location{\r\n    padding: 30px 0px;\r\n    min-height: 250px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around\r\n}\r\n\r\n.loc_text,.map{\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center\r\n}\r\n\r\n.pad{\r\n    padding-left: 40px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.half-width{\r\n    width: 40%;\r\n    padding: 0px 10px;\r\n}\r\n\r\n.full-width{\r\n    width: 80%;\r\n}\r\n\r\n.head{\r\n    font-size: 17px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.contact-btn>*{\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.motto{\r\n    padding: 10px;\r\n\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    .pad{\r\n        padding: 5px;\r\n    }\r\n    .location{\r\n        flex-direction: column;\r\n    }\r\n    .loc_text,.map{\r\n        width: 100%;\r\n    }\r\n    .flex{\r\n        flex-direction: column;\r\n    }\r\n    .card{\r\n        width: 100%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/chapterdetails/chapterdetails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/chapterdetails/chapterdetails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!chapter\" color=\"accent\"></mat-progress-bar>\r\n<mat-tab-group color=\"primary\" *ngIf=\"chapter\">\r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <mat-icon class=\"example-tab-icon\">local_library</mat-icon>\r\n        About\r\n      </ng-template>\r\n      <div class=\"profile-top\" >\r\n      </div>\r\n        <div class=\"profile-header\">\r\n          <div class=\"profile-img\"><img src=\"../../assets/images/alberto.png\" height=\"150px\" width=\"150px\"></div>\r\n          <div class=\"profile-head\"><h4 style=\"color:white\">{{chapter.userId.name}}</h4><h4>{{chapter.domain}}</h4></div>\r\n        </div>\r\n      <div>\r\n        <div>\r\n        <hr>\r\n        <div class=\"flex\">\r\n            <div class=\"history\">\r\n              <h2>Our History</h2>\r\n              <p>{{chapter.userId.description}}</p>\r\n            </div>\r\n          <div class=\"card\">\r\n            <mat-card>\r\n              <mat-card-header>\r\n                <mat-card-title>\r\n                <h3>Facts At a Glance</h3>\r\n                </mat-card-title>\r\n              </mat-card-header>\r\n              <mat-card-content style=\"padding: 10px\">\r\n                <dl>\r\n                  <dt>Started</dt>\r\n                  <dd>3 Feb. 2013</dd>\r\n                  <dt>Major Stake Holder</dt>\r\n                  <dd>HK Fine Foods Inc.</dd>\r\n                  <dt>Last Year's Turnover</dt>\r\n                  <dd>$1,250,375</dd>\r\n                  <dt>Employees</dt>\r\n                  <dd>40</dd>\r\n                </dl>\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        \r\n      <div>\r\n        <mat-card class=\"motto\">\r\n          <!-- <blockquote> -->\r\n            <h4>You better cut the pizza in four pieces because\r\n                I'm not hungry enough to eat six.</h4>\r\n            <footer>-- Yogi Berra,\r\n              <cite>The Wit and Wisdom of Yogi Berra,\r\n                P. Pepe, Diversion Books, 2014</cite>\r\n            </footer>\r\n          <!-- </blockquote> -->\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"leaders\">\r\n          <h3>Board Members</h3>\r\n          <mat-list>\r\n              <mat-list-item >\r\n                      <img matListAvatar src=\"../../assets/images/alberto.png\" alt=\"fgsd\">\r\n                      <h3 matLine>Lorem Ipsum</h3>\r\n                      <p matLine>\r\n                        <span>Lorem Dolor MAtis ipsum Lorem Dolor MAtis ipsum Lorem Dolor MAtis ipsum</span> \r\n                      </p>\r\n                      <p matLine>\r\n                          <span> Lorem Dolor MAtis ipsum </span>\r\n                      </p>\r\n              </mat-list-item>\r\n              <mat-list-item >\r\n                  <img matListAvatar src=\"../../assets/images/alberto.png\" alt=\"fgsd\">\r\n                  <h3 matLine>Lorem Ipsum</h3>\r\n                  <p matLine>\r\n                    <span>Lorem Dolor MAtis ipsum Lorem Dolor MAtis ipsum Lorem Dolor MAtis ipsum</span> \r\n                  </p>\r\n                  <p matLine>\r\n                      <span> Lorem Dolor MAtis ipsum </span>\r\n                  </p>\r\n              </mat-list-item>\r\n          </mat-list>  \r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n  \r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <mat-icon class=\"example-tab-icon\">school</mat-icon>\r\n        Events\r\n      </ng-template>\r\n      <p class=\"head\" *ngIf=\"upcomingEvents\">\r\n        Upcoming Events\r\n        <mat-icon  matBadge=\"{{upcomingEvents.length}}\" matBadgeColor=\"accent\">school</mat-icon>\r\n      </p>\r\n      <mat-accordion>\r\n        <mat-expansion-panel *ngFor=\"let event of upcomingEvents\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              {{event.eventName}}\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              Conducted By {{event.organiser}}\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <p>Event Description</p>\r\n          <p>{{event.description}}</p>\r\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/user/event', event._id]\" *ngIf=\"userbool\">Vie Details</button>\r\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/chapter/event', event._id]\" *ngIf=\"orgbool\">View Details</button>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n      <p class=\"head\" *ngIf=\"pastEvents\">\r\n        Past Events\r\n        <mat-icon matBadge=\"{{pastEvents.length}}\" matBadgeColor=\"accent\">school</mat-icon>\r\n      </p>\r\n      <mat-accordion>\r\n        <mat-expansion-panel *ngFor=\"let event of pastEvents\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              {{event.eventName}}\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              Conducted By {{event.organiser}}\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <p>Event Description</p>\r\n          <p>{{event.description}}</p>\r\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/user/event', event._id]\" *ngIf=\"userbool\">Vie Details</button>\r\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/chapter/event', event._id]\" *ngIf=\"orgbool\">View Details</button>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n\r\n    </mat-tab>\r\n  \r\n    <mat-tab>\r\n      <ng-template mat-tab-label>\r\n        <mat-icon class=\"example-tab-icon\">message</mat-icon>\r\n        Contact\r\n      </ng-template>\r\n  \r\n  <div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n  <div>\r\n    <div class=\"location\">\r\n      <div class=\"loc_text pad\">\r\n        <h4>Our Address</h4>\r\n        <address>\r\n          <p>{{chapter.userId.name}}</p>\r\n          <p>VIT University</p>\r\n          <p>Vellore</p><br>\r\n          <i class=\"fa fa-fax\"></i>: +{{chapter.userId.phone}}<br>\r\n          <i class=\"fa fa-envelope\"></i>: \r\n          <a href=\"{{chapter.userId.email}}}\">{{chapter.userId.email}}</a>\r\n        </address>\r\n        <p></p>\r\n        <div class=\"contact-btn\">\r\n          <a mat-stroked-button color=\"accent\" href=\"tel:+{{chapter.userId.phone}}\"><i class=\"fa fa-phone\"></i> Call</a>\r\n          <a mat-stroked-button color=\"accent\" href=\"mailto:chapter.userId.email\"><i class=\"fa fa-envelope-o\"></i> Email</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"map\"> \r\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.936449711567!2d79.15989618518067!3d12.973884160513077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1538511589452\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-size\">\r\n      <h3>Send us your Feedback</h3>\r\n      <p>{{ feedbackForm.value | json }} {{ feedbackForm.status | json }}</p>\r\n  \r\n      <form novalidate *ngIf='!y' [formGroup]=\"feedbackForm\" #fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <!-- <p>\r\n          <mat-form-field class=\"half-width\" >\r\n            <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" [errorStateMatcher]=\"matcher\"  required>\r\n            <mat-error *ngIf=\"formErrors.firstname\">{{formErrors.firstname}}</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"half-width\">\r\n            <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\r\n            <mat-error *ngIf=\"formErrors.lastname\">{{formErrors.lastname}}</mat-error>\r\n          </mat-form-field>\r\n        </p>\r\n        <p>\r\n          <mat-form-field class=\"half-width\">\r\n            <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" [errorStateMatcher]=\"matcher\" required>\r\n            <mat-error *ngIf=\"formErrors.telnum\">{{formErrors.telnum}}</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"half-width\">\r\n            <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email [errorStateMatcher]=\"matcher\" required>\r\n            <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\r\n          </mat-form-field>\r\n        </p> -->\r\n        <table class=\"form-size\">\r\n          <td>\r\n            <mat-slide-toggle (click)=\"contactUs()\">May we contact you?</mat-slide-toggle>\r\n          </td>\r\n          <td *ngIf=\"contact\">\r\n    \r\n            <mat-select  placeholder=\"How?\" formControlName=\"contactMethod\">\r\n              <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\r\n                {{ ctype }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </td>\r\n          </table>\r\n        <p>\r\n          <mat-form-field class=\"full-width\">\r\n            <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\r\n          </mat-form-field>\r\n        </p>\r\n        <button type=\"submit\" [disabled]=\"feedbackForm.invalid\" mat-button class=\"background-primary text-floral-white\">Submit</button>\r\n      </form>\r\n      <!-- <div *ngIf=\"!res&&y\">\r\n        <h3>Submitting Form</h3>\r\n        <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\r\n      </div>\r\n      <div *ngIf=\"res&&y\">\r\n        <h2>YOUR SUBMISSION</h2>\r\n        <p>Firstname:{{res.firstname}}</p>\r\n        <p>Lastname:{{res.lastname}}</p>\r\n        <p>Tel. Number:{{res.telnum}}</p>\r\n        <p>Email:{{res.email}}</p>\r\n        <p>Contact You?:{{res.agree}}</p>\r\n        <p>How?:{{res.contacttype}}</p>\r\n        <p>Feedback:{{res.message}}</p>\r\n      </div> -->\r\n    </div>\r\n    </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n  <div *ngIf=\"chapter\" style=\"display:flex;justify-content:center\">\r\n    <button mat-stroked-button color=\"accent\" (click)=\"goBack()\">BACK</button>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n  <!-- <mat-accordion>\r\n          <mat-expansion-panel *ngFor=\"let event of upcomingEvents\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                {{event.eventName}}\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Conducted By {{event.organiser}}\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <p>Event Description</p>\r\n            <p>{{event.description}}</p>\r\n            <button mat-raised-button color=\"primary\" [routerLink]=\"['/user/event', event._id]\" *ngIf=\"userbool\">Vie Details</button>\r\n            <button mat-raised-button color=\"primary\" [routerLink]=\"['/chapter/event', event._id]\" *ngIf=\"orgbool\">View Details</button>\r\n          </mat-expansion-panel>\r\n      </mat-accordion>\r\n      <h4>Past Events</h4>\r\n      <mat-accordion>\r\n        <mat-expansion-panel *ngFor=\"let event of pastEvents\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              {{event.eventName}}\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              Conducted By {{event.organiser}}\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <p>Event Description</p>\r\n          <p>{{event.description}}</p>\r\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/user/event', event._id]\" *ngIf=\"userbool\">Vie Details</button>\r\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/chapter/event', event._id]\" *ngIf=\"orgbool\">View Details</button>\r\n        </mat-expansion-panel>\r\n      </mat-accordion> -->"

/***/ }),

/***/ "./src/app/chapterdetails/chapterdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chapterdetails/chapterdetails.component.ts ***!
  \************************************************************/
/*! exports provided: MyErrorStateMatcher, ChapterdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterdetailsComponent", function() { return ChapterdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
/* harmony import */ var _services_chapters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chapters.service */ "./src/app/services/chapters.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _shared_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/contact */ "./src/app/shared/contact.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ChapterdetailsComponent = /** @class */ (function () {
    function ChapterdetailsComponent(eventdetailservice, route, fb, feedbackservice, location, chapterservice, restangular, snackBar) {
        this.eventdetailservice = eventdetailservice;
        this.route = route;
        this.fb = fb;
        this.feedbackservice = feedbackservice;
        this.location = location;
        this.chapterservice = chapterservice;
        this.restangular = restangular;
        this.snackBar = snackBar;
        this.contactType = _shared_contact__WEBPACK_IMPORTED_MODULE_6__["ContactType"];
        this.y = 0;
        this.show = 0;
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'message': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'lastname': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 2 characters long.',
                'maxlength': 'Last Name cannot be more than 25 characters long.'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'message': {
                'required': 'Message is required.'
            },
        };
        this.orgbool = false;
        this.userbool = false;
        this.contact = false;
        this.createForm();
    }
    ChapterdetailsComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            // firstname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
            // lastname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
            // telnum: ['', [Validators.required,Validators.pattern]],
            // email: ['', [Validators.required,Validators.email]],
            // agree: false,
            contactMethod: 'None',
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.feedbackForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ChapterdetailsComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    ChapterdetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.restangular.all('api/common/organization/' + id + '/feedback').post(this.feedback).subscribe(function (data) {
            console.log(data);
            _this.openSnackBar("Feedback Sent", ':)');
        });
        this.feedbackFormDirective.resetForm();
    };
    ChapterdetailsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    ChapterdetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ChapterdetailsComponent.prototype.contactUs = function () {
        if (this.contact == true) {
            this.contact = false;
            this.feedbackForm.patchValue({ contactMethod: 'None' });
        }
        else {
            this.contact = true;
        }
    };
    ChapterdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("lol");
        var id = this.route.snapshot.params['id'];
        this.chapterservice.getChapterById(id).subscribe(function (data) {
            _this.chapter = data.organization;
            console.log(_this.chapter);
            _this.restangular.one("api/all/role").get().subscribe(function (data) {
                console.log(data);
                if (data.role == 'organization') {
                    _this.orgbool = true;
                    console.log("haha");
                    console.log(_this.userbool);
                }
                else {
                    _this.userbool = true;
                }
            });
            _this.eventdetailservice.getEventsByChapter(id).subscribe(function (events) {
                console.log(events);
                _this.upcomingEvents = events.upcomingEvents;
                _this.upcomingEvents.length = _this.upcomingEvents.length;
                _this.pastEvents = events.conductedEvents;
                _this.pastEvents.length = _this.pastEvents.length;
                console.log(_this.upcomingEvents);
                console.log(_this.pastEvents);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fform'),
        __metadata("design:type", Object)
    ], ChapterdetailsComponent.prototype, "feedbackFormDirective", void 0);
    ChapterdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapterdetails',
            template: __webpack_require__(/*! ./chapterdetails.component.html */ "./src/app/chapterdetails/chapterdetails.component.html"),
            styles: [__webpack_require__(/*! ./chapterdetails.component.css */ "./src/app/chapterdetails/chapterdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__["EventdetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _services_chapters_service__WEBPACK_IMPORTED_MODULE_2__["ChaptersService"], ngx_restangular__WEBPACK_IMPORTED_MODULE_8__["Restangular"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], ChapterdetailsComponent);
    return ChapterdetailsComponent;
}());



/***/ }),

/***/ "./src/app/chaptereventsch/chaptereventsch.component.css":
/*!***************************************************************!*\
  !*** ./src/app/chaptereventsch/chaptereventsch.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-panel-description{\r\n    justify-content: flex-end\r\n}"

/***/ }),

/***/ "./src/app/chaptereventsch/chaptereventsch.component.html":
/*!****************************************************************!*\
  !*** ./src/app/chaptereventsch/chaptereventsch.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!events\" color=\"accent\"></mat-progress-bar>\n<mat-accordion>\n    <mat-expansion-panel *ngFor=\"let event of events\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{event.eventName}}\n        </mat-panel-title>\n        <mat-panel-description>\n          Conducted By {{event.organiser}}\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <p>Event Description</p>\n      <p>{{event.description}}</p>\n      <button mat-raised-button color=\"primary\" [routerLink]=\"['/chapter/event', event._id]\">View Details</button>\n    </mat-expansion-panel>\n  </mat-accordion>"

/***/ }),

/***/ "./src/app/chaptereventsch/chaptereventsch.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/chaptereventsch/chaptereventsch.component.ts ***!
  \**************************************************************/
/*! exports provided: ChaptereventschComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChaptereventschComponent", function() { return ChaptereventschComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChaptereventschComponent = /** @class */ (function () {
    function ChaptereventschComponent(eventdetailservice, restangular) {
        this.eventdetailservice = eventdetailservice;
        this.restangular = restangular;
    }
    ChaptereventschComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventdetailservice.getEvents().subscribe(function (events) { _this.events = events.events; console.log(_this.events); });
    };
    ChaptereventschComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chaptereventsch',
            template: __webpack_require__(/*! ./chaptereventsch.component.html */ "./src/app/chaptereventsch/chaptereventsch.component.html"),
            styles: [__webpack_require__(/*! ./chaptereventsch.component.css */ "./src/app/chaptereventsch/chaptereventsch.component.css")]
        }),
        __metadata("design:paramtypes", [_services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__["EventdetailService"], ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], ChaptereventschComponent);
    return ChaptereventschComponent;
}());



/***/ }),

/***/ "./src/app/chapters-view-ch/chapters-view-ch.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/chapters-view-ch/chapters-view-ch.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 20px 0px;\r\n}\r\n\r\n.header-image {\r\n    background-image: url('chapter.png');\r\n    background-size: cover;\r\n  }"

/***/ }),

/***/ "./src/app/chapters-view-ch/chapters-view-ch.component.html":
/*!******************************************************************!*\
  !*** ./src/app/chapters-view-ch/chapters-view-ch.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!chapters\" color=\"accent\"></mat-progress-bar>\n<mat-card *ngFor=\"let chapter of chapters\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"header-image\"></div>\n    <mat-card-title>{{chapter.userId.name}}</mat-card-title>\n    <mat-card-subtitle>{{chapter.domain}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      {{chapter.userId.description}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button [routerLink]=\"['/chapter/chapters', chapter.userId._id]\">View Profile</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/chapters-view-ch/chapters-view-ch.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/chapters-view-ch/chapters-view-ch.component.ts ***!
  \****************************************************************/
/*! exports provided: ChaptersViewChComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChaptersViewChComponent", function() { return ChaptersViewChComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chapters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chapters.service */ "./src/app/services/chapters.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChaptersViewChComponent = /** @class */ (function () {
    function ChaptersViewChComponent(chapterservice) {
        this.chapterservice = chapterservice;
    }
    ChaptersViewChComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chapterservice.getChapters().subscribe(function (data) { _this.chapters = data.chapters; console.log(_this.chapters); });
    };
    ChaptersViewChComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapters-view-ch',
            template: __webpack_require__(/*! ./chapters-view-ch.component.html */ "./src/app/chapters-view-ch/chapters-view-ch.component.html"),
            styles: [__webpack_require__(/*! ./chapters-view-ch.component.css */ "./src/app/chapters-view-ch/chapters-view-ch.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chapters_service__WEBPACK_IMPORTED_MODULE_1__["ChaptersService"]])
    ], ChaptersViewChComponent);
    return ChaptersViewChComponent;
}());



/***/ }),

/***/ "./src/app/chapters-view/chapters-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/chapters-view/chapters-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 20px 0px;\r\n}\r\n\r\n.header-image {\r\n    background-image: url('chapter.png');\r\n    background-size: cover;\r\n  }"

/***/ }),

/***/ "./src/app/chapters-view/chapters-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/chapters-view/chapters-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!chapters\" color=\"accent\"></mat-progress-bar>\r\n<mat-card *ngFor=\"let chapter of chapters\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"header-image\"></div>\r\n    <mat-card-title>{{chapter.userId.name}}</mat-card-title>\r\n    <mat-card-subtitle>{{chapter.domain}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>\r\n      {{chapter.userId.description}}\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button [routerLink]=\"['/user/chapter', chapter.userId._id]\">View Profile</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/chapters-view/chapters-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/chapters-view/chapters-view.component.ts ***!
  \**********************************************************/
/*! exports provided: ChaptersViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChaptersViewComponent", function() { return ChaptersViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chapters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chapters.service */ "./src/app/services/chapters.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChaptersViewComponent = /** @class */ (function () {
    function ChaptersViewComponent(chapterservice) {
        this.chapterservice = chapterservice;
    }
    ChaptersViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chapterservice.getChapters().subscribe(function (data) { _this.chapters = data.chapters; console.log(_this.chapters); });
    };
    ChaptersViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chapters-view',
            template: __webpack_require__(/*! ./chapters-view.component.html */ "./src/app/chapters-view/chapters-view.component.html"),
            styles: [__webpack_require__(/*! ./chapters-view.component.css */ "./src/app/chapters-view/chapters-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chapters_service__WEBPACK_IMPORTED_MODULE_1__["ChaptersService"]])
    ], ChaptersViewComponent);
    return ChaptersViewComponent;
}());



/***/ }),

/***/ "./src/app/create-event/create-event.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-event/create-event.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-form{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 30px;\r\n}\r\n\r\n.full-width{\r\n    width: 100%;\r\n}\r\n\r\n.eventForm{\r\n    width: 80%;\r\n}\r\n\r\n.lol{\r\n    display: block;\r\n    width: 60%;\r\n    margin: 10px auto\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .event-form{\r\n        padding: 10px;\r\n    }\r\n\r\n    .eventForm{\r\n        width: 100%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/create-event/create-event.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-event/create-event.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"New Event\">\n\n        <!-- <p>{{ eventForm.value | json }} {{ eventForm.status | json }}</p> -->\n\n      <div class=\"event-form\">\n        <form class=\"eventForm\" novalidate [formGroup]=\"eventForm\" #eventform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <p>\n              <mat-form-field class=\"full-width\">\n                <input matInput formControlName=\"eventName\" placeholder=\"Name\" type=\"text\" required [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"formErrors.eventName\">{{formErrors.eventName}}</mat-error>\n              </mat-form-field>\n            </p>\n            <p>\n                <mat-form-field class=\"full-width\">\n                    <input matInput formControlName=\"tagLine\" placeholder=\"Tagline\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                    <mat-error *ngIf=\"formErrors.tagLine\">{{formErrors.tagLine}}</mat-error>\n                </mat-form-field>\n              </p>\n              <p>\n                  <mat-select placeholder=\"Category\" formControlName=\"category\">\n                      <mat-option *ngFor=\"let ctype of type\" [value]=\"ctype\">\n                        {{ ctype }}\n                      </mat-option>\n                    </mat-select>\n              </p>\n              <p>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput formControlName=\"organiser\" placeholder=\"Organiser\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                    <mat-error *ngIf=\"formErrors.organiser\">{{formErrors.organiser}}</mat-error>\n                  </mat-form-field>\n                </p>\n                <p>\n                    <mat-form-field class=\"full-width\">\n                      <input matInput formControlName=\"price\" placeholder=\"Price\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                      <mat-error *ngIf=\"formErrors.price\">{{formErrors.price}}</mat-error>\n                    </mat-form-field>\n                  </p> \n                  <p>\n                      <mat-form-field class=\"full-width\">\n                        <input matInput formControlName=\"venue\" placeholder=\"Venue\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                        <mat-error *ngIf=\"formErrors.venue\">{{formErrors.venue}}</mat-error>\n                      </mat-form-field>\n                    </p>\n                    <p>\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"eventDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                          <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </p>\n                    <p>\n                        <mat-form-field class=\"full-width\">\n                          <input matInput formControlName=\"eventTime\" placeholder=\"Time\" type=\"time\" [errorStateMatcher]=\"matcher\" required>\n                          <mat-error *ngIf=\"formErrors.eventTime\">{{formErrors.eventTime}}</mat-error>\n                        </mat-form-field>\n                      </p>\n                      <p>\n                          <mat-form-field class=\"full-width\">\n                            <textarea matInput formControlName=\"description\" placeholder=\"Event Description\" rows=12></textarea>\n                            <mat-error *ngIf=\"formErrors.description\">{{formErrors.description}}</mat-error>\n                          </mat-form-field>\n                        </p>\n            <button type=\"submit\" [disabled]=\"eventForm.invalid\" mat-button class=\"background-primary text-floral-white\">Submit</button>\n          </form>\n          <mat-progress-bar class=\"lol\" *ngIf=\"successUpload\" mode=\"buffer\"></mat-progress-bar>\n      </div>\n\n    </mat-tab>\n    <mat-tab label=\"New Feed\"> \n        <mat-progress-bar mode=\"indeterminate\" *ngIf=\"!eventfeed\" color=\"accent\"></mat-progress-bar>\n        <!-- <p>{{ loginForm.value | json }} {{ loginForm.status | json }}</p> -->\n        <div class=\"event-form\">\n        <form class=\"eventForm\" novalidate [formGroup]=\"loginForm\" #lform=\"ngForm\" (ngSubmit)=\"onFeedSubmit()\">\n            <p>\n                <mat-select placeholder=\"Events\" formControlName=\"eventId\" required>\n                    <mat-option *ngFor=\"let ctype of eventfeed\" [value]=\"ctype._id\">\n                      {{ ctype.eventName }}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"formErrorsfeed.event_id\">{{formErrorsfeed.event_id}}</mat-error>\n            </p>\n            <p>\n              <mat-form-field class=\"input-align\">\n                <input matInput formControlName=\"name\" placeholder=\"Feed Name\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                <mat-error *ngIf=\"formErrorsfeed.name\">{{formErrorsfeed.name}}</mat-error>\n              </mat-form-field>\n            </p>\n            <p>\n                <mat-form-field class=\"full-width\">\n                  <textarea matInput formControlName=\"description\" placeholder=\"Description for feed\" rows=12></textarea>\n                  <mat-error *ngIf=\"formErrorsfeed.description\">{{formErrorsfeed.description}}</mat-error>\n                </mat-form-field>\n            </p>\n            <!-- <p>\n                    <input formControlName=\"file\" (change)=\"onFileChanged($event)\" placeholder=\"Password\" type=\"file\" required>\n            </p>  -->\n             <p>\n              <button type=\"submit\" [disabled]=\"loginForm.invalid\" mat-button class=\"background-primary text-floral-white align\">Submit</button>\n            </p>\n            <br>\n            <mat-progress-bar class=\"lol\" *ngIf=\"successUpload\" mode=\"buffer\"></mat-progress-bar>\n            </form>\n            </div>\n     </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/create-event/create-event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-event/create-event.component.ts ***!
  \********************************************************/
/*! exports provided: MyErrorStateMatcher, CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_chapters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chapters.service */ "./src/app/services/chapters.service.ts");
/* harmony import */ var _services_newevent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/newevent.service */ "./src/app/services/newevent.service.ts");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(fb, neweventservice, chapterservice, eventdetailservice, restangular, snackBar) {
        this.fb = fb;
        this.neweventservice = neweventservice;
        this.chapterservice = chapterservice;
        this.eventdetailservice = eventdetailservice;
        this.restangular = restangular;
        this.snackBar = snackBar;
        this.formErrorsfeed = {
            'description': '',
            'eventId': '',
            'image': '',
            'name': ''
        };
        this.validationMessagesfeed = {
            description: {
                minlength: 'Email must be at least 4 characters long.',
                maxlength: 'Cannot be more than 150 words',
                required: 'Description is required.'
            },
            eventId: {
                required: 'Event is required.'
            },
            image: {
                required: 'Image is required'
            },
            name: {
                required: 'Feed name is required'
            }
        };
        this.type = ['Technical', 'Non-Technical', 'NGO', 'Gaming'];
        this.formErrors = {
            'eventName': '',
            'tagLine': '',
            'description': '',
            'category': '',
            'organiser': '',
            'price': '',
            'eventDate': '',
            'eventTime': '',
            'venue': ''
        };
        this.validationMessages = {
            eventName: {
                minlength: 'Email must be at least 4 characters long.',
                required: 'Email is required.'
            },
            tagLine: {
                required: 'Tag line is required.',
                minlength: 'Tag line must be at least 2 characters long.',
                maxlength: 'Last Name cannot be more than 45 characters long.'
            },
            description: {
                required: 'Description is required.',
                minlength: 'Description must be at least 20 characters long.',
                maxlength: 'FirstName cannot be more than 150 characters long.'
            },
            organiser: {
                required: 'Organiser is required.'
            },
            price: {
                required: 'Price is required.'
            },
            eventDate: {
                'required': 'Date is required.'
            },
            eventTime: {
                required: 'Time is required.'
            },
            venue: {
                required: 'Venue is required.'
            }
        };
        // selectedFile: File;
        // onFileChanged(event) {
        //   this.selectedFile = event.target.files[0];
        //   console.log(this.selectedFile)
        // }
        this.successUpload = false;
        this.matcher = new MyErrorStateMatcher();
        this.createEventForm();
        this.createFeedForm();
    }
    CreateEventComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    CreateEventComponent.prototype.createEventForm = function () {
        var _this = this;
        this.eventForm = this.fb.group({
            eventName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]],
            tagLine: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(45)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(150)]],
            organiser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            eventDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            eventTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            venue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            category: 'Technical'
        });
        this.eventForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    CreateEventComponent.prototype.createFeedForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            eventId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
        });
        this.loginForm.valueChanges.subscribe(function (data) { return _this.onValueChangedfeed(data); });
        this.onValueChangedfeed();
    };
    CreateEventComponent.prototype.onValueChanged = function (data) {
        if (!this.eventForm) {
            return;
        }
        var form = this.eventForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    CreateEventComponent.prototype.onValueChangedfeed = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm;
        for (var field in this.formErrorsfeed) {
            if (this.formErrorsfeed.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrorsfeed[field] = '';
                var control = form.get(field);
                if (control && (control.dirty || !control.valid)) {
                    var messages = this.validationMessagesfeed[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrorsfeed[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    CreateEventComponent.prototype.onSubmit = function () {
        var _this = this;
        this.successUpload = true;
        this.event = this.eventForm.value;
        this.eventForm.reset();
        this.feedbackFormDirective.resetForm();
        console.log(this.event);
        this.neweventservice.submitEvent(this.event).subscribe(function (data) {
            console.log(data);
            _this.successUpload = false;
            _this.openSnackBar("Event Created", ";)");
        });
    };
    CreateEventComponent.prototype.onFeedSubmit = function () {
        var _this = this;
        this.successUpload = true;
        var date = new Date();
        this.newFeed = this.loginForm.value;
        this.newFeed.date = date.toISOString();
        console.log(this.newFeed);
        this.loginForm.reset();
        this.feedFormDirective.resetForm();
        this.restangular.all('api/posts/write-post').post(this.newFeed).subscribe(function (data) {
            console.log(data);
            _this.successUpload = false;
            _this.openSnackBar("Feed Created", ";)");
        });
    };
    CreateEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chapterservice.getChapterProfile().subscribe(function (data) {
            _this.profile = data.organization;
            console.log(_this.profile);
            var id = _this.profile.userId._id;
            console.log(id);
            _this.eventdetailservice.getEventsByChapter(id).subscribe(function (data) {
                _this.upcomingEvent = data.upcomingEvents;
                _this.eventfeed = _this.upcomingEvent;
                console.log(_this.eventfeed);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lform'),
        __metadata("design:type", Object)
    ], CreateEventComponent.prototype, "feedFormDirective", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('eventform'),
        __metadata("design:type", Object)
    ], CreateEventComponent.prototype, "feedbackFormDirective", void 0);
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/create-event/create-event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_newevent_service__WEBPACK_IMPORTED_MODULE_3__["NeweventService"], _services_chapters_service__WEBPACK_IMPORTED_MODULE_2__["ChaptersService"], _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_4__["EventdetailService"], ngx_restangular__WEBPACK_IMPORTED_MODULE_5__["Restangular"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/event-detail/event-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n}\r\n\r\n.detail_desc{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 90%;\r\n}\r\n\r\n.col{\r\n    width: 40%;\r\n    display: flex;\r\n    align-items: center\r\n}\r\n\r\n.flex-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n.comment-form {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: row;\r\n  }\r\n\r\np{\r\n    padding: 10px 20px;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n      .detail_desc{\r\n          flex-direction: column;\r\n          width: 100%;\r\n      }\r\n      .col{\r\n          width: 100%;\r\n          padding: 10px 0px;\r\n      }\r\n      .comment-form{\r\n          flex-direction: column;\r\n      }\r\n\r\n      p>*{\r\n          width: 80%;\r\n      }\r\n      p>mat-slider {\r\n          width: 60%;\r\n      }\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/event-detail/event-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!event\" color=\"accent\"></mat-progress-bar>\r\n<div *ngIf=\"event\">\r\n  <h3>{{event.event_name}}</h3>\r\n  <h4><span>Conducted By: {{event.organiser}}</span><br><span>Type: {{event.category}}</span></h4>\r\n  <div class=\"detail_desc\">\r\n    <div class=\"col\">\r\n      <img src=\"../../assets/images/jumble.png\" width=\"100%\" style=\"display:block\">\r\n    </div>\r\n    <div class=\"col\">\r\n        <p>{{event.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<mat-list fxFlex *ngIf=\"event\">\r\n  <h4>Comments</h4>\r\n    <mat-list-item *ngFor=\"let com of event.comments\">\r\n      <h1 matLine> {{com.comment}} </h1>\r\n      <p matLine>\r\n       <span> {{com.rating}} </span>\r\n      </p>\r\n      <p matLine>\r\n        <span>--{{com.author}} {{com.date | date}} </span>\r\n       </p>\r\n    </mat-list-item>\r\n  </mat-list>\r\n  <mat-list fxFlex *ngIf=\"commentForm.valid\">\r\n      <mat-list-item>\r\n        <h1 matLine> {{commentForm.get('comment').value}} </h1>\r\n        <p matLine>\r\n         <span> {{commentForm.get('rating').value}} </span>\r\n        </p>\r\n        <!-- <p matLine>\r\n          <span>--{{commentForm.get('author').value}}</span>\r\n         </p> -->\r\n      </mat-list-item>\r\n  </mat-list>\r\n\r\n<h6 *ngIf=\"bool && role && event\">Your Comment</h6>\r\n<form *ngIf=\"bool && role && event\" novalidate [formGroup]=\"commentForm\" #cform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n    <!-- <p>{{ commentForm.value | json }}</p> -->\r\n  <div class=\"comment-form\">\r\n    <!-- <p>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"author\" placeholder=\"Name\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\r\n        <mat-error *ngIf=\"formErrors.author\">{{formErrors.author}}</mat-error>\r\n      </mat-form-field>\r\n    </p> -->\r\n    <p>\r\n      <span>Rating</span>\r\n      <mat-slider formControlName=\"rating\" step=\"1\" tickInterval=\"1\" thumbLabel tickInterval=\"1\" min=\"1\" max=\"5\" step=\"1\" value=\"5\"></mat-slider>\r\n    </p>\r\n    <p>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"comment\" placeholder=\"Your Comment\" rows=12 [errorStateMatcher]=\"matcher\" required>\r\n        <mat-error *ngIf=\"formErrors.comment\">{{formErrors.comment}}</mat-error>\r\n      </mat-form-field>\r\n    </p>\r\n  </div>\r\n  <button type=\"submit\" [disabled]=\"commentForm.invalid\" mat-button class=\"background-primary text-floral-white\">Submit</button>\r\n</form>\r\n<div *ngIf=\"event\" style=\"display:flex;justify-content:center\">\r\n  <button mat-stroked-button color=\"accent\" (click)=\"goBack()\">BACK</button>\r\n</div>"

/***/ }),

/***/ "./src/app/event-detail/event-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/event-detail/event-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MyErrorStateMatcher, EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(fb, eventdetailservice, route, location, restangular) {
        this.fb = fb;
        this.eventdetailservice = eventdetailservice;
        this.route = route;
        this.location = location;
        this.restangular = restangular;
        this.formErrors = {
            'author': '',
            'comment': ''
        };
        this.validationMessages = {
            author: {
                minlength: 'Name must be at least 2 characters long.',
                required: 'Name is required.'
            },
            comment: {
                required: 'Comment is required.'
            }
        };
        this.role = false;
        this.bool = true;
        this.matcher = new MyErrorStateMatcher();
        this.createForm();
    }
    EventDetailComponent.prototype.createForm = function () {
        var _this = this;
        this.commentForm = this.fb.group({
            rating: [5],
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            author: ['  ', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]]
        });
        this.commentForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    EventDetailComponent.prototype.onValueChanged = function (data) {
        if (!this.commentForm) {
            return;
        }
        var form = this.commentForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && (control.dirty || !control.valid)) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        // this.eventdetailservice.getEventbyId(id).subscribe(event => {this.event = event.events;console.log(event.events)});
        this.eventdetailservice.getEventbyId(this.id).subscribe(function (event) { _this.event = event.event; console.log(_this.event); });
        console.log("called");
        this.restangular.one("api/all/role").get().subscribe(function (data) {
            console.log(data);
            _this.role = true;
            if (data.role == 'organization') {
                _this.bool = false;
            }
        });
    };
    EventDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.newcomment = this.commentForm.value;
        var date = new Date();
        this.newcomment.date = date.toISOString();
        console.log(this.newcomment);
        this.restangular.all('api/events/' + this.id + '/comment').post(this.newcomment).subscribe(function (res) {
            console.log(res);
            _this.commentForm.reset();
            _this.feedbackFormDirective.resetForm({ rating: 5, author: '', comment: '' });
            _this.event.comments.push(_this.newcomment);
        });
    };
    EventDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cform'),
        __metadata("design:type", Object)
    ], EventDetailComponent.prototype, "feedbackFormDirective", void 0);
    EventDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.css */ "./src/app/event-detail/event-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_1__["EventdetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], ngx_restangular__WEBPACK_IMPORTED_MODULE_5__["Restangular"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-holder{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    width: 80%;\r\n    margin: 0px auto\r\n}\r\n.card{\r\n    display: block;\r\n    width: 90%;\r\n    margin: 10px auto\r\n}\r\n@media screen and (max-width: 600px){\r\n    .card-holder{\r\n        width: 95%;\r\n        margin: 0px;\r\n    }\r\n    .mat-button{\r\n        padding: 0px;\r\n    }\r\n    .card{\r\n        width: 100%;\r\n    }\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!events\" coloe=\"accent\"></mat-progress-bar>\r\n<div class=\"card-holder\" *ngIf=\"events\">\r\n      <mat-card class=\"card\" *ngFor=\"let event of events.posts;let i = index\">\r\n          <mat-card-header>\r\n            <mat-list>\r\n                <mat-list-item>\r\n                        <img matListAvatar src=\"/assets/images/alberto.png\">\r\n                        <h3 matLine> {{event.name | uppercase}}</h3>\r\n                        <p matLine>\r\n                            <span>{{event.owner}}</span>\r\n                        </p>\r\n                </mat-list-item>\r\n            </mat-list> \r\n          </mat-card-header>\r\n          <img class=\"card\" mat-card avatar src=\"/assets/images/jumble.png\" alt={{event.name}} height=\"400px\">\r\n          <mat-card-content>\r\n            <h3>\r\n              {{event.event}}\r\n            </h3>\r\n            <p>\r\n              {{event.description}}\r\n            </p>\r\n          </mat-card-content>\r\n\r\n          <mat-card-actions>\r\n            <button mat-icon-button color=\"primary\" *ngIf=\"event.liked\" (click)=\"liked(event._id,i)\">\r\n                <mat-icon matBadgeOverlap=\"false\"  matBadge=\"{{event.likes.length}}\" matBadgeColor=\"primary\">thumb_up_alt</mat-icon>\r\n            </button>\r\n            \r\n            <button mat-icon-button *ngIf=\"!event.liked\" (click)=\"liked(event._id,i)\">\r\n                <mat-icon matBadgeOverlap=\"false\" matBadgeColor=\"warn\" matBadge=\"{{event.likes.length}}\">thumb_up_alt</mat-icon >\r\n            </button>\r\n            <button mat-button *ngIf=\"event.liked\" (click)=\"liked(event._id,i)\">LIKED</button>\r\n            <button mat-button *ngIf=\"!event.liked\" (click)=\"liked(event._id,i)\">LIKE</button >\r\n            <button mat-button [routerLink]=\"['/user/event', event.eventId]\">More Details</button>\r\n            <button mat-button *ngIf=\"bool\" (click)=\"register(event.eventId)\">Register</button>\r\n            <span class=\"flex-spacer\"></span>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n</div>    \r\n\r\n\r\n<!-- <div class=\"card-holder\">\r\n    <mat-card class=\"card\">\r\n        <mat-card-header>\r\n          <mat-list>\r\n              <mat-list-item>\r\n                      <img matListAvatar src=\"/assets/images/alberto.png\">\r\n                      <h3 matLine> Name</h3>\r\n                      <p matLine>\r\n                          <span> hsdbjadbcaj</span>\r\n                      </p>\r\n              </mat-list-item>\r\n          </mat-list> \r\n        </mat-card-header>\r\n        <img class=\"card\" mat-card avatar src=\"/assets/images/jumble.png\"  height=\"400px\">\r\n        <mat-card-content>\r\n          <h3>\r\n            fgosdfnvlkn     \r\n          </h3>\r\n          <p>\r\n            zksjdvnjansdvjk\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-button (click)=\"likeFeed()\">LIKE</button>\r\n          <button mat-button [routerLink]=\"['/user/event', 1]\">More Details</button>\r\n          <button mat-button>Register</button>\r\n          <span class=\"flex-spacer\"></span>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n</div>     -->"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/feed.service */ "./src/app/services/feed.service.ts");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedComponent = /** @class */ (function () {
    function FeedComponent(feedservice, restangular, eventdetailservice, snackBar) {
        this.feedservice = feedservice;
        this.restangular = restangular;
        this.eventdetailservice = eventdetailservice;
        this.snackBar = snackBar;
        this.bool = true;
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedservice.getFeed().subscribe(function (result) {
            _this.events = result;
            console.log(_this.events.posts);
        });
        this.restangular.one("api/all/role").get().subscribe(function (data) {
            console.log(data);
            if (data.role == 'organization') {
                _this.bool = false;
                console.log("haha");
                console.log(_this.bool);
            }
        });
    };
    FeedComponent.prototype.liked = function (id, index) {
        var _this = this;
        console.log(id);
        var response = {
            postId: id
        };
        console.log(response);
        this.restangular.all("/api/posts/like-post").post(response).subscribe(function (data) {
            console.log(data);
            if (data.success == true) {
                _this.events.posts[index].liked = data.liked;
                if (data.liked == true) {
                    _this.events.posts[index].likes.push('lol');
                }
                if (data.liked == false) {
                    _this.events.posts[index].likes.pop();
                }
            }
        });
    };
    FeedComponent.prototype.register = function (id) {
        var _this = this;
        console.log(id);
        this.restangular.all("api/events/" + id + "/register").post().subscribe(function (data) {
            console.log(data);
            var action = ":)";
            _this.openSnackBar(data.message, action);
        }, function (errorResponse) {
            console.log("Error with status code", errorResponse);
            _this.openSnackBar(errorResponse.data.message, ': |');
        });
    };
    FeedComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [_services_feed_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"], ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"], _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_3__["EventdetailService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/google-auth/google-auth.component.css":
/*!*******************************************************!*\
  !*** ./src/app/google-auth/google-auth.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/google-auth/google-auth.component.html":
/*!********************************************************!*\
  !*** ./src/app/google-auth/google-auth.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Sign in\n</h1>\n\n\n<button (click)=\"socialSignIn('google')\">Sign in with Google</button>\n\n<!-- <script src=\"https://apis.google.com/js/platform.js\" async defer></script>\n\n<meta name=\"google-signin-client_id\" content=\"968010074702-m26te1bg5lpvqq802d5vh8231f7aisrq.apps.googleusercontent.com\">\n\n<div class=\"g-signin2\" data-onsuccess=\"onSignIn\"></div>\n\n<div onclick=\"onSignIn()\"> sdn</div>\n\n<script>\n\nfunction onSignIn(googleUser) {\n  console.log()\n  var profile = googleUser.getBasicProfile();\n  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.\n  console.log('Name: ' + profile.getName());\n  console.log('Image URL: ' + profile.getImageUrl());\n  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.\n}\n\n</script> -->"

/***/ }),

/***/ "./src/app/google-auth/google-auth.component.ts":
/*!******************************************************!*\
  !*** ./src/app/google-auth/google-auth.component.ts ***!
  \******************************************************/
/*! exports provided: GoogleAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAuthComponent", function() { return GoogleAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleAuthComponent = /** @class */ (function () {
    function GoogleAuthComponent(socialAuthService) {
        this.socialAuthService = socialAuthService;
    }
    GoogleAuthComponent.prototype.ngOnInit = function () {
    };
    GoogleAuthComponent.prototype.socialSignIn = function (socialPlatform) {
        console.log("haha");
        var socialPlatformProvider;
        socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
        });
    };
    GoogleAuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-google-auth',
            template: __webpack_require__(/*! ./google-auth.component.html */ "./src/app/google-auth/google-auth.component.html"),
            styles: [__webpack_require__(/*! ./google-auth.component.css */ "./src/app/google-auth/google-auth.component.css")]
        }),
        __metadata("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], GoogleAuthComponent);
    return GoogleAuthComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n}\r\n\r\n.login{\r\n    background: url('form_bg.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center\r\n}\r\n\r\n.form{\r\n    background-color:white;\r\n    padding: 20px;\r\n    opacity: 1;\r\n    border-radius: 15px\r\n}\r\n\r\np > *{\r\n    width: 100%\r\n}\r\n\r\n.align{\r\n    text-align: center;\r\n}\r\n\r\n::-moz-selection{\r\n    background: white !important\r\n}\r\n\r\n::selection{\r\n    background: white !important\r\n}\r\n\r\n.reg{\r\n    text-align: center;\r\n}\r\n\r\n.reg:hover{\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n  <div class=\"form\">\r\n      <h3 class=\"align\"><span>Login</span></h3>\r\n      <form class=\"form\" novalidate [formGroup]=\"loginForm\" #lform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <p>\r\n            <mat-form-field class=\"input-align\">\r\n              <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\r\n              <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\r\n            </mat-form-field>\r\n          </p>\r\n          <p>\r\n            <mat-form-field class=\"input-align\">\r\n              <input matInput formControlName=\"password\" placeholder=\"Password\" type=\"password\" [errorStateMatcher]=\"matcher\" required>\r\n              <mat-error *ngIf=\"formErrors.password\">{{formErrors.password}}</mat-error>\r\n            </mat-form-field>\r\n          </p>\r\n          <p>\r\n            <button type=\"submit\" [disabled]=\"loginForm.invalid\" mat-button class=\"background-primary text-floral-white align\">Submit</button>\r\n          </p>\r\n          </form>\r\n          <mat-progress-bar *ngIf=\"submit\" mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\r\n          <p *ngIf=\"invalid\" class=\"reg\">User doesn't exist</p>\r\n          <p class=\"reg\" routerLink=\"/register\"><a>Register</a></p>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, restangular) {
        this.fb = fb;
        this.router = router;
        this.restangular = restangular;
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            email: {
                minlength: 'Email must be at least 4 characters long.',
                required: 'Email is required.'
            },
            password: {
                minlength: 'Password must be at least 4 characters long.',
                required: 'Password is required.'
            }
        };
        this.submit = false;
        this.invalid = false;
        this.matcher = new MyErrorStateMatcher();
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]]
        });
        this.loginForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    LoginComponent.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && (control.dirty || !control.valid)) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submit = true;
        this.loginData = this.loginForm.value;
        console.log(this.loginData);
        this.restangular.all('api/auth/login').post(this.loginData).subscribe(function (data) {
            console.log("SUccessssss");
            console.log(data.user);
            if (data.user.role == 'student') {
                _this.router.navigate(['/', 'user']);
            }
            else if (data.user.role == 'organization') {
                _this.router.navigate(['/', 'chapter']);
            }
            _this.submit = false;
        }, function (errorResponse) {
            console.log("Error with status code", errorResponse.status);
            _this.submit = false;
            _this.invalid = true;
        });
        this.loginForm.reset();
        this.feedbackFormDirective.resetForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lform'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "feedbackFormDirective", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_restangular__WEBPACK_IMPORTED_MODULE_3__["Restangular"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-view-chapter/main-view-chapter.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main-view-chapter/main-view-chapter.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n    padding: 20px;\r\n}\r\n.active{\r\n    background-color: #07acc2;\r\n    color: white!important\r\n}"

/***/ }),

/***/ "./src/app/main-view-chapter/main-view-chapter.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main-view-chapter/main-view-chapter.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\" style=\"height:100vh\">\n  <header class=\"demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600\">\n    <div aria-expanded=\"false\" role=\"button\" tabindex=\"0\" class=\"mdl-layout__drawer-button\"><i class=\"material-icons\"></i></div>\n    <div class=\"mdl-layout__header-row\">\n      <span class=\"mdl-layout-title\">{{page}}</span>\n      <div class=\"mdl-layout-spacer\"></div>\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\n        <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\n          <i class=\"material-icons\">search</i>\n        </label>\n        <div class=\"mdl-textfield__expandable-holder\">\n          <input class=\"mdl-textfield__input\" type=\"text\" id=\"search\">\n          <label class=\"mdl-textfield__label\" for=\"search\">Enter your query...</label>\n        </div>\n      </div>\n    </div>\n  </header>\n  <div class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\n    <header class=\"demo-drawer-header\">\n      <img src=\"../../assets/images/org.png\" class=\"demo-avatar\">\n      <div class=\"demo-avatar-dropdown\">\n        <span>hello@{{name}}</span>\n      </div>\n    </header>\n    <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n      <a class=\"mdl-navigation__link\" routerLink=\"/chapter/feed\" routerLinkActive=\"active\" (click)=\"head('Feed')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">inbox</i>Feed</a>\n      <a class=\"mdl-navigation__link\" routerLink=\"/chapter/profile\" routerLinkActive=\"active\" (click)=\"head('Profile')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">home</i>Profile</a>\n      <!-- <a class=\"mdl-navigation__link\" href=\"#\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">delete</i>Trash</a> -->\n      <a class=\"mdl-navigation__link\" routerLink=\"/chapter/newEvent\" routerLinkActive=\"active\" (click)=\"head('Add Event')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">add_circle</i>Add Event</a>\n      <a class=\"mdl-navigation__link\" routerLink=\"/chapter/attendance\" routerLinkActive=\"active\" (click)=\"head('Attendance')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">school</i>Attendance</a>\n      <a class=\"mdl-navigation__link\" routerLink=\"/chapter/events\" routerLinkActive=\"active\" (click)=\"head('Events')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">flag</i>Events</a>\n      <a class=\"mdl-navigation__link\" routerLink=\"/chapter/chapters\" routerLinkActive=\"active\" (click)=\"head('Chapters')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">forum</i>Chapters</a>\n    </nav>\n  </div>\n  <main class=\"mdl-layout__content mdl-color--grey-100 main\">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n\n<script src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script>"

/***/ }),

/***/ "./src/app/main-view-chapter/main-view-chapter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main-view-chapter/main-view-chapter.component.ts ***!
  \******************************************************************/
/*! exports provided: MainViewChapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewChapterComponent", function() { return MainViewChapterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chapters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chapters.service */ "./src/app/services/chapters.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainViewChapterComponent = /** @class */ (function () {
    function MainViewChapterComponent(chapterservice) {
        this.chapterservice = chapterservice;
        this.page = "Feed";
    }
    MainViewChapterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chapterservice.getChapterProfile().subscribe(function (profile) {
            _this.profile = profile;
            console.log(_this.profile.organization);
            _this.name = _this.profile.organization.userId.name;
        });
    };
    MainViewChapterComponent.prototype.head = function (e) {
        this.page = e;
    };
    MainViewChapterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-view-chapter',
            template: __webpack_require__(/*! ./main-view-chapter.component.html */ "./src/app/main-view-chapter/main-view-chapter.component.html"),
            styles: [__webpack_require__(/*! ./main-view-chapter.component.css */ "./src/app/main-view-chapter/main-view-chapter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chapters_service__WEBPACK_IMPORTED_MODULE_1__["ChaptersService"]])
    ], MainViewChapterComponent);
    return MainViewChapterComponent;
}());



/***/ }),

/***/ "./src/app/main-view/main-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-view/main-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n    padding: 20px;\r\n}\r\n.active{\r\n    background-color: #07acc2;\r\n    color: white!important\r\n}"

/***/ }),

/***/ "./src/app/main-view/main-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-view/main-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\" style=\"height:100vh\">\r\n    <header class=\"demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600\">\r\n      <div aria-expanded=\"false\" role=\"button\" tabindex=\"0\" class=\"mdl-layout__drawer-button\"><i class=\"material-icons\"></i></div>\r\n      <div class=\"mdl-layout__header-row\">\r\n        <span class=\"mdl-layout-title\">{{page}}</span>\r\n        <div class=\"mdl-layout-spacer\"></div>\r\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\r\n          <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\r\n            <i class=\"material-icons\">search</i>\r\n          </label>\r\n          <div class=\"mdl-textfield__expandable-holder\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"search\">\r\n            <label class=\"mdl-textfield__label\" for=\"search\">Enter your query...</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <div class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\r\n      <header class=\"demo-drawer-header\">\r\n        <img src=\"../../assets/images/profile.png\" class=\"demo-avatar\">\r\n        <div class=\"demo-avatar-dropdown\">\r\n          <span>hello@{{name}}</span>\r\n        </div>\r\n      </header>\r\n      <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\r\n        <a class=\"mdl-navigation__link\" routerLink=\"/user/feed\" routerLinkActive=\"active\" (click)=\"head('Feed')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">inbox</i>Feed</a>\r\n        <a class=\"mdl-navigation__link\" routerLink=\"/user/profile\" routerLinkActive=\"active\" (click)=\"head('Profile')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">home</i>Profile</a>\r\n        <!-- <a class=\"mdl-navigation__link\" href=\"#\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">delete</i>Trash</a>\r\n        <a class=\"mdl-navigation__link\" href=\"#\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">report</i>Spam</a> -->\r\n        <a class=\"mdl-navigation__link\" routerLink=\"/user/events\" routerLinkActive=\"active\" (click)=\"head('Events')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">flag</i>Events</a>\r\n        <a class=\"mdl-navigation__link\" routerLink=\"/user/chapters\" routerLinkActive=\"active\" (click)=\"head('Chapters')\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">forum</i>Chapters</a>\r\n      </nav>\r\n    </div>\r\n    <main class=\"mdl-layout__content mdl-color--grey-100 main\">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n  </div>\r\n  <script src=\"https://code.getmdl.io/1.3.0/material.min.js\"></script>"

/***/ }),

/***/ "./src/app/main-view/main-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-view/main-view.component.ts ***!
  \**************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainViewComponent = /** @class */ (function () {
    function MainViewComponent(profileservice) {
        this.profileservice = profileservice;
        this.page = "Feed";
    }
    MainViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileservice.getProfile().subscribe(function (profile) {
            _this.profile = profile;
            console.log(_this.profile.user);
            _this.name = _this.profile.user.userId.name;
            // if(this.profile.user.role == "Student"){
            //   console.log("csd")
            //   this.student=false;
            //   console.log(this.student)
            //   this.chapter=false;
            // }
            // if(this.profile.user.role == "Chapter"){
            //   console.log("dnfcj")
            //   this.chapter=true;
            //   this.student=false;
            // }
        });
    };
    MainViewComponent.prototype.head = function (e) {
        this.page = e;
    };
    MainViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.css */ "./src/app/main-view/main-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0px;\r\n}\r\n.step{\r\n    width: 60%;\r\n    border-radius: 20px;\r\n    position: relative;\r\n}\r\n.bg{\r\n    background: url('form_bg.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 80vh;\r\n    padding: 150px 0px;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.login{  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 20px\r\n}\r\n.form{\r\n    background-color:white;\r\n    padding: 20px;\r\n    opacity: 1;\r\n    width: 95%;\r\n    border-radius: 15px\r\n}\r\np{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center\r\n}\r\np > *{\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n.align{\r\n    text-align: center;\r\n}\r\n::-moz-selection{\r\n    background: white !important\r\n}\r\n::selection{\r\n    background: white !important\r\n}\r\n.button{\r\n    text-align: center;\r\n    margin: 10px\r\n}\r\nbutton{\r\n    margin: 5px 10px\r\n}\r\nfieldset{\r\n    border: 1px solid #5e445f;\r\n    border-radius: 10px;\r\n}\r\nlegend{\r\n    font-size: 20px;\r\n\r\n}\r\n.log{\r\n    display: block;\r\n    margin: 10px auto;\r\n    text-align: center;\r\n}\r\n@media screen and (max-width: 600px){\r\n    .step{\r\n        width: 90%\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n<!-- <div class=\"layout\">  -->\n    <mat-horizontal-stepper class=\"step\" [linear]=\"isLinear\" #stepper>\n        <mat-step>\n            <ng-template matStepLabel>Select your role:</ng-template>\n            <div class=\"button\">\n                <button type=\"button\" mat-stroked-button color=\"accent\" (click)=\"buildForm('student')\">Student</button>\n                <button type=\"button\" mat-stroked-button color=\"accent\" (click)=\"buildForm('organisation')\">Organisation</button>\n                <button type=\"button\" mat-stroked-button color=\"accent\" (click)=\"buildForm('faculty')\">Faculty</button>\n              </div>\n              <button type=\"button\" mat-stroked-button color=\"primary\" matStepperNext>Next</button>\n        </mat-step>\n        <mat-step>\n            <ng-template matStepLabel>Fill the details:</ng-template>\n            <div class=\"login\">\n                <div *ngIf=\"created\" class=\"form\">\n                  <form novalidate [formGroup]=\"registerForm\" #lform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                    <fieldset>\n                      <legend> {{formType}} Registration Form </legend>\n                      <p>\n                        <mat-form-field class=\"input-align\">\n                          <input matInput formControlName=\"name\" placeholder=\"Name\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                          <mat-error *ngIf=\"formErrors.name\">{{formErrors.name}}</mat-error>\n                        </mat-form-field>\n                      </p>\n                      <p>\n                          <mat-form-field class=\"input-align\" *ngIf=\"stud\">\n                            <input matInput formControlName=\"email\" placeholder=\"VIT Email\" type=\"text\" [errorStateMatcher]=\"matcher\" required pattern=\"[a-zA-Z0-9.]+@vitstudent.ac.in\">\n                            <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\n                          </mat-form-field>\n                        </p>\n                        <p>\n                          <mat-form-field class=\"input-align\" *ngIf=\"!stud\">\n                            <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"text\" [errorStateMatcher]=\"matcher\" required >\n                            <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\n                          </mat-form-field>\n                        </p>\n                      <p>\n                        <mat-form-field class=\"input-align\">\n                          <input matInput formControlName=\"username\" placeholder=\"Username\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                          <mat-error *ngIf=\"formErrors.username\">{{formErrors.username}}</mat-error>\n                        </mat-form-field>\n                      </p>\n                      <p>\n                          <mat-form-field class=\"input-align\">\n                            <input matInput formControlName=\"password\" placeholder=\"Password\" type=\"password\" [errorStateMatcher]=\"matcher\" required>\n                            <mat-error *ngIf=\"formErrors.password\">{{formErrors.password}}</mat-error>\n                          </mat-form-field>\n                        </p>   \n                      <p>\n                        <mat-form-field class=\"input-align\">\n                          <input matInput formControlName=\"description\" placeholder=\"Description\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                          <mat-error *ngIf=\"formErrors.description\">{{formErrors.description}}</mat-error>\n                        </mat-form-field>\n                      </p>\n                      <p>\n                          <mat-form-field class=\"input-align\">\n                            <input matInput formControlName=\"phone\" placeholder=\"Phone Number\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                            <mat-error *ngIf=\"formErrors.phone\">{{formErrors.phone}}</mat-error>\n                          </mat-form-field>\n                        </p>\n            \n                      <!-- Student Specififc -->\n                      <div *ngIf=\"stud\">\n                        <p>\n                          <mat-form-field class=\"input-align\">\n                            <input matInput formControlName=\"gender\" placeholder=\"Gender\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                            <mat-error *ngIf=\"formErrors.gender\">{{formErrors.gender}}</mat-error>\n                          </mat-form-field>\n                        </p>\n                        <p>\n                          <mat-form-field class=\"input-align\">\n                            <input matInput formControlName=\"regNo\" placeholder=\"Registration Number\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                            <mat-error *ngIf=\"formErrors.gender\">{{formErrors.gender}}</mat-error>\n                          </mat-form-field>\n                        </p>\n                        <p>\n                            <mat-form-field class=\"input-align\">\n                              <input matInput placeholder=\"Skill\" type=\"text\" (blur)=\"onKey($event)\">\n                            </mat-form-field>\n                            <span>\n                            <button style=\"display: inline;\" type=\"button\" mat-icon-button color=\"primary\" (click)=\"addSkill()\">\n                                <mat-icon >add</mat-icon>\n                                Click to add skill.\n                            </button>\n                          </span>\n                          </p>\n                      </div> \n                      <!-- organisation Specific -->\n                      <div *ngIf=\"chapter\">\n                          <p>\n                              <mat-form-field class=\"input-align\">\n                                <input matInput formControlName=\"domain\" placeholder=\"Domain\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                                <mat-error *ngIf=\"formErrors.domain\">{{formErrors.domain}}</mat-error>\n                              </mat-form-field>\n                            </p>\n                            <p>\n                                <mat-form-field class=\"input-align\">\n                                  <input matInput formControlName=\"moto\" placeholder=\"Motto\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                                  <mat-error *ngIf=\"formErrors.moto\">{{formErrors.moto}}</mat-error>\n                                </mat-form-field>\n                              </p>\n                      </div>\n            \n                      <!-- Faculty specific -->\n                      <div *ngIf=\"facul\">\n                          <p>\n                              <mat-form-field class=\"input-align\">\n                                <input matInput formControlName=\"school\" placeholder=\"School\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                                <mat-error *ngIf=\"formErrors.school\">{{formErrors.school}}</mat-error>\n                              </mat-form-field>\n                            </p>\n                            <p>\n                                <mat-form-field class=\"input-align\">\n                                  <input matInput formControlName=\"gender\" placeholder=\"Gender\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                                  <mat-error *ngIf=\"formErrors.gender\">{{formErrors.gender}}</mat-error>\n                                </mat-form-field>\n                              </p>\n                      </div>\n                      <button class=\"log\" type=\"button\" mat-stroked-button color=\"accent\" *ngIf=\"!google\" (click)=\"socialSignIn('google')\" [disabled]=\"registerForm.invalid\">Verify VIT ID</button>\n                      \n                      <button class=\"log\" mat-button matStepperNext type=\"submit\" [disabled]=\"registerForm.invalid\"  class=\"background-primary text-floral-white align\" *ngIf=\"google\">Submit</button>\n                      <button class=\"log\" mat-button matStepperNext type=\"submit\" [disabled]=\"registerForm.invalid\"  class=\"background-primary text-floral-white align\" *ngIf=\"!stud\">Submit</button>                      \n                    </fieldset>\n                  </form>\n                  <p *ngIf=\"error && !google\">Not a valid VIT ID</p>\n                      <!-- <p>{{ registerForm.value | json }}</p> -->\n                </div>\n              </div>\n              <button type=\"button\" mat-stroked-button color=\"primary\" matStepperPrevious>Back</button>\n        </mat-step>\n        <mat-step>\n          <ng-template matStepLabel>Done</ng-template>\n          <mat-progress-bar *ngIf=\"!try\" mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n          <p *ngIf=\"register && try\">You are successfully registered.</p>\n          <p *ngIf=\"!register && try\">Registration Failed</p>\n          <div>\n            <button *ngIf=\"register && try\" mat-stroked-button color=\"primary\" routerLink=\"/login\" (click)=\"stepper.reset()\">Login</button>\n            <button *ngIf=\"!register && try\" mat-stroked-button color=\"primary\" (click)=\"stepper.reset()\">Retry</button>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n    <!-- </div> -->\n</div>\n\n<!-- \n  <div>\n    <div class=\"button\">\n      <button mat-stroked-button color=\"accent\" (click)=\"buildForm('student')\">Student</button>\n      <button mat-stroked-button color=\"accent\" (click)=\"buildForm('organisation')\">Organisation</button>\n      <button mat-stroked-button color=\"accent\" (click)=\"buildForm('faculty')\">Faculty</button>\n    </div>\n  </div>\n  <div class=\"login\">\n    <div *ngIf=\"created\" class=\"form\">\n      <form novalidate [formGroup]=\"registerForm\" #lform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <fieldset>\n          <legend> {{formType}} Registration Form </legend>\n          <p>\n            <mat-form-field class=\"input-align\">\n              <input matInput formControlName=\"name\" placeholder=\"Name\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n              <mat-error *ngIf=\"formErrors.name\">{{formErrors.name}}</mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n              <mat-form-field class=\"input-align\">\n                <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\n              </mat-form-field>\n            </p>\n          <p>\n            <mat-form-field class=\"input-align\">\n              <input matInput formControlName=\"username\" placeholder=\"Username\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n              <mat-error *ngIf=\"formErrors.username\">{{formErrors.username}}</mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n              <mat-form-field class=\"input-align\">\n                <input matInput formControlName=\"password\" placeholder=\"Password\" type=\"password\" [errorStateMatcher]=\"matcher\" required>\n                <mat-error *ngIf=\"formErrors.password\">{{formErrors.password}}</mat-error>\n              </mat-form-field>\n            </p>   \n          <p>\n            <mat-form-field class=\"input-align\">\n              <input matInput formControlName=\"description\" placeholder=\"Description\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n              <mat-error *ngIf=\"formErrors.description\">{{formErrors.description}}</mat-error>\n            </mat-form-field>\n          </p>\n          <p>\n              <mat-form-field class=\"input-align\">\n                <input matInput formControlName=\"phone\" placeholder=\"Phone Number\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                <mat-error *ngIf=\"formErrors.phone\">{{formErrors.phone}}</mat-error>\n              </mat-form-field>\n            </p>\n\n          \n          <div *ngIf=\"stud\">\n            <p>\n              <mat-form-field class=\"input-align\">\n                <input matInput formControlName=\"gender\" placeholder=\"Gender\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                <mat-error *ngIf=\"formErrors.gender\">{{formErrors.gender}}</mat-error>\n              </mat-form-field>\n            </p>\n            <p>\n              <mat-form-field class=\"input-align\">\n                <input matInput formControlName=\"regNo\" placeholder=\"Registration Number\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                <mat-error *ngIf=\"formErrors.gender\">{{formErrors.gender}}</mat-error>\n              </mat-form-field>\n            </p>\n          </div> \n          \n          <div *ngIf=\"chapter\">\n              <p>\n                  <mat-form-field class=\"input-align\">\n                    <input matInput formControlName=\"domain\" placeholder=\"Domain\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                    <mat-error *ngIf=\"formErrors.domain\">{{formErrors.domain}}</mat-error>\n                  </mat-form-field>\n                </p>\n                <p>\n                    <mat-form-field class=\"input-align\">\n                      <input matInput formControlName=\"moto\" placeholder=\"Motto\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                      <mat-error *ngIf=\"formErrors.moto\">{{formErrors.moto}}</mat-error>\n                    </mat-form-field>\n                  </p>\n          </div>\n\n      \n          <div *ngIf=\"facul\">\n              <p>\n                  <mat-form-field class=\"input-align\">\n                    <input matInput formControlName=\"school\" placeholder=\"School\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                    <mat-error *ngIf=\"formErrors.school\">{{formErrors.school}}</mat-error>\n                  </mat-form-field>\n                </p>\n                <p>\n                    <mat-form-field class=\"input-align\">\n                      <input matInput formControlName=\"gender\" placeholder=\"Gender\" type=\"text\" [errorStateMatcher]=\"matcher\" required>\n                      <mat-error *ngIf=\"formErrors.gender\">{{formErrors.gender}}</mat-error>\n                    </mat-form-field>\n                  </p>\n          </div>\n\n\n          <p>\n            <button type=\"submit\" [disabled]=\"registerForm.invalid\" mat-button class=\"background-primary text-floral-white align\">Submit</button>\n          </p>\n        </fieldset>\n      </form>\n\n\n          <p>{{ registerForm.value | json }}</p>\n    </div>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, restangular, socialAuthService) {
        this.fb = fb;
        this.restangular = restangular;
        this.socialAuthService = socialAuthService;
        this.student = {
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            photo: [''],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            regNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            skills: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        };
        this.organisation = {
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            photo: [''],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            domain: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            moto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            board: ['']
        };
        this.faculty = {
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            photo: [''],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            school: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        };
        this.formErrors = {
            'name': '',
            'username': '',
            'email': '',
            'description': '',
            'password': '',
            'phone': '',
            'photo': '',
            'role': '',
            'school': '',
            'gender': '',
            'domain': '',
            'moto': '',
            'board': '',
            'regNo': '',
            'skills': ''
        };
        this.validationMessages = {
            name: {
                minlength: 'Email must be at least 4 characters long.',
                required: 'Name is required.'
            },
            username: {
                required: 'This field is required.'
            },
            email: {
                required: 'This field is required.',
                pattern: 'Not a valid VIT email Id'
            },
            description: {
                required: 'This field is required.'
            },
            password: {
                required: 'This field is required.'
            },
            phone: {
                required: 'This field is required.'
            },
            photo: {
                required: 'This field is required.'
            },
            role: {
                required: 'This field is required.'
            },
            school: {
                required: 'This field is required.'
            },
            gender: {
                required: 'This field is required.'
            },
            domain: {
                required: 'This field is required.'
            },
            moto: {
                required: 'This field is required.'
            },
            board: {
                required: 'This field is required.'
            },
            regNo: {
                required: 'This field is required.'
            },
            skills: {
                required: 'This field is required.'
            }
        };
        this.created = false;
        this.stud = false;
        this.chapter = false;
        this.facul = false;
        this.skill = '';
        this.skills = [];
        this.register = false;
        this.try = false;
        this.google = false;
        this.error = false;
        this.matcher = new MyErrorStateMatcher();
    }
    RegisterComponent.prototype.buildForm = function (cat) {
        var _this = this;
        this.created = true;
        if (cat == 'student') {
            this.formType = "Student";
            this.stud = true;
            this.facul = false;
            this.chapter = false;
            this.registerForm = this.fb.group(this.student);
            this.registerForm.patchValue({ 'role': cat });
            console.log(this.registerForm.value);
        }
        if (cat == 'organisation') {
            cat = "organization";
            this.formType = "Organisation";
            this.chapter = true;
            this.stud = false;
            this.facul = false;
            this.formErrors.email = '',
                this.registerForm = this.fb.group(this.organisation);
            this.registerForm.patchValue({ 'role': cat });
            console.log(this.registerForm.value);
        }
        if (cat == 'faculty') {
            this.formType = "Faculty";
            this.facul = true;
            this.stud = false;
            this.chapter = false;
            this.formErrors.email = '',
                this.registerForm = this.fb.group(this.faculty);
            this.registerForm.patchValue({ 'role': cat });
            console.log(this.registerForm.value);
        }
        this.registerForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    RegisterComponent.prototype.onKey = function (event) {
        this.skill = event.target.value;
        event.target.value = '';
    };
    RegisterComponent.prototype.addSkill = function () {
        this.skills.push(this.skill);
        this.skill = '';
        this.registerForm.patchValue({ 'skills': this.skills });
    };
    RegisterComponent.prototype.reset = function () {
        this.registerForm.reset();
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.registerForm.value);
        this.restangular.all('api/auth/register').post(this.registerForm.value).subscribe(function (data) {
            _this.registerForm.reset();
            _this.try = true;
            if (data.success) {
                _this.register = true;
            }
            console.log(data);
        }, function (errorResponse) {
            console.log("Error with status code", errorResponse.message);
            _this.try = true;
        });
    };
    RegisterComponent.prototype.onValueChanged = function (data) {
        if (!this.registerForm) {
            return;
        }
        var form = this.registerForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && (control.dirty || !control.valid)) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        console.log("haha");
        var socialPlatformProvider;
        socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            var formMail = _this.registerForm.value.email;
            console.log(formMail);
            console.log(userData.email);
            if (formMail == userData.email) {
                _this.google = true;
                console.log(socialPlatform + " sign in data : ", userData);
            }
            _this.error = true;
            _this.socialAuthService.signOut().then(function () { return console.log("lolls"); });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rform'),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "registerFormDirective", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/attendance.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/attendance.service.ts ***!
  \************************************************/
/*! exports provided: AttendanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceService", function() { return AttendanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttendanceService = /** @class */ (function () {
    function AttendanceService(restangular) {
        this.restangular = restangular;
    }
    AttendanceService.prototype.getUsersByevent = function (id) {
        return this.restangular.one('api/common/organization/' + id + '/registered-users').get();
    };
    AttendanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], AttendanceService);
    return AttendanceService;
}());

// const x: any[]=[
//   {
//     _id:"one",
//     name:"Mayukh",
//     attended: true
//   },
//   {
//     _id:"two",
//     name:"Anant",
//     attended: false
//   },
//   {
//     _id:"three",
//     name:"Queenie",
//     attended: true
//   },
//   {
//     _id:"four",
//     name:"Kriti",
//     attended: true
//   },
//   {
//     _id:"five",
//     name:"Ankit",
//     attended: false
//   },
//   {
//     _id:"six",
//     name:"Raghu",
//     attended: true
//   },
//   {
//     _id:"seven",
//     name:"Harshit",
//     attended: true
//   }
// ]
// // return  of(x);


/***/ }),

/***/ "./src/app/services/chapters.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/chapters.service.ts ***!
  \**********************************************/
/*! exports provided: ChaptersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChaptersService", function() { return ChaptersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChaptersService = /** @class */ (function () {
    function ChaptersService(restangular) {
        this.restangular = restangular;
    }
    ChaptersService.prototype.getChapters = function () {
        return this.restangular.one('api/all/chapters').get();
    };
    ChaptersService.prototype.getChapterById = function (id) {
        // customGET("messages", {param: "myParam"});
        return this.restangular.one('api/common/organization/' + id).get();
    };
    ChaptersService.prototype.getChapterProfile = function () {
        return this.restangular.one('api/organization/details').get();
    };
    ChaptersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], ChaptersService);
    return ChaptersService;
}());



/***/ }),

/***/ "./src/app/services/eventdetail.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/eventdetail.service.ts ***!
  \*************************************************/
/*! exports provided: EventdetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdetailService", function() { return EventdetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventdetailService = /** @class */ (function () {
    function EventdetailService(restangular) {
        this.restangular = restangular;
    }
    EventdetailService.prototype.getEventbyId = function (id) {
        // console.log(EVENTS.filter((event) => (event.id === id))[0])
        // return of(EVENTS.filter((event) => (event.id === id))[0]);
        return this.restangular.one('api/events/event-id/' + id).get();
    };
    EventdetailService.prototype.getEvents = function () {
        return this.restangular.one('api/all/events').get();
        ;
        ;
    };
    EventdetailService.prototype.getEventsByChapter = function (id) {
        return this.restangular.one('api/events/organization-id/' + id).get();
    };
    EventdetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], EventdetailService);
    return EventdetailService;
}());



/***/ }),

/***/ "./src/app/services/feed.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/feed.service.ts ***!
  \******************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedService = /** @class */ (function () {
    function FeedService(restangular) {
        this.restangular = restangular;
    }
    FeedService.prototype.getFeed = function () {
        return this.restangular.one('api/posts/view-post').get();
    };
    FeedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], FeedService);
    return FeedService;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackService = /** @class */ (function () {
    function FeedbackService(restangular) {
        this.restangular = restangular;
    }
    // submitFeedback(feedback: any): Observable<any>{
    //   console.log(feedback);
    //   return of(feedback);
    // };
    FeedbackService.prototype.getFeedback = function () {
        return this.restangular.one('/api/organization/get-feedback').get();
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/services/newevent.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/newevent.service.ts ***!
  \**********************************************/
/*! exports provided: NeweventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeweventService", function() { return NeweventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NeweventService = /** @class */ (function () {
    function NeweventService(restangular) {
        this.restangular = restangular;
    }
    NeweventService.prototype.getEventsWithID = function () {
        var event = [
            {
                event_name: "Jumble",
                _id: '1'
            },
            {
                event_name: "GPL",
                _id: '2'
            }
        ];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(event);
    };
    NeweventService.prototype.submitEvent = function (data) {
        return this.restangular.all('api/organization/add-event').post(data);
    };
    NeweventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], NeweventService);
    return NeweventService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/fesm5/ngx-restangular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = /** @class */ (function () {
    function ProfileService(restangular) {
        this.restangular = restangular;
    }
    ProfileService.prototype.getProfile = function () {
        return this.restangular.one('api/student/details').get();
    };
    ProfileService.prototype.getEvents = function () {
        return this.restangular.one('api/student/events').get();
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_1__["Restangular"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/shared/baseurl.ts":
/*!***********************************!*\
  !*** ./src/app/shared/baseurl.ts ***!
  \***********************************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
// export const baseURL = 'https://lovely-fox-98.localtunnel.me/';
var baseURL = 'http://localhost:3000';


/***/ }),

/***/ "./src/app/shared/contact.ts":
/*!***********************************!*\
  !*** ./src/app/shared/contact.ts ***!
  \***********************************/
/*! exports provided: ContactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
var ContactType = ['Tel', 'Email'];


/***/ }),

/***/ "./src/app/shared/restConfig.ts":
/*!**************************************!*\
  !*** ./src/app/shared/restConfig.ts ***!
  \**************************************/
/*! exports provided: RestangularConfigFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestangularConfigFactory", function() { return RestangularConfigFactory; });
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseurl */ "./src/app/shared/baseurl.ts");

// Function for settting the default restangular configuration
function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(_baseurl__WEBPACK_IMPORTED_MODULE_0__["baseURL"]);
    RestangularProvider.setDefaultHttpFields({ withCredentials: true });
}


/***/ }),

/***/ "./src/app/shared/social.ts":
/*!**********************************!*\
  !*** ./src/app/shared/social.ts ***!
  \**********************************/
/*! exports provided: getAuthServiceConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__);

function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"]("968010074702-m26te1bg5lpvqq802d5vh8231f7aisrq.apps.googleusercontent.com")
        },
    ]);
    return config;
}


/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    padding: 0px;\r\n    margin: 0px\r\n}\r\n\r\n.profile-top{\r\n    background: url('form_bg.png');\r\n    width: 100%;\r\n    height: 200px;\r\n    background-position: center;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.profile-header{\r\n    display: flex;\r\n    justify-content: center;\r\n    position: relative;\r\n    top: -77px\r\n}\r\n\r\n.profile-head{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-left: 50px\r\n}\r\n\r\nh4:nth-child(1){\r\n    color: white\r\n}\r\n\r\n.profile-img{\r\n    height: 154px;\r\n    width: 154px;\r\n    margin-right: 50px;\r\n    border-radius: 50%;\r\n    border:1px solid #484848\r\n}\r\n\r\n.profile-img img{\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n}\r\n\r\n.about-section{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    border-top: 2px solid #15557e;\r\n    border-bottom: 2px solid #15557e\r\n}\r\n\r\n.about{\r\n    padding: 10px;\r\n    width: 60%;\r\n}\r\n\r\n.interests{\r\n    padding: 10px;\r\n    width: 30%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.interests div{\r\n    border-left: 2px solid #4d4463;\r\n    padding: 0px 30px;\r\n}\r\n\r\nmat-panel-description{\r\n    justify-content: flex-end\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    .profile-head{\r\n        margin-left: -10px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!profile\" color=\"accent\"></mat-progress-bar>\r\n<div *ngIf=\"profile\">\r\n<div class=\"profile-top\">\r\n</div>\r\n<div class=\"profile-header\">\r\n  <div class=\"profile-img\"><img src=\"../../assets/images/alberto.png\" height=\"150px\" width=\"150px\"></div>\r\n  <div class=\"profile-head\"><h4>{{profile.userId.name}}</h4><h4>{{profile.userId.role}}</h4></div>\r\n</div>\r\n\r\n<div class=\"about-section\">\r\n  <div class=\"about\">\r\n    <h5>About</h5>\r\n    <p>{{profile.userId.description}}</p>\r\n  </div>\r\n  <div class=\"interests\">\r\n    <div>\r\n      <h5>Skills</h5>\r\n      <p *ngFor=\"let skill of profile.skills\">{{skill}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"upcoming-events\" *ngIf=\"events\">\r\n    <mat-tab-group>\r\n        <mat-tab label=\"Registered Events\">\r\n            <mat-accordion>\r\n                <mat-expansion-panel *ngFor=\"let event of upcomingEvent\">\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                      {{event.eventName}}\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                      Conducted By {{event.organiser}}\r\n                    </mat-panel-description>\r\n                  </mat-expansion-panel-header>\r\n                  <p>Event Description</p>\r\n                  <p>{{event.description}}</p>\r\n                  <button mat-raised-button color=\"primary\" [routerLink]=\"['/user/event', event._id]\">View Details</button>\r\n                </mat-expansion-panel>\r\n              </mat-accordion>\r\n        </mat-tab>\r\n\r\n\r\n        <mat-tab label=\"Attended Events\">\r\n          <mat-accordion>\r\n            <mat-expansion-panel *ngFor=\"let event of pastEvent\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  {{event.eventName}}\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  Conducted By {{event.organiser}}\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <p>Event Description</p>\r\n              <p>{{event.description}}</p>\r\n              <button mat-raised-button color=\"primary\" [routerLink]=\"['/user/event', event._id]\">View Details</button>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(profileservice) {
        this.profileservice = profileservice;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileservice.getProfile().subscribe(function (profile) {
            _this.profile = profile.user;
            console.log(_this.profile);
            _this.profileservice.getEvents().subscribe(function (data) {
                console.log(data);
                _this.events = data;
                _this.pastEvent = data.attendedEvents;
                _this.upcomingEvent = data.registeredEvents;
                console.log(_this.pastEvent);
            });
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/view-attendance/view-attendance.component.css":
/*!***************************************************************!*\
  !*** ./src/app/view-attendance/view-attendance.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n}\r\n.attendance{\r\n    width: 90%;\r\n    display: flex;\r\n    margin: auto;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center\r\n}\r\n.example-card {\r\n    max-width: 90%;\r\n    margin: auto\r\n  }\r\n.example-header-image {\r\n    background-image: url('chapter.png');\r\n    background-size: cover;\r\n  }\r\n.form{\r\n      width: 100%;\r\n  }\r\n.row{\r\n      display: flex;\r\n      justify-content: space-between;\r\n      padding: 0px 20px;\r\n      margin: 10px 0px;\r\n      border-bottom: 1px solid rgba(0, 0, 0, 0.15);\r\n  }\r\n"

/***/ }),

/***/ "./src/app/view-attendance/view-attendance.component.html":
/*!****************************************************************!*\
  !*** ./src/app/view-attendance/view-attendance.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>{{event.eventName}}</mat-card-title>\n    <mat-card-subtitle>Attendance</mat-card-subtitle>\n  </mat-card-header>\n  <mat-divider></mat-divider>\n  <mat-card-content>\n          <p class=\"row\" *ngFor=\"let participant of participants\">\n            <span>{{participant.name}}</span>\n            <span *ngIf=\"participant.attended\">Present</span>\n            <span *ngIf=\"!participant.attended\">Absent</span>\n          </p>\n  </mat-card-content>\n  <!-- <mat-card-actions>\n    \n  </mat-card-actions> -->\n</mat-card>\n<div style=\"display:flex;justify-content:center\">\n  <button mat-stroked-button color=\"accent\" (click)=\"goBack()\">BACK</button>\n</div>"

/***/ }),

/***/ "./src/app/view-attendance/view-attendance.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/view-attendance/view-attendance.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAttendanceComponent", function() { return ViewAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/attendance.service */ "./src/app/services/attendance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/eventdetail.service */ "./src/app/services/eventdetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewAttendanceComponent = /** @class */ (function () {
    function ViewAttendanceComponent(location, route, attendanceservice, eventdetailservice) {
        this.location = location;
        this.route = route;
        this.attendanceservice = attendanceservice;
        this.eventdetailservice = eventdetailservice;
    }
    ViewAttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.eventdetailservice.getEventbyId(id).subscribe(function (data) {
            _this.event = data.event;
            console.log(data.event);
            _this.attendanceservice.getUsersByevent(id).subscribe(function (data) {
                _this.participants = data.users;
                console.log(_this.participants);
            });
        });
    };
    ViewAttendanceComponent.prototype.goBack = function () {
        this.location.back();
    };
    ViewAttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-attendance',
            template: __webpack_require__(/*! ./view-attendance.component.html */ "./src/app/view-attendance/view-attendance.component.html"),
            styles: [__webpack_require__(/*! ./view-attendance.component.css */ "./src/app/view-attendance/view-attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_attendance_service__WEBPACK_IMPORTED_MODULE_2__["AttendanceService"], _services_eventdetail_service__WEBPACK_IMPORTED_MODULE_4__["EventdetailService"]])
    ], ViewAttendanceComponent);
    return ViewAttendanceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\iwp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map