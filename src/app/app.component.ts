import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { VideoService } from './services/video.service';
import { Pagination } from './types/pagination.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items$: Observable<any>;
  searchText: string = '';
  searchControl: FormControl = new FormControl();
  inintialPageInfo: Pagination = {
    currentPage: 1,
    hasNextPage: false,
    lastPage: 1,
    perPage: 1,
    total: 1,
  };
  emptyArray: number[] = Array(10).map((_, key) => key);

  get searchQuery() {
    const searchQuery = {
      page: 1,
      perPage: 10,
      ...(this.searchText && { search: this.searchText }),
    };

    return searchQuery;
  }

  getSearch(pageNum: number = 1): void {
    const updatedQuery = { ...this.searchQuery, page: pageNum };
    this.items$ = this.videoService.search(updatedQuery);
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((text) => {
        this.searchText = text;
        this.getSearch();
      });
  }

  constructor(public videoService: VideoService) {
    this.searchControl = new FormControl();
    this.items$ = this.videoService.search({ page: 1, perPage: 10 });
  }
}
