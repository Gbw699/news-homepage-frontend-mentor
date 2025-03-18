import { Component, Signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menu: any = viewChild<HTMLDivElement>('menu');

  handleMenu() {
    console.log(this.menu());
    this.menu()?.nativeElement.classList.toggle('open');
  }
}
