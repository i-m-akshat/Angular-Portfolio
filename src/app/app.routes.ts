import { Routes } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { WorkComponent } from './sections/work/work.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { InterestsComponent } from './sections/interests/interests.component';
import { connect } from 'rxjs';
import { ConnectComponent } from './sections/connect/connect.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'interests',
    component: InterestsComponent,
  },
  {
    path: 'connect',
    component: ConnectComponent,
  },
];
