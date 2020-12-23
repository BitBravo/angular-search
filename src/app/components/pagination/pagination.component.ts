import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from '../../types/pagination.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() pageInfo: Pagination;
  @Output() changePage = new EventEmitter<any>(true);

  getVisiblePages(pages: Pagination) {
    const { currentPage, lastPage } = pages || {};
    const end = Math.min(currentPage + 3, lastPage);
    const start = Math.max(currentPage - 3, 1);

    return Array(end - start + 1)
      .fill('')
      .map((_, idx) => start + idx);
  }

  public setPage(pageNum: number) {
    this.changePage.emit(pageNum);
  }
}
