import { Component, OnInit } from '@angular/core';
import { Basketteur } from '../../model/Basketteur.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.css']
})
export class TeamManagerComponent implements OnInit {

  team: Basketteur[];

  constructor(private service: TeamService) { 
    this.team = service.team;
  }

  ngOnInit(): void {
  }
}
