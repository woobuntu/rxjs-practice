import { concatMap, Observable, of } from "rxjs";

const source$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next("a");
  }, 2000);
  setTimeout(() => {
    subscriber.next("b");
  }, 5000);
});

source$
  .pipe(concatMap((value) => of(1, 2)))
  .subscribe({ next: (value) => console.log(value) });
