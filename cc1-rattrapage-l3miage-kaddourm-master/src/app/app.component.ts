import { Component, Signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameService } from './game.service';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';
import { ColumnIndex, Game, PLAYER, hasNtokensAligned } from './data/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
