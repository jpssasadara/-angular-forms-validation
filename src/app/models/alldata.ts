import { Hospitaldata } from './hospitaldata';

export interface Alldata {
update_date_time: string,
local_new_cases: any,
local_total_cases: any,
local_total_number_of_individuals_in_hospitals: any,
local_deaths: any,
local_new_deaths: any,
local_recovered: any,
local_active_cases: any,
global_new_cases: any,
global_total_cases: any,
global_deaths: any,
global_new_deaths: any,
global_recovered: any,
hospital_data: Hospitaldata[]
}

/**"update_date_time": "2020-04-02 11:15:57",
"local_new_cases": 2,
"local_total_cases": 148,
"local_total_number_of_individuals_in_hospitals": 231,
"local_deaths": 3,
"local_new_deaths": 0,
"local_recovered": 21,
"local_active_cases": 124,
"global_new_cases": 76836,
"global_total_cases": 935840,
"global_deaths": 47241,
"global_new_deaths": 4883,
"global_recovered": 194286,
"hospital_data": [ */