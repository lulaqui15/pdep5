// Programación Lógica con LogicJS
const { lvar, run, eq, or, and } = require('logicjs');

// 1. VARIABLES LÓGICAS
const heroe = lvar('heroe');
const aliado = lvar('aliado');
const enemigo = lvar('enemigo');

// ========================================
// 2. RELACIÓN DE ALIADOS

const esAliado = (x, y) => {
  return or(
    and(eq(x, 'Batman'), eq(y, 'Robin')),
    and(eq(x, 'Iron Man'), eq(y, 'Spider-Man')),
    and(eq(x, 'Wonder Woman'), eq(y, 'Superman'))
  );
};

// ========================================
// 3. RELACIÓN DE ENEMIGOS
const esEnemigo = (x, y) => {
  return or(
    and(eq(x, 'Batman'), eq(y, 'Joker')),
    and(eq(x, 'Spider-Man'), eq(y, 'Green Goblin')),
    and(eq(x, 'Superman'), eq(y, 'Lex Luthor'))
  );
};

// 4. RELACIÓN DE MENTORES

const esMentor = (x, y) => {
  return or(
    and(eq(x, 'Batman'), eq(y, 'Robin')),
    and(eq(x, 'Iron Man'), eq(y, 'Spider-Man'))
  );
};

// ========================================
// 5. CONSULTAS
// ========================================

console.log('='.repeat(60));
console.log('    EJERCICIO 1: TRABAJANDO CON SUPERHÉROES');
console.log('    Programación Lógica - Paradigmas de Programación');
console.log('='.repeat(60));
console.log();

// Consulta 1: Encontrar todos los aliados de Batman
console.log('📌 1. Aliados de Batman:');
console.log('-'.repeat(40));
const aliadosBatman = run(esAliado('Batman', aliado), aliado);
aliadosBatman.forEach(a => console.log(`   ✓ ${a}`));
console.log();

// Consulta 2: Encontrar todos los enemigos de Superman
console.log('📌 2. Enemigos de Superman:');
console.log('-'.repeat(40));
const enemigosSuperman = run(esEnemigo('Superman', enemigo), enemigo);
enemigosSuperman.forEach(e => console.log(`   ✓ ${e}`));
console.log();

// Consulta 3: ¿Quién es mentor de Spider-Man?
console.log('📌 3. Mentor de Spider-Man:');
console.log('-'.repeat(40));
const mentorSpiderman = run(esMentor(heroe, 'Spider-Man'), heroe);
mentorSpiderman.forEach(m => console.log(`   ✓ ${m}`));
console.log();

// Consulta 4: Mostrar todos los pares héroe-aliado
console.log('📌 4. Todos los pares Héroe-Aliado:');
console.log('-'.repeat(40));
const heroe1 = lvar('heroe1');
const heroe2 = lvar('heroe2');
const paresAliados = run(esAliado(heroe1, heroe2), [heroe1, heroe2]);
paresAliados.forEach(([h1, h2]) => {
  console.log(`   ✓ ${h1} es aliado de ${h2}`);
});
console.log();

console.log('='.repeat(60));
console.log('✅ EJERCICIO COMPLETADO EXITOSAMENTE');
console.log('='.repeat(60));
console.log();

