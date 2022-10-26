import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
  @Output() showMenu = new EventEmitter();
  _showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMenuBar() {
    this._showMenu = !this._showMenu;
    this.showMenu.emit(this._showMenu);
  }

}
