"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var task_service_1 = require("./task.service");
var TaskDetailComponent = (function () {
    function TaskDetailComponent(taskService, route, router, location) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        // this.route.paramMap
        //   .switchMap((params: ParamMap) => this.taskService.getTask(+params.get('id')))
        //   .subscribe(hero => this.task = hero);
    };
    TaskDetailComponent.prototype.save = function () {
        // this.taskService.update(this.task)
        //   .then(() => this.goBack());
    };
    TaskDetailComponent.prototype.add = function (name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.taskService.add(name);
        this.gotoTasks();
    };
    TaskDetailComponent.prototype.gotoTasks = function () {
        this.router.navigate(['/tasks']);
    };
    TaskDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return TaskDetailComponent;
}());
TaskDetailComponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        templateUrl: './task-detail.component.html',
        styleUrls: ['./task-detail.component.css']
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        router_1.ActivatedRoute,
        router_1.Router,
        common_1.Location])
], TaskDetailComponent);
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map