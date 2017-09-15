import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SwitchBoard';
  buttons = [
    {
      on: false,
      label: "OFF"
    },
    {
      on: true,
      label: "ON"
    },
    {
      on: true,
      label: "ON"
    },
    {
      on: false,
      label: "OFF"
    },
    {
      on: true,
      label: "ON"
    },
    {
      on: true,
      label: "ON"
    },
    {
      on: true,
      label: "ON"
    },
    {
      on: false,
      label: "OFF"
    },
    {
      on: true,
      label: "ON"
    },
    {
      on: true,
      label: "ON"
    },
  ];
  switch(idx) {
    if (this.buttons[idx].on) {
      this.buttons[idx].on = false;
      this.buttons[idx].label = "OFF";
    } else {
      this.buttons[idx].on = true
      this.buttons[idx].label = "ON"
    }
  }
}
