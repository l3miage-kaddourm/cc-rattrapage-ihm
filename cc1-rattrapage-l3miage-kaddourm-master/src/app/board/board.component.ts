import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, computed, model, signal } from '@angular/core';
import { BOARD, ColumnIndex, columns, emptyBoard, getOppositeLine, lines } from '../data/data';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./board.component.html`,
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
}
