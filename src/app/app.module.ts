import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CharacterAbilitiesComponent } from './character-abilities/character-abilities.component';
import { CharacterSummaryComponent } from './character-summary/character-summary.component';
import { CharacterSavesComponent } from './character-saves/character-saves.component';
import { CharacterSkillsComponent } from './character-skills/character-skills.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { CharacterVitalsComponent } from './character-vitals/character-vitals.component';
import { ToonBrowserComponent } from './toon-browser/toon-browser.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SignedPipe } from './signed.pipe';
import { CharacterAttacksComponent } from './character-attacks/character-attacks.component';
import { CharacterDescriptionComponent } from './character-description/character-description.component';
import { CharacterFeaturesComponent } from './character-features/character-features.component';
import { CharacterProficienciesComponent } from './character-proficiencies/character-proficiencies.component';
import { CharacterEquipmentComponent } from './character-equipment/character-equipment.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ToonBrowserComponent},
      {path: 'character/:toonId', component:  CharacterSheetComponent},
    ])
  ],
  declarations: [ AppComponent, CharacterAbilitiesComponent, CharacterSummaryComponent, CharacterSavesComponent, CharacterSkillsComponent, CharacterSheetComponent, CharacterVitalsComponent, ToonBrowserComponent, AppHeaderComponent, SignedPipe, CharacterAttacksComponent, CharacterDescriptionComponent, CharacterFeaturesComponent, CharacterProficienciesComponent, CharacterEquipmentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
