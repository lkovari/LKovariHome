import { ErrorEntry } from "./error-entry.interface";

export class ErrorEntryModel implements ErrorEntry {
    timestamp: string;
    message: string;
    stack: string;
    route: string;
    constructor(timestamp: string, message: string, stack: string, route: string) {
        this.timestamp = timestamp;
        this.message = message;
        this.stack = stack;
        this.route = route;
    }
}