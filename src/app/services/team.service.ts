import { Injectable } from '@angular/core';
import { Basketteur } from '../model/Basketteur.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _team: Basketteur[] = [{
    nom: 'james',
    prenom: 'lebron',
    age: 35,
    taille: 206
  }];

  constructor() { }

  direBonjour(){
    alert("Bonjour");
  }

  public get team() : Basketteur[] {
    return this._team;
  }

  addPlayer(toAdd: Basketteur){
    this._team.push(toAdd);
  }

  deletePlayer(index: number){
    this._team.splice(index, 1);
  }
  
}
