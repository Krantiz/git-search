import { Component, Input } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  @Input() name: string;
  historicalData;
  constructor() {}
  ngOnInit() {
    this.historicalData = this.fetchData();
  }

  fetchData() {
    return JSON.parse(localStorage.getItem(Constants.storageKey));
  }

  setData(data) {
    return localStorage.setItem(Constants.storageKey, JSON.stringify(data));
  }

  clearData() {
    localStorage.removeItem(Constants.storageKey);
    this.historicalData = this.fetchData();
  }
}
