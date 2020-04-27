import express from "express";

export async function serverErrorHandler(
    err: IApiError,
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction) {
    try {
        await next();
    } catch (err) {
        console.log('error handler');
        const status = err.statusCode || 500;
        const body = {
            message: err.message || "An error occurred during the request.",
            error: err.name,
            status,
        };
        res.status(status).json(body);
    }
}
