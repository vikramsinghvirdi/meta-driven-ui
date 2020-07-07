import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  public users = [{
    id: 1,
    first_name: 'Florida',
    last_name: 'Letten',
    email: 'fletten0@cdc.gov',
    gender: 'Female',
    ip_address: '97.109.36.83'
  }, {
    id: 2,
    first_name: 'Kynthia',
    last_name: 'Tilley',
    email: 'ktilley1@jalbum.net',
    gender: 'Female',
    ip_address: '109.229.165.128'
  }, {
    id: 3,
    first_name: 'Rodrique',
    last_name: 'Le Noire',
    email: 'rlenoire2@seattletimes.com',
    gender: 'Male',
    ip_address: '143.181.86.255'
  }, {
    id: 4,
    first_name: 'Hazel',
    last_name: 'Stallworth',
    email: 'hstallworth3@delicious.com',
    gender: 'Female',
    ip_address: '54.160.179.230'
  }, {
    id: 5,
    first_name: 'Norman',
    last_name: 'Sprake',
    email: 'nsprake4@xing.com',
    gender: 'Male',
    ip_address: '222.178.79.187'
  }, {
    id: 6,
    first_name: 'Stephana',
    last_name: 'Cullington',
    email: 'scullington5@scientificamerican.com',
    gender: 'Female',
    ip_address: '52.193.227.243'
  }, {
    id: 7,
    first_name: 'Hadlee',
    last_name: 'Daouse',
    email: 'hdaouse6@jalbum.net',
    gender: 'Male',
    ip_address: '79.243.21.179'
  }, {
    id: 8,
    first_name: 'Reinold',
    last_name: 'Louw',
    email: 'rlouw7@mac.com',
    gender: 'Male',
    ip_address: '238.111.23.53'
  }, {
    id: 9,
    first_name: 'Reinaldo',
    last_name: 'Levene',
    email: 'rlevene8@linkedin.com',
    gender: 'Male',
    ip_address: '150.166.171.61'
  }, {
    id: 10,
    first_name: 'Lazaro',
    last_name: 'Sandwith',
    email: 'lsandwith9@webnode.com',
    gender: 'Male',
    ip_address: '21.7.199.35'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
