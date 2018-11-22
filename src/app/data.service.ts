import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['ı have fucking errors']);
  goal=this.goals.asObservable();
 
  constructor() { }

  ChangeGoal(goal){
    this.goals.next(goal);
  }
}
