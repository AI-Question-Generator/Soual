import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SubjectsService {
  getSubjects() {
    console.log('Getting Subjects...');
  }

  getProjects() {
    console.log('Getting Projects...');
  }

  getLessons() {
    console.log('Getting Lessons...');
  }
}
