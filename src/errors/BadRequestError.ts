/**
 * A custom error class for use with Express. Indicates a the client did something wrong
 *
 * @class BadRequestError
 * @extends {Error}
 */
class BadRequestError extends Error {
  public status: number; // The http response code for this error
  constructor(message: string) {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message;

    this.status = 400;
  }
}

export default BadRequestError;
