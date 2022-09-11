import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  links: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.links = this.dataService.links.slice();
  }
}
