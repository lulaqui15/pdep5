// superheroes.ts
// superheroes.ts
// superheroes.ts

import type { Superheroe, Relacion } from './types.js'; 
import { 
  heroes, 
  aliadosRelacion, 
  enemigosRelacion, 
  mentoresRelacion 
} from './data.js';

// --- Funciones Lógicas (Simulando Lógica) ---
// ... (resto del código)

function estaEnRelacion(
  x: Superheroe,
  y: Superheroe,
  relaciones: Relacion[]
): boolean {
  // Compara si el par [x, y] existe en la lista de relaciones
  return relaciones.some(
    ([personaje1, personaje2]) => personaje1 === x && personaje2 === y
  );
}

/**
 * Implementación de la función esAliado(x, y).
 */
function esAliado(x: Superheroe, y: Superheroe): boolean {
  return estaEnRelacion(x, y, aliadosRelacion);
}

/**
 * Implementación de la función esEnemigo(x, y).
 */
function esEnemigo(x: Superheroe, y: Superheroe): boolean {
  return estaEnRelacion(x, y, enemigosRelacion);
}


function esMentor(x: Superheroe, y: Superheroe): boolean {
  return estaEnRelacion(x, y, mentoresRelacion);
}

// --- Consultas ---


function encontrarAliadosDe(heroe: Superheroe): Superheroe[] {
  // Busca en aliadosRelacion todos los pares donde el primer elemento es 'heroe'
  return aliadosRelacion
    .filter(([h, _]) => h === heroe)
    .map(([_, aliado]) => aliado);
}

/**
 * Encontrar todos los enemigos de un héroe dado (X tiene a Y como enemigo).
 */
function encontrarEnemigosDe(heroe: Superheroe): Superheroe[] {
 
  return enemigosRelacion
    .filter(([h, _]) => h === heroe)
    .map(([_, enemigo]) => enemigo);
}


function encontrarMentorDe(aprendiz: Superheroe): Superheroe[] {
  
  return mentoresRelacion
    .filter(([_, a]) => a === aprendiz)
    .map(([mentor, _]) => mentor);
}


function mostrarParesHeroeAliado(): Relacion[] {
  // Para ser un par "Héroe-Aliado", el primer elemento debe estar en la lista de 'heroes'.
  return aliadosRelacion.filter(([h, _]) => heroes.includes(h));
}

// --- Ejecución de las Consultas ---

console.log('✨ Superhéroes - Resultados de las Consultas ✨');
console.log('--------------------------------------------------');

// 1. Encontrar todos los aliados de Batman.
const aliadosBatman = encontrarAliadosDe('Batman');
console.log(`1. Aliados de Batman: ${aliadosBatman.join(', ')}`);

// 2. Encontrar todos los enemigos de Superman.
const enemigosSuperman = encontrarEnemigosDe('Superman');
console.log(`2. Enemigos de Superman: ${enemigosSuperman.join(', ')}`);

// 3. ¿Quién es mentor de Spider-Man?
const mentorSpiderMan = encontrarMentorDe('Spider-Man');
console.log(`3. Mentor de Spider-Man: ${mentorSpiderMan.join(', ')}`);

// 4. Mostrar todos los pares héroe-aliado que existen en la base de conocimiento.
const paresHeroeAliado = mostrarParesHeroeAliado();
console.log('\n4. Pares Héroe-Aliado (Héroe es mentor del Aliado):');
paresHeroeAliado.forEach(([heroe, aliado]) => {
  console.log(`   - ${heroe} es aliado de ${aliado}`);
});

console.log('--------------------------------------------------');