import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//as element  <app-servers></app-servers>
  //selector: '[app-servers]',//as element <div app-servers><div>
  //selector: '.app-servers',//as class <div class="app-servers" ><div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
