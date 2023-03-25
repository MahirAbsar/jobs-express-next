import { CustomAPIError } from "./CustomAPIError";
import { StatusCodes } from "http-status-codes";

export class BadRequestError extends CustomAPIError {
  statusCode: StatusCodes;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
