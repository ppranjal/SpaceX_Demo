import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GenericRoutingModule } from './generic-routing.module';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [SidebarComponent, NavbarComponent, LayoutComponent],
  imports: [
    CommonModule,
    GenericRoutingModule
  ]
})
export class GenericModule { }
