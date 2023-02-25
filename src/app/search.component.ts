import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  ngOnInit() {}

  name = '';
  users;
  history;

  constructor(private githubService: GithubService) {}

  getUsers() {
    this.githubService.getData(this.name).subscribe((data) => {
      this.users = data;
      this.initializeStorage();
      this.updateAndSaveData(data);
    });
  }

  initializeStorage() {
    if (
      !localStorage.getItem('history') ||
      localStorage.getItem('history') == '{}' ||
      localStorage.getItem('history') == '1'
    ) {
      // handling some edge cases.
      const data = [];
      localStorage.setItem('history', JSON.stringify(data));
    }
  }

  updateAndSaveData(data) {
    this.history = JSON.parse(localStorage.getItem('history'));

    let updateData = JSON.parse(JSON.stringify(this.history));
    updateData.push({
      data: data.slice(0, 5),
      created_date: new Date(),
      searchTerm: this.name,
    });

    localStorage.setItem('history', JSON.stringify(updateData));
  }
}
