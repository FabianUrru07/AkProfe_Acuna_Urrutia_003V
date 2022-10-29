import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiKey: any='7d249a21bd9942e0be004271998eeab2';

  constructor(public http: HttpClient) { }

  getNews(topic){
    return this.http.get('https://newsapi.org/v2/everything?q=+'+topic+'++&from=2022-09-27&sortBy=publishedAt&apiKey='+this.apiKey);
  }
}
