import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-konami-code',
  templateUrl: './konami-code.component.html',
  styleUrls: ['./konami-code.component.css']
})
export class KonamiCodeComponent implements OnInit {

  private KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ];

  private CLOSE_CODE = 'Escape';

  private codeIndex = 0;

  public isCodeActivated = false;

  ngOnInit() {
    this.resetCode();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.codeIndex < this.KONAMI_CODE.length && event.key === this.KONAMI_CODE[this.codeIndex]) {
      this.codeIndex++;
    } else {
      this.resetCode();
    }

    if (this.codeIndex === this.KONAMI_CODE.length) {
      this.isCodeActivated = true;
    }
  }

  private resetCode(): void {
    this.isCodeActivated = false;
    this.codeIndex = 0;
  }

}
