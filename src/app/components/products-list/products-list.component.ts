import { Component, HostListener, OnInit } from '@angular/core';
import {FashionService} from '../../services/fashion.service'

@Component({
  selector: 'app-detail-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductList implements OnInit {
  readonly limit: number = 10;
  nameSort = ['Trending', 'New', 'Popular'];
  images = <any>[];
  clothingCategory: string = '';

  constructor(
    public FashionService: FashionService
  ) { }

  ngOnInit(): void {
    this.getListPokemon();
  }

  getListPokemon() {
    const offset = Math.floor(this.images.length / this.limit);
    this.FashionService.getListProduct(this.limit, offset).subscribe((res) => {
      res.results.forEach((result: any) => {
        this.FashionService.getDetail(result.url).subscribe((detail: any) => {
          let respond = detail.sprites.other.dream_world.front_default;
          this.images.push(respond);
        })
      });
    })
  }

  getNameTitle(tilte: string) {
    this.clothingCategory = tilte;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if(pos == max ) {
      console.log('scroll')
      this.getListPokemon();
    }
  }
}
