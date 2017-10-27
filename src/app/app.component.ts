import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  resourceFormGroup: FormGroup;
  resources: any = <any>[];
  title = 'app';


  constructor(
    private _fb: FormBuilder,
  ) {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('Init');
    this.resourceFormGroup = this._fb.group({
      name: ['', [<any>Validators.required]],
      faculty: ['', [<any>Validators.required]]
    });
  }

  onClickCreate(valid: boolean, value: any) {
    console.log(valid);
    console.log(value);
    if (valid) {
      console.log(value);
      // SAve into the DB
      this.resources.push(value);
      this.resourceFormGroup.reset();
    } else {
      console.log('Form not valid');
    }
  }

  onClickEdit(resource: any) {
    console.log(resource);
    this.resourceFormGroup.controls['name'].setValue(resource.name);
    this.resourceFormGroup.controls['faculty'].setValue(resource.faculty);
  }
}
