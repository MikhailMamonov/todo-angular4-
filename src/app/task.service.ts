import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';
import { Observable }        from 'rxjs/Observable';
import {InMemoryDataService}     from './in-memory-data.service';


@Injectable()
export class TaskService {

  //private tasks = Observable.of<Task[]>(this.inMemoryDataService.createDb());
  constructor(private inMemoryDataService: InMemoryDataService) { console.log('create service'); }
  getTasks(): Task[] {
    return this.inMemoryDataService.getDb();
  }


  getInMemoryDataService(): InMemoryDataService {return this.inMemoryDataService;}
  // getTask(id: number): Promise<Task> {
  //   const url = `${this.taskUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as Task)
  //     .catch(this.handleError);
  // }
  //
  // delete(id: number): Promise<void> {
  //   const url = `${this.taskUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }
  //
  // create(name: string): Promise<Task> {
  //   return this.http
  //       .post(this.taskUrl, JSON.stringify({name: name}), {headers: this.headers})
  //       .toPromise()
  //       .then(res => res.json().data as Task)
  //       .catch(this.handleError);
  // }
  // update(task: Task): Promise<Task> {
  //   const url = `${this.taskUrl}/${task.id}`;
  //   return this.http
  //       .put(url, JSON.stringify(task), {headers: this.headers})
  //       .toPromise()
  //       .then(() => task)
  //       .catch(this.handleError);
  // }
  search(term: string): Observable<Task[]> {
    console.log("ya tut");
    return Observable.of<Task[]>(this.inMemoryDataService.getDb().filter( function IsC(value) {
      var firstChar = value.name.substr(0, term.length);
      if (firstChar.toLowerCase() == term)
        return true;
      else {return false;
      }
    }));
  }

  delete(id: number): void {
    this.inMemoryDataService.delete(id);
  }
  add( name: string ): void{
    this.inMemoryDataService.add(name);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

