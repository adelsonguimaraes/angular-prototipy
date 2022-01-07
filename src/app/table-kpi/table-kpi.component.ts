import { Component, OnInit } from '@angular/core';
import { TableKpiService } from './table-kpi.service';

@Component({
  selector: 'app-table-kpi',
  templateUrl: './table-kpi.component.html',
  styleUrls: ['./table-kpi.component.scss']
})
export class TableKpiComponent implements OnInit {
  dataSource: any = []

  constructor(
    private serviceTableKpi: TableKpiService
  ) { }

  ngOnInit(): void {
    this.dataSource = this.serviceTableKpi.get();
  }

}
