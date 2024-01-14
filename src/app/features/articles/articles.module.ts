import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { RouterModule } from '@angular/router';
import { ArticleRoutes } from './articles.routing.module';

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    RouterModule.forChild(ArticleRoutes),
    CommonModule
  ]
})
export class ArticlesModule { }
