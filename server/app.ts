import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import express, { Express, Response, Request } from "express";
import { connectDB } from "./db/connect";
import { notFoundMiddleWare } from "./middlewares/not-found";
import { errorHandlerMiddleware } from "./middlewares/error-handler";
import jobs from "./routes/jobs";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/jobs", jobs);
app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
