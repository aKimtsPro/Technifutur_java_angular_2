import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Basketteur } from 'src/app/model/Basketteur.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  @Input()
  player: Basketteur;

  @Input()
  index: number;

  constructor(private service: TeamService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.service.deletePlayer( this.index );
  }

}
