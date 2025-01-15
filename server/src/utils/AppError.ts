class AppError extends Error {
  statusCode:number;
  status:string;
  isOperational:boolean;

  constructor(message:string, statusCode:number){
    super(message);
    this.name = this.constructor.name
    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? 'Fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor)
  }
}

export default AppError;