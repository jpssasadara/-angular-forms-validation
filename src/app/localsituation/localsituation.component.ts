import { Component, OnInit } from '@angular/core';

import { Information } from '../models/information';
import { LocalsituationService } from '../services/localsituation.service';

@Component({
  selector: 'app-localsituation',
  templateUrl: './localsituation.component.html',
  styleUrls: ['./localsituation.component.scss']
})
export class LocalsituationComponent implements OnInit {

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
    this.loadInformation();

}

loadInformation() {
    this.localsituationService.getInformation()
        .subscribe( data => {
                this.information = data;
                this.xx = data.data.hospital_data
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