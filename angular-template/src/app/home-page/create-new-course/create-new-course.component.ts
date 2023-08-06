import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-new-course',
  templateUrl: './create-new-course.component.html',
  styleUrls: ['./create-new-course.component.css']
})
export class CreateNewCourseComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isEditable = false;
  constructor(private _formBuilder: FormBuilder) {};
  title: any;
  descrpition: any;
  saveCourse(title: any, description: any){
    console.log(title)
    console.log(description)
  }
}
