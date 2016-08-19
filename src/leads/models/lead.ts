/* tslint:disable:no-string-literal */

export interface ILead {
  firstName: string;
  lastName: string;
  skills: string;
  createdAt: number;
}

export class Lead implements ILead {
  firstName: string;
  lastName: string;
  skills: string;
  createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];

  constructor(firstName: string, lastName: string, skills: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = skills;
  }
}
