import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id?: string) {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
