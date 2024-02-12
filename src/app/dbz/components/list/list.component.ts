import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input() 
  public characterList: Character[]=[]

  @Output()
  public onDeleteId:EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id:string | undefined):void{
    if(!id) return
    this.onDeleteId.emit(id)
  }
}
