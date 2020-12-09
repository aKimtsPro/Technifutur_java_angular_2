import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Basketteur } from 'src/app/model/Basketteur.model';

@Component({
  selector: 'app-add-player-form',
  templateUrl: './add-player-form.component.html',
  styleUrls: ['./add-player-form.component.css']
})
export class AddPlayerFormComponent implements OnInit {

  form: FormGroup;

  @Output()
  addPlayer = new EventEmitter<Basketteur>();

  constructor(private builder: FormBuilder) {
    this.form = builder.group({
      nom: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(45)]),
      taille: new FormControl(null, [Validators.required, Validators.min(166)])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid)
      this.addPlayer.emit( this.form.value );
  }

}
