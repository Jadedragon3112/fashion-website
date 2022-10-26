import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
  @Output() showMenu = new EventEmitter();
  itemCollections = ['COLLECTIONS', 'KLASSIK', 'COLLABORATIONS', 'DESIGN CLOTHING', 'NEAVEN', 'SUPERSPORT'];
  itemClothings = ['CLOTHING', 'VIEW ALL', 'JACKETS', 'JEANS', 'OUTERWEAR', 'SHIRTING', 'SHORTS', 'SWEATSHIRT', 'TROUSERS', 'T-SHIRTS', 'SHIRTS', 'WAISTCOAT'];
  itemAccessories = ['ACCESSORIES', 'BAGS', 'BEANIES', 'HATS', 'SOCKS'];
  _showMenu: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewDetail(title: string) {
    console.log('title: ', title)
    if(title !== "COLLECTIONS" && title !== "CLOTHING" && title !== "ACCESSORIES") {
      this.router.navigate(['detail-product']);
    }
  }

  clickShowMenuBar() {
    this._showMenu = !this._showMenu;
  }

}
