import { Inject, Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  animations: [],
})
export class InicioComponent implements OnInit {
  public showModal = true;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}
  public showSkills() {
    this.showModal = !this.showModal;
    this.document.body.style.overflowY = 'hidden';
  }
}
