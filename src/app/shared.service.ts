import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private pageTitleSubject = new BehaviorSubject<string>(''); // Default empty title
  pageTitle$ = this.pageTitleSubject.asObservable();

  setPageTitle(title: string): void {
    this.pageTitleSubject.next(title);
  }
}
