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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isCodexRunning: () => (/* binding */ isCodexRunning),\n/* harmony export */   resetThread: () => (/* binding */ resetThread),\n/* harmony export */   runCodex: () => (/* binding */ runCodex)\n/* harmony export */ });\n/* harmony import */ var _openai_codex_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openai/codex-sdk */ \"(rsc)/./node_modules/@openai/codex-sdk/dist/index.js\");\n\n// Module-level state\nlet client = null;\nlet activeThread = null;\nlet isRunning = false;\nfunction getClient() {\n    if (!client) {\n        client = new _openai_codex_sdk__WEBPACK_IMPORTED_MODULE_0__.Codex({\n            apiKey: process.env.OPENAI_API_KEY\n        });\n    }\n    return client;\n}\n/**\n * Run a prompt against the project. Yields CodexEvent objects.\n *\n * - Creates a new thread on first call, reuses it on subsequent calls\n *   so follow-up prompts have context.\n * - workingDirectory = process.cwd() so Codex edits the actual project files.\n * - sandboxMode = \"workspace-write\" so Codex can modify files.\n * - skipGitRepoCheck = true because we manage git ourselves.\n */ async function* runCodex(prompt) {\n    if (isRunning) {\n        yield {\n            type: \"error\",\n            message: \"A Codex run is already in progress.\"\n        };\n        return;\n    }\n    isRunning = true;\n    try {\n        const codex = getClient();\n        // Start a new thread or reuse existing one\n        if (!activeThread) {\n            activeThread = await codex.startThread({\n                workingDirectory: process.cwd(),\n                skipGitRepoCheck: true,\n                sandboxMode: \"workspace-write\",\n                model: \"gpt-4o\"\n            });\n        }\n        const streamedTurn = await activeThread.runStreamed(prompt);\n        for await (const event of streamedTurn.events){\n            // Classify events into our simplified types based on Codex SDK events\n            if (event.type === \"item.completed\" && event.item) {\n                if (event.item.type === \"reasoning\") {\n                    yield {\n                        type: \"plan\",\n                        content: event.item.text\n                    };\n                } else if (event.item.type === \"agent_message\") {\n                    yield {\n                        type: \"message\",\n                        content: event.item.text\n                    };\n                } else if (event.item.type === \"file_change\") {\n                    // Yield a file change event for each change in the patch\n                    for (const change of event.item.changes){\n                        yield {\n                            type: \"file_change\",\n                            path: change.path,\n                            status: change.kind\n                        };\n                    }\n                }\n            }\n            if (event.type === \"error\") {\n                yield {\n                    type: \"error\",\n                    message: event.message\n                };\n            }\n        }\n        yield {\n            type: \"done\"\n        };\n    } catch (err) {\n        const message = err instanceof Error ? err.message : \"Codex run failed\";\n        yield {\n            type: \"error\",\n            message\n        };\n    } finally{\n        isRunning = false;\n    }\n}\n/**\n * Reset the thread (e.g., after deploying, start fresh).\n */ function resetThread() {\n    activeThread = null;\n}\n/**\n * Check if a run is in progress (used by git routes to prevent concurrent operations).\n */ function isCodexRunning() {\n    return isRunning;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUVsRCxxQkFBcUI7QUFDckIsSUFBSUMsU0FBdUI7QUFDM0IsSUFBSUMsZUFBOEI7QUFDbEMsSUFBSUMsWUFBWTtBQUVoQixTQUFTQztJQUNQLElBQUksQ0FBQ0gsUUFBUTtRQUNYQSxTQUFTLElBQUlELG9EQUFLQSxDQUFDO1lBQUVLLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztRQUFDO0lBQzFEO0lBQ0EsT0FBT1A7QUFDVDtBQVVBOzs7Ozs7OztDQVFDLEdBQ00sZ0JBQWdCUSxTQUFTQyxNQUFjO0lBQzVDLElBQUlQLFdBQVc7UUFDYixNQUFNO1lBQUVRLE1BQU07WUFBU0MsU0FBUztRQUFzQztRQUN0RTtJQUNGO0lBRUFULFlBQVk7SUFFWixJQUFJO1FBQ0YsTUFBTVUsUUFBUVQ7UUFFZCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDRixjQUFjO1lBQ2pCQSxlQUFlLE1BQU1XLE1BQU1DLFdBQVcsQ0FBQztnQkFDckNDLGtCQUFrQlQsUUFBUVUsR0FBRztnQkFDN0JDLGtCQUFrQjtnQkFDbEJDLGFBQWE7Z0JBQ2JDLE9BQU87WUFDVDtRQUNGO1FBRUEsTUFBTUMsZUFBZSxNQUFNbEIsYUFBYW1CLFdBQVcsQ0FBQ1g7UUFFcEQsV0FBVyxNQUFNWSxTQUFTRixhQUFhRyxNQUFNLENBQUU7WUFDN0Msc0VBQXNFO1lBRXRFLElBQUlELE1BQU1YLElBQUksS0FBSyxvQkFBb0JXLE1BQU1FLElBQUksRUFBRTtnQkFDakQsSUFBSUYsTUFBTUUsSUFBSSxDQUFDYixJQUFJLEtBQUssYUFBYTtvQkFDbkMsTUFBTTt3QkFBRUEsTUFBTTt3QkFBUWMsU0FBU0gsTUFBTUUsSUFBSSxDQUFDRSxJQUFJO29CQUFDO2dCQUNqRCxPQUFPLElBQUlKLE1BQU1FLElBQUksQ0FBQ2IsSUFBSSxLQUFLLGlCQUFpQjtvQkFDOUMsTUFBTTt3QkFBRUEsTUFBTTt3QkFBV2MsU0FBU0gsTUFBTUUsSUFBSSxDQUFDRSxJQUFJO29CQUFDO2dCQUNwRCxPQUFPLElBQUlKLE1BQU1FLElBQUksQ0FBQ2IsSUFBSSxLQUFLLGVBQWU7b0JBQzVDLHlEQUF5RDtvQkFDekQsS0FBSyxNQUFNZ0IsVUFBVUwsTUFBTUUsSUFBSSxDQUFDSSxPQUFPLENBQUU7d0JBQ3ZDLE1BQU07NEJBQ0pqQixNQUFNOzRCQUNOa0IsTUFBTUYsT0FBT0UsSUFBSTs0QkFDakJDLFFBQVFILE9BQU9JLElBQUk7d0JBQ3JCO29CQUNGO2dCQUNGO1lBQ0Y7WUFFQSxJQUFJVCxNQUFNWCxJQUFJLEtBQUssU0FBUztnQkFDMUIsTUFBTTtvQkFBRUEsTUFBTTtvQkFBU0MsU0FBU1UsTUFBTVYsT0FBTztnQkFBQztZQUNoRDtRQUNGO1FBRUEsTUFBTTtZQUFFRCxNQUFNO1FBQU87SUFDdkIsRUFBRSxPQUFPcUIsS0FBSztRQUNaLE1BQU1wQixVQUFVb0IsZUFBZUMsUUFBUUQsSUFBSXBCLE9BQU8sR0FBRztRQUNyRCxNQUFNO1lBQUVELE1BQU07WUFBU0M7UUFBUTtJQUNqQyxTQUFVO1FBQ1JULFlBQVk7SUFDZDtBQUNGO0FBRUE7O0NBRUMsR0FDTSxTQUFTK0I7SUFDZGhDLGVBQWU7QUFDakI7QUFFQTs7Q0FFQyxHQUNNLFNBQVNpQztJQUNkLE9BQU9oQztBQUNUIiwic291cmNlcyI6WyIvVXNlcnMvc2lkL2NvZGluZy1wcm9qZWN0cy9hc2stbHVpZ2kvbGliL2NvZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvZGV4LCBUaHJlYWQgfSBmcm9tIFwiQG9wZW5haS9jb2RleC1zZGtcIjtcblxuLy8gTW9kdWxlLWxldmVsIHN0YXRlXG5sZXQgY2xpZW50OiBDb2RleCB8IG51bGwgPSBudWxsO1xubGV0IGFjdGl2ZVRocmVhZDogVGhyZWFkIHwgbnVsbCA9IG51bGw7XG5sZXQgaXNSdW5uaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGdldENsaWVudCgpOiBDb2RleCB7XG4gIGlmICghY2xpZW50KSB7XG4gICAgY2xpZW50ID0gbmV3IENvZGV4KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSB9KTtcbiAgfVxuICByZXR1cm4gY2xpZW50O1xufVxuXG4vLyBFdmVudCB0eXBlcyB0aGUgQVBJIHJvdXRlIHdpbGwgc3RyZWFtIHRvIHRoZSBjbGllbnRcbmV4cG9ydCB0eXBlIENvZGV4RXZlbnQgPVxuICB8IHsgdHlwZTogXCJwbGFuXCI7IGNvbnRlbnQ6IHN0cmluZyB9XG4gIHwgeyB0eXBlOiBcImZpbGVfY2hhbmdlXCI7IHBhdGg6IHN0cmluZzsgc3RhdHVzOiBzdHJpbmcgfVxuICB8IHsgdHlwZTogXCJtZXNzYWdlXCI7IGNvbnRlbnQ6IHN0cmluZyB9XG4gIHwgeyB0eXBlOiBcImVycm9yXCI7IG1lc3NhZ2U6IHN0cmluZyB9XG4gIHwgeyB0eXBlOiBcImRvbmVcIiB9O1xuXG4vKipcbiAqIFJ1biBhIHByb21wdCBhZ2FpbnN0IHRoZSBwcm9qZWN0LiBZaWVsZHMgQ29kZXhFdmVudCBvYmplY3RzLlxuICpcbiAqIC0gQ3JlYXRlcyBhIG5ldyB0aHJlYWQgb24gZmlyc3QgY2FsbCwgcmV1c2VzIGl0IG9uIHN1YnNlcXVlbnQgY2FsbHNcbiAqICAgc28gZm9sbG93LXVwIHByb21wdHMgaGF2ZSBjb250ZXh0LlxuICogLSB3b3JraW5nRGlyZWN0b3J5ID0gcHJvY2Vzcy5jd2QoKSBzbyBDb2RleCBlZGl0cyB0aGUgYWN0dWFsIHByb2plY3QgZmlsZXMuXG4gKiAtIHNhbmRib3hNb2RlID0gXCJ3b3Jrc3BhY2Utd3JpdGVcIiBzbyBDb2RleCBjYW4gbW9kaWZ5IGZpbGVzLlxuICogLSBza2lwR2l0UmVwb0NoZWNrID0gdHJ1ZSBiZWNhdXNlIHdlIG1hbmFnZSBnaXQgb3Vyc2VsdmVzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIHJ1bkNvZGV4KHByb21wdDogc3RyaW5nKTogQXN5bmNHZW5lcmF0b3I8Q29kZXhFdmVudD4ge1xuICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgeWllbGQgeyB0eXBlOiBcImVycm9yXCIsIG1lc3NhZ2U6IFwiQSBDb2RleCBydW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy5cIiB9O1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlzUnVubmluZyA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb2RleCA9IGdldENsaWVudCgpO1xuXG4gICAgLy8gU3RhcnQgYSBuZXcgdGhyZWFkIG9yIHJldXNlIGV4aXN0aW5nIG9uZVxuICAgIGlmICghYWN0aXZlVGhyZWFkKSB7XG4gICAgICBhY3RpdmVUaHJlYWQgPSBhd2FpdCBjb2RleC5zdGFydFRocmVhZCh7XG4gICAgICAgIHdvcmtpbmdEaXJlY3Rvcnk6IHByb2Nlc3MuY3dkKCksXG4gICAgICAgIHNraXBHaXRSZXBvQ2hlY2s6IHRydWUsXG4gICAgICAgIHNhbmRib3hNb2RlOiBcIndvcmtzcGFjZS13cml0ZVwiLFxuICAgICAgICBtb2RlbDogXCJncHQtNG9cIiwgLy8gVXNlIEdQVC00byB3aGljaCBzaG91bGQgYmUgYXZhaWxhYmxlIHdpdGggeW91ciBBUEkga2V5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJlYW1lZFR1cm4gPSBhd2FpdCBhY3RpdmVUaHJlYWQucnVuU3RyZWFtZWQocHJvbXB0KTtcblxuICAgIGZvciBhd2FpdCAoY29uc3QgZXZlbnQgb2Ygc3RyZWFtZWRUdXJuLmV2ZW50cykge1xuICAgICAgLy8gQ2xhc3NpZnkgZXZlbnRzIGludG8gb3VyIHNpbXBsaWZpZWQgdHlwZXMgYmFzZWQgb24gQ29kZXggU0RLIGV2ZW50c1xuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJpdGVtLmNvbXBsZXRlZFwiICYmIGV2ZW50Lml0ZW0pIHtcbiAgICAgICAgaWYgKGV2ZW50Lml0ZW0udHlwZSA9PT0gXCJyZWFzb25pbmdcIikge1xuICAgICAgICAgIHlpZWxkIHsgdHlwZTogXCJwbGFuXCIsIGNvbnRlbnQ6IGV2ZW50Lml0ZW0udGV4dCB9O1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50Lml0ZW0udHlwZSA9PT0gXCJhZ2VudF9tZXNzYWdlXCIpIHtcbiAgICAgICAgICB5aWVsZCB7IHR5cGU6IFwibWVzc2FnZVwiLCBjb250ZW50OiBldmVudC5pdGVtLnRleHQgfTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5pdGVtLnR5cGUgPT09IFwiZmlsZV9jaGFuZ2VcIikge1xuICAgICAgICAgIC8vIFlpZWxkIGEgZmlsZSBjaGFuZ2UgZXZlbnQgZm9yIGVhY2ggY2hhbmdlIGluIHRoZSBwYXRjaFxuICAgICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIGV2ZW50Lml0ZW0uY2hhbmdlcykge1xuICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICB0eXBlOiBcImZpbGVfY2hhbmdlXCIsXG4gICAgICAgICAgICAgIHBhdGg6IGNoYW5nZS5wYXRoLFxuICAgICAgICAgICAgICBzdGF0dXM6IGNoYW5nZS5raW5kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZXJyb3JcIikge1xuICAgICAgICB5aWVsZCB7IHR5cGU6IFwiZXJyb3JcIiwgbWVzc2FnZTogZXZlbnQubWVzc2FnZSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHlpZWxkIHsgdHlwZTogXCJkb25lXCIgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBcIkNvZGV4IHJ1biBmYWlsZWRcIjtcbiAgICB5aWVsZCB7IHR5cGU6IFwiZXJyb3JcIiwgbWVzc2FnZSB9O1xuICB9IGZpbmFsbHkge1xuICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogUmVzZXQgdGhlIHRocmVhZCAoZS5nLiwgYWZ0ZXIgZGVwbG95aW5nLCBzdGFydCBmcmVzaCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldFRocmVhZCgpIHtcbiAgYWN0aXZlVGhyZWFkID0gbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHJ1biBpcyBpbiBwcm9ncmVzcyAodXNlZCBieSBnaXQgcm91dGVzIHRvIHByZXZlbnQgY29uY3VycmVudCBvcGVyYXRpb25zKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQ29kZXhSdW5uaW5nKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNSdW5uaW5nO1xufVxuIl0sIm5hbWVzIjpbIkNvZGV4IiwiY2xpZW50IiwiYWN0aXZlVGhyZWFkIiwiaXNSdW5uaW5nIiwiZ2V0Q2xpZW50IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwicnVuQ29kZXgiLCJwcm9tcHQiLCJ0eXBlIiwibWVzc2FnZSIsImNvZGV4Iiwic3RhcnRUaHJlYWQiLCJ3b3JraW5nRGlyZWN0b3J5IiwiY3dkIiwic2tpcEdpdFJlcG9DaGVjayIsInNhbmRib3hNb2RlIiwibW9kZWwiLCJzdHJlYW1lZFR1cm4iLCJydW5TdHJlYW1lZCIsImV2ZW50IiwiZXZlbnRzIiwiaXRlbSIsImNvbnRlbnQiLCJ0ZXh0IiwiY2hhbmdlIiwiY2hhbmdlcyIsInBhdGgiLCJzdGF0dXMiLCJraW5kIiwiZXJyIiwiRXJyb3IiLCJyZXNldFRocmVhZCIsImlzQ29kZXhSdW5uaW5nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/codex.ts\n");

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