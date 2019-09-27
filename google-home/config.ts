import { pathToFileURL } from "url";
import path from 'path';

/**
 * Main Authentication Configuration
 * (for some reason google-assistant doesn't export typedefs like normal people)
 */
export const GOOGLE_CONFIG: any = {
    auth: {
        /**
         * Key File Path
         * Where the tokens are!
         */
        keyFilePath: path.resolve(__dirname, 'keys.json'),

        /**
         * Saved Tokens Path
         * Where the tokens should be saved. It automatically creates a new directory if it doesn't already exist.
         */
        savedTokensPath: path.resolve(__dirname, 'tokens.json'),
        
        // oauth2Client: YOUR_CLIENT,
    }
}
