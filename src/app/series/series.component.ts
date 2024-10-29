import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';
import { series } from './series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  datos: series[] = [];

  constructor(private series: SeriesService) { }

  ngOnInit(): void {
    this.series.getSeries().subscribe({
      next: (data) => this.datos = data,
      error: (error) => console.error('Error al cargar datos',error)
    })
  }

  getPromedioTemporadas(): number {
    const totalTemporadas = this.datos.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalTemporadas / this.datos.length;
  }

}
