# Escape from Freddy

## La explicación del código

### Inicialización

Primero establecemos las herramientas:

```js
const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

const dreamPath = [0, 0, 0];

// Esto no está en el código, es para la explicación
let matrizAcumuladaImaginaria = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
```

### Primer paso

Agregamos el primer valor:

```js
dreamPath[0] = dream[0][0];

// dreamPath = [1, 0, 0];
```

### Primera fila

Llenemos la primera fila ya que sólo podemos ir de izquierda a derecha y de arriba a abajo.

```js
for (let row = 1; row < len_row; row++) {
  dreamPath[row] = dreamPath[row - 1] + dream[0][row];
}

// dreamPath = [1, 4, 5];

// La matriz acumulada imaginaria es:
matrizAcumuladaImaginaria = [
  [1, 4, 5],
  [0, 0, 0],
  [0, 0, 0],
];
```

### El segundo FOR

Ahora entramos en el segundo FOR.

```js
for (let col = 1; col < len_col; col++) {
  dreamPath[0] += dream[col][0];

  for (let row = 1; row < len_col; row++) {
    dreamPath[row] =
      dream[col][row] + Math.min(dreamPath[row], dreamPath[row - 1]);
  }
}
```

#### Primer ciclo

```js
dreamPath[0] += dream[col][0]; // 1 + 1 = 2
// dreamPath = [2, 4, 5];

for (let row = 1; row < len_col; row++) {
  dreamPath[row] =
    dream[col][row] + Math.min(dreamPath[row], dreamPath[row - 1]);
}
// dreamPath = [2, R = 5 + min(4, 2), 1 + min(5, R)];
// dreamPath = [2, 7, 6]

// La matriz acumulada imaginaria es:
matrizAcumuladaImaginaria = [
  [1, 4, 5],
  [2, 7, 6],
  [0, 0, 0],
];
```

#### Segundo ciclo

```js
dreamPath[0] += dream[col][0]; // 4 + 2 = 6
// dreamPath = [6, 7, 6];

for (let row = 1; row < len_col; row++) {
  dreamPath[row] =
    dream[col][row] + Math.min(dreamPath[row], dreamPath[row - 1]);
}
// dreamPath = [6, R = 2 + min(7, 6), 1 + min(6, R)];
// dreamPath = [6, 8, 7]

// La matriz acumulada imaginaria es:
matrizAcumuladaImaginaria = [
  [1, 4, 5],
  [2, 7, 6],
  [6, 8, 7],
];
```

### Finalmente

Devolvemos el último valor:

```js
return dreamPath[len_col - 1];
```
