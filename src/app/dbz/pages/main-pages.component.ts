import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.html'
})

export class MainPageComponent  {
    constructor(private dbzService: DbzService){ // dentro del constructor tremos el service de manera privada

    }

    //para obtener datos usamos el getter donde retornamos la data dentro del service
    get characters():Character[]{
        return [...this.dbzService.characters]
    }

    // los metodos los creamos y llamamos al correspondiente dentro del service pasando los parametros necesarios
    onDeleteCharacter(id:string): void{
        this.dbzService.onDeleteCharacter(id)
    }

    onNewCharacter(character:Character){
        this.dbzService.addCharacter(character)
    }
}