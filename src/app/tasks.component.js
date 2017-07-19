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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var task_service_1 = require("./task.service");
var Subject_1 = require("rxjs/Subject");
var TasksComponent = (function () {
    function TasksComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
        this.selectedTask = [];
    }
    // Push a search term into the observable stream.
    TasksComponent.prototype.search = function (term) {
        console.log(term);
        this.searchTerms.next(term);
    };
    TasksComponent.prototype.getTasks = function () {
        console.log(this.tasks);
        this.tasks = this.taskService
            .getTasks();
        console.log(this.tasks);
    };
    TasksComponent.prototype.delete = function () {
        for (var i = 0; i < this.selectedTask.length; i++) {
            this.taskService
                .delete(this.selectedTask[i].id);
        }
        this.gotoTasks();
    };
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
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
    };
    TasksComponent.prototype.onSelect = function (task, checked) {
        if (checked == true)
            this.selectedTask.push(task);
        else
            for (var i = 0; i < this.selectedTask.length; i++) {
                if (this.selectedTask[i].id == task.id)
                    this.selectedTask.splice(i, 1);
            }
    };
    TasksComponent.prototype.gotoTasks = function () {
        this.router.navigate(['/tasks']);
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        selector: 'tasks',
        templateUrl: './tasks.component.html',
        styleUrls: ['./tasks.component.css']
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        router_1.Router])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map