import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Test2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showname() {
    const fullnamefield = document.getElementById("full_name_field") as HTMLInputElement;
    const value = fullnamefield.value;
    const regionshow = document.getElementById("greeting") as HTMLElement;

    regionshow.innerHTML = value;
  }

}
