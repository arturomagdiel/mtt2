import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string ='';

  borrarHeroe():void {
	this.heroeBorrado = this.heroes.shift() || '';
  }

}
