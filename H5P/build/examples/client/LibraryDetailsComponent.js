var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    exports.__esModule = true;
    react_1 = __importDefault(react_1);
    var yesNo = function (value) {
        return value ? (react_1["default"].createElement("span", { className: "fa fa-check text-success" })) : (react_1["default"].createElement("span", { className: "fa fa-times text-danger" }));
    };
    // tslint:disable-next-line: function-name
    exports["default"] = (function (props) {
        var _a;
        return (react_1["default"].createElement("div", null, props.details === undefined ? (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "spinner-grow spinner-grow-sm text-primary align-middle mr-2", role: "status" },
                react_1["default"].createElement("span", { className: "sr-only" })),
            react_1["default"].createElement("span", { className: "align-middle" }, "Loading library details from REST endpoint ..."))) : (react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { className: "btn btn-secondary float-right", onClick: function () { return props.onClose(); } }, "Close"),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("table", { className: "table-sm table-borderless" },
                    react_1["default"].createElement("thead", null),
                    react_1["default"].createElement("tbody", null,
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Author"),
                            react_1["default"].createElement("td", null, props.details.author || '-')),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Description"),
                            react_1["default"].createElement("td", null, props.details.description || '-')),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "License"),
                            react_1["default"].createElement("td", null, props.details.license || '-')),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Standalone content type"),
                            react_1["default"].createElement("td", null, yesNo(props.details.runnable))),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Restricted (can only be used with privilege)"),
                            react_1["default"].createElement("td", null, yesNo(props.details.restricted))),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Supports fullscreen"),
                            react_1["default"].createElement("td", null, yesNo(props.details.fullscreen))),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Addon"),
                            react_1["default"].createElement("td", null, yesNo(props.details.isAddon))),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Allowed embed types"),
                            react_1["default"].createElement("td", null, ((_a = props.details.embedTypes) === null || _a === void 0 ? void 0 : _a.join(' ')) || '-')),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Number of libraries that use the library"),
                            react_1["default"].createElement("td", null, props.details.dependentsCount)),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Objects created with this library as the main content type"),
                            react_1["default"].createElement("td", null, props.details.instancesCount)),
                        react_1["default"].createElement("tr", null,
                            react_1["default"].createElement("th", null, "Objects in which this library is used by another library"),
                            react_1["default"].createElement("td", null, props.details.instancesAsDependencyCount)))))))));
    });
});
//# sourceMappingURL=LibraryDetailsComponent.js.map