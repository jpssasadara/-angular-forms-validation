import {Component, OnInit} from '@angular/core';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Label} from 'ng2-charts';
import { LocalsituationService } from '../services/localsituation.service';
import { Information } from '../models/information';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {xAxes: [{}], yAxes: [{}]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Sri Lanka'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = []

  constructor(private localsituationService:LocalsituationService) { }
  information:Information = null
  xx
 update_date_time
 local_new_cases
 local_total_cases
 local_total_number_of_individuals_in_hospitals
 local_deaths
 local_new_deaths
 local_recovered
 local_active_cases
 global_new_cases
 global_total_cases
 global_deaths
 global_recovered

  ngOnInit() {
    this.localsituationService.getInformation()
    .subscribe( data => {
            this.information = data;
            this.xx = data.data.global_deaths
            //################### fixing data  #####################
            this.update_date_time = data.data.update_date_time;
            this.local_new_cases = data.data.local_new_cases;
            this.local_total_cases = data.data.local_total_cases;
            this.local_total_number_of_individuals_in_hospitals = data.data.local_total_number_of_individuals_in_hospitals;
            this.local_deaths = data.data.local_deaths;
            this.local_new_deaths = data.data.local_new_deaths;
            this.local_recovered = data.data.local_recovered;
            this.local_active_cases = data.data.local_active_cases;
            this.global_new_cases = data.data.global_new_cases;
            this.global_total_cases = data.data.global_total_cases;
            this.global_deaths = data.data.global_deaths;
            this.global_recovered = data.data.global_recovered;
            //######################################################
            this.barChartData = [
              {data: [this.local_total_cases], label: 'Total Number of Local Cases'},
              {data: [this.local_total_number_of_individuals_in_hospitals], label: 'Number of Individuals in Hospitals'},
              {data: [this.local_recovered], label: 'Local Recovered'},
              {data: [this.local_deaths], label: 'Local Deaths'}
            ];
            //####################################################

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

 
  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}