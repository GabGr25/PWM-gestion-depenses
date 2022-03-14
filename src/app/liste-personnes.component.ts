import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { Personne } from './personne';
import { PersonnesService } from './personnes.service';

@Component({
  selector: 'app-liste-personnes',
  template: `<!--
  <table mat-table [dataSource]="personnes">
  
    
<table >
  <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Dépenses</th>
          <th>Plafond</th>
        </tr>
    </thead>
    <tr *ngFor="let personne of personnes">
      <td>{{personne.id}}</td>
      <td>{{personne.nom}}</td>
      <td>{{personne.prenom}}</td>
      <td>{{this.personnesService.totalDepenses(personne)}}</td>
      <td>{{personne.plafond}}</td>
      

    </tr>
</table>
-->
  <ul *ngFor="let personne of personnes">
    <li>
        {{personne.id}}:{{personne.nom}}  
    </li>
  </ul>
  
  `,
  styles: [
  ]
})
export class ListePersonnesComponent implements OnInit {
  personnes:Personne[]=[];
  sort:number=0;
  icons:String[]=["sort", "text_rotation_down","text_rotate_up_icon"];

  constructor(public personnesService:PersonnesService, private messageService: MessagesService) { 
  }

  ngOnInit(): void {
    this.personnes=this.personnesService.getPersonnes(this.sort)
  }

  setTri(){
    this.sort=(this.sort+1)%3;
    this.messageService.add("valeur de sort: "+this.sort);
    this.personnes=this.personnesService.getPersonnes(this.sort);
  }

}
