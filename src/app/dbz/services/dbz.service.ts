import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters:Character[] =[
        {
            id: uuid(),
            name:'Krilin',
            power:1000
        },
        {
            id: uuid(),
            name:'Goku',
            power:10500
        },
        {
            id: uuid(),
            name:'Vegata',
            power:10400
        }
    ]

    // mantenemos toda la data dentro del service, junto con los metodos que la manipulan
    addCharacter(character:Character):void{
        const newCharacter:Character = {id:uuid(), ...character}
        this.characters.push(newCharacter)
    }
    onDeleteCharacter(id:string):void{
        if(!id) return;
        this.characters = this.characters.filter(character => character.id !== id)
    }
    
}