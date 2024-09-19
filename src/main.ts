import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ensure the correct path to AppComponent
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent,appConfig).catch((err) => console.error(err));
