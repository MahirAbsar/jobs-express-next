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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const connect_1 = require("./db/connect");
const not_found_1 = require("./middlewares/not-found");
const error_handler_1 = require("./middlewares/error-handler");
const jobs_1 = __importDefault(require("./routes/jobs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/jobs", jobs_1.default);
app.use(not_found_1.notFoundMiddleWare);
app.use(error_handler_1.errorHandlerMiddleware);
const PORT = process.env.PORT || 8000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.connectDB)(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
