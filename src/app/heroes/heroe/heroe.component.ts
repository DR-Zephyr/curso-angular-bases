import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'Tony Stark'
  public age: number = 45

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHeroName(): void {
    this.name = 'Peter Parker'
  }

  changeHeroAge(): void {
    this.age = 16
  }

  reset() {
    this.name = 'Tony Stark'
    this.age = 45
  }
}
