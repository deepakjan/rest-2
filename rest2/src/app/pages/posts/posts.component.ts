import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpcallsService } from 'src/app/services/httpcalls.service';
import { Posts } from 'src/app/models/posts';
import{map} from 'rxjs/operators'
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsData:Posts[]=[];

  constructor(private https:HttpcallsService) { }

  ngOnInit() {
    this.getpostsdata()
  }

  hetchpostsdata(data){

   this.postsData = data;

  }

  getpostsdata(){
      this.https.httpgetcall().subscribe(
      (data:Posts[])=>this.hetchpostsdata(data)
    ), (err)=>console.log(err)
  }




}
