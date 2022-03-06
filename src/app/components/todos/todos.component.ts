import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos:Todo[];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First Todo",
        completed: false
      },
      {
        content: "Seconde Todo",
        completed: true
      }
    ]
  }

  toggleDone (id: number):void {
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }
  removeTodo (id: number):void {
    this.todos = this.todos.filter((v, i) => i != id )
  }
  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    return this.inputTodo = '';
  }
}
