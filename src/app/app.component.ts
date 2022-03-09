import { Component } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-depenses';

  /** constructeur du composant app */
  constructor(public messagesService: MessagesService) {
    // plutôt que d'utiliser l'instruction 
    // console.log('Bonjour du contrôleur du composant app');
    messagesService.add('Bonjour du composant app');
  }
}
