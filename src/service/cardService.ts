import {CardEvent} from "../models/cardEvent";
import {CardResponse} from "../models/cardResponse";
import {dbService} from "./dbService";

export async function registerGetVersion() {
    return new Promise<CardResponse>(async (resolve, reject) => {
        const db = new dbService();
        // const resp = await db.checkVersion();
        const res: CardResponse = {
            message: await db.checkVersion()
        };
        console.log('version ', res);
        resolve(res);
    });
}

export function registerStart(request: CardEvent): Promise<CardResponse> {
    // return Promise.resolve({
    //     message: 'Start work',
    //     error: ''
    // });
    return new Promise<CardResponse>((resolve, reject) => {
        console.log('start');
        const db = new dbService();
        const resp = db.eventRegister('','start',request.cardNumber);
        resolve(resp);
    });
}

export function registerPause(request: CardEvent): Promise<CardResponse> {
    return new Promise<CardResponse>((resolve, reject) => {
        console.log('pause');
        const db = new dbService();
        const resp = db.eventRegister('','pause',request.cardNumber);
        resolve(resp);
    });
}

export function registerStop(request: CardEvent): Promise<CardResponse> {
    return new Promise<CardResponse>((resolve, reject) => {
        console.log('stop');
        const db = new dbService();
        const resp = db.eventRegister('','stop', request.cardNumber);
        resolve(resp);
    });
}
