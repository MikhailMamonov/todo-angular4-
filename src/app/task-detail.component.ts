import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Location }                 from '@angular/common';

import { Task }        from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: [ './task-detail.component.css' ]
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  tasks: Task[];
  selectedTask: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
    //   .subscribe(hero => this.task = hero);
  }

  save(): void {
    // this.taskService.update(this.task)
    //   .then(() => this.goBack());
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.taskService.getInMemoryDataService().add(name);
    this.selectedTask = null;
    this.gotoTasks()
  }

  gotoTasks(): void {
    this.router.navigate(['/tasks']);
  }

  goBack(): void {
    this.location.back();
  }
}
