var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "./LibraryDetailsComponent.js", "./LibraryAdministrationService.js"], function (require, exports, react_1, LibraryDetailsComponent_js_1, LibraryAdministrationService_js_1) {
    "use strict";
    exports.__esModule = true;
    react_1 = __importDefault(react_1);
    LibraryDetailsComponent_js_1 = __importDefault(LibraryDetailsComponent_js_1);
    /**
     * The components displays a list with the currently installed libraries. It
     * offers basic administration functions like deleting libraries, showing more
     * details of an installed library and uploading new libraries.
     *
     * It uses Bootstrap 4 to layout the component. You can override or replace the
     * render() method to customize looks.
     */
    var LibraryAdmin = /** @class */ (function (_super) {
        __extends(LibraryAdmin, _super);
        /**
         * @param endpointUrl the URL of the REST library administration endpoint.
         */
        function LibraryAdmin(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                isUploading: false,
                libraries: null,
                message: null
            };
            _this.librariesService = new LibraryAdministrationService_js_1.LibraryAdministrationService(props.endpointUrl);
            return _this;
        }
        LibraryAdmin.prototype.componentDidMount = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.updateList()];
                });
            });
        };
        LibraryAdmin.prototype.render = function () {
            var _this = this;
            var _a;
            return (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", null,
                    react_1["default"].createElement("span", { className: "fa fa-book-open" }),
                    " Installed libraries"),
                react_1["default"].createElement("form", null,
                    react_1["default"].createElement("div", { className: "form-group" },
                        react_1["default"].createElement("label", { className: "btn btn-primary " + (this.state.isUploading ? 'disabled' : '') },
                            this.state.isUploading ? (react_1["default"].createElement("div", { className: "spinner-border spinner-border-sm m-2 align-middle", role: "status" })) : (react_1["default"].createElement("span", { className: "fa fa-upload m-2" })),
                            ' ',
                            "Upload libraries",
                            react_1["default"].createElement("input", { disabled: this.state.isUploading, type: "file", id: "file2", hidden: true, onChange: function (e) {
                                    return _this.fileSelected(e.target.files);
                                } })))),
                this.state.message ? (react_1["default"].createElement("div", { className: "alert alert-" + this.state.message.type }, this.state.message.text)) : null,
                this.state.libraries === null ? (react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "spinner-grow spinner-grow-sm text-primary align-middle mr-2", role: "status" },
                        react_1["default"].createElement("span", { className: "sr-only" })),
                    react_1["default"].createElement("span", { className: "align-middle" }, "Loading installed libraries from REST endpoint ..."))) : (react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", null, "The following libraries are installed in the library storage:"),
                    react_1["default"].createElement("table", { className: "table table-sm" },
                        react_1["default"].createElement("thead", null,
                            react_1["default"].createElement("tr", null,
                                react_1["default"].createElement("th", null, "Title"),
                                react_1["default"].createElement("th", null, "Restricted"),
                                react_1["default"].createElement("th", null, "# used directly"),
                                react_1["default"].createElement("th", null, "# used in other content types"),
                                react_1["default"].createElement("th", null, "# dependent libraries"),
                                react_1["default"].createElement("th", null),
                                react_1["default"].createElement("th", null))),
                        react_1["default"].createElement("tbody", null, (_a = this.state.libraries) === null || _a === void 0 ? void 0 : _a.map(function (info) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: info.machineName + "-" + info.majorVersion + "." + info.minorVersion },
                            react_1["default"].createElement("tr", null,
                                react_1["default"].createElement("td", null,
                                    info.title,
                                    " (",
                                    info.majorVersion,
                                    ".",
                                    info.minorVersion,
                                    ".",
                                    info.patchVersion,
                                    ")"),
                                react_1["default"].createElement("td", null, info.runnable ? (react_1["default"].createElement("input", { type: "checkbox", checked: info.restricted, onChange: function () {
                                        return _this.restrict(info);
                                    } })) : null),
                                react_1["default"].createElement("td", null, info.instancesCount),
                                react_1["default"].createElement("td", null, info.instancesAsDependencyCount),
                                react_1["default"].createElement("td", null, info.dependentsCount),
                                react_1["default"].createElement("td", null,
                                    react_1["default"].createElement("button", { className: "btn btn-info", onClick: function () {
                                            return _this.showDetails(info);
                                        } },
                                        react_1["default"].createElement("span", { className: "fa fa-info m-2", style: {
                                                display: 'inline'
                                            } }),
                                        react_1["default"].createElement("span", null, "details"))),
                                react_1["default"].createElement("td", null, info.canBeDeleted ? (react_1["default"].createElement("button", { className: "btn btn-danger", disabled: info.isDeleting, onClick: function () {
                                        return _this.deleteLibrary(info);
                                    } },
                                    react_1["default"].createElement("span", { className: "fa fa-trash-alt m-2", style: {
                                            display: 'inline'
                                        } }),
                                    react_1["default"].createElement("span", null, "delete"))) : (react_1["default"].createElement("div", null)))),
                            info.isShowingDetails ? (react_1["default"].createElement("tr", null,
                                react_1["default"].createElement("td", { colSpan: 7 },
                                    react_1["default"].createElement(LibraryDetailsComponent_js_1["default"], { details: info.details, onClose: function () {
                                            return _this.closeDetails(info);
                                        } })))) : null)); })))))));
        };
        LibraryAdmin.prototype.closeDetails = function (library) {
            this.updateLibraryState(library, { isShowingDetails: false });
        };
        LibraryAdmin.prototype.deleteLibrary = function (library) {
            return __awaiter(this, void 0, void 0, function () {
                var newState, libraryIndex, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            newState = this.updateLibraryState(library, {
                                isDeleting: true
                            });
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 6]);
                            return [4 /*yield*/, this.librariesService.deleteLibrary(library)];
                        case 2:
                            _b.sent();
                            libraryIndex = this.state.libraries.indexOf(newState);
                            this.setState({
                                libraries: this.state.libraries
                                    .slice(0, libraryIndex)
                                    .concat(this.state.libraries.slice(libraryIndex + 1))
                            });
                            this.displayMessage("Successfully deleted library " + library.title + " (" + library.majorVersion + "." + library.minorVersion + ").");
                            return [4 /*yield*/, this.updateList()];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 6];
                        case 4:
                            _a = _b.sent();
                            this.displayMessage("Error deleting library " + library.title + " (" + library.majorVersion + "." + library.minorVersion + ").", 'danger');
                            this.updateLibraryState(newState, { isDeleting: false });
                            return [4 /*yield*/, this.updateList()];
                        case 5:
                            _b.sent();
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        LibraryAdmin.prototype.fileSelected = function (files) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, installed, updated, _b, libraries;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!files[0]) {
                                return [2 /*return*/];
                            }
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, 4, 5]);
                            this.setState({ isUploading: true });
                            return [4 /*yield*/, this.librariesService.postPackage(files[0])];
                        case 2:
                            _a = _c.sent(), installed = _a.installed, updated = _a.updated;
                            if (installed + updated === 0) {
                                this.displayMessage('Upload successful, but no libraries were installed or updated. The content type is probably already installed on the system.');
                                return [2 /*return*/];
                            }
                            this.displayMessage("Successfully installed " + installed + " and updated " + updated + " libraries.", 'success');
                            return [3 /*break*/, 5];
                        case 3:
                            _b = _c.sent();
                            this.displayMessage("Error while uploading package.", 'danger');
                            return [2 /*return*/];
                        case 4:
                            this.setState({ isUploading: false });
                            return [7 /*endfinally*/];
                        case 5:
                            this.setState({ libraries: null });
                            return [4 /*yield*/, this.librariesService.getLibraries()];
                        case 6:
                            libraries = _c.sent();
                            this.setState({ libraries: libraries });
                            return [2 /*return*/];
                    }
                });
            });
        };
        LibraryAdmin.prototype.restrict = function (library) {
            return __awaiter(this, void 0, void 0, function () {
                var newLibrary, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.librariesService.patchLibrary(library, {
                                    restricted: !library.restricted
                                })];
                        case 1:
                            newLibrary = _b.sent();
                            this.updateLibraryState(library, newLibrary);
                            this.displayMessage("Successfully set restricted property of library " + library.title + " (" + library.majorVersion + "." + library.minorVersion + ") to " + newLibrary.restricted + ".", 'success');
                            return [3 /*break*/, 3];
                        case 2:
                            _a = _b.sent();
                            this.displayMessage("Error setting restricted proeprty of library " + library.title + " (" + library.majorVersion + "." + library.minorVersion + ").", 'danger');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        LibraryAdmin.prototype.showDetails = function (library) {
            return __awaiter(this, void 0, void 0, function () {
                var newState, details, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            newState = this.updateLibraryState(library, {
                                isShowingDetails: true
                            });
                            if (!!library.details) return [3 /*break*/, 4];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.librariesService.getLibrary(library)];
                        case 2:
                            details = _b.sent();
                            this.updateLibraryState(newState, {
                                details: details
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            _a = _b.sent();
                            this.displayMessage("Error getting detailed information about library " + library.title + " (" + library.majorVersion + "." + library.minorVersion + ").", 'danger');
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        LibraryAdmin.prototype.updateList = function () {
            return __awaiter(this, void 0, void 0, function () {
                var libraries;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.librariesService.getLibraries()];
                        case 1:
                            libraries = _a.sent();
                            this.setState({ libraries: libraries });
                            return [2 /*return*/];
                    }
                });
            });
        };
        LibraryAdmin.prototype.displayMessage = function (text, type) {
            if (type === void 0) { type = 'primary'; }
            this.setState({
                message: {
                    text: text,
                    type: type
                }
            });
        };
        LibraryAdmin.prototype.updateLibraryState = function (library, changes) {
            var libraryIndex = this.state.libraries.indexOf(library);
            var newState = __assign(__assign({}, library), changes);
            this.setState({
                libraries: __spreadArrays(this.state.libraries.slice(0, libraryIndex), [
                    newState
                ], this.state.libraries.slice(libraryIndex + 1))
            });
            return newState;
        };
        return LibraryAdmin;
    }(react_1["default"].Component));
    exports["default"] = LibraryAdmin;
});
//# sourceMappingURL=LibraryAdminComponent.js.map