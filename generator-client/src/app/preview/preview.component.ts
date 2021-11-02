import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  active = 1;
  data: any;
  categories: string[] = ['test1', 'test2'];
  activeCategory: string = '';
  activeType: string = '';
  filteredData: any;
  filteredByCategory: any;
  url = 'http://localhost:7000/api/questions/';

  constructor() { }

  ngOnInit(): void {
    fetch(this.url)
    .then(response => response.json())
    .then(data => {
      this.data = data;
      this.data.push(this.data[0], this.data[0], this.data[0], this.data[0], this.data[0], this.data[0], this.data[0], this.data[0])
      this.getCategories();
    });
  }

  getCategories() {
    this.data.map((category: { category: any; }) => {
      const testCategory = this.categories.find(cat => cat === category.category);
      if (!testCategory) {
        this.categories.push(category.category);
      }
    })
  }

  setActiveCategory(name: string) {
    this.activeCategory = name;
    this.activeType = 'wybierz typ'
    this.filteredByCategory = [];
  }

  filterDate() {
    this.filteredData = this.data.filter((question: { category: string; }) => question.category === this.activeCategory);
  }

  filterByType(type: string) {
    this.filteredByCategory = this.filteredData.filter((question: {type: string}) => question.type === type);
    this.activeType = type;
  }

  translateType(type: string): string {
    if (type === 'open') {
      return 'pytanie otwarte';
    } else if (type === 'singleSelect') {
      return 'wybór pojedynczy';
    } else if (type === 'multiSelect') {
      return 'wybór wielokrotny';
    } else {
      return ''
    }
  }

}
