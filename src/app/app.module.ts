import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
import { LocalsituationComponent } from './localsituation/localsituation.component';
import { HttpClientModule } from '@angular/common/http';
import { PieChartComponentComponent } from './pie-chart-component/pie-chart-component.component';
import { ChartsModule } from 'ng2-charts';
import {  PieChartComponent2Component } from './pie-chart-component2/pie-chart-component2.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent3Component } from './pie-chart-component3/pie-chart-component3.component';
import { PieChartComponent4Component } from './pie-chart-component4/pie-chart-component4.component';
import { BarChart1Component } from './bar-chart1/bar-chart1.component';
import { LineChart1Component } from './line-chart1/line-chart1.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    LocalsituationComponent,
    PieChartComponentComponent,
    PieChartComponent2Component,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent3Component,
    PieChartComponent4Component,
    BarChart1Component,
    LineChart1Component,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LocalsituationComponent  },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: 'template-form', component: TemplateDrivenFormComponent },
      { path: 'local-situation', component:HomeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
