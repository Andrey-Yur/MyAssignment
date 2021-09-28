import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-new-style',
  templateUrl: './new-style.component.html',
  styleUrls: ['./new-style.component.scss']
})

export class NewStyleComponent implements OnInit {
  tiles: Tile[] = [
    {text:'On a human level at an internal, customer and community scale. ' +
         'We do right by others by keeping our word, building each other ' +
         'up and actively listening to others’ ideas.',
      cols: 3, rows: 1, color: 'lightblue'},
    {text: 'PEOPLE', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'As individuals and a company we are willing and eager to learn ' +
        'from mistakes in order to drive forward. We think critically, are ' +
        'resourceful and seize initiative. We have a distaste for complacency',
      cols: 3, rows: 1, color: 'lightblue'},
    {text: 'ENTREPRENEURSHIP', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'The team goal always comes before personal ambitions. We take care ' +
        'of each other, pitch in when others ask for help and collaborate freely' +
        ' across the organization', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'PACK', cols: 1, rows: 1, color: 'lightblue'},
    ];
  constructor() { }

  public ngOnInit(): void {
  }

}
