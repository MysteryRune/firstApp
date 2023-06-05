import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showName() {
    var fullname = document.getElementById("full-name") as HTMLInputElement;
    var value = fullname?.value;

    const Greeting = document.getElementById("greeting") as HTMLElement;
    Greeting.innerHTML = "Hello, " + value;
  }

}
