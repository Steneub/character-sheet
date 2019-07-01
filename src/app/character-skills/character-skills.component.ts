import { Component, OnInit, Input } from '@angular/core';
import { skills } from '../skills';
import { abilities } from '../abilities';
import { abilityModifier, abilityScore, proficiencyBonus } from '../character-common';

@Component({
  selector: 'app-character-skills',
  templateUrl: './character-skills.component.html',
  styleUrls: ['./character-skills.component.css']
})
export class CharacterSkillsComponent {
  skills = skills;
  abilities = abilities;

  @Input() toon; 

  abilityModifier(a:number) { return abilityModifier(a) }
  abilityScore(s:number) { return abilityScore(s) }
  proficiencyBonus(t:object) { return proficiencyBonus(t) }
}