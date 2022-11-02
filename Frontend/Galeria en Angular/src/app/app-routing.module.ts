import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosListComponent } from './components/photos-list/photos-list.component'
import { PhotoFormComponent } from './components/photo-form/photo-form.component'
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'register', 
  component: RegisterComponent 
  },
  { 
    path: 'login', component: LoginComponent 
  },
  {
    path: 'photos',
    component: PhotosListComponent
  },
  {
    path: 'photos/new',
    component: PhotoFormComponent
  },
  {
    path: 'photos/:id',
    component: PhotoPreviewComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }