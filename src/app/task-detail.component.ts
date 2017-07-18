import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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

  constructor(
    private heroService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getTask(+params.get('id')))
      .subscribe(hero => this.task = hero);
  }

  save(): void {
    this.heroService.update(this.task)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
