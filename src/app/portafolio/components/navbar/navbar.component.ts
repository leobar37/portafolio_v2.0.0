import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('nav') navBar: ElementRef;
  constructor() {}
  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  public scrollEvent($event: Event) {
    let nav = <HTMLElement>this.navBar.nativeElement;
    let height = nav.getBoundingClientRect().height;
    if (window.scrollY > height) {
      nav.classList.add('navbar_white');
    }
    if (window.scrollY < height) {
      nav.classList.remove('navbar_white');
    }
  }
}
