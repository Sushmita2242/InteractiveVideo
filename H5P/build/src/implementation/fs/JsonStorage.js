"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fsExtra = __importStar(require("fs-extra"));
var InMemoryStorage_1 = __importDefault(require("../InMemoryStorage"));
/**
 * Reads key-value pairs from a JSON file and writes them back.
 * It is recommended to create it with the static create(...) factory instead of the sync constructor.
 */
var JsonStorage = /** @class */ (function (_super) {
    __extends(JsonStorage, _super);
    /**
     * Initializes the JsonStorage. It's advised to use the async static factory method create(...) instead.
     * @param file Path to the JSON file (must be read- and writable)
     */
    function JsonStorage(file) {
        var _this = _super.call(this) || this;
        if (file) {
            _this.file = file;
            _this.storage = fsExtra.readJSONSync(file);
        }
        return _this;
    }
    /**
     * Factory for a JsonStorage object that initializes the object.
     * Throws errors is something is wrong with the file (not accessible / can't be parsed).
     * @param file Path to the JSON file (must be read- and writeable)
     */
    JsonStorage.create = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var storage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storage = new JsonStorage();
                        return [4 /*yield*/, storage.initialize(file)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, storage];
                }
            });
        });
    };
    /**
     * Saves a key in the JSON file (supports nested values).
     * @param key
     * @param value
     */
    JsonStorage.prototype.save = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var returnValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.save.call(this, key, value)];
                    case 1:
                        returnValue = _a.sent();
                        return [4 /*yield*/, fsExtra.writeJSON(this.file, this.storage)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, returnValue];
                }
            });
        });
    };
    /**
     * Initializes the storage by loading the JSON file.
     * @param file Path to the JSON file (must be read- and writeable)
     */
    JsonStorage.prototype.initialize = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, fsExtra.readJSON(file)];
                    case 1:
                        _a.storage = _b.sent();
                        this.file = file;
                        return [2 /*return*/];
                }
            });
        });
    };
    return JsonStorage;
}(InMemoryStorage_1["default"]));
exports["default"] = JsonStorage;
//# sourceMappingURL=JsonStorage.js.map