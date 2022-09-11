import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  main_quote: string = '';
  quotes: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.main_quote = this.dataService.main_quote;
    this.quotes = this.dataService.quotes.slice();
  }
}
