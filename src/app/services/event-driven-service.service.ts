import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {MainsonCommandEvent, MainsonQueryEvent} from "../State/MaisonState";

@Injectable({
  providedIn: 'root'
})
export class EventDrivenServiceService {

  sourceQueryEventSubject : Subject<MainsonQueryEvent>= new Subject<MainsonQueryEvent>();
  sourceQueryEventSubjectObservable = this.sourceQueryEventSubject.asObservable();


  sourceCommandEventSubject : Subject<MainsonCommandEvent> = new Subject<MainsonCommandEvent>();
  sourceCommandEventSubjectObservable = this.sourceCommandEventSubject.asObservable();
  constructor() { }

  publishQueryEvent(event : MainsonQueryEvent)
  {
    this.sourceQueryEventSubject.next(event);
  }

  publishCommandEvent(event : MainsonCommandEvent){
    this.sourceCommandEventSubject.next(event);
  }

}
