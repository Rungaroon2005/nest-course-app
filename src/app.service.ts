import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Git & GitHub';
  }
  getGit(): string {
    return 'git  and github using';
  }
  getJson3() {
    return{
      name:'Rungaroon'
    }
  }
}
