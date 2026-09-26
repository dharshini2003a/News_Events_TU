import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';

// withHashLocation() mirrors the React app's <HashRouter> (routes like
// /#/current-news), so the URL scheme stays identical after migration.
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation())],
};
