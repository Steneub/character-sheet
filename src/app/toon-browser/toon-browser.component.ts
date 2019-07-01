import { Component, OnInit } from '@angular/core';
import { toons } from '../toons';

@Component({
  selector: 'app-toon-browser',
  templateUrl: './toon-browser.component.html',
  styleUrls: ['./toon-browser.component.css']
})
export class ToonBrowserComponent implements OnInit {
  toons = toons;

  createCharacter() {
    window.alert("Character Creator doesn't do anything yet");
  }

  constructor() { }

  ngOnInit() {
  }

}