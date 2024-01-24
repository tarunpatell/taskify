"use strict";
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
exports.id = "app/api/topics/[id]/route";
exports.ids = ["app/api/topics/[id]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&page=%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fwebclues%2FDocuments%2Fworkspace%2Ftaskify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fwebclues%2FDocuments%2Fworkspace%2Ftaskify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&page=%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fwebclues%2FDocuments%2Fworkspace%2Ftaskify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fwebclues%2FDocuments%2Fworkspace%2Ftaskify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_webclues_Documents_workspace_taskify_app_api_topics_id_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/topics/[id]/route.js */ \"(rsc)/./app/api/topics/[id]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/topics/[id]/route\",\n        pathname: \"/api/topics/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/topics/[id]/route\"\n    },\n    resolvedPagePath: \"/home/webclues/Documents/workspace/taskify/app/api/topics/[id]/route.js\",\n    nextConfigOutput,\n    userland: _home_webclues_Documents_workspace_taskify_app_api_topics_id_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/topics/[id]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0b3BpY3MlMkYlNUJpZCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdG9waWNzJTJGJTVCaWQlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0b3BpY3MlMkYlNUJpZCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGd2ViY2x1ZXMlMkZEb2N1bWVudHMlMkZ3b3Jrc3BhY2UlMkZ0YXNraWZ5JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGd2ViY2x1ZXMlMkZEb2N1bWVudHMlMkZ3b3Jrc3BhY2UlMkZ0YXNraWZ5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3VCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J1ZC8/YjZmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS93ZWJjbHVlcy9Eb2N1bWVudHMvd29ya3NwYWNlL3Rhc2tpZnkvYXBwL2FwaS90b3BpY3MvW2lkXS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdG9waWNzL1tpZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90b3BpY3MvW2lkXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdG9waWNzL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS93ZWJjbHVlcy9Eb2N1bWVudHMvd29ya3NwYWNlL3Rhc2tpZnkvYXBwL2FwaS90b3BpY3MvW2lkXS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90b3BpY3MvW2lkXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&page=%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fwebclues%2FDocuments%2Fworkspace%2Ftaskify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fwebclues%2FDocuments%2Fworkspace%2Ftaskify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/topics/[id]/route.js":
/*!**************************************!*\
  !*** ./app/api/topics/[id]/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./lib/mongodb.js\");\n/* harmony import */ var _models_topic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/topic */ \"(rsc)/./models/topic.js\");\n\n\n\nasync function PUT(request, { params }) {\n    const { id } = params;\n    const { newTitle: title, newDescription: description } = await request.json();\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    await _models_topic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(id, {\n        title,\n        description\n    });\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        message: \"Topic Updated\"\n    }, {\n        status: 200\n    });\n}\nasync function GET(request, { params }) {\n    const { id } = params;\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const topic = await _models_topic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n        _id: id\n    });\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n        topic\n    }, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RvcGljcy9baWRdL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ0E7QUFDSDtBQUVoQyxlQUFlRyxJQUFJQyxPQUFPLEVBQUUsRUFBRUMsTUFBTSxFQUFFO0lBQ3pDLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdEO0lBQ2YsTUFBTSxFQUFFRSxVQUFVQyxLQUFLLEVBQUVDLGdCQUFnQkMsV0FBVyxFQUFFLEdBQUcsTUFBTU4sUUFBUU8sSUFBSTtJQUUzRSxNQUFNVix3REFBY0E7SUFFcEIsTUFBTUMscURBQVVBLENBQUNVLGlCQUFpQixDQUFDTixJQUFJO1FBQUVFO1FBQU9FO0lBQVk7SUFDNUQsT0FBT1Ysa0ZBQVlBLENBQUNXLElBQUksQ0FBQztRQUFFRSxTQUFTO0lBQWdCLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0FBQ3pFO0FBRU8sZUFBZUMsSUFBSVgsT0FBTyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtJQUN6QyxNQUFNLEVBQUVDLEVBQUUsRUFBRSxHQUFHRDtJQUNmLE1BQU1KLHdEQUFjQTtJQUNwQixNQUFNZSxRQUFRLE1BQU1kLHFEQUFVQSxDQUFDZSxPQUFPLENBQUM7UUFBRUMsS0FBS1o7SUFBRztJQUNqRCxPQUFPTixrRkFBWUEsQ0FBQ1csSUFBSSxDQUFDO1FBQUVLO0lBQU0sR0FBRztRQUFFRixRQUFRO0lBQUk7QUFDdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnVkLy4vYXBwL2FwaS90b3BpY3MvW2lkXS9yb3V0ZS5qcz8wYmFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXG5pbXBvcnQgY29ubmVjdE1vbmdvREIgZnJvbSBcIkAvbGliL21vbmdvZGJcIlxuaW1wb3J0IFRvcGljTW9kZWwgZnJvbSBcIkAvbW9kZWxzL3RvcGljXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0LCB7IHBhcmFtcyB9KSB7XG4gICAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IHsgbmV3VGl0bGU6IHRpdGxlLCBuZXdEZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgYXdhaXQgY29ubmVjdE1vbmdvREIoKTtcblxuICAgIGF3YWl0IFRvcGljTW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiVG9waWMgVXBkYXRlZFwiIH0sIHsgc3RhdHVzOiAyMDAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCwgeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcbiAgICBhd2FpdCBjb25uZWN0TW9uZ29EQigpO1xuICAgIGNvbnN0IHRvcGljID0gYXdhaXQgVG9waWNNb2RlbC5maW5kT25lKHsgX2lkOiBpZCB9KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB0b3BpYyB9LCB7IHN0YXR1czogMjAwIH0pO1xufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0TW9uZ29EQiIsIlRvcGljTW9kZWwiLCJQVVQiLCJyZXF1ZXN0IiwicGFyYW1zIiwiaWQiLCJuZXdUaXRsZSIsInRpdGxlIiwibmV3RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImpzb24iLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJHRVQiLCJ0b3BpYyIsImZpbmRPbmUiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/topics/[id]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst connectMongoDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        console.log(\"Connected to MongoDB.\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNMO0FBRTNCQyxvREFBYTtBQUViLE1BQU1FLGlCQUFpQjtJQUNuQixJQUFJO1FBQ0EsTUFBTUgsdURBQWdCLENBQUNLLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUU5Q0MsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCLEVBQUUsT0FBT0MsT0FBTztRQUNaRixRQUFRQyxHQUFHLENBQUNDO0lBQ2hCO0FBQ0o7QUFFQSxpRUFBZVAsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NydWQvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcblxuZG90ZW52LmNvbmZpZygpXG5cbmNvbnN0IGNvbm5lY3RNb25nb0RCID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIE1vbmdvREIuXCIpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1vbmdvREI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiZG90ZW52IiwiY29uZmlnIiwiY29ubmVjdE1vbmdvREIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/topic.js":
/*!*************************!*\
  !*** ./models/topic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst topicSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    description: String\n}, {\n    timestamps: true\n});\nconst TopicModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Topic || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Topic\", topicSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopicModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdG9waWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQ0c7QUFFbEMsTUFBTUUsY0FBYyxJQUFJRCw0Q0FBTUEsQ0FDMUI7SUFDSUUsT0FBT0M7SUFDUEMsYUFBYUQ7QUFDakIsR0FDQTtJQUNJRSxZQUFZO0FBQ2hCO0FBR0osTUFBTUMsYUFBYVAsd0RBQWUsQ0FBQ1MsS0FBSyxJQUFJVCxxREFBYyxDQUFDLFNBQVNFO0FBRXBFLGlFQUFlSyxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J1ZC8uL21vZGVscy90b3BpYy5qcz9lYWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgdG9waWNTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICB9XG4pO1xuXG5jb25zdCBUb3BpY01vZGVsID0gbW9uZ29vc2UubW9kZWxzLlRvcGljIHx8IG1vbmdvb3NlLm1vZGVsKFwiVG9waWNcIiwgdG9waWNTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBUb3BpY01vZGVsOyAgICJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInRvcGljU2NoZW1hIiwidGl0bGUiLCJTdHJpbmciLCJkZXNjcmlwdGlvbiIsInRpbWVzdGFtcHMiLCJUb3BpY01vZGVsIiwibW9kZWxzIiwiVG9waWMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/topic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&page=%2Fapi%2Ftopics%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fwebclues%2FDocuments%2Fworkspace%2Ftaskify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fwebclues%2FDocuments%2Fworkspace%2Ftaskify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();