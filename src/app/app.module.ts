import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api

import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { TasksComponent }      from './tasks.component';
import { TaskDetailComponent }  from './task-detail.component';
import { TaskService }          from './task.service';
import { TaskSearchComponent}  from './task-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TasksComponent,
    TaskSearchComponent
  ],
  providers: [ TaskService, InMemoryDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
