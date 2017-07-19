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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var Observable_1 = require("rxjs/Observable");
var in_memory_data_service_1 = require("./in-memory-data.service");
var TaskService = (function () {
    //private tasks = Observable.of<Task[]>(this.inMemoryDataService.createDb());
    function TaskService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.taskUrl = 'tasks'; // URL to web api
        this.inMemoryDataService = new in_memory_data_service_1.InMemoryDataService();
        console.log(Observable_1.Observable.of(this.inMemoryDataService.createDb()));
    }
    TaskService.prototype.getTasks = function () {
        return Observable_1.Observable.of(this.inMemoryDataService.createDb());
    };
    TaskService.prototype.getTask = function (id) {
        var url = this.taskUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TaskService.prototype.delete = function (id) {
        var url = this.taskUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    TaskService.prototype.create = function (name) {
        return this.http
            .post(this.taskUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    TaskService.prototype.update = function (task) {
        var url = this.taskUrl + "/" + task.id;
        return this.http
            .put(url, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(function () { return task; })
            .catch(this.handleError);
    };
    TaskService.prototype.search = function (term) {
        console.log("ya tut");
        return Observable_1.Observable.of(this.inMemoryDataService.createDb().filter(function IsC(value) {
            var firstChar = value.name.substr(0, term.length);
            if (firstChar.toLowerCase() == term)
                return true;
            else {
                return false;
            }
        }));
    };
    TaskService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map