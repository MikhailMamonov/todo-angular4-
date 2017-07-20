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
var task_1 = require("./task");
var core_1 = require("@angular/core");
var InMemoryDataService = (function () {
    function InMemoryDataService() {
        this.tmp = [];
        var tasks = [
            { id: 0, name: 'Zero' },
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        console.log(this.tmp);
        for (var i = 0; i < tasks.length; i++) {
            this.tmp.push(new task_1.Task(tasks[i].id, tasks[i].name));
        }
    }
    InMemoryDataService.prototype.getDb = function () {
        return this.tmp;
    };
    InMemoryDataService.prototype.add = function (name) {
        this.tmp.push(new task_1.Task(this.tmp.length, name));
        return;
    };
    InMemoryDataService.prototype.delete = function (id) {
        for (var i = 0; i < this.tmp.length; i++) {
            if (this.tmp[i].id == id) {
                this.tmp.splice(i, 1);
                console.log(this.tmp);
            }
        }
    };
    return InMemoryDataService;
}());
InMemoryDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], InMemoryDataService);
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map