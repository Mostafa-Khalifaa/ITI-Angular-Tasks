import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCard } from './user-card/user-card'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, UserCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  searchEmail:string = '';
  isSearch:boolean = false;
  users =[
    { username: 'mostafa', email: 'mostafa@gmail.com', role: 'admin', phone: '01000', birthdate: '1/1/1990' },
    { username: 'Mona', email: 'mona@gmail.com', role: 'user', phone: '01200', birthdate: '5/5/1995' },
    { username: 'Ali', email: 'ali@gmail.com', role: 'moderator', phone: '01100', birthdate: '9/9/1992' },
    { username: 'Sara', email: 'sara@gmail.com', role: 'user', phone: '01500', birthdate: '3/3/2000' },
    { username: 'ahmed', email: 'ahmed@gmail.com', role: 'moderator', phone: '01400', birthdate: '9/27/1992' },
  ];

  searchList = this.users;
  search(){
    if(this.searchEmail === ''){
      alert("plz enter email");
      return;
    }
    this.searchList = this.users.filter(u => u.email.includes(this.searchEmail));
    this.isSearch = true;
  }

  reset(){
    this.searchEmail ='';
    this.searchList = this.users;
    this.isSearch = false;
  }





}