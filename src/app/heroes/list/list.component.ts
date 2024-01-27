import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado']
  public deletedHero?: string;

  removeHeroName(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
