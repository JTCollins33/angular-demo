import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count=signal(0)

  incrementCounter(){
    // cannot update value of signal with simple equals operator so must use set()
    this.count.set(this.count()+1);
  }

  decrementCounter(){
    // alternative way to update value
    this.count.update((value) => value-1);
  }

  resetCounter(){
    this.count.set(0);
  }
}
