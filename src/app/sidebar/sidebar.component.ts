import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-home', class: '' },
    { path: 'user', title: 'Admin Profile',  icon:'pe-7s-user', class: '' },
    { path: 'table', title: 'Interview Questions',  icon:'pe-7s-note2', class: '' },
    { path: 'typography', title: 'Generate Interview ID',  icon:'pe-7s-news-paper', class: '' },
    { path: 'icons', title: 'Keywords and Patterns',  icon:'pe-7s-science', class: '' },
    { path: 'maps', title: 'Interviewee Verdict',  icon:'pe-7s-comment', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
