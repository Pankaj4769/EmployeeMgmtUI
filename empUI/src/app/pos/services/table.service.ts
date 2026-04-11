import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Table } from '../models/table.model';

/** Stub TableService for Employee Management UI.
 *  The staff-directory component uses table occupancy data for live analytics
 *  (available when running alongside KOS POS). Here we expose an empty stream
 *  so the component compiles and runs without POS integration. */
@Injectable({ providedIn: 'root' })
export class TableService {
  private tablesSubject = new BehaviorSubject<Table[]>([]);
  readonly tables$ = this.tablesSubject.asObservable();
}
