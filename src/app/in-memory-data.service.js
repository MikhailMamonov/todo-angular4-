"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var task_1 = require("./task");
var InMemoryDataService = (function () {
    function InMemoryDataService(tmp, task) {
        this.tmp = tmp;
        this.task = task;
    }
    InMemoryDataService.prototype.createDb = function () {
        this.task = Observable_1.Observable.of([]);
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
        console.log(tasks);
        for (var i = 0; i < tasks.length; i++) {
            this.tmp.push(new task_1.Task(tasks[i].id, tasks[i].name));
        }
        return Observable_1.Observable.of(this.tmp);
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map