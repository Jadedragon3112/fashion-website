import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FashionService } from 'src/app/services/fashion.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  url: string = '';

  constructor(
    public route: ActivatedRoute,
    public FashionService: FashionService
  ) { 
    this.route.queryParams.subscribe((url) => {
      this.url = url['url'];
    })
  }

  ngOnInit(): void {
    this.getDetailPokemon();
  }

  getDetailPokemon() {
    this.FashionService.getDetail(this.url).subscribe((res) => {
      console.log('res: ',res)
      // res.array.forEach(element => {
        
      // });
    })
  }

}
