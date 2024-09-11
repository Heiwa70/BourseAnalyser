import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [],
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  private chart?: Chart<"line", number[], string>; 
  private chartConfig: ChartConfiguration<"line", number[], string>; 

  constructor() {
    this.chartConfig = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'PEA BNP Paribas',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45, 60, 70, 80, 90, 100],
        }]
      },
      options: {}
    };
  }

  ngOnInit(): void {
    const canvas = document.getElementById('canva_dasboard') as HTMLCanvasElement;
    if (canvas && canvas.getContext) {
      const context = canvas.getContext('2d');
      if (context) {
        this.chart = new Chart(context, this.chartConfig);
      } else {
        console.error('2D context not available');
      }
    } else {
      console.error('Canvas element not found or getContext not available');
    }
  }
}