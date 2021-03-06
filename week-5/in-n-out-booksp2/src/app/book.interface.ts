/*
Title: Assignment 5.3
Author: Professor Krasso
Date: 6 August 2020
Modified By: Brendan Mulhern
Description: It's the in-n-out book project part 2!
*/

export interface IBook {
    isbn: string;
    title: string;
    authors: Array<string>;
    description: string;
    numOfPages: number;
}