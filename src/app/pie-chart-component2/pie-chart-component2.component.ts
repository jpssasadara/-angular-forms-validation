import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { LocalsituationService } from '../services/localsituation.service';
import { Information } from '../models/information';

@Component({
  selector: 'app-pie-chart-component2',
  templateUrl: './pie-chart-component2.component.html',
  styleUrls: ['./pie-chart-component2.component.scss']
})
export class PieChartComponent2Component implements OnInit {

   // Pie
   public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [[' Current Patients'], ['Global  Deaths'], ['Global Recovered']];
  public pieChartData: number[]=[0,0,0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.5)', 'rgba(0,255,0,0.5)', 'rgba(0,0,255,0.5)'],
    },
  ];

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
            this.pieChartData = [this.global_total_cases-this.global_deaths-this.global_recovered,this.global_deaths,this.global_recovered];
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
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeLabels() {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  }

  addSlice() {
    this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
    this.pieChartData.push(400);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }

  removeSlice() {
    this.pieChartLabels.pop();
    this.pieChartData.pop();
    this.pieChartColors[0].backgroundColor.pop();
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }
}

