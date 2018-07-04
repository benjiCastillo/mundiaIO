import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { MundialService } from './service/mundial.service';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { TeamsComponent } from './teams/teams.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent,
    StadiumsComponent,
    TeamsComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    LightboxModule
  ],
  providers: [MundialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
