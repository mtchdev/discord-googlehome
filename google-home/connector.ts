import GoogleAssistant from 'google-assistant';
import { GOOGLE_CONFIG } from './config';

export default class HomeClient {

    private readonly context: GoogleAssistant;

    public constructor(authConfig?: any) {
        this.context = new GoogleAssistant(authConfig || GOOGLE_CONFIG.auth as object);
        this.context.on('ready', () => {
            console.log('Google Assistant Connected');
        });
    }

}
