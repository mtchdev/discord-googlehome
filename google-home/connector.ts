import GoogleAssistant from 'google-assistant';
import { GOOGLE_CONFIG } from './config';

export default class HomeClient {

    private readonly context: GoogleAssistant;

    public constructor() {
        this.context = new GoogleAssistant(GOOGLE_CONFIG.auth);
        this.context.on('ready', () => {
            console.log('Google Assistant Connected');
        });
    }

}
