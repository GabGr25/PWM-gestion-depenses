import { Injectable } from '@angular/core';
import { Datas } from './mock-datas';
import {Personne} from './personne';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
  private personnes:Personne[]=Datas.getInstance().generePersonnes();
  constructor() { }

  getPersonnes(sort:number) : Personne[]{
    let pers: Personne[]=this.personnes.slice();
    if(sort==1){
      return pers.sort((x,y) => {
        if(x.nom > y.nom)
          return 1;
        else 
          return -1;
      });
    }
    return this.personnes;
  }

  totalDepenses(personne: Personne): number{
    let dep:number=0;
    for (let index = 0; index < personne.depenses.length; index++) {
      dep=personne.depenses[index].montant;
    }
    return dep
  }

  getPersonne(id: number):Personne{
    for (let index = 0; index < this.personnes.length; index++) {
      if(this.personnes[index].id==id)
        return this.personnes[index];
    }
    return this.personnes[0]
  }
}
