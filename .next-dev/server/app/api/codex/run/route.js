/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/codex/run/route";
exports.ids = ["app/api/codex/run/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("readline");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcodex%2Frun%2Froute&page=%2Fapi%2Fcodex%2Frun%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcodex%2Frun%2Froute.ts&appDir=%2FUsers%2Fsid%2Fcoding-projects%2Fask-luigi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsid%2Fcoding-projects%2Fask-luigi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcodex%2Frun%2Froute&page=%2Fapi%2Fcodex%2Frun%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcodex%2Frun%2Froute.ts&appDir=%2FUsers%2Fsid%2Fcoding-projects%2Fask-luigi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsid%2Fcoding-projects%2Fask-luigi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_sid_coding_projects_ask_luigi_app_api_codex_run_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/codex/run/route.ts */ \"(rsc)/./app/api/codex/run/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/codex/run/route\",\n        pathname: \"/api/codex/run\",\n        filename: \"route\",\n        bundlePath: \"app/api/codex/run/route\"\n    },\n    resolvedPagePath: \"/Users/sid/coding-projects/ask-luigi/app/api/codex/run/route.ts\",\n    nextConfigOutput,\n    userland: _Users_sid_coding_projects_ask_luigi_app_api_codex_run_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb2RleCUyRnJ1biUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY29kZXglMkZydW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjb2RleCUyRnJ1biUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNpZCUyRmNvZGluZy1wcm9qZWN0cyUyRmFzay1sdWlnaSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZzaWQlMkZjb2RpbmctcHJvamVjdHMlMkZhc2stbHVpZ2kmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9zaWQvY29kaW5nLXByb2plY3RzL2Fzay1sdWlnaS9hcHAvYXBpL2NvZGV4L3J1bi9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29kZXgvcnVuL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY29kZXgvcnVuXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb2RleC9ydW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2lkL2NvZGluZy1wcm9qZWN0cy9hc2stbHVpZ2kvYXBwL2FwaS9jb2RleC9ydW4vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcodex%2Frun%2Froute&page=%2Fapi%2Fcodex%2Frun%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcodex%2Frun%2Froute.ts&appDir=%2FUsers%2Fsid%2Fcoding-projects%2Fask-luigi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsid%2Fcoding-projects%2Fask-luigi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/codex/run/route.ts":
/*!************************************!*\
  !*** ./app/api/codex/run/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_codex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/codex */ \"(rsc)/./lib/codex.ts\");\n\nasync function POST(req) {\n    const { prompt } = await req.json();\n    if (!prompt || typeof prompt !== \"string\") {\n        return new Response(JSON.stringify({\n            error: \"prompt is required\"\n        }), {\n            status: 400\n        });\n    }\n    const encoder = new TextEncoder();\n    const stream = new ReadableStream({\n        async start (controller) {\n            try {\n                for await (const event of (0,_lib_codex__WEBPACK_IMPORTED_MODULE_0__.runCodex)(prompt)){\n                    const data = `data: ${JSON.stringify(event)}\\n\\n`;\n                    controller.enqueue(encoder.encode(data));\n                    // If error or done, close the stream\n                    if (event.type === \"done\" || event.type === \"error\") {\n                        controller.close();\n                        return;\n                    }\n                }\n                controller.close();\n            } catch  {\n                const data = `data: ${JSON.stringify({\n                    type: \"error\",\n                    message: \"Stream failed\"\n                })}\\n\\n`;\n                controller.enqueue(encoder.encode(data));\n                controller.close();\n            }\n        }\n    });\n    return new Response(stream, {\n        headers: {\n            \"Content-Type\": \"text/event-stream\",\n            \"Cache-Control\": \"no-cache\",\n            Connection: \"keep-alive\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvZGV4L3J1bi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUN1QztBQUVoQyxlQUFlQyxLQUFLQyxHQUFnQjtJQUN6QyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7SUFFakMsSUFBSSxDQUFDRCxVQUFVLE9BQU9BLFdBQVcsVUFBVTtRQUN6QyxPQUFPLElBQUlFLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXFCLElBQUk7WUFDbkVDLFFBQVE7UUFDVjtJQUNGO0lBRUEsTUFBTUMsVUFBVSxJQUFJQztJQUVwQixNQUFNQyxTQUFTLElBQUlDLGVBQWU7UUFDaEMsTUFBTUMsT0FBTUMsVUFBVTtZQUNwQixJQUFJO2dCQUNGLFdBQVcsTUFBTUMsU0FBU2hCLG9EQUFRQSxDQUFDRyxRQUFTO29CQUMxQyxNQUFNYyxPQUFPLENBQUMsTUFBTSxFQUFFWCxLQUFLQyxTQUFTLENBQUNTLE9BQU8sSUFBSSxDQUFDO29CQUNqREQsV0FBV0csT0FBTyxDQUFDUixRQUFRUyxNQUFNLENBQUNGO29CQUVsQyxxQ0FBcUM7b0JBQ3JDLElBQUlELE1BQU1JLElBQUksS0FBSyxVQUFVSixNQUFNSSxJQUFJLEtBQUssU0FBUzt3QkFDbkRMLFdBQVdNLEtBQUs7d0JBQ2hCO29CQUNGO2dCQUNGO2dCQUNBTixXQUFXTSxLQUFLO1lBQ2xCLEVBQUUsT0FBTTtnQkFDTixNQUFNSixPQUFPLENBQUMsTUFBTSxFQUFFWCxLQUFLQyxTQUFTLENBQUM7b0JBQUVhLE1BQU07b0JBQVNFLFNBQVM7Z0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUN2RlAsV0FBV0csT0FBTyxDQUFDUixRQUFRUyxNQUFNLENBQUNGO2dCQUNsQ0YsV0FBV00sS0FBSztZQUNsQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPLElBQUloQixTQUFTTyxRQUFRO1FBQzFCVyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQkMsWUFBWTtRQUNkO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3NpZC9jb2RpbmctcHJvamVjdHMvYXNrLWx1aWdpL2FwcC9hcGkvY29kZXgvcnVuL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBydW5Db2RleCB9IGZyb20gXCJAL2xpYi9jb2RleFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgcHJvbXB0IH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gIGlmICghcHJvbXB0IHx8IHR5cGVvZiBwcm9tcHQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwicHJvbXB0IGlzIHJlcXVpcmVkXCIgfSksIHtcbiAgICAgIHN0YXR1czogNDAwLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuXG4gIGNvbnN0IHN0cmVhbSA9IG5ldyBSZWFkYWJsZVN0cmVhbSh7XG4gICAgYXN5bmMgc3RhcnQoY29udHJvbGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBldmVudCBvZiBydW5Db2RleChwcm9tcHQpKSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGBkYXRhOiAke0pTT04uc3RyaW5naWZ5KGV2ZW50KX1cXG5cXG5gO1xuICAgICAgICAgIGNvbnRyb2xsZXIuZW5xdWV1ZShlbmNvZGVyLmVuY29kZShkYXRhKSk7XG5cbiAgICAgICAgICAvLyBJZiBlcnJvciBvciBkb25lLCBjbG9zZSB0aGUgc3RyZWFtXG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZG9uZVwiIHx8IGV2ZW50LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLmNsb3NlKCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGBkYXRhOiAke0pTT04uc3RyaW5naWZ5KHsgdHlwZTogXCJlcnJvclwiLCBtZXNzYWdlOiBcIlN0cmVhbSBmYWlsZWRcIiB9KX1cXG5cXG5gO1xuICAgICAgICBjb250cm9sbGVyLmVucXVldWUoZW5jb2Rlci5lbmNvZGUoZGF0YSkpO1xuICAgICAgICBjb250cm9sbGVyLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShzdHJlYW0sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvZXZlbnQtc3RyZWFtXCIsXG4gICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxuICAgICAgQ29ubmVjdGlvbjogXCJrZWVwLWFsaXZlXCIsXG4gICAgfSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicnVuQ29kZXgiLCJQT1NUIiwicmVxIiwicHJvbXB0IiwianNvbiIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic3RhdHVzIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwic3RyZWFtIiwiUmVhZGFibGVTdHJlYW0iLCJzdGFydCIsImNvbnRyb2xsZXIiLCJldmVudCIsImRhdGEiLCJlbnF1ZXVlIiwiZW5jb2RlIiwidHlwZSIsImNsb3NlIiwibWVzc2FnZSIsImhlYWRlcnMiLCJDb25uZWN0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/codex/run/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/codex.ts":
/*!**********************!*\
  !*** ./lib/codex.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isCodexRunning: () => (/* binding */ isCodexRunning),\n/* harmony export */   resetThread: () => (/* binding */ resetThread),\n/* harmony export */   runCodex: () => (/* binding */ runCodex)\n/* harmony export */ });\n/* harmony import */ var _openai_codex_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openai/codex-sdk */ \"(rsc)/./node_modules/@openai/codex-sdk/dist/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// Module-level state\nlet client = null;\nlet activeThread = null;\nlet isRunning = false;\nfunction getClient() {\n    if (!client) {\n        // Set CODEX_HOME like html-campaign does\n        const codexHome = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \".codex\");\n        // Create the directory if it doesn't exist\n        if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(codexHome)) {\n            fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(codexHome, {\n                recursive: true\n            });\n        }\n        process.env.CODEX_HOME = codexHome;\n        // Use same pattern as html-campaign: new Codex() with no config\n        client = new _openai_codex_sdk__WEBPACK_IMPORTED_MODULE_2__.Codex();\n    }\n    return client;\n}\n/**\n * Run a prompt against the project. Yields CodexEvent objects.\n *\n * - Creates a new thread on first call, reuses it on subsequent calls\n *   so follow-up prompts have context.\n * - workingDirectory = process.cwd() so Codex edits the actual project files.\n * - sandboxMode = \"workspace-write\" so Codex can modify files.\n * - skipGitRepoCheck = true because we manage git ourselves.\n */ async function* runCodex(prompt) {\n    if (isRunning) {\n        yield {\n            type: \"error\",\n            message: \"A Codex run is already in progress.\"\n        };\n        return;\n    }\n    isRunning = true;\n    try {\n        const codex = getClient();\n        // Start a new thread or reuse existing one\n        if (!activeThread) {\n            activeThread = codex.startThread({\n                workingDirectory: process.cwd(),\n                skipGitRepoCheck: true,\n                sandboxMode: \"workspace-write\"\n            });\n        }\n        const streamedTurn = await activeThread.runStreamed(prompt);\n        for await (const event of streamedTurn.events){\n            // Classify events into our simplified types based on Codex SDK events\n            if (event.type === \"item.completed\" && event.item) {\n                if (event.item.type === \"reasoning\") {\n                    yield {\n                        type: \"plan\",\n                        content: event.item.text\n                    };\n                } else if (event.item.type === \"agent_message\") {\n                    yield {\n                        type: \"message\",\n                        content: event.item.text\n                    };\n                } else if (event.item.type === \"file_change\") {\n                    // Yield a file change event for each change in the patch\n                    for (const change of event.item.changes){\n                        yield {\n                            type: \"file_change\",\n                            path: change.path,\n                            status: change.kind\n                        };\n                    }\n                }\n            }\n            if (event.type === \"error\") {\n                yield {\n                    type: \"error\",\n                    message: event.message\n                };\n            }\n        }\n        yield {\n            type: \"done\"\n        };\n    } catch (err) {\n        const message = err instanceof Error ? err.message : \"Codex run failed\";\n        yield {\n            type: \"error\",\n            message\n        };\n    } finally{\n        isRunning = false;\n    }\n}\n/**\n * Reset the thread (e.g., after deploying, start fresh).\n */ function resetThread() {\n    activeThread = null;\n}\n/**\n * Check if a run is in progress (used by git routes to prevent concurrent operations).\n */ function isCodexRunning() {\n    return isRunning;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDMUI7QUFDSjtBQUVwQixxQkFBcUI7QUFDckIsSUFBSUcsU0FBdUI7QUFDM0IsSUFBSUMsZUFBOEI7QUFDbEMsSUFBSUMsWUFBWTtBQUVoQixTQUFTQztJQUNQLElBQUksQ0FBQ0gsUUFBUTtRQUNYLHlDQUF5QztRQUN6QyxNQUFNSSxZQUFZTixnREFBUyxDQUFDUSxRQUFRQyxHQUFHLElBQUk7UUFDM0MsMkNBQTJDO1FBQzNDLElBQUksQ0FBQ1Isb0RBQWEsQ0FBQ0ssWUFBWTtZQUM3QkwsbURBQVksQ0FBQ0ssV0FBVztnQkFBRU0sV0FBVztZQUFLO1FBQzVDO1FBQ0FKLFFBQVFLLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHUjtRQUN6QixnRUFBZ0U7UUFDaEVKLFNBQVMsSUFBSUgsb0RBQUtBO0lBQ3BCO0lBQ0EsT0FBT0c7QUFDVDtBQVVBOzs7Ozs7OztDQVFDLEdBQ00sZ0JBQWdCYSxTQUFTQyxNQUFjO0lBQzVDLElBQUlaLFdBQVc7UUFDYixNQUFNO1lBQUVhLE1BQU07WUFBU0MsU0FBUztRQUFzQztRQUN0RTtJQUNGO0lBRUFkLFlBQVk7SUFFWixJQUFJO1FBQ0YsTUFBTWUsUUFBUWQ7UUFFZCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDRixjQUFjO1lBQ2pCQSxlQUFlZ0IsTUFBTUMsV0FBVyxDQUFDO2dCQUMvQkMsa0JBQWtCYixRQUFRQyxHQUFHO2dCQUM3QmEsa0JBQWtCO2dCQUNsQkMsYUFBYTtZQUNmO1FBQ0Y7UUFFQSxNQUFNQyxlQUFlLE1BQU1yQixhQUFhc0IsV0FBVyxDQUFDVDtRQUVwRCxXQUFXLE1BQU1VLFNBQVNGLGFBQWFHLE1BQU0sQ0FBRTtZQUM3QyxzRUFBc0U7WUFFdEUsSUFBSUQsTUFBTVQsSUFBSSxLQUFLLG9CQUFvQlMsTUFBTUUsSUFBSSxFQUFFO2dCQUNqRCxJQUFJRixNQUFNRSxJQUFJLENBQUNYLElBQUksS0FBSyxhQUFhO29CQUNuQyxNQUFNO3dCQUFFQSxNQUFNO3dCQUFRWSxTQUFTSCxNQUFNRSxJQUFJLENBQUNFLElBQUk7b0JBQUM7Z0JBQ2pELE9BQU8sSUFBSUosTUFBTUUsSUFBSSxDQUFDWCxJQUFJLEtBQUssaUJBQWlCO29CQUM5QyxNQUFNO3dCQUFFQSxNQUFNO3dCQUFXWSxTQUFTSCxNQUFNRSxJQUFJLENBQUNFLElBQUk7b0JBQUM7Z0JBQ3BELE9BQU8sSUFBSUosTUFBTUUsSUFBSSxDQUFDWCxJQUFJLEtBQUssZUFBZTtvQkFDNUMseURBQXlEO29CQUN6RCxLQUFLLE1BQU1jLFVBQVVMLE1BQU1FLElBQUksQ0FBQ0ksT0FBTyxDQUFFO3dCQUN2QyxNQUFNOzRCQUNKZixNQUFNOzRCQUNOakIsTUFBTStCLE9BQU8vQixJQUFJOzRCQUNqQmlDLFFBQVFGLE9BQU9HLElBQUk7d0JBQ3JCO29CQUNGO2dCQUNGO1lBQ0Y7WUFFQSxJQUFJUixNQUFNVCxJQUFJLEtBQUssU0FBUztnQkFDMUIsTUFBTTtvQkFBRUEsTUFBTTtvQkFBU0MsU0FBU1EsTUFBTVIsT0FBTztnQkFBQztZQUNoRDtRQUNGO1FBRUEsTUFBTTtZQUFFRCxNQUFNO1FBQU87SUFDdkIsRUFBRSxPQUFPa0IsS0FBSztRQUNaLE1BQU1qQixVQUFVaUIsZUFBZUMsUUFBUUQsSUFBSWpCLE9BQU8sR0FBRztRQUNyRCxNQUFNO1lBQUVELE1BQU07WUFBU0M7UUFBUTtJQUNqQyxTQUFVO1FBQ1JkLFlBQVk7SUFDZDtBQUNGO0FBRUE7O0NBRUMsR0FDTSxTQUFTaUM7SUFDZGxDLGVBQWU7QUFDakI7QUFFQTs7Q0FFQyxHQUNNLFNBQVNtQztJQUNkLE9BQU9sQztBQUNUIiwic291cmNlcyI6WyIvVXNlcnMvc2lkL2NvZGluZy1wcm9qZWN0cy9hc2stbHVpZ2kvbGliL2NvZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvZGV4LCBUaHJlYWQgfSBmcm9tIFwiQG9wZW5haS9jb2RleC1zZGtcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbi8vIE1vZHVsZS1sZXZlbCBzdGF0ZVxubGV0IGNsaWVudDogQ29kZXggfCBudWxsID0gbnVsbDtcbmxldCBhY3RpdmVUaHJlYWQ6IFRocmVhZCB8IG51bGwgPSBudWxsO1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBnZXRDbGllbnQoKTogQ29kZXgge1xuICBpZiAoIWNsaWVudCkge1xuICAgIC8vIFNldCBDT0RFWF9IT01FIGxpa2UgaHRtbC1jYW1wYWlnbiBkb2VzXG4gICAgY29uc3QgY29kZXhIb21lID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiLmNvZGV4XCIpO1xuICAgIC8vIENyZWF0ZSB0aGUgZGlyZWN0b3J5IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoY29kZXhIb21lKSkge1xuICAgICAgZnMubWtkaXJTeW5jKGNvZGV4SG9tZSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuICAgIHByb2Nlc3MuZW52LkNPREVYX0hPTUUgPSBjb2RleEhvbWU7XG4gICAgLy8gVXNlIHNhbWUgcGF0dGVybiBhcyBodG1sLWNhbXBhaWduOiBuZXcgQ29kZXgoKSB3aXRoIG5vIGNvbmZpZ1xuICAgIGNsaWVudCA9IG5ldyBDb2RleCgpO1xuICB9XG4gIHJldHVybiBjbGllbnQ7XG59XG5cbi8vIEV2ZW50IHR5cGVzIHRoZSBBUEkgcm91dGUgd2lsbCBzdHJlYW0gdG8gdGhlIGNsaWVudFxuZXhwb3J0IHR5cGUgQ29kZXhFdmVudCA9XG4gIHwgeyB0eXBlOiBcInBsYW5cIjsgY29udGVudDogc3RyaW5nIH1cbiAgfCB7IHR5cGU6IFwiZmlsZV9jaGFuZ2VcIjsgcGF0aDogc3RyaW5nOyBzdGF0dXM6IHN0cmluZyB9XG4gIHwgeyB0eXBlOiBcIm1lc3NhZ2VcIjsgY29udGVudDogc3RyaW5nIH1cbiAgfCB7IHR5cGU6IFwiZXJyb3JcIjsgbWVzc2FnZTogc3RyaW5nIH1cbiAgfCB7IHR5cGU6IFwiZG9uZVwiIH07XG5cbi8qKlxuICogUnVuIGEgcHJvbXB0IGFnYWluc3QgdGhlIHByb2plY3QuIFlpZWxkcyBDb2RleEV2ZW50IG9iamVjdHMuXG4gKlxuICogLSBDcmVhdGVzIGEgbmV3IHRocmVhZCBvbiBmaXJzdCBjYWxsLCByZXVzZXMgaXQgb24gc3Vic2VxdWVudCBjYWxsc1xuICogICBzbyBmb2xsb3ctdXAgcHJvbXB0cyBoYXZlIGNvbnRleHQuXG4gKiAtIHdvcmtpbmdEaXJlY3RvcnkgPSBwcm9jZXNzLmN3ZCgpIHNvIENvZGV4IGVkaXRzIHRoZSBhY3R1YWwgcHJvamVjdCBmaWxlcy5cbiAqIC0gc2FuZGJveE1vZGUgPSBcIndvcmtzcGFjZS13cml0ZVwiIHNvIENvZGV4IGNhbiBtb2RpZnkgZmlsZXMuXG4gKiAtIHNraXBHaXRSZXBvQ2hlY2sgPSB0cnVlIGJlY2F1c2Ugd2UgbWFuYWdlIGdpdCBvdXJzZWx2ZXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiogcnVuQ29kZXgocHJvbXB0OiBzdHJpbmcpOiBBc3luY0dlbmVyYXRvcjxDb2RleEV2ZW50PiB7XG4gIGlmIChpc1J1bm5pbmcpIHtcbiAgICB5aWVsZCB7IHR5cGU6IFwiZXJyb3JcIiwgbWVzc2FnZTogXCJBIENvZGV4IHJ1biBpcyBhbHJlYWR5IGluIHByb2dyZXNzLlwiIH07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXNSdW5uaW5nID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIGNvbnN0IGNvZGV4ID0gZ2V0Q2xpZW50KCk7XG5cbiAgICAvLyBTdGFydCBhIG5ldyB0aHJlYWQgb3IgcmV1c2UgZXhpc3Rpbmcgb25lXG4gICAgaWYgKCFhY3RpdmVUaHJlYWQpIHtcbiAgICAgIGFjdGl2ZVRocmVhZCA9IGNvZGV4LnN0YXJ0VGhyZWFkKHtcbiAgICAgICAgd29ya2luZ0RpcmVjdG9yeTogcHJvY2Vzcy5jd2QoKSxcbiAgICAgICAgc2tpcEdpdFJlcG9DaGVjazogdHJ1ZSxcbiAgICAgICAgc2FuZGJveE1vZGU6IFwid29ya3NwYWNlLXdyaXRlXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJlYW1lZFR1cm4gPSBhd2FpdCBhY3RpdmVUaHJlYWQucnVuU3RyZWFtZWQocHJvbXB0KTtcblxuICAgIGZvciBhd2FpdCAoY29uc3QgZXZlbnQgb2Ygc3RyZWFtZWRUdXJuLmV2ZW50cykge1xuICAgICAgLy8gQ2xhc3NpZnkgZXZlbnRzIGludG8gb3VyIHNpbXBsaWZpZWQgdHlwZXMgYmFzZWQgb24gQ29kZXggU0RLIGV2ZW50c1xuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJpdGVtLmNvbXBsZXRlZFwiICYmIGV2ZW50Lml0ZW0pIHtcbiAgICAgICAgaWYgKGV2ZW50Lml0ZW0udHlwZSA9PT0gXCJyZWFzb25pbmdcIikge1xuICAgICAgICAgIHlpZWxkIHsgdHlwZTogXCJwbGFuXCIsIGNvbnRlbnQ6IGV2ZW50Lml0ZW0udGV4dCB9O1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50Lml0ZW0udHlwZSA9PT0gXCJhZ2VudF9tZXNzYWdlXCIpIHtcbiAgICAgICAgICB5aWVsZCB7IHR5cGU6IFwibWVzc2FnZVwiLCBjb250ZW50OiBldmVudC5pdGVtLnRleHQgfTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5pdGVtLnR5cGUgPT09IFwiZmlsZV9jaGFuZ2VcIikge1xuICAgICAgICAgIC8vIFlpZWxkIGEgZmlsZSBjaGFuZ2UgZXZlbnQgZm9yIGVhY2ggY2hhbmdlIGluIHRoZSBwYXRjaFxuICAgICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIGV2ZW50Lml0ZW0uY2hhbmdlcykge1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICB0eXBlOiBcImZpbGVfY2hhbmdlXCIsXG4gICAgICAgICAgICAgIHBhdGg6IGNoYW5nZS5wYXRoLFxuICAgICAgICAgICAgICBzdGF0dXM6IGNoYW5nZS5raW5kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICB5aWVsZCB7IHR5cGU6IFwiZXJyb3JcIiwgbWVzc2FnZTogZXZlbnQubWVzc2FnZSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHlpZWxkIHsgdHlwZTogXCJkb25lXCIgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcIkNvZGV4IHJ1biBmYWlsZWRcIjtcbiAgICB5aWVsZCB7IHR5cGU6IFwiZXJyb3JcIiwgbWVzc2FnZSB9O1xuICB9IGZpbmFsbHkge1xuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogUmVzZXQgdGhlIHRocmVhZCAoZS5nLiwgYWZ0ZXIgZGVwbG95aW5nLCBzdGFydCBmcmVzaCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldFRocmVhZCgpIHtcbiAgYWN0aXZlVGhyZWFkID0gbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHJ1biBpcyBpbiBwcm9ncmVzcyAodXNlZCBieSBnaXQgcm91dGVzIHRvIHByZXZlbnQgY29uY3VycmVudCBvcGVyYXRpb25zKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ29kZXhSdW5uaW5nKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNSdW5uaW5nO1xufVxuIl0sIm5hbWVzIjpbIkNvZGV4IiwicGF0aCIsImZzIiwiY2xpZW50IiwiYWN0aXZlVGhyZWFkIiwiaXNSdW5uaW5nIiwiZ2V0Q2xpZW50IiwiY29kZXhIb21lIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwicmVjdXJzaXZlIiwiZW52IiwiQ09ERVhfSE9NRSIsInJ1bkNvZGV4IiwicHJvbXB0IiwidHlwZSIsIm1lc3NhZ2UiLCJjb2RleCIsInN0YXJ0VGhyZWFkIiwid29ya2luZ0RpcmVjdG9yeSIsInNraXBHaXRSZXBvQ2hlY2siLCJzYW5kYm94TW9kZSIsInN0cmVhbWVkVHVybiIsInJ1blN0cmVhbWVkIiwiZXZlbnQiLCJldmVudHMiLCJpdGVtIiwiY29udGVudCIsInRleHQiLCJjaGFuZ2UiLCJjaGFuZ2VzIiwic3RhdHVzIiwia2luZCIsImVyciIsIkVycm9yIiwicmVzZXRUaHJlYWQiLCJpc0NvZGV4UnVubmluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/codex.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@openai"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcodex%2Frun%2Froute&page=%2Fapi%2Fcodex%2Frun%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcodex%2Frun%2Froute.ts&appDir=%2FUsers%2Fsid%2Fcoding-projects%2Fask-luigi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsid%2Fcoding-projects%2Fask-luigi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();