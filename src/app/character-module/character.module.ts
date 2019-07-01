import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CharacterModule {

    abilityModifier( a : number ) {  
    //window.alert(a) 
    return Math.floor( (a-10) / 2 );
  }

 }