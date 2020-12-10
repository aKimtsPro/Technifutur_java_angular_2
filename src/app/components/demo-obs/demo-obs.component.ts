import { Component, OnInit } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-demo-obs',
  templateUrl: './demo-obs.component.html',
  styleUrls: ['./demo-obs.component.css']
})
export class DemoObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let obs: Observable<any>;

    // let tab = [1,2,3,4];
    // obs = from(tab); 
    
    // obs = fromEvent(document.getElementById("clickable"), 'click');

    obs.subscribe(console.log);
    
  }

}
