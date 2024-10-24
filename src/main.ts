import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';


const config = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideRouter(routes)
  ]
};

bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));
