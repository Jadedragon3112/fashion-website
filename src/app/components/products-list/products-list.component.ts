import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {FashionService} from '../../services/fashion.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductList implements OnInit {
  readonly limit: number = 10;
  nameSort = ['Trending', 'New', 'Popular'];
  details = <any>[];
  images = <any>[];
  clothingCategory: string = '';

  constructor(
    public FashionService: FashionService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.clothingCategory = params['tilteNavBar'];
    })
   }

  ngOnInit(): void {
    this.getListPokemon();
  }

  getListPokemon() {
    const offset = Math.floor(this.images.length / this.limit);
    this.FashionService.getListProduct(this.limit, offset).subscribe((res) => {
      res.results.forEach((result: any) => {
        this.FashionService.getDetail(result.url).subscribe((detail: any) => {
          this.details.push(detail);
          let respond = detail.sprites.other.dream_world.front_default;
          this.images.push(respond);
        })
      });
    })
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    let pos = Math.ceil(document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if(pos == max )   {
      this.getListPokemon();
    }
  }

  vieDetail(url: Object) {
    const NavigationExtras: NavigationExtras = {
      queryParams: {
        url: url
      }
    }
    this.router.navigate(['detail'], NavigationExtras);
  }
}
