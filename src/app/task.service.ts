import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';
import { Observable }        from 'rxjs/Observable';
import {InMemoryDataService}     from './in-memory-data.service';



@Injectable()
export class TaskService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private taskUrl = 'tasks';  // URL to web api
  private inMemoryDataService= new InMemoryDataService([], Observable.of<Task[]>([]));
  constructor(private http: Http) { }
  getTasks(): Promise<Observable<Task[]>> {
    return Promise.resolve(this.inMemoryDataService.createDb());
  }


  getTask(id: number): Promise<Task> {
    const url = `${this.taskUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Task)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.taskUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Task> {
    return this.http
        .post(this.taskUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Task)
        .catch(this.handleError);
  }
  update(task: Task): Promise<Task> {
    const url = `${this.taskUrl}/${task.id}`;
    return this.http
        .put(url, JSON.stringify(task), {headers: this.headers})
        .toPromise()
        .then(() => task)
        .catch(this.handleError);
  }
  search(term: string): Observable<Task[]> {
    return this.http
        .get(`api/tasks/?name=${term}`)
        .map(response => response.json().data as Task[]);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

