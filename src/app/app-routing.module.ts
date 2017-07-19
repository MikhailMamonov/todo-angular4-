import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TasksComponent }      from './tasks.component';
import { TaskDetailComponent }  from './task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'adding', component: TaskDetailComponent },
  { path: 'tasks',     component: TasksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
