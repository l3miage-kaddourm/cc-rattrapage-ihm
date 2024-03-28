import { Signal } from "@angular/core";

/**
 * Les joueurs sont soit 'RED' soit 'YELLOW'.
 */
export type PLAYER = 'RED' | 'YELLOW';

/**
 * Un plateau contient 7 colonnes.
 */
export type COLUMN = readonly PLAYER[]

/**
 * Un plateau contient 6 lignes.
 */
export type BOARD = readonly [COLUMN, COLUMN, COLUMN, COLUMN, COLUMN, COLUMN, COLUMN];

/**
 * Les indices possibles pour les colonnes
 */
export type ColumnIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Les indices possibles pour les lignes
 */
export type LineIndex = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Tableau des indices de colonnes.
 */
export const columns: readonly ColumnIndex[] = [0, 1, 2, 3, 4, 5, 6];

/**
 * Tableau des indices de lignes.
 */
export const lines: readonly LineIndex[] = [0, 1, 2, 3, 4, 5];

/**
 * Retourne la ligne opposée par rapport à la ligne donnée (0 <-> 5, 1 <-> 4, 2 <-> 3).
 */
export function getOppositeLine(line: LineIndex): LineIndex {
    return (5 - line) as LineIndex;
}

/**
 * Un plateau de jeu vide (7 piles vides).
 */
export const emptyBoard: BOARD = [
    [], [], [], [], [], [], []
];

/**
 * Un jeu est caractérisé par un identifiant, un plateau et le joueur dont c'est le tour.
 */
export interface Game {
    readonly id: number;
    readonly turn: PLAYER;
    readonly board: BOARD;
}

/**
 * Interface pour le service de jeu.
 */
export interface GameServiceInterface {
    readonly sigGames: Signal<readonly Game[]>;
    newGame(): void;
    play(id: number, col: ColumnIndex): void;
}

/**
 * Types utilisés pour les directions.
 */
type DELTA = -1 | 0 | 1;
type DIRECTION = [dx: DELTA, dy: DELTA]
const directions: DIRECTION[] = [
  [1, 0], [1, -1], [1, 1], [0, 1]
]

/**
 * Vérifie si au moins nb jetons sont alignés dans le plateau.
 * @param board Le plateau à vérifier.
 * @param nb Le nombre de jetons qui doivent être alignés.
 * @param token Le type de jeton à vérifier.
 * @returns True si au moins nb jetons sont alignés, false sinon.
 */
export function hasNtokensAligned(board: BOARD, nb: number, token: PLAYER): boolean {
    return columns.find(
        c => lines.find(
            l => board[c][l] === token && directions.find(d => hasNb(board, nb, token, d, c, l))
        ) !== undefined
    ) !== undefined;
}

/**
 * Vérifie si au moins NB jetons du même type sont alignés dans la direction donnée.
 */
function hasNb(board: BOARD, NB: number, token: PLAYER, [dx, dy]: DIRECTION, col: ColumnIndex, line: LineIndex): boolean {
    let c = col;
    let l = line;
    let nb = 0;
    while (nb < NB && board.at(c)?.at(l) === token) {
        c += dx;
        l += dy;
        nb++;
    }
    return nb >= NB;
}