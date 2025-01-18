import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

type CustomError = AppError & {
  path?: string;
  value?: string;
  errmsg?: string;
  code?: number;
};

const handleCastErrorDB = (err: CustomError) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFields = (err: CustomError) => {
  if (typeof err.errmsg === "string") {
    const valueMatch = err.errmsg.match(/(["'])(\\?.)*?\1/); // Matches quoted values
    const value = valueMatch ? valueMatch[0] : "unknown value";
    const message = `Duplicate field value: ${value}. Please use another value.`;
    return new AppError(message, 400);
  }
  return new AppError("Duplicate field error.", 400);
};

const sendErrorDev = (err: CustomError, req: Request, res: Response) => {
  console.error("💣 Error in development mode:", err);

  // For API routes
  if (req.originalUrl.startsWith("/api")) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  // For non-API routes (modify if your app renders HTML pages)
  return res.status(err.statusCode).json({
    status: "error",
    message: err.message,
  });
};

const sendErrorProd = (err: CustomError, req: Request, res: Response) => {
  // For API routes
  if (req.originalUrl.startsWith("/api")) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    // Log unexpected errors
    console.error("💣 Unexpected error in production mode:", err);

    // Generic error message for unexpected errors
    return res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }

  // For non-API routes (modify if your app renders HTML pages)
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error("💣 Unexpected error in production mode:", err);

  // Generic error message for unexpected errors
  return res.status(500).json({
    status: "error",
    message: "Something went wrong! Please try again later.",
  });
};

const globalErrorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };

    // Ensure essential properties like `message` are copied
    error.message = err.message;

    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFields(error);

    sendErrorProd(error, req, res);
  }
};

export default globalErrorHandler;