/* Activity 5 */

for (let i = 1; i < 11; i++) {
  if (i === 5) continue;
  process.stdout.write(i + " ");
}

console.log();

for (let i = 1; i < 11; i++) {
  if (i === 7) break;
  process.stdout.write(i + " ");
}
