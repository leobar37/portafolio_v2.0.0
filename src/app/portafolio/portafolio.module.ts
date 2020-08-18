import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './portafolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { GaleryComponent } from './pages/about-me/galery/galery.component';
import { SkillsComponent } from './pages/skills/skills.component';
@NgModule({
  declarations: [
    PortafolioComponent,
    NavbarComponent,
    InicioComponent,
    AboutMeComponent,
    GaleryComponent,
    SkillsComponent,
  ],
  imports: [CommonModule, PortafolioRoutingModule],
})
export class PortafolioModule {}
