import { Injectable, signal } from '@angular/core';
import { BOARD, ColumnIndex, Game, GameServiceInterface, emptyBoard } from './data/data';

let gameId = 0;

@Injectable({
  providedIn: 'root'
})
export class GameService implements GameServiceInterface {
  private readonly _sigGames = signal<readonly Game[]>([]);
  
  /**
   * Signal pour la liste des jeux.
   */
  readonly sigGames = this._sigGames.asReadonly()

  /**
   * Crée un nouveau jeu.
   */
  newGame(): void {
    const g: Game = {
      board: emptyBoard,
      id: gameId++,
      turn: 'RED',
    };
    this._sigGames.update( L => [g, ...L] )
  }

  /**
   * Joue un coup dans la colonne col du jeu identifié par id.
   * @param id L'identifiant du jeu où jouer.
   * @param col La colonne où jouer.
   */
  play(id: number, col: ColumnIndex): void {
    const g = this._sigGames().find(g => g.id === id);
    if (g && g.board[col].length < 6) {
      const board = g.board.map((c, i) => i === col ? [...c, g.turn] : c);
      const turn = g.turn === 'RED' ? 'YELLOW' : 'RED';
      this._sigGames.update( L => L.map(g => g.id === id ? { ...g, board: board as unknown as BOARD, turn } : g) );
    }
  }

}
