import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button nbButton *ngIf="!value" [disabled]="disabled">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value === 'X'" [disabled]="disabled">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value === 'O'" [disabled]="disabled">{{ value }}</button>
  `,
  styles: [
    'button { width: 100%; height: 100%; font-size: 5em !important; }',
  ], 
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
  @Input() disabled = false;
}
