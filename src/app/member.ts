import { Book } from './book';
export class Member {
  constructor(public name: string, public description: string, public image:string, public phone:string, public email:string, public booksRead: Book[]){}
}
