import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Removed Firestore state store import and configuration

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
    }),
     // Removed firebase() plugin
  ],
  model: 'googleai/gemini-2.0-flash',
  // Removed stateStore configuration
  // Removed traceStore configuration
});
