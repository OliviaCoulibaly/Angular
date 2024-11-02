import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Post } from './post.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  API = 'http://localhost:3000/post';
  private http = inject(HttpClient);
  private router = inject(Router);

  getPosts(){
    return this.http.get<Post[]>(`${this.API}`);
  }

  getPost(postId: number){
    return this.http.get<Post>(`${this.API}/${postId}`);
  }

  postPost(post:Post){
    return this.http.post<Post>(`${this.API}`, post);
  }
  putPost(postId: number, post:Post){
    return this.http.put<Post>(`${this.API}/${postId}`, post)
  }
  deletePost(postId:number){
    return this.http.delete<Post>(`${this.API}/${postId}`)
  }
  isLoggedIn = () => {
    if (localStorage.getItem('password')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
