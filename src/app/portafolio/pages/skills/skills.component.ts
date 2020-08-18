import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as animate from 'angular-animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [animate.bounceInUpOnEnterAnimation({ anchor: 'upAnimate' })],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  @Output()
  propagar = new EventEmitter<boolean>();

  ngOnInit(): void {}
  public handleModal(event: Event) {
    event.preventDefault();
    this.propagar.emit(true);
  }
}
