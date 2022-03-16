import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { Personne } from './personne';
import { PersonnesService } from './personnes.service';

@Component({
  selector: 'app-liste-personnes',
  template: `
  <div>
          <button (click)="setTri()">
              <mat-icon>{{icons[sort]}}</mat-icon>
          </button>
      </div>

      <!--  <ul *ngFor="let personne of personnes">
          <li>
              {{personne.id}}:{{personne.nom}} 
              <mat-icon [routerLink]="['/personnes', personne.id]">loupe</mat-icon>
          </li>
      </ul>
      -->
      <table mat-table [dataSource]="personnes" class="mat-elevation-z8">

          <!--- Note that these columns can be defined in any order.
                The actual rendered columns are set as a property on the row definition" -->

          <!-- Position Column -->
          <ng-container matColumnDef="id">
              <th mat-header-cell *matHeaderCellDef> Id </th>
              <td mat-cell *matCellDef="let element"> {{element.id}} </td>
          </ng-container>

          <!-- Name Column -->
          <ng-container matColumnDef="nom">
              <th mat-header-cell *matHeaderCellDef> Nom </th>
              <td mat-cell *matCellDef="let element"> {{element.nom}} </td>
          </ng-container>

          <!-- Weight Column -->
          <ng-container matColumnDef="prenom">
              <th mat-header-cell *matHeaderCellDef> Prénom </th>
              <td mat-cell *matCellDef="let element"> {{element.prenom}} </td>
          </ng-container>

          <!-- Symbol Column -->
          <ng-container matColumnDef="plafond">
              <th mat-header-cell *matHeaderCellDef> Plafond </th>
              <td mat-cell *matCellDef="let element"> {{element.plafond}}€ </td>
          </ng-container>

          <ng-container matColumnDef="total">
              <th mat-header-cell *matHeaderCellDef> Total dépenses </th>
              <td mat-cell *matCellDef="let element">
                  <span [class.red]="aDepasse(element)">{{getTotalDepenses(element)| number:'4.2-2':'fr-FR'}}€ </span>
              </td>
          </ng-container>
          
          <ng-container matColumnDef="details">
              <th mat-header-cell *matHeaderCellDef>Détails</th>
              <td mat-cell *matCellDef="let element"> <mat-icon [routerLink]="['/personnes', element.id]">loupe</mat-icon> </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    
  `,
  styles: [
    'table {width: 100%;}',
    '.red{color: red}',
  ]
})
export class ListePersonnesComponent implements OnInit {
  personnes:Personne[]=[];
  sort:number=0;
  icons:String[]=["sort", "text_rotation_down","text_rotate_up_icon"];
  displayedColumns:string[]=['id','nom','prenom','plafond','total','details'];
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

  getTotalDepenses (personne:Personne):number {
    return this.personnesService.totalDepense(personne.id);
  }

  aDepasse(personne:Personne) : boolean {
    return personne.plafond < this.getTotalDepenses(personne);
  }

}
