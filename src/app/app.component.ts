import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, //Hay que poner esta linea de codigo para que tome los pipes como stand alone
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-peliculas';
  nombre = 'Sofia';
  edad = 29;
  peliculas = [
    {
      titulo : 'spiderman',
      fecha_lanzamiento : new Date(),
      precio : 1499.99,
      poster : 'https://www.sonypictures.com.mx/sites/mexico/files/2022-01/SNH_LAS_OnLine_1400x2075.jpg'
    },
    {
      titulo : 'Moana',
      fecha_lanzamiento : new Date("2016-05-06"),
      precio : 300.99,
      poster : 'https://static.wikia.nocookie.net/disney/images/7/76/Moana_official_poster.jpg'
    },
    {
      titulo : 'Interestellar',
      fecha_lanzamiento : new Date("2012-09-12"),
      precio : 100.99,
      poster : 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
      titulo: 'Bad Boys: Ride or Die',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
    },
    {
      titulo: 'Deadpool & Wolverine',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
    },
    {
      titulo: 'Oppenheimer',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
    },
    {
      titulo: 'The Flash',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
    }

  ];

  duplicarNumero(valor:number) : number{
    return valor*2;
  }
}
// Mover la carpeta del curso fuera de OndeDrive
