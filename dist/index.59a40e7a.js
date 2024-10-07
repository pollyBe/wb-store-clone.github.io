// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aP7aF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lRBv":[function(require,module,exports) {
var _headerJs = require("./header/header.js");
var _sliderJs = require("./slider/slider.js");
var _cardsJs = require("./cards/cards.js");
var _footerJs = require("./footer/footer.js");

},{"./header/header.js":"8pjPG","./slider/slider.js":"9NDJV","./cards/cards.js":"3YYFE","./footer/footer.js":"kqH6m"}],"8pjPG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "header", ()=>header);
parcelHelpers.export(exports, "modal", ()=>(0, _cart.modal));
var _searchField = require("./searchField");
var _cart = require("./cart");
// create structure(global)
const header = document.createElement("header"), container = document.createElement("div"), headerWrap = document.createElement("div"), logo = document.createElement("div");
// adding classes and attributes
header.className = "header";
container.className = "container";
headerWrap.className = "header-wrap";
// set attributes in inner header elements
// logo element
logo.className = "logo-wrap";
const logoLink = document.createElement("a");
logoLink.href = "#";
logoLink.className = "logo-link";
logoLink.textContent = "\u041D\u0415-Wildberries";
logo.append(logoLink);
// add elements in document
const body = document.querySelector("body");
headerWrap.append(logo, (0, _searchField.searchField), (0, _cart.cartButton));
container.append(headerWrap);
header.append(container);
body.prepend(header);
body.append((0, _cart.modal));

},{"./searchField":"5KFJ0","./cart":"gPKPM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5KFJ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchField", ()=>searchField);
parcelHelpers.export(exports, "searchOptions", ()=>searchOptions);
parcelHelpers.export(exports, "cardsArr", ()=>cardsArr);
var _searchDisplayOptions = require("./search_displayOptions");
const searchField = document.createElement("div");
searchField.className = "search-field-wrap";
const clearBtn = document.createElement("div");
clearBtn.className = "clear-btn";
const searchBtn = document.createElement("button");
searchBtn.className = "search-button";
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.value = "Search ...";
searchInput.id = "search-input";
const searchOptions = document.createElement("ul");
searchOptions.className = "options";
searchOptions.style.display = "none";
searchField.append(searchInput, clearBtn, searchOptions, searchBtn);
searchInput.setAttribute("autocomplete", "off");
// Handle Enter key press
searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchInput.value = "";
        event.preventDefault();
    }
});
searchInput.addEventListener("focus", ()=>{
    searchInput.value = "";
});
// Handle clear button click
clearBtn.addEventListener("click", function() {
    searchInput.value = "";
    searchOptions.style.display = "none";
    searchInput.focus();
});
document.addEventListener("click", (e)=>{
    const card = e.target.closest(".option-item");
    if (card) {
        const cardName = card.textContent.trim().toLowerCase();
        const productCards = document.querySelectorAll(".card-wrapper");
        productCards.forEach((element)=>{
            const targetName = element.getAttribute("data-name").trim().toLowerCase();
            if (targetName.includes(cardName)) {
                element.click();
                searchOptions.style.display = "none";
                searchInput.value = "Search ...";
            }
        });
    }
});
searchBtn.addEventListener("click", ()=>{
    if (!searchField.classList.contains("active")) searchField.classList.add("active");
    else searchField.classList.remove("active");
});
searchInput.addEventListener("keyup", (0, _searchDisplayOptions.displayOptions));

},{"./search_displayOptions":"9WHIm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9WHIm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayOptions", ()=>displayOptions);
parcelHelpers.export(exports, "productCards", ()=>productCards);
var _searchUpdateVisibility = require("./search_updateVisibility");
var _searchField = require("./searchField");
const productCards = document.querySelectorAll(".card-wrapper");
function displayOptions() {
    const searchValue = this.value.trim().toLowerCase();
    const productCards = document.querySelectorAll(".card-wrapper");
    console.log(searchValue, "value");
    const li = document.createElement("li");
    li.className = "option-item";
    li.textContent = "";
    (0, _searchField.searchOptions).style.display = "none";
    const options = [];
    console.log(productCards, "productcards");
    productCards.forEach((card)=>{
        console.log(card);
        const productName = card.getAttribute("data-name").toLowerCase();
        console.log(productName, "name");
        if (productName.includes(searchValue)) {
            console.log(card, "card");
            options.push(card);
        }
    });
    if (!searchValue) {
        (0, _searchField.searchOptions).style.display = "none";
        (0, _searchField.searchOptions).innerHTML = "";
        return;
    }
    console.log(options, " options");
    (0, _searchField.searchOptions).innerHTML = "";
    if (options.length === 0) {
        li.textContent = "No matches...";
        (0, _searchField.searchOptions).append(li);
        (0, _searchField.searchOptions).style.display = "block";
    } else {
        options.forEach((card)=>{
            const productName = card.getAttribute("data-name").toLowerCase();
            const li = document.createElement("li");
            li.className = "option-item";
            li.textContent = productName;
            (0, _searchField.searchOptions).append(li);
            console.log(li.textContent);
            (0, _searchField.searchOptions).style.display = "block";
        });
        (0, _searchUpdateVisibility.updateVisibility)();
    }
}

},{"./search_updateVisibility":"6cxo0","./searchField":"5KFJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6cxo0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateVisibility", ()=>updateVisibility);
var _searchField = require("./searchField");
function updateVisibility() {
    const elements = (0, _searchField.searchOptions).querySelectorAll(".option-item");
    const seenTexts = new Set();
    elements.forEach((element)=>{
        const text = element.textContent.trim();
        if (seenTexts.has(text)) element.remove();
        else seenTexts.add(text);
    });
}

},{"./searchField":"5KFJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gPKPM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modal", ()=>modal) // Экспортируем функцию
;
parcelHelpers.export(exports, "cartButton", ()=>cartButton);
parcelHelpers.export(exports, "body", ()=>body);
parcelHelpers.export(exports, "cartStuff", ()=>cartStuff);
parcelHelpers.export(exports, "cartAdded", ()=>cartAdded);
parcelHelpers.export(exports, "updateCartCount", ()=>updateCartCount);
parcelHelpers.export(exports, "updateTotalSum", ()=>updateTotalSum);
var _modalShowClose = require("./modalShowClose");
var _cartStorageGetSet = require("./cart_storageGetSet");
var _cartAddToCart = require("./cart_addToCart");
const body = document.querySelector("body");
// Кнопка для открытия корзины
const cartButton = document.createElement("button");
cartButton.id = "cart-button";
cartButton.type = "button";
cartButton.textContent = "Cart";
// Создание модального окна корзины
const modal = document.createElement("div");
modal.className = "modal";
modal.id = "cart-modal";
const modalContent = document.createElement("div");
modalContent.className = "modal-content";
const cartHead = document.createElement("div");
cartHead.className = "cart-head";
const cartTitle = document.createElement("h3");
cartTitle.className = "cart-title";
cartTitle.textContent = "Your Cart";
const cartClear = document.createElement("button");
cartClear.className = "cart-clear-btn";
cartClear.textContent = "Clear cart";
cartClear.addEventListener("click", clearCart);
const close = document.createElement("div");
const closeWrap = document.createElement("div");
closeWrap.className = "close-wrap";
close.className = "cart-close-btn";
close.append(closeWrap);
const cartStuff = document.createElement("div");
cartStuff.className = "cart-stuff";
cartStuff.id = "cart-stuff";
const totalSum = document.createElement("div");
totalSum.className = "total-sum";
const totalText = document.createElement("p");
totalText.textContent = "Total: 0 BYN";
totalSum.append(totalText);
cartHead.append(cartTitle, cartClear, close);
modalContent.append(cartHead, cartStuff, totalSum);
modal.append(modalContent);
close.addEventListener("click", (0, _modalShowClose.closeModal));
cartButton.addEventListener("click", (0, _modalShowClose.showModal));
let cartAdded = (0, _cartStorageGetSet.getItemFromStorage)();
const cartCount = document.createElement("span");
cartCount.id = "cart-count";
cartCount.textContent = "(0)";
cartButton.appendChild(cartCount);
function clearCart() {
    cartAdded = [];
    (0, _cartStorageGetSet.setItemsInStorage)(cartAdded);
    document.querySelector(".cart-stuff").innerHTML = "";
    updateCartCount();
    updateTotalSum();
}
function updateCartCount() {
    const itemCount = cartAdded.length;
    cartCount.textContent = `(${itemCount})`;
}
function updateTotalSum() {
    const total = cartAdded.reduce((acc, item)=>acc + item.price, 0);
    totalText.textContent = `Total: ${total} BYN`;
}
const itemDeleteBtn = document.createElement("button");
itemDeleteBtn.type = "button";
itemDeleteBtn.className = "item-delete-btn";
itemDeleteBtn.addEventListener("click", (el)=>{
    const index = cartAdded.findIndex((item)=>item.id === productItem.id);
    if (index !== -1) {
        cartAdded.splice(index, 1);
        el.currentTarget.closest(".item-wrap").remove();
        (0, _cartStorageGetSet.setItemsInStorage)(cartAdded);
        updateCartCount();
        updateTotalSum();
    }
});

},{"./modalShowClose":"i6az0","./cart_storageGetSet":"lt0Vh","./cart_addToCart":"fAsq9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6az0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showModal", ()=>showModal);
parcelHelpers.export(exports, "closeModal", ()=>closeModal);
var _cart = require("./cart");
function showModal() {
    (0, _cart.body).classList.add("modal-open");
    (0, _cart.modal).style.display = "block";
    (0, _cart.modal).classList.add("show");
}
function closeModal() {
    (0, _cart.body).classList.remove("modal-open");
    (0, _cart.modal).style.display = "none";
    (0, _cart.modal).classList.remove("show");
}

},{"./cart":"gPKPM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lt0Vh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setItemsInStorage", ()=>setItemsInStorage);
parcelHelpers.export(exports, "getItemFromStorage", ()=>getItemFromStorage);
function setItemsInStorage(cartAdded) {
    localStorage.setItem("productItem", JSON.stringify(cartAdded));
}
function getItemFromStorage() {
    const items = localStorage.getItem("productItem");
    return items ? JSON.parse(items) : [];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAsq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addToCart", ()=>addToCart);
parcelHelpers.export(exports, "renderCart", ()=>renderCart);
var _cart = require("./cart");
var _cartCreateItem = require("./cart_createItem");
var _cartStorageGetSet = require("./cart_storageGetSet");
function addToCart(card) {
    const productItem = {
        id: card.id,
        name: card.name,
        price: card.discount ? card.discount : card.price,
        discount: card.discount,
        image: card.images,
        quantity: 1
    };
    let existingProduct = (0, _cart.cartAdded).find((item)=>item.id === card.id);
    if (existingProduct) {
        existingProduct.quantity += productItem.quantity;
        existingProduct.price += productItem.discount;
    } else (0, _cart.cartAdded).push(productItem);
    (0, _cartStorageGetSet.setItemsInStorage)((0, _cart.cartAdded));
    renderCart((0, _cart.cartAdded));
}
function renderCart(cartAdded) {
    const cartElement = document.getElementById("cart-stuff");
    cartElement.innerHTML = "";
    cartAdded.forEach((item)=>{
        (0, _cartCreateItem.createItem)(item);
    });
    (0, _cart.updateCartCount)();
    (0, _cart.updateTotalSum)();
}

},{"./cart":"gPKPM","./cart_createItem":"4oazC","./cart_storageGetSet":"lt0Vh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4oazC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createItem", ()=>createItem);
var _cart = require("./cart");
var _cartStorageGetSet = require("./cart_storageGetSet");
var _cartAddToCart = require("./cart_addToCart");
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _cart.cartAdded).forEach((el)=>{
        createItem(el);
    });
    (0, _cart.updateCartCount)();
    (0, _cart.updateTotalSum)();
});
function createItem(productItem) {
    const itemWrap = document.createElement("div");
    itemWrap.className = "item-wrap";
    itemWrap.id = productItem.id;
    const itemContent = document.createElement("div");
    itemContent.className = "item-content";
    const imgWrap = document.createElement("div");
    imgWrap.className = "img-wrap";
    const itemImg = document.createElement("img");
    itemImg.src = productItem.image;
    imgWrap.append(itemImg);
    const itemInfo = document.createElement("div");
    itemInfo.className = "item-info";
    const itemTitle = document.createElement("h3");
    itemTitle.className = "item-title";
    itemTitle.textContent = productItem.name;
    const quantityWrap = document.createElement("div");
    quantityWrap.className = "quantity-wrap";
    const quantityMinus = document.createElement("button");
    quantityMinus.id = "minus";
    quantityMinus.className = "quantity-btn";
    quantityMinus.type = "button";
    const itemQuantity = document.createElement("div");
    itemQuantity.className = "item-quantity";
    const itemNumber = document.createElement("p");
    itemNumber.id = "item-number";
    itemNumber.textContent = productItem.quantity;
    itemQuantity.append(itemNumber);
    const quantityPlus = document.createElement("button");
    quantityPlus.type = "button";
    quantityPlus.className = "quantity-btn";
    quantityPlus.id = "plus";
    quantityWrap.append(quantityMinus, itemQuantity, quantityPlus);
    const itemPrice = document.createElement("p");
    itemPrice.className = "item-price";
    itemPrice.textContent = productItem.price + ` BYN`;
    itemInfo.append(itemTitle, quantityWrap, itemPrice);
    const itemDeleteBtn = document.createElement("button");
    itemDeleteBtn.type = "button";
    itemDeleteBtn.className = "item-delete-btn";
    const itemBuyBtn = document.createElement("button");
    itemBuyBtn.type = "button";
    itemBuyBtn.className = "item-buy-btn";
    // Удаление товара из корзины
    itemDeleteBtn.addEventListener("click", (el)=>{
        const index = (0, _cart.cartAdded).findIndex((item)=>item.id === productItem.id);
        if (index !== -1) {
            (0, _cart.cartAdded).splice(index, 1);
            itemWrap.remove();
            (0, _cartStorageGetSet.setItemsInStorage)((0, _cart.cartAdded));
            (0, _cart.updateCartCount)();
            (0, _cart.updateTotalSum)();
        }
    });
    itemContent.append(imgWrap, itemInfo, itemDeleteBtn, itemBuyBtn);
    itemWrap.append(itemContent);
    (0, _cart.cartStuff).append(itemWrap);
    quantityWrap.addEventListener("click", (e)=>{
        let productId = productItem.id;
        let currentQuantity = productItem.quantity;
        let currentPrice = productItem.discount;
        if (e.target.id === "minus") {
            if (currentQuantity > 1) updateQuantity(productId, currentQuantity - 1, (currentQuantity - 1) * currentPrice);
            else updateQuantity(productId, currentQuantity, currentPrice);
        } else if (e.target.id === "plus") updateQuantity(productId, currentQuantity + 1, (currentQuantity + 1) * currentPrice);
    });
    function updateQuantity(productId, newQuantity, newPrice) {
        let productMatch = (0, _cart.cartAdded).find((item)=>item.id === productId);
        if (productMatch) {
            productMatch.quantity = newQuantity;
            productMatch.price = newPrice;
            console.log(productMatch);
        } else (0, _cart.cartAdded).push({
            id: productId,
            quantity: newQuantity,
            price: newPrice
        });
        (0, _cartStorageGetSet.setItemsInStorage)((0, _cart.cartAdded));
        (0, _cartAddToCart.renderCart)((0, _cart.cartAdded));
    }
}

},{"./cart":"gPKPM","./cart_storageGetSet":"lt0Vh","./cart_addToCart":"fAsq9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9NDJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sliderContainer", ()=>sliderContainer);
var _header = require("../header/header");
// Создаем элементы слайдера через DOM
const sliderContainer = document.createElement("div");
sliderContainer.classList.add("slider-container");
const sliderTrack = document.createElement("div");
sliderTrack.classList.add("slider-track");
sliderContainer.appendChild(sliderTrack);
// Создаем индикаторы
const indicators = document.createElement("div");
indicators.classList.add("indicators");
sliderContainer.appendChild(indicators);
// Добавляем кнопки переключения
const leftButton = document.createElement("button");
leftButton.classList.add("slider-button", "left");
leftButton.innerHTML = "\u2039";
sliderContainer.appendChild(leftButton);
const rightButton = document.createElement("button");
rightButton.classList.add("slider-button", "right");
rightButton.innerHTML = "\u203A";
sliderContainer.appendChild(rightButton);
// Добавляем слайдер в body
(0, _header.header).after(sliderContainer);
// Массив с картинками
const images = [
    "https://images.pexels.com/photos/5885454/pexels-photo-5885454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5993378/pexels-photo-5993378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6303683/pexels-photo-6303683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6249674/pexels-photo-6249674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6238122/pexels-photo-6238122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];
// Добавляем изображения и индикаторы
images.forEach((imageSrc, index)=>{
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.style.backgroundImage = `url(${imageSrc})`;
    sliderTrack.appendChild(slide);
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (index === 0) indicator.classList.add("active");
    indicator.setAttribute("data-index", index);
    indicators.appendChild(indicator);
});
// Логика перемещения слайдера
let currentIndex = 0;
function moveSlider(index) {
    sliderTrack.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll(".indicator").forEach((indicator, i)=>{
        indicator.classList.toggle("active", i === index);
    });
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    moveSlider(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    moveSlider(currentIndex);
}
setInterval(nextSlide, 3000);
// Клик по индикаторам
indicators.addEventListener("click", (e)=>{
    if (e.target.getAttribute("data-index")) {
        currentIndex = parseInt(e.target.getAttribute("data-index"));
        moveSlider(currentIndex);
    }
});
// Клик по кнопкам переключения
leftButton.addEventListener("click", prevSlide);
rightButton.addEventListener("click", nextSlide);

},{"../header/header":"8pjPG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3YYFE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sectionCards", ()=>sectionCards);
var _cartAddToCart = require("../header/cart_addToCart");
var _cardsScale = require("./cards_scale");
var _slider = require("../slider/slider");
var _cardsAnimationJs = require("./cards_animation.js");
var _cart = require("../header/cart");
// Создание элемента HTML
const sectionCards = document.createElement("section");
sectionCards.className = "section-cards";
const containerCards = document.createElement("div");
containerCards.className = "container";
const cardsWrapper = document.createElement("div");
cardsWrapper.className = "cards-wrapper";
window.addEventListener("DOMContentLoaded", ()=>{
    getData();
});
const url = "https://66f59c9b436827ced97492c3.mockapi.io/wb-store/cards";
const options = {
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
};
async function getData() {
    await fetch(url, options).then((result)=>result.json()).then((arr)=>{
        arr.forEach((card)=>{
            createCard(card);
        });
    });
}
function createCard(card) {
    // Обёртка для карточки
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "card-wrapper";
    cardWrapper.id = card.id;
    cardWrapper.setAttribute("data-name", `${card.name}`);
    const cardWrapperSwitch = [
        "card-wrapper",
        "card-wrapper-click"
    ];
    let countEl = 0;
    cardWrapper.addEventListener("click", (e)=>{
        e.stopPropagation();
        (0, _cardsScale.cardScale)();
        const prev = countEl;
        countEl++;
        if (countEl >= cardWrapperSwitch.length) {
            countEl = 0;
            (0, _cardsScale.cardUnScale)();
        }
        cardWrapper.classList.remove(cardWrapperSwitch[prev]);
        cardWrapper.classList.add(cardWrapperSwitch[countEl]);
        document.addEventListener("click", handleOutsideClick);
        function handleOutsideClick(e) {
            if (!cardWrapper.contains(e.target)) {
                (0, _cardsScale.cardUnScale)();
                cardWrapper.classList.remove(cardWrapperSwitch[countEl]);
                cardWrapper.classList.add(cardWrapperSwitch[0]);
                countEl = 0;
                document.removeEventListener("click", handleOutsideClick);
            }
        }
    });
    // Основная карточка
    const cardMain = document.createElement("div");
    cardMain.className = "card";
    // Изображение товара
    const imgItemWrap = document.createElement("div");
    imgItemWrap.className = "img-item-wrap";
    const cardImg = document.createElement("img");
    cardImg.src = card.images;
    cardImg.alt = card.name;
    cardImg.className = card.name;
    imgItemWrap.append(cardImg);
    // Скидка
    const discountCard = document.createElement("p");
    discountCard.textContent = card.discount + " byn";
    // Кнопка добавления в корзину
    const cardBtn = document.createElement("button");
    cardBtn.type = "button";
    cardBtn.className = "card-button";
    cardBtn.textContent = "Add to cart";
    cardBtn.addEventListener("click", (e)=>{
        e.stopPropagation();
        (0, _cartAddToCart.addToCart)(card);
        let item;
        if (e.target.closest(".card-wrapper")) item = e.target.closest(".card-wrapper");
        else if (e.target.closest(".card-wrapper-click")) item = e.target.closest(".card-wrapper-click");
        (0, _cardsAnimationJs.moveToCartAnimation)(item, (0, _cart.cartButton));
    });
    // Цена товара
    const priceNameWrap = document.createElement("div");
    priceNameWrap.className = "price-name-wrap";
    const cardPrice = document.createElement("p");
    cardPrice.textContent = card.price + " byn";
    cardPrice.style.textDecoration = "line-through";
    // Название товара
    const cardItemName = document.createElement("p");
    cardItemName.textContent = card.name;
    cardItemName.style.textTransform = "capitalize";
    cardItemName.style.fontSize = "1.25rem";
    priceNameWrap.append(cardPrice, cardItemName);
    // Добавление элементов в HTML
    cardMain.append(imgItemWrap, discountCard, cardBtn);
    cardWrapper.append(cardMain, priceNameWrap);
    cardsWrapper.append(cardWrapper);
    // Убедимся, что контейнер карточек не дублируется
    if (!document.querySelector(".cards-wrapper")) {
        containerCards.append(cardsWrapper);
        sectionCards.append(containerCards);
        (0, _slider.sliderContainer).after(sectionCards);
    }
}

},{"../header/cart_addToCart":"fAsq9","./cards_scale":"ffyuQ","../slider/slider":"9NDJV","./cards_animation.js":"1hWqq","../header/cart":"gPKPM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ffyuQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cardScale", ()=>cardScale);
parcelHelpers.export(exports, "cardUnScale", ()=>cardUnScale);
var _cart = require("../header/cart");
function cardScale() {
    (0, _cart.body).classList.add("modal-open");
}
function cardUnScale() {
    (0, _cart.body).classList.remove("modal-open");
}

},{"../header/cart":"gPKPM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1hWqq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moveToCartAnimation", ()=>moveToCartAnimation);
function moveToCartAnimation(item, cartBtn) {
    const cardWrapper = item;
    const cartButton = cartBtn;
    if (cardWrapper && cartButton) {
        let cardItem = cardWrapper;
        let cartItem = cartButton;
        if (cardItem && cartItem) {
            let cardPosition = cardItem.getBoundingClientRect();
            let cartPosition = cartItem.getBoundingClientRect();
            function moveToCart() {
                const cardClone = cardItem.cloneNode(true);
                cardClone.className = "clone";
                cardClone.style.position = "fixed";
                cardClone.style.left = cardPosition["x"] + "px";
                cardClone.style.top = cardPosition["y"] + "px";
                cardClone.style.zIndex = 32767;
                document.body.appendChild(cardClone);
                let start_x = cardPosition["x"] + 0.5 * cardPosition["width"];
                let start_y = cardPosition["y"] + 0.5 * cardPosition["height"];
                let delta_x = cartPosition["x"] + 0.5 * cartPosition["width"] - start_x;
                let delta_y = cartPosition["y"] + 0.5 * cartPosition["height"] - start_y;
                cardClone.animate([
                    {
                        transform: `translate(0px, 0px) scale(0.55)`,
                        opacity: `1`
                    },
                    {
                        transform: `translate(${delta_x}px, ${delta_y}px) scale(0.1)`,
                        opacity: `0`
                    }
                ], {
                    duration: 900,
                    easing: "ease-in-out",
                    fill: "forwards"
                }).onfinish = ()=>{
                    document.body.removeChild(cardClone);
                };
            }
            moveToCart(cardItem, cartItem);
        } else console.error("cardItem \u0438\u043B\u0438 cartItem \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
    } else console.error("cardWrapper \u0438\u043B\u0438 cartButton \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqH6m":[function(require,module,exports) {
// Создание footer
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "footer", ()=>footer);
const footer = document.createElement("footer");
footer.className = "footer";
// Создание контейнера
const container = document.createElement("div");
container.className = "container";
// Создание навигации
const navigation = document.createElement("nav");
navigation.className = "navigation-media-f";
// Создание списка для иконок социальных сетей
const list = document.createElement("ul");
list.className = "list-media-f";
// Создание массива с данными для социальных сетей
const socialLinks = [
    {
        class: "facebook",
        href: "https://www.facebook.com/",
        title: "Facebook",
        icon: "fa-brands fa-facebook"
    },
    {
        class: "x",
        href: "https://x.com/?lang=ru",
        title: "X",
        icon: "fa-brands fa-x-twitter"
    },
    {
        class: "google",
        href: "https://www.google.by/",
        title: "Google",
        icon: "fa-brands fa-google"
    },
    {
        class: "pinterest",
        href: "https://ru.pinterest.com/",
        title: "Pinterest",
        icon: "fa-brands fa-pinterest"
    },
    {
        class: "instagram",
        href: "https://www.instagram.com/",
        title: "Instagram",
        icon: "fa-brands fa-instagram"
    },
    {
        class: "stumbleupon",
        href: "https://www.stumbleupon.com/",
        title: "Stumbleupon",
        icon: "fa-brands fa-stumbleupon"
    },
    {
        class: "rss",
        href: "https://rss.com/",
        title: "RSS",
        icon: "fa-solid fa-rss"
    }
];
// Создание элементов списка для каждой социальной сети
socialLinks.forEach((link)=>{
    const listItem = document.createElement("li");
    listItem.className = `item-foot ${link.class}`;
    listItem.style.setProperty("", link.color);
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.title = link.title;
    anchor.target = "_blank";
    const icon = document.createElement("i");
    icon.className = `${link.icon} item-faf item-${link.class}`;
    anchor.appendChild(icon);
    listItem.appendChild(anchor);
    list.appendChild(listItem);
});
// Добавляем список в навигацию
navigation.appendChild(list);
// Создание текста в footer
const footerTextDiv = document.createElement("div");
footerTextDiv.className = "footer-text";
const footerText = document.createElement("p");
footerText.className = "footer-text_color";
footerText.innerHTML = "2024 Collaboration: Polina, Ilya, Sergey";
footerTextDiv.appendChild(footerText);
// Добавляем все элементы в контейнер
container.appendChild(navigation);
container.appendChild(footerTextDiv);
// Добавляем контейнер в footer
footer.appendChild(container);
// Добавляем footer на страницу
document.body.appendChild(footer);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aP7aF","8lRBv"], "8lRBv", "parcelRequire80d0")

//# sourceMappingURL=index.59a40e7a.js.map
