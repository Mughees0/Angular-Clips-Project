import { AboutComponent } from './about/about.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClipComponent } from './clip/clip.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '**', //example.com/anything
    component: NotFoundComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about', //example.com/about
    component: AboutComponent,
  },
  {
    path: 'clip/:id', //example.com/clip/123
    component: ClipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
