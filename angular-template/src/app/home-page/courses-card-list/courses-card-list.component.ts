import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {
  constructor() { }
  @Input() courses: any[] = [];

  editCourse(course: any[]){
    console.log(course)
  }

  ngOnInit() {
    console.log(this.courses)
    // this.course = this.route.snapshot.data["course"];

  }

}
