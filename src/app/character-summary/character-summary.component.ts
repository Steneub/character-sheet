import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.css']
})
export class CharacterSummaryComponent implements OnInit {

  @Input() toon;
  constructor() { }

  ngOnInit() {
  }

}