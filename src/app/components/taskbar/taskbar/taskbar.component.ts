import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
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
      const NavigationExtras: NavigationExtras = {
        queryParams: {
          tilteNavBar: title
        }
      }
      this.router.navigate(['list-products'], NavigationExtras);
      this._showMenu = false;
    }
  }

  clickShowMenuBar() {
    this._showMenu = !this._showMenu;
  }

  goHomePage() {
    this.router.navigate(['home']);
  }

  back() {
    history.back();
  }

}
