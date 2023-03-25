"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleWare = void 0;
const notFoundMiddleWare = (req, res) => {
    return res.send("Route does not exist");
};
exports.notFoundMiddleWare = notFoundMiddleWare;
