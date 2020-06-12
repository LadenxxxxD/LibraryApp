import { Component } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { DetailsService } from '../service/details.service';
import { Router } from '@angular/router';

const navigateMap = {
  1: 'details',
  3: 'books'
}

@Component({
  selector: 'book-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  userId: '';
  bookId: ''; // 图书ID
  authorName: ''; // 作者名
  bookName: ''; // 书名
  educationName: ''; // 出版社
  books: Book[];
  type = '1';

  constructor(private detailsService: DetailsService, private router: Router) { }

  public tagClick(type: string) {
    this.type = type;
    const url = navigateMap[type];
    if (url) {
      this.router.navigate([url]);
    }
  }

  public search() {
    const params = {
      userId: this.userId,
      bookId: this.bookId,
      authorName: this.authorName,
      bookName: this.bookName,
      educationName: this.educationName
    }
    this.detailsService.search(params).subscribe( (books: Book[]) => {
      this.books = books;
    });
  }

  public reset() {
    this.userId = '';
    this.bookId = '';
    this.authorName = '';
    this.bookName = '';
    this.educationName = '';
  }
}
