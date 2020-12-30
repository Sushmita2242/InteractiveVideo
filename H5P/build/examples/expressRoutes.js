"use strict";
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
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
/**
 * @param h5pEditor
 * @param h5pPlayer
 * @param languageOverride the language to use. Set it to 'auto' to use the
 * language set by a language detector in the req.language property.
 * (recommended)
 */
function default_1(h5pEditor, h5pPlayer, languageOverride) {
    var _this = this;
    if (languageOverride === void 0) { languageOverride = 'auto'; }
    var router = express_1["default"].Router();
    router.get(h5pEditor.config.playUrl + "/:contentId", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var h5pPage, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, h5pPlayer.render(req.params.contentId)];
                case 1:
                    h5pPage = _a.sent();
                    res.send(h5pPage);
                    res.status(200).end();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.status(500).end(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    router.get('/edit/:contentId', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var page;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, h5pEditor.render(req.params.contentId, languageOverride === 'auto'
                        ? (_a = req.language) !== null && _a !== void 0 ? _a : 'en' : languageOverride)];
                case 1:
                    page = _b.sent();
                    res.send(page);
                    res.status(200).end();
                    return [2 /*return*/];
            }
        });
    }); });
    router.post('/edit/:contentId', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var contentId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, h5pEditor.saveOrUpdateContent(req.params.contentId.toString(), req.body.params.params, req.body.params.metadata, req.body.library, req.user)];
                case 1:
                    contentId = _a.sent();
                    res.send(JSON.stringify({ contentId: contentId }));
                    res.status(200).end();
                    return [2 /*return*/];
            }
        });
    }); });
    router.get('/new', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var page;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, h5pEditor.render(undefined, languageOverride === 'auto'
                        ? (_a = req.language) !== null && _a !== void 0 ? _a : 'en' : languageOverride)];
                case 1:
                    page = _b.sent();
                    res.send(page);
                    res.status(200).end();
                    return [2 /*return*/];
            }
        });
    }); });
    router.post('/new', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var contentId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.body.params ||
                        !req.body.params.params ||
                        !req.body.params.metadata ||
                        !req.body.library ||
                        !req.user) {
                        res.status(400).send('Malformed request').end();
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, h5pEditor.saveOrUpdateContent(undefined, req.body.params.params, req.body.params.metadata, req.body.library, req.user)];
                case 1:
                    contentId = _a.sent();
                    res.send(JSON.stringify({ contentId: contentId }));
                    res.status(200).end();
                    return [2 /*return*/];
            }
        });
    }); });
    router.get('/delete/:contentId', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, h5pEditor.deleteContent(req.params.contentId, req.user)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.send("Error deleting content with id " + req.params.contentId + ": " + error_2.message + "<br/><a href=\"javascript:window.location=document.referrer\">Go Back</a>");
                    res.status(500).end();
                    return [2 /*return*/];
                case 3:
                    res.send("Content " + req.params.contentId + " successfully deleted.<br/><a href=\"javascript:window.location=document.referrer\">Go Back</a>");
                    res.status(200).end();
                    return [2 /*return*/];
            }
        });
    }); });
    return router;
}
exports["default"] = default_1;
//# sourceMappingURL=expressRoutes.js.map