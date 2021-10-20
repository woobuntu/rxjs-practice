import { Observable, timer } from "rxjs";

const observer = {
  next: (value: number) => console.log(value),
  complete: () => console.log("complete"),
};

// timer(2000).subscribe(observer);

const timer$ = new Observable<number>((subscriber) => {
  const timerId = setTimeout(() => {
    console.log("timeout");
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => {
    clearTimeout(timerId);
  };
});

const subscription = timer$.subscribe(observer);

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);
