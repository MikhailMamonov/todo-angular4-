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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var TasksComponent = (function () {
    function TasksComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
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
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTasks();
        console.log(this.tasks);
        this.tasks = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.taskService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
        console.log(this.tasks);
    };
    TasksComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    TasksComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedTask.id]);
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