import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { NG_DOC_ROUTING } from '@ng-doc/generated';
import { NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent } from '@ng-doc/app';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [
    RouterOutlet,
    NgDocNavbarComponent,
    NgDocRootComponent,
    NgDocSidebarComponent,
  ],
  templateUrl: './app-docs.component.html',
  styleUrl: './app-docs.component.scss'
})
export class AppDocsComponent {

}

const routes: Routes = [
  {
    path: '',
    component: AppDocsComponent,
    children: NG_DOC_ROUTING,
  },
];

export default routes;
