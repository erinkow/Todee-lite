"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(platform)/(dashboard)/board/[boardId]/page",{

/***/ "(app-pages-browser)/./app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx":
/*!********************************************************************************!*\
  !*** ./app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListHeader: function() { return /* binding */ ListHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! usehooks-ts */ \"(app-pages-browser)/./node_modules/usehooks-ts/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_form_form_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/form-input */ \"(app-pages-browser)/./components/form/form-input.tsx\");\n/* harmony import */ var _hooks_use_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/use-action */ \"(app-pages-browser)/./hooks/use-action.ts\");\n/* harmony import */ var _action_update_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/action/update-list */ \"(app-pages-browser)/./action/update-list/index.ts\");\n/* harmony import */ var _action_delete_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/action/delete-list */ \"(app-pages-browser)/./action/delete-list/index.ts\");\n/* harmony import */ var _components_form_form_submit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/form-submit */ \"(app-pages-browser)/./components/form/form-submit.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Pencil_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Pencil,Trash2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/pencil.js\");\n/* harmony import */ var _barrel_optimize_names_Pencil_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Pencil,Trash2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash-2.js\");\n/* harmony import */ var _list_expiration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-expiration */ \"(app-pages-browser)/./app/(platform)/(dashboard)/board/[boardId]/_components/list-expiration.tsx\");\n/* __next_internal_client_entry_do_not_use__ ListHeader auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst ListHeader = (param)=>{\n    let { data } = param;\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(data.title);\n    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const closeRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const enableEditing = ()=>{\n        setIsEditing(true);\n    };\n    const disableEditing = ()=>{\n        setIsEditing(false);\n    };\n    const { execute: executeUpdate, fieldErrors } = (0,_hooks_use_action__WEBPACK_IMPORTED_MODULE_5__.useAction)(_action_update_list__WEBPACK_IMPORTED_MODULE_6__.updateList, {\n        onSuccess: (data)=>{\n            sonner__WEBPACK_IMPORTED_MODULE_1__.toast.success('List \"'.concat(data.title, '\" updated'));\n            setTitle(data.title);\n            disableEditing();\n        },\n        onError: (error)=>{\n            sonner__WEBPACK_IMPORTED_MODULE_1__.toast.error(error);\n        }\n    });\n    const { execute: executeDelete } = (0,_hooks_use_action__WEBPACK_IMPORTED_MODULE_5__.useAction)(_action_delete_list__WEBPACK_IMPORTED_MODULE_7__.deleteList, {\n        onSuccess: (data)=>{\n            var _closeRef_current;\n            sonner__WEBPACK_IMPORTED_MODULE_1__.toast.success('List \"'.concat(data.title, '\" deleted'));\n            (_closeRef_current = closeRef.current) === null || _closeRef_current === void 0 ? void 0 : _closeRef_current.click();\n        },\n        onError: (error)=>{\n            sonner__WEBPACK_IMPORTED_MODULE_1__.toast.error(error);\n        }\n    });\n    const onBlur = ()=>{\n        var _formRef_current;\n        (_formRef_current = formRef.current) === null || _formRef_current === void 0 ? void 0 : _formRef_current.requestSubmit();\n        console.log(\"onBlur was submitted\");\n    };\n    const handleSubmit = (formData)=>{\n        const title = formData.get(\"title\");\n        const id = formData.get(\"id\");\n        const boardId = params.boardId;\n        console.log(\"Submitting form data:\", {\n            title,\n            id,\n            boardId\n        });\n        if (title === data.title) {\n            return disableEditing();\n            console.log(\"title was same\");\n        }\n        executeUpdate({\n            title,\n            id,\n            boardId\n        });\n    };\n    const handleDelete = (formData)=>{\n        const id = formData.get(\"id\");\n        const boardId = formData.get(\"boardId\");\n        executeDelete({\n            id,\n            boardId\n        });\n    };\n    const onKeyDown = (e)=>{\n        if (e.key === \"Escape\") {\n            var _formRef_current;\n            (_formRef_current = formRef.current) === null || _formRef_current === void 0 ? void 0 : _formRef_current.requestSubmit();\n        }\n        console.log(\"onKeyDown was conducted\");\n    };\n    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_11__.useOnClickOutside)(formRef, ()=>{\n        var _formRef_current;\n        return (_formRef_current = formRef.current) === null || _formRef_current === void 0 ? void 0 : _formRef_current.requestSubmit();\n    });\n    (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_11__.useEventListener)(\"keydown\", onKeyDown);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-md m-3 p-2 flex flex-col justify-between h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between items-center \".concat(isEditing ? \"editing-mode\" : \"\"),\n                children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: handleSubmit,\n                    ref: formRef,\n                    className: \"rounded-md flex-1 px-[2px] m-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            hidden: true,\n                            id: \"id\",\n                            name: \"id\",\n                            value: data.id,\n                            readOnly: true\n                        }, void 0, false, {\n                            fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            hidden: true,\n                            id: \"boardId\",\n                            name: \"boardId\",\n                            value: data.boardId,\n                            readOnly: true\n                        }, void 0, false, {\n                            fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_form_input__WEBPACK_IMPORTED_MODULE_4__.FormInput, {\n                            ref: inputRef,\n                            onBlur: onBlur,\n                            id: \"title\",\n                            placeholder: \"Enter list title...\",\n                            defaultValue: title,\n                            errors: fieldErrors,\n                            name: \"title\",\n                            className: \"text-md font-bold px-[7px] border-transparent  transition truncate bg-transparent focus:bg-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            hidden: true\n                        }, void 0, false, {\n                            fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 21\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"flex rounded-lg justify-center font-bold items-center m-3 cursor-pointer hover:bg-accent hover:text-accent-foreground\",\n                        onClick: enableEditing,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"ml-2\",\n                                onClick: enableEditing,\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                className: \"rounded-none w-auto h-auto py-2 px-5 justify-start font-normal text-sm\",\n                                variant: \"ghost\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Pencil_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    className: \"w-4 h-4 mx-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                                lineNumber: 145,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-around mt-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_list_expiration__WEBPACK_IMPORTED_MODULE_10__.ListExpiration, {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: handleDelete,\n                        ref: closeRef,\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                hidden: true,\n                                id: \"id\",\n                                name: \"id\",\n                                value: data.id\n                            }, void 0, false, {\n                                fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                hidden: true,\n                                id: \"boardId\",\n                                name: \"boardId\",\n                                value: data.boardId\n                            }, void 0, false, {\n                                fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                                lineNumber: 161,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_form_submit__WEBPACK_IMPORTED_MODULE_8__.FormSubmit, {\n                                variant: \"ghost\",\n                                className: \"rounded-none w-auto h-auto py-2 px-5 font-normal text-sm\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Pencil_Trash2_lucide_react__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                    className: \"w-4 h-4 mx-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                                    lineNumber: 166,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n                lineNumber: 157,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/watanabeeriko/Desktop/new_todo2_local/new_todo2/app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\",\n        lineNumber: 119,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListHeader, \"LzhsV43NrPaALQWl7TKSNY5ZD9M=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        _hooks_use_action__WEBPACK_IMPORTED_MODULE_5__.useAction,\n        _hooks_use_action__WEBPACK_IMPORTED_MODULE_5__.useAction,\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_11__.useOnClickOutside,\n        usehooks_ts__WEBPACK_IMPORTED_MODULE_11__.useEventListener\n    ];\n});\n_c = ListHeader;\nvar _c;\n$RefreshReg$(_c, \"ListHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGxhdGZvcm0pLyhkYXNoYm9hcmQpL2JvYXJkL1tib2FyZElkXS9fY29tcG9uZW50cy9saXN0LWhlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ2E7QUFDc0I7QUFDYjtBQUlJO0FBQ1Y7QUFDRztBQUNBO0FBQ1M7QUFDWDtBQUNGO0FBQ0s7QUFTNUMsTUFBTWUsYUFBYTtRQUFDLEVBQ3ZCQyxJQUFJLEVBSVc7O0lBRWYsTUFBTUMsU0FBU2hCLDBEQUFTQTtJQUN4QixNQUFNLENBQUNpQixXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2UsT0FBT0MsU0FBUyxHQUFHaEIsK0NBQVFBLENBQUNXLEtBQUtJLEtBQUs7SUFDN0MsTUFBTUUsVUFBVWxCLDZDQUFNQSxDQUFxQjtJQUMzQyxNQUFNbUIsV0FBV25CLDZDQUFNQSxDQUFzQjtJQUM3QyxNQUFNb0IsV0FBV3BCLDZDQUFNQSxDQUFxQjtJQUU1QyxNQUFNcUIsZ0JBQWdCO1FBQ2xCTixhQUFhO0lBQ2pCO0lBRUEsTUFBTU8saUJBQWlCO1FBQ25CUCxhQUFhO0lBQ2pCO0lBRUEsTUFBTSxFQUNGUSxTQUFTQyxhQUFhLEVBQ3RCQyxXQUFXLEVBQ2QsR0FBR3RCLDREQUFTQSxDQUFDQywyREFBVUEsRUFBRTtRQUN0QnNCLFdBQVdkLENBQUFBO1lBQ1BoQix5Q0FBS0EsQ0FBQytCLE9BQU8sQ0FBQyxTQUFvQixPQUFYZixLQUFLSSxLQUFLLEVBQUM7WUFDbENDLFNBQVNMLEtBQUtJLEtBQUs7WUFDbkJNO1FBQ0o7UUFDQU0sU0FBU0MsQ0FBQUE7WUFDTGpDLHlDQUFLQSxDQUFDaUMsS0FBSyxDQUFDQTtRQUNoQjtJQUNKO0lBRUEsTUFBTSxFQUNGTixTQUFTTyxhQUFhLEVBQ3pCLEdBQUczQiw0REFBU0EsQ0FBQ0UsMkRBQVVBLEVBQUU7UUFDdEJxQixXQUFXZCxDQUFBQTtnQkFFUFE7WUFE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akQsOERBQUNJO2dDQUFNQyxNQUFNO2dDQUFDWixJQUFHO2dDQUFLYSxNQUFLO2dDQUFLQyxPQUFPMUMsS0FBSzRCLEVBQUU7Ozs7OzswQ0FDOUMsOERBQUNXO2dDQUFNQyxNQUFNO2dDQUFDWixJQUFHO2dDQUFVYSxNQUFLO2dDQUFVQyxPQUFPMUMsS0FBSzZCLE9BQU87Ozs7OzswQ0FDN0QsOERBQUNuQyxvRUFBVUE7Z0NBQ1AwRCxTQUFRO2dDQUNSakIsV0FBVTswQ0FFViw0RUFBQ3RDLDBGQUFNQTtvQ0FBQ3NDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlDLEVBQUM7R0FuSllwQzs7UUFPTWQsc0RBQVNBO1FBa0JwQk0sd0RBQVNBO1FBYVRBLHdEQUFTQTtRQW1EYkosMkRBQWlCQTtRQUNqQkQsMERBQWdCQTs7O0tBMUZQYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHBsYXRmb3JtKS8oZGFzaGJvYXJkKS9ib2FyZC9bYm9hcmRJZF0vX2NvbXBvbmVudHMvbGlzdC1oZWFkZXIudHN4PzU2MGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwic29ubmVyXCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFdmVudExpc3RlbmVyLCB1c2VPbkNsaWNrT3V0c2lkZSB9IGZyb20gXCJ1c2Vob29rcy10c1wiO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuaW1wb3J0IHsgRm9ybUlucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9mb3JtL2Zvcm0taW5wdXRcIjtcbmltcG9ydCB7IHVzZUFjdGlvbiB9IGZyb20gXCJAL2hvb2tzL3VzZS1hY3Rpb25cIjtcbmltcG9ydCB7IHVwZGF0ZUxpc3QgfSBmcm9tIFwiQC9hY3Rpb24vdXBkYXRlLWxpc3RcIjtcbmltcG9ydCB7IGRlbGV0ZUxpc3QgfSBmcm9tIFwiQC9hY3Rpb24vZGVsZXRlLWxpc3RcIjtcbmltcG9ydCB7IEZvcm1TdWJtaXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2Zvcm0vZm9ybS1zdWJtaXRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBQZW5jaWwsIFRyYXNoMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IExpc3RFeHBpcmF0aW9uIH0gZnJvbSBcIi4vbGlzdC1leHBpcmF0aW9uXCI7XG5cbmludGVyZmFjZSBMaXN0SGVhZGVyUHJvcHMge1xuICAgIGRhdGE6IExpc3Q7XG4gICAgLy8gaXNFZGl0aW5nOiBib29sZWFuO1xuICAgIC8vIGVuYWJsZUVkaXRpbmc6ICgpID0+IHZvaWQ7XG4gICAgLy8gZGlzYWJsZUVkaXRpbmc6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBMaXN0SGVhZGVyID0gKHtcbiAgICBkYXRhLFxuICAgIC8vIGlzRWRpdGluZyxcbiAgICAvLyBlbmFibGVFZGl0aW5nLFxuICAgIC8vIGRpc2FibGVFZGl0aW5nXG59OiAgTGlzdEhlYWRlclByb3BzXG4pID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcbiAgICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoZGF0YS50aXRsZSk7XG4gICAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxFbGVtZW50UmVmPCdmb3JtJz4+KG51bGwpO1xuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEVsZW1lbnRSZWY8J2lucHV0Jz4+KG51bGwpO1xuICAgIGNvbnN0IGNsb3NlUmVmID0gdXNlUmVmPEVsZW1lbnRSZWY8J2Zvcm0nPj4obnVsbCk7XG5cbiAgICBjb25zdCBlbmFibGVFZGl0aW5nID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0VkaXRpbmcodHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzYWJsZUVkaXRpbmcgPSAoKSA9PiB7XG4gICAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgICBleGVjdXRlOiBleGVjdXRlVXBkYXRlLFxuICAgICAgICBmaWVsZEVycm9yc1xuICAgIH0gPSB1c2VBY3Rpb24odXBkYXRlTGlzdCwge1xuICAgICAgICBvblN1Y2Nlc3M6IGRhdGEgPT4ge1xuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhgTGlzdCBcIiR7ZGF0YS50aXRsZX1cIiB1cGRhdGVkYClcbiAgICAgICAgICAgIHNldFRpdGxlKGRhdGEudGl0bGUpXG4gICAgICAgICAgICBkaXNhYmxlRWRpdGluZygpXG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGVycm9yID0+IHtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKGVycm9yKVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGV4ZWN1dGU6IGV4ZWN1dGVEZWxldGUsXG4gICAgfSA9IHVzZUFjdGlvbihkZWxldGVMaXN0LCB7XG4gICAgICAgIG9uU3VjY2VzczogZGF0YSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKGBMaXN0IFwiJHtkYXRhLnRpdGxlfVwiIGRlbGV0ZWRgKVxuICAgICAgICAgICAgY2xvc2VSZWYuY3VycmVudD8uY2xpY2soKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZXJyb3IgPT4ge1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgICAgICBmb3JtUmVmLmN1cnJlbnQ/LnJlcXVlc3RTdWJtaXQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ29uQmx1ciB3YXMgc3VibWl0dGVkJylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZm9ybURhdGE6IEZvcm1EYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KCd0aXRsZScpIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgaWQgPSBmb3JtRGF0YS5nZXQoJ2lkJykgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCBib2FyZElkID0gcGFyYW1zLmJvYXJkSWQgYXMgc3RyaW5nO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0dGluZyBmb3JtIGRhdGE6XCIsIHsgdGl0bGUsIGlkLCBib2FyZElkIH0pO1xuXG4gICAgICAgIGlmKHRpdGxlID09PSBkYXRhLnRpdGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlzYWJsZUVkaXRpbmcoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZSB3YXMgc2FtZScpXG4gICAgICAgIH1cblxuICAgICAgICBleGVjdXRlVXBkYXRlKHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBib2FyZElkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoZm9ybURhdGE6IEZvcm1EYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gZm9ybURhdGEuZ2V0KCdpZCcpIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgYm9hcmRJZCA9IGZvcm1EYXRhLmdldCgnYm9hcmRJZCcpIGFzIHN0cmluZztcblxuICAgICAgICBleGVjdXRlRGVsZXRlKHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgYm9hcmRJZCxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvbktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZihlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIGZvcm1SZWYuY3VycmVudD8ucmVxdWVzdFN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbktleURvd24gd2FzIGNvbmR1Y3RlZCcpXG4gICAgfVxuXG4gICAgdXNlT25DbGlja091dHNpZGUoZm9ybVJlZiwgKCkgPT4gZm9ybVJlZi5jdXJyZW50Py5yZXF1ZXN0U3VibWl0KCkpXG4gICAgdXNlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBtLTMgcC0yIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGgtZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgJHtpc0VkaXRpbmcgPyAnZWRpdGluZy1tb2RlJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGZsZXgtMSBweC1bMnB4XSBtLTNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaGlkZGVuIGlkPVwiaWRcIiBuYW1lPVwiaWRcIiB2YWx1ZT17ZGF0YS5pZH0gcmVhZE9ubHkvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGhpZGRlbiBpZD1cImJvYXJkSWRcIiBuYW1lPVwiYm9hcmRJZFwiIHZhbHVlPXtkYXRhLmJvYXJkSWR9IHJlYWRPbmx5Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgbGlzdCB0aXRsZS4uLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZmllbGRFcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1tZCBmb250LWJvbGQgcHgtWzdweF0gYm9yZGVyLXRyYW5zcGFyZW50ICB0cmFuc2l0aW9uIHRydW5jYXRlIGJnLXRyYW5zcGFyZW50IGZvY3VzOmJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBoaWRkZW4vPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IHJvdW5kZWQtbGcganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBtLTMgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmRcIiBvbkNsaWNrPXtlbmFibGVFZGl0aW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMlwiIG9uQ2xpY2s9e2VuYWJsZUVkaXRpbmd9Pnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3JvdW5kZWQtbm9uZSB3LWF1dG8gaC1hdXRvIHB5LTIgcHgtNSBqdXN0aWZ5LXN0YXJ0IGZvbnQtbm9ybWFsIHRleHQtc20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2dob3N0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlbmNpbCBjbGFzc05hbWU9XCJ3LTQgaC00IG14LTJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICBcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIG10LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RFeHBpcmF0aW9uIGRhdGE9e2RhdGF9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXtoYW5kbGVEZWxldGV9IHJlZj17Y2xvc2VSZWZ9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaGlkZGVuIGlkPVwiaWRcIiBuYW1lPVwiaWRcIiB2YWx1ZT17ZGF0YS5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBoaWRkZW4gaWQ9XCJib2FyZElkXCIgbmFtZT1cImJvYXJkSWRcIiB2YWx1ZT17ZGF0YS5ib2FyZElkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1ub25lIHctYXV0byBoLWF1dG8gcHktMiBweC01IGZvbnQtbm9ybWFsIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaDIgY2xhc3NOYW1lPVwidy00IGgtNCBteC0yXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtU3VibWl0PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ0b2FzdCIsInVzZVBhcmFtcyIsInVzZUV2ZW50TGlzdGVuZXIiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsInVzZVJlZiIsInVzZVN0YXRlIiwiRm9ybUlucHV0IiwidXNlQWN0aW9uIiwidXBkYXRlTGlzdCIsImRlbGV0ZUxpc3QiLCJGb3JtU3VibWl0IiwiQnV0dG9uIiwiUGVuY2lsIiwiVHJhc2gyIiwiTGlzdEV4cGlyYXRpb24iLCJMaXN0SGVhZGVyIiwiZGF0YSIsInBhcmFtcyIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInRpdGxlIiwic2V0VGl0bGUiLCJmb3JtUmVmIiwiaW5wdXRSZWYiLCJjbG9zZVJlZiIsImVuYWJsZUVkaXRpbmciLCJkaXNhYmxlRWRpdGluZyIsImV4ZWN1dGUiLCJleGVjdXRlVXBkYXRlIiwiZmllbGRFcnJvcnMiLCJvblN1Y2Nlc3MiLCJzdWNjZXNzIiwib25FcnJvciIsImVycm9yIiwiZXhlY3V0ZURlbGV0ZSIsImN1cnJlbnQiLCJjbGljayIsIm9uQmx1ciIsInJlcXVlc3RTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZm9ybURhdGEiLCJnZXQiLCJpZCIsImJvYXJkSWQiLCJoYW5kbGVEZWxldGUiLCJvbktleURvd24iLCJlIiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImFjdGlvbiIsInJlZiIsImlucHV0IiwiaGlkZGVuIiwibmFtZSIsInZhbHVlIiwicmVhZE9ubHkiLCJwbGFjZWhvbGRlciIsImRlZmF1bHRWYWx1ZSIsImVycm9ycyIsImJ1dHRvbiIsInR5cGUiLCJsYWJlbCIsIm9uQ2xpY2siLCJoMSIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(platform)/(dashboard)/board/[boardId]/_components/list-header.tsx\n"));

/***/ })

});