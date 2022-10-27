import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
  @Output() passNameTitle = new EventEmitter();
  itemCollections = ['COLLECTIONS', 'KLASSIK', 'COLLABORATIONS', 'DESIGN CLOTHING', 'NEAVEN', 'SUPERSPORT'];
  itemClothings = ['CLOTHING', 'VIEW ALL', 'JACKETS', 'JEANS', 'OUTERWEAR', 'SHIRTING', 'SHORTS', 'SWEATSHIRT', 'TROUSERS', 'T-SHIRTS', 'SHIRTS', 'WAISTCOAT'];
  itemAccessories = ['ACCESSORIES', 'BAGS', 'BEANIES', 'HATS', 'SOCKS'];
  _showMenu: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewListProducts(title: string) {
    if(title !== "COLLECTIONS" && title !== "CLOTHING" && title !== "ACCESSORIES") {
      this.passNameTitle.emit(title);
      this.router.navigate(['list-products']);
      this._showMenu = false;
    }
  }

  clickShowMenuBar() {
    this._showMenu = !this._showMenu;
  }

}
