import {Controller, Post, Route, Security, Body, Example, SuccessResponse, Tags, Get} from 'tsoa';
import {CardEvent} from "../models/cardEvent";
import {CardResponse} from "../models/cardResponse";
import {registerGetVersion, registerPause, registerStart, registerStop} from "../service";

@Security('api_key')
@Tags('cards')
@Route('card')
export class CardController extends Controller {

    /**
     * Check backend version
     */
    @Example<CardResponse>({
        message: 'Version 1.0'
    })
    @SuccessResponse('200','PostgreSQL version response')
    @Get('/version')
    public async getVersion(): Promise<CardResponse> {
        return registerGetVersion();
    }

    /**
     * Register start event.
     * @param request card number for
     */
    @Example<CardResponse>({
            message: 'Registered',
            error: ''
        })
    @SuccessResponse('200', 'Card event response')
    @Post('/start')
    public async start(@Body() request: CardEvent): Promise<CardResponse> {
        return registerStart(request);
    }

    /**
     * Register pause event
     * @param request
     */
    @Example<CardResponse>({
        message: 'Registered',
        error: ''
    })
    @SuccessResponse('200', 'Card event response')
    @Post('/pause')
    public pause(@Body() request: CardEvent): Promise<CardResponse> {
        return registerPause(request);
    }

    /**
     * Register stop event
     * @param request
     */
    @Example<CardResponse>({
        message: 'Registered',
        error: ''
    })
    @SuccessResponse('200', 'Card event response')
    @Post('/stop')
    public stop(@Body() request: CardEvent): Promise<CardResponse> {
        return registerStop(request);
    }
}
