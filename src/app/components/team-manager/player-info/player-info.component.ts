import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Basketteur } from 'src/app/model/Basketteur.model';

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

  @Output()
  delete = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.delete.emit( this.index );
  }

}
