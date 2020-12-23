import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmptyCardComponent } from './components/empty-card';
import { PaginationComponent } from './components/pagination';
import { VideoComponent } from './components/video';
import { GraphQLModule } from './graphql.module';

const components = [
  AppComponent,
  PaginationComponent,
  VideoComponent,
  EmptyCardComponent,
];
@NgModule({
  declarations: [...components],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
