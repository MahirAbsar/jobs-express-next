"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jobs_1 = require("../controllers/jobs");
const router = express_1.default.Router();
router.route("/").get(jobs_1.getAllJobs).post(jobs_1.createJob);
router.route("/:id").delete(jobs_1.deleteJob).patch(jobs_1.updateJob);
exports.default = router;
