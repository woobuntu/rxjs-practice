import { interval, Observable } from "rxjs";

const observer = {
  next: (value: number) => console.log(value),
  complete: () => console.log("complete"),
};

// interval(1000).subscribe(observer);

const interval$ = new Observable<number>((subscriber) => {
  let count = 0;
  const intervalId = setInterval(() => {
    console.log("interval");
    subscriber.next(count++);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = interval$.subscribe(observer);

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
