/**
 * A custom error class for use with Express. Indicates a generic server error occured
 *
 * @class ServerError
 * @extends {Error}
 */
class ServerError extends Error {
  public status: number; // The http response code for this error
  constructor(message = 'Something went wrong.') {
    super();
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message;

    this.status = 500;
  }
}

export default ServerError;
