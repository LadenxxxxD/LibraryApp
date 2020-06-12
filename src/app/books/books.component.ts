import { Component, TemplateRef } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import { Router } from '@angular/router';
import { BooksService } from '../service/books.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

const navigateMap = {
  1: 'details',
  3: 'books'
}

@Component({
  selector: 'book-list',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  profileForm = this.fb.group({
    bookId: ['a', Validators.required],
    bookName: ['a', Validators.required],
    authorName: ['s', Validators.required],
    publish: ['s', Validators.required],
    count: ['10', Validators.required],
  });
  userId: '';
  bookId: ''; // 图书ID
  authorName: ''; // 作者名
  bookName: ''; // 书名
  educationName: ''; // 出版社
  books: Book[];
  type = '3';
  modalRef: BsModalRef;
  selectedBook: Book;
  targetBook: Book;
  flag = 'edit';
  constructor(private booksService: BooksService, private router: Router, private modalService: BsModalService, private fb: FormBuilder) { }

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
    this.booksService.search(params).subscribe((books: Book[]) => {
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

  public insert(template: TemplateRef<any>) {
    this.flag = 'insert';
    this.selectedBook = {
      bookId: '',
      authorName: '',
      bookName: '',
      educationName: '',
      quantity: 0
    };
    this.targetBook = {
      bookId: '',
      authorName: '',
      bookName: '',
      educationName: '',
      quantity: 0
    };
    this.modalRef = this.modalService.show(template);
  }

  public edit(template: TemplateRef<any>, book: Book) {
    this.flag = 'edit';
    this.targetBook = book;
    this.selectedBook = {
      bookId: book.bookId,
      authorName: book.authorName,
      bookName: book.bookName,
      educationName: book.educationName,
      quantity: book.quantity
    };
    this.modalRef = this.modalService.show(template);
  }

  public save() {
    if (this.profileForm.get('bookId').value.length === 0) {
      alert('bookId不能为空！');
      return;
    } else if (this.profileForm.get('bookName').value.length === 0) {
      alert('bookName不能为空！');
      return;
    } else if (this.profileForm.get('authorName').value.length === 0) {
      alert('authorName不能为空！');
      return;
    } else if (this.profileForm.get('publish').value.length === 0) {
      alert('publish不能为空！');
      return;
    } else if (this.profileForm.get('count').value.length === 0) {
      alert('count不能为空！');
      return;
    } else {
      for (let i in this.books) {
        if (this.flag === 'insert' && this.books[i].bookId === this.profileForm.get('bookId').value) {
          alert('该bookId已存在！请重新尝试新的bookId');
          return;
        }
      }
      if (this.profileForm.get('count').value === 0) {
        alert('库存数目不能为0！请重新设置');
        return;
      }
      this.modalRef.hide();
      if (this.targetBook.bookId !== '') {
        this.targetBook.bookId = this.selectedBook.bookId;
        this.targetBook.authorName = this.selectedBook.authorName;
        this.targetBook.bookName = this.selectedBook.bookName;
        this.targetBook.educationName = this.selectedBook.educationName;
        this.targetBook.quantity = this.selectedBook.quantity;
      } else {
        this.books.push(this.selectedBook);
      }
    }
  }
}
