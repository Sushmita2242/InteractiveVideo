"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.displayIps = void 0;
var os_1 = __importDefault(require("os"));
/**
 * Displays links to the server at all available IP addresses.
 * @param port The port at which the server can be accessed.
 */
function displayIps(port) {
    // tslint:disable-next-line: no-console
    console.log('Example H5P NodeJs server is running:');
    var networkInterfaces = os_1["default"].networkInterfaces();
    // tslint:disable-next-line: forin
    for (var devName in networkInterfaces) {
        networkInterfaces[devName]
            .filter(function (int) { return !int.internal; })
            .forEach(function (int) {
            // tslint:disable-next-line: no-console
            return console.log("http://" + (int.family === 'IPv6' ? '[' : '') + int.address + (int.family === 'IPv6' ? ']' : '') + ":" + port);
        });
    }
}
exports.displayIps = displayIps;
//# sourceMappingURL=utils.js.map