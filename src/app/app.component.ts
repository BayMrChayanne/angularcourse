import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe, NgOptimizedImage, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-root',
  standalone: true, //Hay que poner esta linea de codigo para que tome los pipes como stand alone
  imports: [ListadoPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(()=>{
      this.peliculasEnCines = [
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
        }
      ];

      this.peliculasProximosEstrenos = [
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
    }, 2000);

  }
  peliculasEnCines !: any[];
  peliculasProximosEstrenos !: any[];

  clickBoton(){
    alert("me clickearon")
  }

}

