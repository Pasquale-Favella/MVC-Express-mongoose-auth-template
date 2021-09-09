const { NODE_ENV } = process.env;
module.exports = class ErrorMiddleware {

    static notFound(req, res, next) {
        res.status(404);
        const error = new Error("Not Found - " + req.originalUrl);
        next(error);
    }

    static errorHandler(err, req, res, next) {
        res.status(res.statusCode || 500);
        res.json({
          message: err.message,
          stack: NODE_ENV ==='PROD' ? '' : err.stack,
        });
    }
}