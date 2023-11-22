import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestOneComponent } from './components/test-one/test-one.component';
import { TestTwoComponent } from './components/test-two/test-two.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'test-one', component: TestOneComponent },
  { path: 'test-two', component: TestTwoComponent },
  { path: '**', redirectTo: 'home' },
];
