class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.name = this.constructor.name;

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'Fail' : 'error';
    this.isOperational = true;

    // This is used to maintain the stack trace for where the error is thrown
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;