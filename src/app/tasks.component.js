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
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var Subject_1 = require("rxjs/Subject");
var TaskSearchService = (function () {
    function TaskSearchService(http) {
        this.http = http;
    }
    TaskSearchService.prototype.search = function (term) {
        return this.http
            .get("api/tasks/?name=" + term)
            .map(function (response) { return response.json().data; });
    };
    return TaskSearchService;
}());
TaskSearchService = __decorate([
    core_2.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskSearchService);
exports.TaskSearchService = TaskSearchService;
var TasksComponent = (function () {
    function TasksComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService
            .getTasks()
            .then(function (tasks) { return _this.tasks = tasks; });
    };
    TasksComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.taskService.create(name)
            .then(function (task) {
            _this.tasks.push(task);
            _this.selectedTask = null;
        });
    };
    TasksComponent.prototype.delete = function (task) {
        var _this = this;
        this.taskService
            .delete(task.id)
            .then(function () {
            _this.tasks = _this.tasks.filter(function (h) { return h !== task; });
            if (_this.selectedTask === task) {
                _this.selectedTask = null;
            }
        });
    };
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
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
var TaskSearchComponent = (function () {
    function TaskSearchComponent(taskSearchService, router) {
        this.taskSearchService = taskSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    TaskSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    TaskSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasks = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.taskSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    TaskSearchComponent.prototype.gotoDetail = function (task) {
        var link = ['/detail', task.id];
        this.router.navigate(link);
    };
    return TaskSearchComponent;
}());
TaskSearchComponent = __decorate([
    core_1.Component({
        selector: 'hero-search',
        templateUrl: './task-search.component.html',
        styleUrls: ['./task-search.component.css'],
        providers: [TaskSearchService]
    }),
    __metadata("design:paramtypes", [TaskSearchService,
        router_1.Router])
], TaskSearchComponent);
exports.TaskSearchComponent = TaskSearchComponent;
//# sourceMappingURL=tasks.component.js.map