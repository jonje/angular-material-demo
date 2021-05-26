import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <div class="content mat-app-background">
      <button mat-button color="primary">
        <mat-icon>face</mat-icon>
        Click Me!
      </button>
    </div>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
