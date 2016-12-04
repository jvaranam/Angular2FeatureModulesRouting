import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule, eagerlyRoutedModules } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';


import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthGuard } from './auth-guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: AuthConfig,
      useFactory: () => {
        return new AuthConfig();
      },
      deps: [Http]
    },
    AuthHttp,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
