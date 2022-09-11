import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css'],
})
export class BioComponent implements OnInit {
  gates_photo: string = '';
  gates_bio: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.gates_photo = this.dataService.gates_photo_url;
    this.gates_bio = this.dataService.gates_bio;
  }
}
