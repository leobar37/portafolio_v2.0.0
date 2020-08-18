import { Component, OnInit } from '@angular/core';
import { LoadDepenService } from '../services/load-depen.service';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent implements OnInit {
  constructor(private load: LoadDepenService) {}

  ngOnInit(): void {
    const dependeces = async () => {
      await this.load.laodStyles([
        'assets/css/bootstrap-grid.min.css',
        'assets/libs/modal/animate.css',
      ]);
      await this.load.loadEscripts(['assets/libs/modal/animateModal.js']);
    };

    dependeces()
      .then(() => console.log('dependecies ready'))
      .catch((err) => console.log(err));
  }
}
