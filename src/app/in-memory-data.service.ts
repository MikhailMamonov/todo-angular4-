import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Observable} from "rxjs/Observable";
import {Task} from "./task";
import {forEach} from "@angular/router/src/utils/collection";
import 'rxjs/add/operator/add';
export class InMemoryDataService implements InMemoryDbService {
  constructor( public task: Observable< Task [] > ) { }
  createDb() {
    const tasks = [
      { id: 0,  name: 'Zero' },
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
    forEach(var i in tasks){
      this.task.add(new Task(i.id,i.name));
    }
    return {tasks};
  }
}
