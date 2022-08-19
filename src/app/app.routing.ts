import { LandingComponent } from './examples/landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from "./components/components.component";
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SignupComponent } from './examples/signup/signup.component';
import { ProfileComponent } from './examples/profile/profile.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing',          component: LandingComponent},
    { path: 'home',             component: ComponentsComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'user-profile',     component: ProfileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }