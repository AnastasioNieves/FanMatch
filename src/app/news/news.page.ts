import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Noticias } from '../model/noticias.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any;



  constructor(private newsService: NewsService) { }
  ngOnInit() {
    this.newsService.getNews().subscribe((data) => {
      this.news = data.news;
    });
  }

  }

