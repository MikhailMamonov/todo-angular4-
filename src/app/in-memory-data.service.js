"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = require("./task");
var collection_1 = require("@angular/router/src/utils/collection");
require("rxjs/add/operator/add");
var InMemoryDataService = (function () {
    function InMemoryDataService(task) {
        this.task = task;
    }
    InMemoryDataService.prototype.createDb = function () {
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
        collection_1.forEach();
        var i;
         in tasks;
        {
            this.task.add(new task_1.Task(i.id, i.name));
        }
        return { tasks: tasks };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map