import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared-service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quotes: string;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data) => {
      let quotes = data['content'];
      this.quotes = quotes.toUpperCase();
    });
  }
}
