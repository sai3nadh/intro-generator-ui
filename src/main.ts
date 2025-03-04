import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiIntroComponent } from './app/ai-intro.component';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AiIntroComponent }, // ✅ Automatically load AiIntroComponent at /
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // ✅ Add Routing
    provideHttpClient(),
    importProvidersFrom(FormsModule) // ✅ Add FormsModule here
  ]
}).catch(err => console.error(err));