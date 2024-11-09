import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {
  size: NzButtonSize = 'large';
  listOfData: any[] = [];
  position: any = ['topCenter'];
  clearinterval: any;
  // loading: boolean =false;
  elementActive = true;
  elementSize: any = 'defult';
  buttonShape: any = 'defult';
  allData: any[] = []; // Complete data (here you can load data from API or a static list)
  itemsToShow = 10;
  currentIndex = 0;

  // @ViewChild('tableContainer', { static: false }) tableContainer!: ElementRef;

  constructor() {
    // Create 100 sample data items
    for (let i = 0; i < 100; i++) {
      this.allData.push({ name: `Trip ${i + 1}`, age: 30, address: `Address ${i + 1}` });
    }
    // Load the initial items
    this.loadMoreData();
  }
 

  // ngAfterViewInit() {
  //   // Attach the scroll event listener to the table container
  //   this.tableContainer.nativeElement.addEventListener('scroll', () => this.onScroll());
  // }

  onScroll(e:any) {
    console.log('Loading more data...1234');
    console.log(e)
    // const container = this.tableContainer.nativeElement;
    // if (container.scrollTop + container.clientHeight >= container.scrollHeight+50) {
    //   // Load more data when scrolled to the bottom
    //   console.log('Loading more data...');
    //   this.loadMoreData();
    // }
  }

  loadMoreData() {
    // Check if there is more data to load
    const nextIndex = this.currentIndex + this.itemsToShow;
    if (this.currentIndex < this.allData.length) {
      const newData = this.allData.slice(this.currentIndex, nextIndex);
      this.listOfData = [...this.listOfData, ...newData];
      this.currentIndex = nextIndex;
    }
  }
  
  

}





