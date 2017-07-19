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
  tasks: Observable<Task[]>;
  selectedTask: Task;
  private searchTerms = new Subject<string>();

  constructor(
      private taskService: TaskService,
      private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  getTasks(): void {
    this.taskService
        .getTasks()
        .then(tasks => this.tasks = tasks);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.taskService.create(name)
  //       .then(task => {
  //         this.tasks.push(task);
  //         this.selectedTask = null;
  //       });
  // }

  // delete(task: Task): void {
  //   this.taskService
  //       .delete(task.id)
  //       .then(() => {
  //         this.tasks = this.tasks.filter(h => h !== task);
  //         if (this.selectedTask === task) { this.selectedTask = null; }
  //       });
  // }

  ngOnInit(): void {
    this.getTasks();
    console.log(this.tasks);
    this.tasks = this.searchTerms
        .debounceTime(300)        // wait 300ms after each keystroke before considering the term
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time the term changes
            // return the http search observable
            ? this.taskService.search(term)
            // or the observable of empty heroes if there was no search term
            : Observable.of<Task[]>([]))
        .catch(error => {
          // TODO: add real error handling
          console.log(error);
          return Observable.of<Task[]>([]);
        });
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTask.id]);
  }
}
