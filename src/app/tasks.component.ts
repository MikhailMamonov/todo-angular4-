import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Task }                from './task';
import { TaskService }         from './task.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: [ './tasks.component.css' ]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task[];
  private searchTerms = new Subject<string>();

  constructor(
      private taskService: TaskService,
      private router: Router) {this.selectedTask=[]; }

  // Push a search term into the observable stream.
  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }
  getTasks(): void {
    console.log(this.tasks);
    this.tasks = this.taskService
        .getTasks();
        console.log(this.tasks);
  }

  delete(): void {
    for ( var i = 0; i < this.selectedTask.length; i++){
      this.taskService
          .delete(this.selectedTask[i].id);
    }
    this.gotoTasks()
  }


  ngOnInit(): void {
    this.getTasks()
    console.log(this.tasks);
    // this.tasks = this.searchTerms
    //     .debounceTime(300)        // wait 300ms after each keystroke before considering the term
    //     .distinctUntilChanged()   // ignore if next search term is same as previous
    //     .switchMap(term => term   // switch to new observable each time the term changes
    //         // return the http search observable
    //         ? this.taskService.search(term)
    //         // or the observable of empty heroes if there was no search term
    //         : Observable.of<Task[]>([]))
    //     .catch(error => {
    //       // TODO: add real error handling
    //       console.log(error);
    //       return Observable.of<Task[]>([]);
    //     });
    console.log(this.tasks);
  }

  onSelect(task: Task, checked:boolean): void {
    if(checked==true)
      this.selectedTask.push(task);
    else
      for ( var i = 0; i < this.selectedTask.length; i++){
        if(this.selectedTask[i].id==task.id)
          this.selectedTask.splice(i, 1);
      }
  }

  gotoTasks(): void {
    this.router.navigate(['/tasks']);
  }


}
