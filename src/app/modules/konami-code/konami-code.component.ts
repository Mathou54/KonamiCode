import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-konami-code',
  templateUrl: './konami-code.component.html',
  styleUrls: ['./konami-code.component.css']
})
export class KonamiCodeComponent implements OnInit {

  public static readonly KONAMI_CODE = [
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

  private codeIndex = 0;

  public isCodeActivated = false;

  ngOnInit() {
    this.resetCode();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.codeIndex < KonamiCodeComponent.KONAMI_CODE.length && event.key.toLowerCase() === KonamiCodeComponent.KONAMI_CODE[this.codeIndex].toLowerCase()) {
      this.codeIndex++;
    } else {
      this.resetCode();
    }

    if (this.codeIndex === KonamiCodeComponent.KONAMI_CODE.length) {
      this.isCodeActivated = true;
    }
  }

  private resetCode(): void {
    this.isCodeActivated = false;
    this.codeIndex = 0;
  }

}
