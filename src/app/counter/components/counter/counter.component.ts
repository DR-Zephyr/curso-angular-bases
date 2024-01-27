import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h3 class="m-0">Counter</h3>
      <p>Current count: <strong>{{counter}}</strong></p>
      <button (click)="incrementBy(+1)">Increment by 1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="incrementBy(-1)">Decrese by 1</button>
    </div>
    <hr>
  `
})
export class CounterComponent {
  public counter: number = 10;

  incrementBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 0;
  }
}
