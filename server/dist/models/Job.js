"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const JobSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Please provide a job title"],
        trim: true,
        maxlength: [30, "title cannot be more than 30 characters"],
    },
    applied: {
        type: Boolean,
        default: false,
    },
});
exports.default = mongoose_1.default.model("Job", JobSchema);
