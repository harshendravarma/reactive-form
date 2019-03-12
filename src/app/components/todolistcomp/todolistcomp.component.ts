import { Component, OnInit } from '@angular/core';
import {Todo} from '../module/todos';
@Component({
  selector: 'app-todolistcomp',
  templateUrl: './todolistcomp.component.html',
  styleUrls: ['./todolistcomp.component.css']
})
export class TodolistcompComponent implements OnInit {
  name:string = 'hih';
todos:Todo[];
  constructor() { }

  ngOnInit() {
    this.todos=[{
      id:1, 
      title:"joaij",
      completed:false
    },
    {
      id:2, 
      title:"joaij",
      completed:false
    },
    {
      id:3, 
      title:"joaij",
      completed:false
    }
  ]
  }

}
