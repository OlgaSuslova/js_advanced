"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
    {
      title: "Music of the sun",
      artist: "Rihanna",
      year: 2005,
    },
    {
      title: "A girl like me",
      artist: "Rihanna",
      year: 2006,
    },
    {
      title: "Good girl gone bad",
      artist: "Rihanna",
      year: 2007,
    },
    {
      title: "Rated R",
      artist: "Rihanna",
      year: 2009,
    },
    {
      title: "Loud",
      artist: "Rihanna",
      year: 2010,
    },
  ],
  *[Symbol.iterator]() {
    for (const album of this.albums) {
      yield album;
    }
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
