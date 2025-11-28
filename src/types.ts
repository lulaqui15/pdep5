// types.ts

/**
 * Tipo literal para representar a los héroes, aliados y enemigos.
 * Esto actúa como una "variable lógica" para los nombres.
 */
export type Superheroe =
  | 'Batman'
  | 'Robin'
  | 'Iron Man'
  | 'Spider-Man'
  | 'Wonder Woman'
  | 'Superman'
  | 'Joker'
  | 'Green Goblin'
  | 'Lex Luthor';

/**
 * Representa una relación binaria (par de Superhéroes).
 */
export type Relacion = [Superheroe, Superheroe];