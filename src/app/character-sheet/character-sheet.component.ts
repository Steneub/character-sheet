import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toons } from '../toons';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent  {

  toon;
  constructor(
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.toon = toons[+params.get('toonId')];
  });

  
}

}