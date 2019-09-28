import { AuthConfig, GoogleAssistant } from 'google-assistant-ts';
const Assistant = require('google-assistant-ts');
import { GOOGLE_ASSISTANT_CONFIG } from './config';

export default class HomeClient {

    private readonly context: GoogleAssistant;

    public constructor(authConfig?: AuthConfig) {
        this.context = new Assistant(authConfig || GOOGLE_ASSISTANT_CONFIG.auth);

        this.context.on('ready', (): void => {
            console.log('Google Assistant Authenticated');
        });
    }

}
