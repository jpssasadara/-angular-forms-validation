import { Hospital } from './hospital';

export interface Hospitaldata {
id: any,
hospital_id: any,
cumulative_local: any,
cumulative_foreign: any,
treatment_local: any,
treatment_foreign: any,
created_at: string,
updated_at: string,
deleted_at: string,
cumulative_total: any,
treatment_total: any,
hospital: Hospital
}

/***"id": 1,
"hospital_id": 1,
"cumulative_local": 502,
"cumulative_foreign": 74,
"treatment_local": 4,
"treatment_foreign": 0,
"created_at": "2020-04-01 12:31:56",
"updated_at": null,
"deleted_at": null,
"cumulative_total": 576,
"treatment_total": 4,
"hospital": { */