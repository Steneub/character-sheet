import { Component, OnInit, Input } from '@angular/core';
import { abilities } from '../abilities';
import { abilityModifier, abilityScore } from '../character-common'
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-character-abilities',
  templateUrl: './character-abilities.component.html',
  styleUrls: ['./character-abilities.component.css']
})
export class CharacterAbilitiesComponent {
  abilities = abilities;

  @Input() toon; 
  
  abilityModifier(a:number) { return abilityModifier(a) }
  abilityScore(s:number) { return abilityScore(s) }

}