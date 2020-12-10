import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiConsumeService } from 'src/app/services/api-consume.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private builder: FormBuilder, private service: ApiConsumeService) {
    this.userForm = builder.group({
      username: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.userForm.valid)
      this.service.postUser(this.userForm.value).subscribe(
        (inserted) => alert("a été inséré : " + inserted.username + "\nà l'id :" + inserted.id));
  }

}
