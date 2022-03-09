import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessagesService} from './messages.service';
import { ShowMessagesComponent } from './show-messages.component';

// Material
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion"
import {MatListModule} from "@angular/material/list"
import { PersonnesService } from './personnes.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatIconModule,
    MatChipsModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [MessagesService, PersonnesService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

