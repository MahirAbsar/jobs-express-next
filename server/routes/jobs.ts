import express from "express";
import { getAllJobs, createJob, deleteJob } from "../controllers/jobs";

const router = express.Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").delete(deleteJob);

export default router;
