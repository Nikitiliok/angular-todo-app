import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public getDecisions1: any[] = [
    {id: 1, result: 'approved'},
    {id: 3, result: 'waiting'},
    {id: 15, result: 'coproved'},
    {id: 28, result: 'approved'},
    {id: 26, result: 'waiting'},
    {id: 30, result: 'approved'}
  ];

  public getDecisions2 = [
    {id: 2, result: 'approved'},
    {id: 4, result: 'waiting'},
    {id: 14, result: 'approved'},
    {id: 16, result: 'approved'},
    {id: 23, result: 'waiting'},
    {id: 32, result: 'approved'}
  ]

  public array1 = [3, 4, 7, 10];
  public sum1 = 8;
    
  public getLastDecision (decision1: any, decision2: any, k: number) {
    const resultArray = [];
    let lastElementDecision1 = decision1.length - 1;
    let lastElementDecision2 = decision2.length - 1;

    for (let i = 0; i < k; i++) {
      if (decision1[lastElementDecision1].id > decision2[lastElementDecision2].id) {
        resultArray.push(decision1[lastElementDecision1]);
        lastElementDecision1--;
      } else {
        resultArray.push(decision2[lastElementDecision2]);
        lastElementDecision2--;
      }
    }

    console.log(resultArray);
  }

  public hasPairWithSum(array: any, sum: number): boolean {
    for (let i = 0; i < array.length; i++) {
      let diff = sum - array[0];

      for (let j = 0; j < array.length && i !== j; j++) {
        if (diff === array[j])
          return true
      }
    }

    return false;
  }

  public consoleLog(item: any) {
    console.log(item);
    console.log('fsadf')
  }
}
