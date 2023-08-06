import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  beginnerCourses = [
    {
     id: 120,
     description: 'Introduction to Angular',
     duration: '4:17',
     seqNo: 1,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/1*BMDyhp4RU0SQuG5FSCG4MA.png'
   },
   {
     id: 121,
     description: 'Navigation and Containers',
     duration: '6:37',
     seqNo: 2,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/0*ziNf6Ao8VbShrzHM'
   },
   {
     id: 122,
     description: 'Data Tables',
     duration: '8:03',
     seqNo: 3,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/0*CMRt_X2y06OTNl0U'
   },
   {
     id: 123,
     description: 'Dialogs and Overlays',
     duration: '11:46',
     seqNo: 4,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/1*gEO2PA3_041rFRPf8270rw.jpeg'
   },
   {
     id: 124,
     description: 'Commonly used Form Controls',
     duration: '7:17',
     seqNo: 5,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/1*BMDyhp4RU0SQuG5FSCG4MA.png'
   },
   {
     id: 125,
     description: 'Drag and Drop',
     duration: '8:16',
     seqNo: 6,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/0*ziNf6Ao8VbShrzHM'
   },
   {
     id: 126,
     description: 'Responsive Design',
     duration: '7:28',
     seqNo: 7,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/0*CMRt_X2y06OTNl0U'
   },
   {
     id: 127,
     description: 'Tree Component',
     duration: '11:09',
     seqNo: 8,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/1*gEO2PA3_041rFRPf8270rw.jpeg'
   },
   {
     id: 128,
     description: 'Virtual Scrolling',
     duration: '3:44',
     seqNo: 9,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/1*BMDyhp4RU0SQuG5FSCG4MA.png'
   },
   {
     id: 129,
     description: 'Custom Themes',
     duration: '8:55',
     seqNo: 10,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/0*ziNf6Ao8VbShrzHM'
   },
   {
     id: 130,
     description: 'Changing Theme at Runtime',
     duration: '12:37',
     seqNo: 11,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/0*CMRt_X2y06OTNl0U'
   }
  ];

  advancedCourses = [
    {
     id: 120,
     description: 'Introduction to Angular Material',
     duration: '4:17',
     seqNo: 1,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/1*BMDyhp4RU0SQuG5FSCG4MA.png'
   },
   {
     id: 121,
     description: 'Navigation and Containers',
     duration: '6:37',
     seqNo: 2,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/0*ziNf6Ao8VbShrzHM'     
   },
   {
     id: 122,
     description: 'Data Tables',
     duration: '8:03',
     seqNo: 3,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/0*CMRt_X2y06OTNl0U'
   },
   {
     id: 123,
     description: 'Dialogs and Overlays',
     duration: '11:46',
     seqNo: 4,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/1*BMDyhp4RU0SQuG5FSCG4MA.png'
   },
   {
     id: 124,
     description: 'Commonly used Form Controls',
     duration: '7:17',
     seqNo: 5,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/0*ziNf6Ao8VbShrzHM'
   },
   {
     id: 125,
     description: 'Drag and Drop',
     duration: '8:16',
     seqNo: 6,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/0*CMRt_X2y06OTNl0U'
   },
   {
     id: 126,
     description: 'Responsive Design',
     duration: '7:28',
     seqNo: 7,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/1*gEO2PA3_041rFRPf8270rw.jpeg'
   },
   {
     id: 127,
     description: 'Tree Component',
     duration: '11:09',
     seqNo: 8,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/1*BMDyhp4RU0SQuG5FSCG4MA.png'
   },
   {
     id: 128,
     description: 'Virtual Scrolling',
     duration: '3:44',
     seqNo: 9,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/v2/resize:fit:800/0*ziNf6Ao8VbShrzHM'
   },
   {
     id: 129,
     description: 'Custom Themes',
     duration: '8:55',
     seqNo: 10,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/0*CMRt_X2y06OTNl0U'
   },
   {
     id: 130,
     description: 'Changing Theme at Runtime',
     duration: '12:37',
     seqNo: 11,
     courseId: 11,
     imageURL: 'https://cdn-images-1.medium.com/max/800/1*gEO2PA3_041rFRPf8270rw.jpeg'
   }
  ];


  // ngOnInit() {
  //   // this.course = this.route.snapshot.data["course"];

  // }
}
