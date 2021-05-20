
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './guards/auth-guard.service';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
		component: LayoutComponent,
		canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'layout', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
	  { path: 'contact', component: ContactComponent},
	  { path: 'services', component: ServicesComponent},
	  { path: 'about', component: AboutComponent },
		
    ]
  }
];
