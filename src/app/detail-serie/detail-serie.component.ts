import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-serie.component.html',
  styleUrls: ['./detail-serie.component.css']
})
export class DetailSerieComponent implements OnInit {
  
  serie;
  id;

  constructor(private serieService : SerieService, private route : ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params);

  }

  ngOnInit() {
    this.serie = this.serieService.getSerieById(this.id.id).subscribe
      (data=>{
        this.serie = data;
      })
  }

}
