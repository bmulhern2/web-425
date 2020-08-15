/*
Title: Assignment 6.2
Author: Professor Krasso
Date: 15 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 4 part 1!
*/

export interface IBook {
    isbn: string;
    title: string;
    authors: Array<string>;
    description: string;
    numOfPages: number;
}