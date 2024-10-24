import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Combina provideRouter en appConfig
const config = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideRouter(routes) // Añade provideRouter aquí
  ]
};

bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));