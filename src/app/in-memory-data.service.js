"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = require("./task");
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
            if (this.tmp[i].id == id)
                this.tmp.splice(i, 1);
        }
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map