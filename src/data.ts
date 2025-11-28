// data.ts

import { Superheroe, Relacion } from './types';

// --- Variables Lógicas (Conjuntos) ---

// Una variable para representar héroes
export const heroes: Superheroe[] = [
  'Batman',
  'Iron Man',
  'Wonder Woman',
  'Superman',
];

// Una variable para representar aliados (personajes que son considerados aliados en alguna relación)
export const aliados: Superheroe[] = [
  'Robin',
  'Spider-Man',
  'Superman', // Superman es héroe y aliado en la relación Wonder Woman - Superman
];

// Una variable para representar enemigos
export const enemigos: Superheroe[] = [
  'Joker',
  'Green Goblin',
  'Lex Luthor',
];

// --- Relaciones ---

// Implementar la función esAliado(x, y)
// La función se representa aquí como un Array de pares [Héroe, Aliado]
export const aliadosRelacion: Relacion[] = [
  ['Batman', 'Robin'],
  ['Iron Man', 'Spider-Man'],
  ['Wonder Woman', 'Superman'],
];

// Implementar la función esEnemigo(x, y)
// Array de pares [Héroe, Enemigo]
export const enemigosRelacion: Relacion[] = [
  ['Batman', 'Joker'],
  ['Spider-Man', 'Green Goblin'],
  ['Superman', 'Lex Luthor'],
];

// Implementar la función esMentor(x, y) donde x es mentor de y
// Array de pares [Mentor, Aprendiz]
export const mentoresRelacion: Relacion[] = [
  ['Batman', 'Robin'],
  ['Iron Man', 'Spider-Man'],
];