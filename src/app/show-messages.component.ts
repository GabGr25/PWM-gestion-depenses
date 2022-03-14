import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from "./messages.service";


@Component({
  selector: 'app-show-messages',
  template: `
    

    <mat-accordion *ngIf="!messagesService.isEmpty()">
    <mat-expansion-panel (opened)="panelOpenState = true"
                         (closed)="panelOpenState = false">
      <mat-expansion-panel-header>
        <mat-panel-title>
          Messages de l'application
        </mat-panel-title>
        <mat-panel-description>
          {{panelOpenState ? 'Cacher les messages' : 'Voir les messages'}}
        </mat-panel-description>
      </mat-expansion-panel-header>
      <mat-list>
        <mat-list-item *ngFor="let msg of messages">
          <mat-icon mat-list-icon>label</mat-icon>
          <div mat-line>{{msg}}</div>
        </mat-list-item>
      </mat-list>
    </mat-expansion-panel>
    </mat-accordion>

    
  `,
  styles: [
    '.container {display: flex;flex-direction: column;justify-content: space-between;height: 100vh}'
  ]
})
export class ShowMessagesComponent implements OnInit {

  panelOpenState: boolean = false;

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
  }

  get messages() {
    return this.messagesService.messages;
  }

}