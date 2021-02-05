"use strict";
exports.__esModule = true;
var Doclist_1 = require("./Doclist");
function default_1(props) {
    console.log(props.route);
    return (React.createElement("div", null,
        React.createElement(Doclist_1["default"], { location: props.route })));
}
exports["default"] = default_1;
