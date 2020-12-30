"use strict";
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
var H5P = __importStar(require("../src"));
var db_1 = __importDefault(require("../src/implementation/db"));
/**
 * Create a H5PEditor object.
 * Which storage classes are used depends on the configuration values set in
 * the environment variables. If you set no environment variables, the local
 * filesystem storage classes will be used.
 *
 * CONTENTSTORAGE=mongos3 Uses MongoDB/S3 backend for content storage
 * CONTENT_MONGO_COLLECTION Specifies the collection name for content storage
 * CONTENT_AWS_S3_BUCKET Specifies the bucket name for content storage
 * TEMPORARYSTOAGE=s3 Uses S3 backend for temporary file storage
 * TEMPORARY_AWS_S3_BUCKET Specifies the bucket name for temporary file storage
 *
 * Further environment variables to set up MongoDB and S3 can be found in
 * docs/mongo-s3-content-storage.md and docs/s3-temporary-file-storage.md!
 * @param config the configuration object
 * @param localLibraryPath a path in the local filesystem in which the H5P libraries (content types) are stored
 * @param localContentPath a path in the local filesystem in which H5P content will be stored (only necessary if you want to use the local filesystem content storage class)
 * @param localTemporaryPath a path in the local filesystem in which temporary files will be stored (only necessary if you want to use the local filesystem temporary file storage class).
 * @param translationCallback a function that is called to retrieve translations of keys in a certain language; the keys use the i18next format (e.g. namespace:key).
 * @returns a H5PEditor object
 */
function createH5PEditor(config, localLibraryPath, localContentPath, localTemporaryPath, translationCallback) {
    return __awaiter(this, void 0, void 0, function () {
        var h5pEditor, _a, _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    _b = (_a = H5P.H5PEditor).bind;
                    _c = [void 0, new H5P.fsImplementations.InMemoryStorage(),
                        config,
                        new H5P.fsImplementations.FileLibraryStorage(localLibraryPath)];
                    if (!(process.env.CONTENTSTORAGE !== 'mongos3')) return [3 /*break*/, 1];
                    _d = new H5P.fsImplementations.FileContentStorage(localContentPath);
                    return [3 /*break*/, 3];
                case 1:
                    _f = (_e = db_1["default"].MongoS3ContentStorage).bind;
                    _g = [void 0, db_1["default"].initS3({
                            s3ForcePathStyle: true,
                            signatureVersion: 'v4'
                        })];
                    return [4 /*yield*/, db_1["default"].initMongo()];
                case 2:
                    _d = new (_f.apply(_e, _g.concat([(_h.sent()).collection(process.env.CONTENT_MONGO_COLLECTION), {
                            s3Bucket: process.env.CONTENT_AWS_S3_BUCKET,
                            maxKeyLength: process.env.AWS_S3_MAX_FILE_LENGTH
                                ? Number.parseInt(process.env.AWS_S3_MAX_FILE_LENGTH, 10)
                                : undefined
                        }])))();
                    _h.label = 3;
                case 3:
                    h5pEditor = new (_b.apply(_a, _c.concat([_d, process.env.TEMPORARYSTORAGE === 's3'
                            ? new db_1["default"].S3TemporaryFileStorage(db_1["default"].initS3({
                                s3ForcePathStyle: true,
                                signatureVersion: 'v4'
                            }), {
                                s3Bucket: process.env.TEMPORARY_AWS_S3_BUCKET,
                                maxKeyLength: process.env.AWS_S3_MAX_FILE_LENGTH
                                    ? Number.parseInt(process.env.AWS_S3_MAX_FILE_LENGTH, 10)
                                    : undefined
                            })
                            : new H5P.fsImplementations.DirectoryTemporaryFileStorage(localTemporaryPath),
                        translationCallback])))();
                    if (!(h5pEditor.temporaryStorage instanceof
                        db_1["default"].S3TemporaryFileStorage)) return [3 /*break*/, 5];
                    return [4 /*yield*/, h5pEditor.temporaryStorage.setBucketLifecycleConfiguration(h5pEditor.config)];
                case 4:
                    _h.sent();
                    _h.label = 5;
                case 5: return [2 /*return*/, h5pEditor];
            }
        });
    });
}
exports["default"] = createH5PEditor;
//# sourceMappingURL=createH5PEditor.js.map