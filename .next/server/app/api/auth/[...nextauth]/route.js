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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Cclient%20projects%5Cmuzamil%20project%5Coneclickhuman-live-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cclient%20projects%5Cmuzamil%20project%5Coneclickhuman-live-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Cclient%20projects%5Cmuzamil%20project%5Coneclickhuman-live-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cclient%20projects%5Cmuzamil%20project%5Coneclickhuman-live-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_client_projects_muzamil_project_oneclickhuman_live_main_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\client projects\\\\muzamil project\\\\oneclickhuman-live-main\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: D_client_projects_muzamil_project_oneclickhuman_live_main_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDY2xpZW50JTIwcHJvamVjdHMlNUNtdXphbWlsJTIwcHJvamVjdCU1Q29uZWNsaWNraHVtYW4tbGl2ZS1tYWluJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDY2xpZW50JTIwcHJvamVjdHMlNUNtdXphbWlsJTIwcHJvamVjdCU1Q29uZWNsaWNraHVtYW4tbGl2ZS1tYWluJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNzRDtBQUNuSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRlbmFpLz8wNjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXGNsaWVudCBwcm9qZWN0c1xcXFxtdXphbWlsIHByb2plY3RcXFxcb25lY2xpY2todW1hbi1saXZlLW1haW5cXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcY2xpZW50IHByb2plY3RzXFxcXG11emFtaWwgcHJvamVjdFxcXFxvbmVjbGlja2h1bWFuLWxpdmUtbWFpblxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Cclient%20projects%5Cmuzamil%20project%5Coneclickhuman-live-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cclient%20projects%5Cmuzamil%20project%5Coneclickhuman-live-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n\n\nconst authenticateUser = async (email, password)=>{\n    try {\n        const response = await fetch(\"https://oneclickhuman.com/api_request/login\", {\n            mode: \"cors\",\n            method: \"POST\",\n            body: JSON.stringify({\n                \"email\": email,\n                \"password\": password\n            }),\n            headers: {\n                \"Content-Type\": \"application/json; charset=UTF-8\"\n            }\n        });\n        const json = await response.json();\n        if (json.login === \"success\") {\n            return {\n                user_status: json.login,\n                user_id: json.id,\n                time: json.time,\n                user_email: json.user_email,\n                role: json.role\n            };\n        } else {\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error authenticating user:\", error);\n        return null;\n    }\n};\nconst registerUser = async (email, password)=>{\n    try {\n        const response = await fetch(\"https://oneclickhuman.com/api_request/register\", {\n            mode: \"cors\",\n            method: \"POST\",\n            body: JSON.stringify({\n                \"email\": email,\n                \"password\": password\n            }),\n            headers: {\n                \"Content-Type\": \"application/json; charset=UTF-8\"\n            }\n        });\n        const json = await response.json();\n        return {\n            user_status: json.login,\n            user_id: json.id,\n            time: json.time,\n            user_email: json.user_email,\n            role: json.role\n        };\n    } catch (error) {\n        console.error(\"Error registering user:\", error);\n        return null;\n    }\n};\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                },\n                isSignUp: {\n                    label: \"Sign Up\",\n                    type: \"hidden\"\n                }\n            },\n            authorize: async (credentials)=>{\n                if (credentials.isSignUp) {\n                    // Handle sign-up\n                    const user = await registerUser(credentials.email, credentials.password);\n                    if (user) {\n                        return user;\n                    } else {\n                        throw new Error(\"Sign-up failed\");\n                    }\n                } else {\n                    // Handle login\n                    const user = await authenticateUser(credentials.email, credentials.password);\n                    if (user) {\n                        return user;\n                    } else {\n                        throw new Error(\"Invalid credentials\");\n                    }\n                }\n            }\n        })\n    ],\n    debug: true,\n    pages: {\n        signIn: \"/signin\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            // Add all fields to the token on login or registration\n            if (user) {\n                console.log(user);\n                token.user_status = user.user_status;\n                token.user_id = user.user_id;\n                token.user_email = user.user_email;\n                token.time = user.time;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            console.log(token);\n            // Make all fields available in the session\n            session.user.user_status = token.user_status;\n            session.user.user_id = token.user_id;\n            session.user.user_email = token.user_email;\n            session.user.time = token.time;\n            session.user.role = token.role;\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDaUM7QUFFbEUsTUFBTUUsbUJBQW1CLE9BQU9DLE9BQU9DO0lBQ3JDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sK0NBQStDO1lBQzFFQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQixTQUFTUjtnQkFDVCxZQUFZQztZQUNkO1lBQ0FRLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFQSxNQUFNQyxPQUFPLE1BQU1SLFNBQVNRLElBQUk7UUFFaEMsSUFBSUEsS0FBS0MsS0FBSyxLQUFLLFdBQVc7WUFDNUIsT0FBTztnQkFDTEMsYUFBY0YsS0FBS0MsS0FBSztnQkFDeEJFLFNBQVVILEtBQUtJLEVBQUU7Z0JBQ2pCQyxNQUFPTCxLQUFLSyxJQUFJO2dCQUNoQkMsWUFBYU4sS0FBS00sVUFBVTtnQkFDNUJDLE1BQU9QLEtBQUtPLElBQUk7WUFDbEI7UUFDRixPQUFPO1lBQ0wsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1FBQzVDLE9BQU87SUFDVDtBQUNGO0FBRUEsTUFBTUUsZUFBZSxPQUFPcEIsT0FBT0M7SUFDakMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxrREFBa0Q7WUFDN0VDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CLFNBQVNSO2dCQUNULFlBQVlDO1lBQ2Q7WUFDQVEsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtRQUVBLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1EsSUFBSTtRQUVoQyxPQUFPO1lBQ0xFLGFBQWNGLEtBQUtDLEtBQUs7WUFDeEJFLFNBQVVILEtBQUtJLEVBQUU7WUFDakJDLE1BQU9MLEtBQUtLLElBQUk7WUFDaEJDLFlBQWFOLEtBQUtNLFVBQVU7WUFDNUJDLE1BQU9QLEtBQUtPLElBQUk7UUFDakI7SUFFSCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsT0FBTztJQUNUO0FBQ0Y7QUFFTyxNQUFNRyxjQUFjO0lBQ3pCQyxXQUFXO1FBQ1R4QiwyRUFBbUJBLENBQUM7WUFDbEJ5QixNQUFNO1lBQ05DLGFBQWE7Z0JBQ1h4QixPQUFPO29CQUFFeUIsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdEN6QixVQUFVO29CQUFFd0IsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztnQkFDaERDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVdDLE1BQU07Z0JBQVM7WUFDL0M7WUFDQUUsV0FBVyxPQUFPSjtnQkFDaEIsSUFBSUEsWUFBWUcsUUFBUSxFQUFFO29CQUN4QixpQkFBaUI7b0JBQ2pCLE1BQU1FLE9BQU8sTUFBTVQsYUFBYUksWUFBWXhCLEtBQUssRUFBRXdCLFlBQVl2QixRQUFRO29CQUN2RSxJQUFJNEIsTUFBTTt3QkFDUixPQUFPQTtvQkFDVCxPQUFPO3dCQUNMLE1BQU0sSUFBSUMsTUFBTTtvQkFDbEI7Z0JBQ0YsT0FBTztvQkFDTCxlQUFlO29CQUNmLE1BQU1ELE9BQU8sTUFBTTlCLGlCQUFpQnlCLFlBQVl4QixLQUFLLEVBQUV3QixZQUFZdkIsUUFBUTtvQkFDM0UsSUFBSTRCLE1BQU07d0JBQ1IsT0FBT0E7b0JBQ1QsT0FBTzt3QkFDTCxNQUFNLElBQUlDLE1BQU07b0JBQ2xCO2dCQUNGO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLE9BQU87SUFDUEMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLO0lBQ3BCO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVYsSUFBSSxFQUFFO1lBQ3ZCLHVEQUF1RDtZQUN2RCxJQUFJQSxNQUFNO2dCQUNSVixRQUFRcUIsR0FBRyxDQUFDWDtnQkFDWlUsTUFBTTNCLFdBQVcsR0FBR2lCLEtBQUtqQixXQUFXO2dCQUNwQzJCLE1BQU0xQixPQUFPLEdBQUdnQixLQUFLaEIsT0FBTztnQkFDNUIwQixNQUFNdkIsVUFBVSxHQUFHYSxLQUFLYixVQUFVO2dCQUNsQ3VCLE1BQU14QixJQUFJLEdBQUdjLEtBQUtkLElBQUk7Z0JBQ3RCd0IsTUFBTXRCLElBQUksR0FBR1ksS0FBS1osSUFBSTtZQUN4QjtZQUNBLE9BQU9zQjtRQUNUO1FBQ0EsTUFBTUwsU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBRTtZQUM5QnBCLFFBQVFxQixHQUFHLENBQUNEO1lBQ1osMkNBQTJDO1lBQzNDTCxRQUFRTCxJQUFJLENBQUNqQixXQUFXLEdBQUcyQixNQUFNM0IsV0FBVztZQUM1Q3NCLFFBQVFMLElBQUksQ0FBQ2hCLE9BQU8sR0FBRzBCLE1BQU0xQixPQUFPO1lBQ3BDcUIsUUFBUUwsSUFBSSxDQUFDYixVQUFVLEdBQUd1QixNQUFNdkIsVUFBVTtZQUMxQ2tCLFFBQVFMLElBQUksQ0FBQ2QsSUFBSSxHQUFHd0IsTUFBTXhCLElBQUk7WUFDOUJtQixRQUFRTCxJQUFJLENBQUNaLElBQUksR0FBR3NCLE1BQU10QixJQUFJO1lBRTlCLE9BQU9pQjtRQUNUO0lBQ0Y7SUFDQU8sUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQ3JDLEVBQUU7QUFFRixNQUFNQyxVQUFVaEQsZ0RBQVFBLENBQUN3QjtBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRlbmFpLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcblxuY29uc3QgYXV0aGVudGljYXRlVXNlciA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL29uZWNsaWNraHVtYW4uY29tL2FwaV9yZXF1ZXN0L2xvZ2luJywge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICdlbWFpbCc6IGVtYWlsLFxuICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKGpzb24ubG9naW4gPT09ICdzdWNjZXNzJykge1xuICAgICAgcmV0dXJuIHsgXG4gICAgICAgIHVzZXJfc3RhdHVzIDoganNvbi5sb2dpbiwgXG4gICAgICAgIHVzZXJfaWQgOiBqc29uLmlkLCBcbiAgICAgICAgdGltZSA6IGpzb24udGltZSwgXG4gICAgICAgIHVzZXJfZW1haWwgOiBqc29uLnVzZXJfZW1haWwsXG4gICAgICAgIHJvbGUgOiBqc29uLnJvbGUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGF1dGhlbnRpY2F0aW5nIHVzZXI6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgcmVnaXN0ZXJVc2VyID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vb25lY2xpY2todW1hbi5jb20vYXBpX3JlcXVlc3QvcmVnaXN0ZXInLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgJ2VtYWlsJzogZW1haWwsXG4gICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICB1c2VyX3N0YXR1cyA6IGpzb24ubG9naW4sIFxuICAgICAgdXNlcl9pZCA6IGpzb24uaWQsIFxuICAgICAgdGltZSA6IGpzb24udGltZSwgXG4gICAgICB1c2VyX2VtYWlsIDoganNvbi51c2VyX2VtYWlsLFxuICAgICAgcm9sZSA6IGpzb24ucm9sZSxcbiAgICAgfTtcbiAgICBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVnaXN0ZXJpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgIGlzU2lnblVwOiB7IGxhYmVsOiBcIlNpZ24gVXBcIiwgdHlwZTogXCJoaWRkZW5cIiB9LCAvLyBBZGQgaGlkZGVuIGlucHV0IGZvciBzaWduLXVwXG4gICAgICB9LFxuICAgICAgYXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgaWYgKGNyZWRlbnRpYWxzLmlzU2lnblVwKSB7XG4gICAgICAgICAgLy8gSGFuZGxlIHNpZ24tdXBcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVnaXN0ZXJVc2VyKGNyZWRlbnRpYWxzLmVtYWlsLCBjcmVkZW50aWFscy5wYXNzd29yZCk7XG4gICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaWduLXVwIGZhaWxlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSGFuZGxlIGxvZ2luXG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGF1dGhlbnRpY2F0ZVVzZXIoY3JlZGVudGlhbHMuZW1haWwsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWJ1ZzogdHJ1ZSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL3NpZ25pblwiLFxuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gICAgbWF4QWdlOiAyNCAqIDYwICogNjAsIC8vIDI0IGhvdXJzXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIC8vIEFkZCBhbGwgZmllbGRzIHRvIHRoZSB0b2tlbiBvbiBsb2dpbiBvciByZWdpc3RyYXRpb25cbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICB0b2tlbi51c2VyX3N0YXR1cyA9IHVzZXIudXNlcl9zdGF0dXM7IFxuICAgICAgICB0b2tlbi51c2VyX2lkID0gdXNlci51c2VyX2lkOyAgXG4gICAgICAgIHRva2VuLnVzZXJfZW1haWwgPSB1c2VyLnVzZXJfZW1haWw7IFxuICAgICAgICB0b2tlbi50aW1lID0gdXNlci50aW1lO1xuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICAgIC8vIE1ha2UgYWxsIGZpZWxkcyBhdmFpbGFibGUgaW4gdGhlIHNlc3Npb25cbiAgICAgIHNlc3Npb24udXNlci51c2VyX3N0YXR1cyA9IHRva2VuLnVzZXJfc3RhdHVzOyBcbiAgICAgIHNlc3Npb24udXNlci51c2VyX2lkID0gdG9rZW4udXNlcl9pZDtcbiAgICAgIHNlc3Npb24udXNlci51c2VyX2VtYWlsID0gdG9rZW4udXNlcl9lbWFpbDsgXG4gICAgICBzZXNzaW9uLnVzZXIudGltZSA9IHRva2VuLnRpbWU7XG4gICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGU7ICBcblxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59O1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImF1dGhlbnRpY2F0ZVVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwibG9naW4iLCJ1c2VyX3N0YXR1cyIsInVzZXJfaWQiLCJpZCIsInRpbWUiLCJ1c2VyX2VtYWlsIiwicm9sZSIsImVycm9yIiwiY29uc29sZSIsInJlZ2lzdGVyVXNlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibGFiZWwiLCJ0eXBlIiwiaXNTaWduVXAiLCJhdXRob3JpemUiLCJ1c2VyIiwiRXJyb3IiLCJkZWJ1ZyIsInBhZ2VzIiwic2lnbkluIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJsb2ciLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Cclient%20projects%5Cmuzamil%20project%5Coneclickhuman-live-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cclient%20projects%5Cmuzamil%20project%5Coneclickhuman-live-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();