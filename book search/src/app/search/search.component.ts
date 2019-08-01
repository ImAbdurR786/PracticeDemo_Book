import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  bookList:any=[];
  constructor(private bookService:BookService) { 
  this.bookList= this.bookService.bookList;
   
  }
  
  ngOnInit():void {
    this.bookList= this.bookService.bookList;
    
  }
  arr:any[]
  genre1: string[] = ["auto-biography", "biography", "sci-fi", "horror", "drama", "Novel"];
  search(data){
    this.arr=this.bookService.search(data)
  }
  search1(data){
    this.arr=this.bookService.search1(data)
  }
  

}
