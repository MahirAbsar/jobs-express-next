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
exports.deleteJob = exports.createJob = exports.getAllJobs = void 0;
const http_status_codes_1 = require("http-status-codes");
const Job_1 = __importDefault(require("../models/Job"));
const BadRequestError_1 = require("../errors/BadRequestError");
const getAllJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobs = yield Job_1.default.find({});
    return res.status(http_status_codes_1.StatusCodes.OK).send({ jobs, nbHits: jobs.length });
});
exports.getAllJobs = getAllJobs;
const createJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, applied } = req.body;
    if (!title) {
        throw new BadRequestError_1.BadRequestError("Please provide a title");
    }
    const job = yield Job_1.default.create({ title: title, applied });
    return res.status(http_status_codes_1.StatusCodes.CREATED).send({ job });
});
exports.createJob = createJob;
const deleteJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const job = yield Job_1.default.deleteOne({ _id: id });
    return res
        .status(http_status_codes_1.StatusCodes.OK)
        .json({ msg: "Job deleted successfully!!!" });
});
exports.deleteJob = deleteJob;
