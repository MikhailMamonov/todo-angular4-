import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable }        from 'rxjs/Observable';
import { Task }        from './task';
export class InMemoryDataService implements InMemoryDbService {
  constructor(public tmp: Task[], public task: Observable< Task [] > ) { }
  createDb(): Observable<Task[]> {
    this.task = Observable.of<Task[]>([]);
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
    console.log(tasks);
    for ( var i = 0; i < tasks.length; i++){
      this.tmp.push(new Task(tasks[i].id, tasks[i].name));
    }
    return Observable.of<Task[]>(this.tmp);
  }
}
