import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from './../components/mock-task';
import { Task } from './../components/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Observable<Task[]>{
    const tasks = of(TASKS);
    return tasks
  }

  constructor() { }
}
