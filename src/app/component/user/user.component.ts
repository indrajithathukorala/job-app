import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  data: {} 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data) => this.data = data,
        error: (eror) => console.log(eror.message)
      })

  }

  name: string = "dasdasdas"

  arrayName: number[] = [1, 2, 3, 4, 4, 5, 4]

  // ClickMe(e: string): void {
  //   this.name = "asdasdas"
  //   console.log(e);

  // }

}
