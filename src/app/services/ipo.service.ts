import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ipo } from '../models/ipo.model';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  private ipos: Ipo[] = [
    {
      id: 1,
      company: 'Company A',
      priceBand: '100-120',
      open: '2024-07-01',
      close: '2024-07-05',
      issueSize: '1,000,000',
      issueType: 'Book Building',
      listingDate: '2024-07-10',
      status: 'Coming'
    },
    {
      id: 2,
      company: 'Company B',
      priceBand: '200-220',
      open: '2024-08-01',
      close: '2024-08-05',
      issueSize: '2,000,000',
      issueType: 'Fixed Price',
      listingDate: '2024-08-10',
      status: 'Ongoing'
    }    
  ];

  constructor() {}

  getIpos(): Observable<Ipo[]> {
    return of(this.ipos);
  }

  getDashboardStats(): Observable<any> {
    const totalIpo = this.ipos.length;
    const ipoInGain = this.ipos.filter(ipo => ipo.status === 'Ongoing').length;
    const ipoInLoss = this.ipos.filter(ipo => ipo.status === 'Coming').length;
    const upcomingIpo = this.ipos.filter(ipo => ipo.status === 'Coming').length;
    const newListed = this.ipos.filter(ipo => ipo.status === 'New Listed').length;
    const ongoing = this.ipos.filter(ipo => ipo.status === 'Ongoing').length;

    const stats = {
      totalIpo,
      ipoInGain,
      ipoInLoss,
      upcomingIpo,
      newListed,
      ongoing
    };

    return of(stats);
  }

  deleteIpo(id: number): Observable<void> {
    this.ipos = this.ipos.filter(ipo => ipo.id !== id);
    return of();
  }
}
