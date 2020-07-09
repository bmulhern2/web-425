/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 9 July 2020
; Modified By: Brendan Mulhern
; Description: This is typescript.
;====
*/
import { IPerson } from './person.interface';

class Person implements IPerson {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let myName = new Person("Brendan", "Mulhern")\
console.log("My name is ${myName.firstName} ${myName.lastName}")