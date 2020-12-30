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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "./ContentTypeCacheService.js"], function (require, exports, react_1, ContentTypeCacheService_js_1) {
    "use strict";
    exports.__esModule = true;
    react_1 = __importDefault(react_1);
    ContentTypeCacheService_js_1 = __importDefault(ContentTypeCacheService_js_1);
    /**
     * This components provides a UI for checking the last update time of the
     * content type cache und updating manually when necessary.
     *
     * It uses Bootstrap 4 to layout the component. You can override or replace the
     * render() method to customize looks.
     */
    var ContentTypeCacheComponent = /** @class */ (function (_super) {
        __extends(ContentTypeCacheComponent, _super);
        /**
         * @param endpointurl the URL of the REST content type cache administration
         * endpoint
         */
        function ContentTypeCacheComponent(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                lastCacheUpdate: undefined,
                updatingCache: null
            };
            _this.contentTypeCacheService = new ContentTypeCacheService_js_1["default"](props.endpointUrl);
            return _this;
        }
        ContentTypeCacheComponent.prototype.componentDidMount = function () {
            return __awaiter(this, void 0, void 0, function () {
                var lastCacheUpdate;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.contentTypeCacheService.getCacheUpdate()];
                        case 1:
                            lastCacheUpdate = _a.sent();
                            this.setState({ lastCacheUpdate: lastCacheUpdate });
                            return [2 /*return*/];
                    }
                });
            });
        };
        ContentTypeCacheComponent.prototype.render = function () {
            var _this = this;
            return (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", null,
                    react_1["default"].createElement("span", { className: "fa fa-globe" }),
                    " H5P Hub content type list"),
                react_1["default"].createElement("p", null, "The list of content types displayed in the editor must regularly be fetched from the H5P Hub. If the list is outdated, you can manually fetch it here."),
                react_1["default"].createElement("div", null,
                    "Last update:",
                    ' ',
                    this.state.lastCacheUpdate !== undefined
                        ? this.state.lastCacheUpdate === null
                            ? 'never'
                            : this.state.lastCacheUpdate.toString()
                        : 'Loading...'),
                react_1["default"].createElement("button", { onClick: function () { return _this.updateCache(); }, className: "btn btn-primary my-2", disabled: this.state.updatingCache },
                    this.state.updatingCache ? (react_1["default"].createElement("div", { className: "spinner-border spinner-border-sm m-2 align-middle", role: "status" })) : (react_1["default"].createElement("span", { className: "fa fa-sync m-2" })),
                    react_1["default"].createElement("span", { className: "align-middle" }, "Update now"))));
        };
        ContentTypeCacheComponent.prototype.updateCache = function () {
            return __awaiter(this, void 0, void 0, function () {
                var lastUpdate, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.setState({ updatingCache: true });
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.contentTypeCacheService.postUpdateCache()];
                        case 2:
                            lastUpdate = _b.sent();
                            this.setState({
                                lastCacheUpdate: lastUpdate,
                                updatingCache: false
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            _a = _b.sent();
                            this.setState({
                                updatingCache: false
                            });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return ContentTypeCacheComponent;
    }(react_1["default"].Component));
    exports["default"] = ContentTypeCacheComponent;
});
//# sourceMappingURL=ContentTypeCacheComponent.js.map