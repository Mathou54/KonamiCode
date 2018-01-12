import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-konami-code',
  templateUrl: './konami-code.component.html',
  styleUrls: ['./konami-code.component.css']
})
export class KonamiCodeComponent implements OnInit {

  public isCodeActivated: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isCodeActivated = false;
  }

}
