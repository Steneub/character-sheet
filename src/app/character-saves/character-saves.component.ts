import { Component, OnInit, Input } from '@angular/core';
import {abilityModifier, abilityScore, proficiencyBonus } from '../character-common';
import { abilities } from '../abilities';

@Component({
  selector: 'app-character-saves',
  templateUrl: './character-saves.component.html',
  styleUrls: ['./character-saves.component.css']
})
export class CharacterSavesComponent implements OnInit {

  @Input() toon; 
  abilities = abilities;
  
  constructor() { }

  ngOnInit() {
  }

  abilityModifier(a:number) { return abilityModifier(a) }
  abilityScore(s:number) { return abilityScore(s) }
  proficiencyBonus(t:object) { return proficiencyBonus(t) }

}