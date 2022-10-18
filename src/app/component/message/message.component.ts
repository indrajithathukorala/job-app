import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor() { }

  name = 12
  address = 'AAAAAAAAAAAA'
  date = new Date()

  ngOnInit(): void {
  }

}
