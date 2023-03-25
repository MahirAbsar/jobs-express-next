import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "../errors/CustomAPIError";
import Job from "../models/Job";
import { BadRequestError } from "../errors/BadRequestError";

export const getAllJobs = async (req: Request, res: Response) => {
  const jobs = await Job.find({});
  return res.status(StatusCodes.OK).send({ jobs, nbHits: jobs.length });
};

export const createJob = async (req: Request, res: Response) => {
  const { title, applied } = req.body;
  if (!title) {
    throw new BadRequestError("Please provide a title");
  }
  const job = await Job.create({ title: title, applied });
  return res.status(StatusCodes.CREATED).send({ job });
};

export const deleteJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const job = await Job.deleteOne({ _id: id });
  return res
    .status(StatusCodes.OK)
    .json({ msg: "Job deleted successfully!!!" });
};
