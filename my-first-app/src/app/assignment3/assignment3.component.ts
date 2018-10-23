import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  isSecretIsVisible:boolean = false;
  logs = [{ timestamp: Date.now(), clickId: 1, status: 'off'}];

  constructor() { }

  ngOnInit() {
  }

  onLogMe() {
    this.isSecretIsVisible = !this.isSecretIsVisible;
    const max = Math.max.apply(Math, this.logs.map(e => e.clickId)) + 1;
    this.logs.push({ timestamp: Date.now(), clickId: max, status: this.isSecretIsVisible ? 'on' : 'off'});
  }
}
