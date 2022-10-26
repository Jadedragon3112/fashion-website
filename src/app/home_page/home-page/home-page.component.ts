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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  viewDetail(title: string) {
    this.router.navigate(['detail-product']);
  }

}
