# Escape from Silent Hill

## Parte 1

Primero creamos el entorno de búsqueda transformando la matriz en una cadena de 1D.

```js
const flatRoom = room.concat.apply([], room);
```

Y aprovechamos para obtener los valores iniciales de la pirámide y su objetivo.

```js
const start = flatRoom.indexOf("▲");
const target = flatRoom.indexOf("T");
```

## Parte 2

Crearemos un mapa que servirá para almacenar los valores visitados y el número de pasos en ese momento.

```js
const map = new Map([[start, 0]]); // [index, steps]
```

## Parte 3

Como vamos a necesitar el tamaño de la sala, lo guardamos.

```js
const SIZE = room.length;
```

Ahora bien, buscamos los caminos posibles.

```js
// Como los mapas siempre son ordenados,
// utilizamos un for..of
for (const [current, steps] of map) {
  // Por cada dirección
  for (const direction of [-SIZE, SIZE, -1, 1]) {
    const newIndex = current + direction;

    if (
      // Si no está en el mapa
      !map.has(newIndex) &&
      // Y está dentro de la sala
      newIndex >= 0 &&
      newIndex < SIZE * SIZE &&
      !(current % SIZE === SIZE - 1 && direction === 1) &&
      // Pero no es una pared
      flatRoom[newIndex] !== "#"
    ) {
      // Primero vemos si es el objetivo
      // Si es así, devolvemos el número de pasos
      if (newIndex === target) return steps + 1;
      // Si no, agregamos al mapa
      map.set(newIndex, steps + 1);
    }
  }
}
```

Si no encontramos el objetivo, devolvemos -1.

```js
return -1;
```
