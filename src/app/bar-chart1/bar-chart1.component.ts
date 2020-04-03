import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { LocalsituationService } from '../services/localsituation.service';
import { Information } from '../models/information';

@Component({
  selector: 'app-bar-chart1',
  templateUrl: './bar-chart1.component.html',
  styleUrls: ['./bar-chart1.component.scss']
})
export class BarChart1Component implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Cumulative Total' },
    { data: [], label: 'Treatment Total ' },
   
  ];
  public lineChartLabels: Label[] =[];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
    
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  chart: BaseChartDirective;

 
  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }

  


  constructor(private localsituationService:LocalsituationService) { }
  information:Information = null
  xx
  cumulative_totalA=[]
  treatment_totalA=[]
  name = []
  ngOnInit() {
    this.loadInformation();

}

loadInformation() {
    this.localsituationService.getInformation()
        .subscribe( data => {
                this.information = data;
                this.xx = data.data.hospital_data
                for(var item in this.xx){
                  console.log(this.xx[item].cumulative_total)
                  console.log(this.xx[item].treatment_total)
                  console.log(this.xx[item].hospital.name)
                  this.cumulative_totalA.push(this.xx[item].cumulative_total)
                  this.treatment_totalA.push(this.xx[item].treatment_total)
                  this.name.push(this.xx[item].hospital.name)
              }
             
                //######################################################
              this.lineChartData  = [
                  { data: this.cumulative_totalA, label: 'Cumulative Total' },
                  { data: this.treatment_totalA, label: 'Treatment Total ' },
                 
                ];
                
                this.lineChartLabels = this.name;
                //#######################################################
                console.log(data);
                if (data == null) {
                    console.log('No registered instance');
                } else {
                    console.log(data);
                    console.log('Relevant instance are loaded ');
                }
            }
        );
        

}

}
/*"update_date_time": "2020-04-02 11:15:57",
"local_new_cases": 2,
"local_total_cases": 148,
"local_total_number_of_individuals_in_hospitals": 231,
"local_deaths": 3,
"local_new_deaths": 0,
"local_recovered": 21,
"local_active_cases": 124, */
