import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Question ID', 'Keywords'],
      dataRows: [
          ['1', 'change, better, never, not, worse, anger'],
          ['2', 'never, not, worse, bad, good, glad'],
          ['3', 'good, bad, never, always'],
          ['4', 'have, never, not, good, bad, great, work'],
          ['5', 'pragmatic, wonderous, well, good, great'],
          ['6', 'anger, exposure, classify, nail, compete']
      ]
  };
  this.tableData2 = {
    headerRow: [ 'Question ID', 'Patterns'],
    dataRows: [
        ['1', 'Pattern 1'],
        ['2', 'Pattern 2'],
        ['3', 'Pattern 3'],
        ['4', 'Pattern 4'],
        ['5', 'Pattern 5'],
        ['6', 'Pattern 6']
    ]
};
  }

}
