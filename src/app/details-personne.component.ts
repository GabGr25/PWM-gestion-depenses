import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from './personne';
import { PersonnesService } from './personnes.service';

@Component({
  selector: 'app-details-personne',
  template: `
    <div *ngIf="personne; else erreurId">
        <h1>{{personne.nom.toUpperCase()}} {{personne.prenom}}</h1>
        <h2>{{personne.plafond}}€</h2>
        <h3>Nombre de dépenses: {{personne.depenses.length}}</h3>
    </div>
    <ng-template #erreurId>
        <h1>Erreur id : {{id}}</h1>
    </ng-template>
  `,
  styles: [
  ]
})
export class DetailsPersonneComponent implements OnInit {
  id: number = 0;

  personne:Personne|undefined;
  constructor(private personnesService: PersonnesService, private route:ActivatedRoute) {
    this.personne=this.personnesService.getPersonne(this.id);
   }

  ngOnInit(): void {
    this.id=+(this.route.snapshot.paramMap.get('id')||0);
    this.personne=this.personnesService.getPersonne(this.id);
    console.log(this.personne);
  }

}
