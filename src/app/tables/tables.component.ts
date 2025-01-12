import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;
    public tableData4: TableData;
    public tableData5: TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
        headerRow: [ 'ID', 'Question'],
            dataRows: [
               ['1', 'Tell me a little about yourself.'],
               ['2', 'What are your biggest weaknesses?'],
               ['3', 'Out of all the other candidates, why should we hire you?'],
               ['4', 'Why do you want this job?'],
               ['5', 'Tell me about the last time a co-worker or customer got angry with you. What happened?'],
               ['6', 'Describe your dream job.']
            ]
    };
      this.tableData2 = {
        headerRow: [ 'ID', 'Question'],
        dataRows: [
            ['1', 'If there are 30 cans out of them one is poisoned if a person tastes very little he will die within 14 hours so if there are mice to test and 24 hours to test, how many mice are required to find the poisoned can?'],
            ['2', 'If,1=3 2=3 3=3 4=4 5=4 6=3 10=3 11=?'],
            ['3', 'Find next number in Sequence 25,10,4,8/5,?,?'],
            ['4', 'How can you make a square from two triangles?'],
            ['5', 'How can a cake be cut into 3 pieces in 2 steps with a knife?'],
            ['6', 'The girls age is twice that of boy, if the boy is four years old. After four years the age of the girl is?']
        ]
    }; // Ansers on: http://www.geekinterview.com/Interview-Questions/General/Analytical
    this.tableData3 = {
        headerRow: [ 'ID', 'Question'],
        dataRows: [
            ['1', 'How do you handle a challenge?'],
            ['2', 'Have you ever made a mistake? How did you handle it?'],
            ['3', 'How do you handle meeting a tight deadline?'],
            ['4', 'Did you ever not meet your goals? Why?'],
            ['5', 'Have you handled a difficult situation with a co-worker? How?'],
            ['6', 'What do you do if you disagree with your boss?']
        ]
    }; // Find the analysis on: https://www.thebalance.com/behavioral-job-interview-questions-2059620
    this.tableData4 = {
        headerRow: [ 'ID', 'Question'],
        dataRows: [
            ['1', 'In order to obtain an income of Rs 650 from 10% stock at Rs 96, one must make an investment of?'],
            ['2', 'A mans speed with the current is 15 km/hr and the speed of the current is 2.5 km/hr The mans speed against the current is?'],
            ['3', 'If a - b = 3 and a2 + b2 = 29, find the value of ab.'],
            ['4', 'The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is?'],
            ['5', 'If selling price is doubled, the profit triples. Find the profit percent.'],
            ['6', 'A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?']
        ]
    }; // Find the answers on: https://www.indiabix.com/aptitude/questions-and-answers/
    this.tableData5 = {
        headerRow: [ 'ID', 'Question'],
        dataRows: [
            ['1', 'Why should we hire you?'],
            ['2', 'What are your salary expectations?'],
            ['3', 'Why are you leaving or have left your job?'],
            ['4', 'Why do you want this job?'],
            ['5', 'Do you work well with others?'],
            ['6', 'Do you have any questions?']
        ]
    }; // Find analysis on: https://www.thebalance.com/top-interview-questions-and-best-answers-2061225
  }

}
