import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";
import { provideAngularSvgIcon } from "angular-svg-icon";
import { provideHttpClient, withFetch } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Re-enable this when you run the application locally or on production
    // However, to be able to serve the application via Codespace, you 
    // need to disable hydration
    // provideClientHydration(withEventReplay()),
    provideAngularSvgIcon(),
    provideHttpClient(withFetch()),
  ],
};
