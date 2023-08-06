import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { CoursesCardDetailComponent } from './home-page/courses-card-detail/courses-card-detail.component';
import { CreateNewCourseComponent } from './home-page/create-new-course/create-new-course.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'courses/:id', component: CoursesCardDetailComponent },
  { path: 'create-new-course', component: CreateNewCourseComponent },
  { path: 'contact-us', component: ContactUsPageComponent }
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
