import { Component, OnInit } from '@angular/core';
import { Basketteur } from '../../model/Basketteur.model';

@Component({
  selector: 'app-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.css']
})
export class TeamManagerComponent implements OnInit {

  team: Basketteur[] = [
    {
      nom: "james",
      prenom: "lebron",
      age: 35,
      taille: 206
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddPlayer(player: Basketteur){
    if(this.team.length < 5)
      this.team.push( player );

    console.log(this.team);
  }

  onDelete(index: number){
    this.team.splice(index, 1);
  }

}
