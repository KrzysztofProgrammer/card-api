export class ApiError extends Error {
    constructor(
        public name: string,
        public statusCode: number = 500,
        message?: string) {
        super(message);
    }

}
