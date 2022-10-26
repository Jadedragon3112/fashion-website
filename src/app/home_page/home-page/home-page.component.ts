import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  itemCollections = ['COLLECTIONS', 'KLASSIK', 'COLLABORATIONS', 'DESIGN CLOTHING', 'NEAVEN', 'SUPERSPORT'];
  itemClothings = ['CLOTHING', 'VIEW ALL', 'JACKETS', 'JEANS', 'OUTERWEAR', 'SHIRTING', 'SHORTS', 'SWEATSHIRT', 'TROUSERS', 'T-SHIRTS', 'SHIRTS', 'WAISTCOAT'];
  itemAccessories = ['ACCESSORIES', 'BAGS', 'BEANIES', 'HATS', 'SOCKS'];
  _showNavBar: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  viewDetail(title: string) {
    console.log('title: ', title)
    if(title !== "COLLECTIONS" && title !== "CLOTHING" && title !== "ACCESSORIES") {
      this.router.navigate(['detail-product']);
    }
  }

  showNavBar(show: boolean) {
    this._showNavBar = show;
  }
}
