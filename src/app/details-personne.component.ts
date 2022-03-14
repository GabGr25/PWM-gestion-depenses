import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from './personne';
import { PersonnesService } from './personnes.service';

@Component({
  selector: 'app-details-personne',
  template: `
    <p>
      Nom: {{personne.nom}}}
      Prenom: {{personne.prenom}}
      Plafond: {{personne.plafond}}
      
    </p>
  `,
  styles: [
  ]
})
export class DetailsPersonneComponent implements OnInit {
  id:number=0;
  personne:Personne;
  constructor(private personnesService: PersonnesService, private route:ActivatedRoute) {
    this.personne=personnesService.getPersonne(this.id)
   }

  ngOnInit(): void {
    this.id=+(this.route.snapshot.paramMap.get('id')||0);
    this.personne=this.personnesService.getPersonne(this.id)
  }

}
