import { Observable }        from 'rxjs/Observable';
import { Task }        from './task';
import {Injectable} from "@angular/core";

@Injectable()
export class InMemoryDataService {
  private tmp: Task[];

  constructor() {
    this.tmp = [];
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
    console.log(this.tmp);
    for ( var i = 0; i < tasks.length; i++){
      this.tmp.push(new Task(tasks[i].id, tasks[i].name));
    }
  }
  getDb(): Task[] {
    return this.tmp;
  }
  add(name: string ): void{
    this.tmp.push(new Task(this.tmp.length, name));
  return;
  }
  delete(id: number): void {
    for (var i = 0; i < this.tmp.length; i++) {
      if (this.tmp[i].id == id) {
        this.tmp.splice(i, 1);
        console.log(this.tmp);
      }
    }
  }

}
