// For in; not, for each.
for (let i = 0; i < 10; i++) {
  console.log ("Block execution iteration number: " + i);
}

let arrFib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

for (var growth of arrFib) {
  console.log(growth); 
}