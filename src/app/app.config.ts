
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouteConfigLoadEnd } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideHttpClient()]
};
