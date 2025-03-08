"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _book = _interopRequireDefault(require("./book"));
var _rendition = _interopRequireDefault(require("./rendition"));
var _epubcfi = _interopRequireDefault(require("./epubcfi"));
var _contents = _interopRequireDefault(require("./contents"));
var utils = _interopRequireWildcard(require("./utils/core"));
var _constants = require("./utils/constants");
var _iframe = _interopRequireDefault(require("./managers/views/iframe"));
var _default2 = _interopRequireDefault(require("./managers/default"));
var _continuous = _interopRequireDefault(require("./managers/continuous"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Creates a new Book
 * @param {string|ArrayBuffer} url URL, Path or ArrayBuffer
 * @param {object} options to pass to the book
 * @returns {Book} a new Book object
 * @example ePub("/path/to/book.epub", {})
 */
function ePub(url, options) {
  return new _book.default(url, options);
}
ePub.VERSION = _constants.EPUBJS_VERSION;
if (typeof global !== "undefined") {
  global.EPUBJS_VERSION = _constants.EPUBJS_VERSION;
}
ePub.Book = _book.default;
ePub.Rendition = _rendition.default;
ePub.Contents = _contents.default;
ePub.CFI = _epubcfi.default;
ePub.utils = utils;
var _default = exports.default = ePub;