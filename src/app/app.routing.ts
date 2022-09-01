import { LandingComponent } from './examples/landing/landing.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from "./components/components.component";
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TypographyComponent } from './components/typography/typography.component';
import { SignupComponent } from './examples/signup/signup.component';
import { HowtomakeComponent } from './examples/howtomake/howtomake.component';
import { MeetComponent } from './examples/meet/meet.component';
import { ProfileComponent } from './examples/profile/profile.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing',             component: LandingComponent},
    { path: 'component',          component: ComponentsComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'navigation',       component: NavigationComponent },
    { path: 'typography',       component: TypographyComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'howtomake',        component: HowtomakeComponent },
    { path: 'meet',             component: MeetComponent },
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