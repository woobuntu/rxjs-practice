import { Observable, of } from "rxjs";

const observer = {
  next: (value: string) => console.log(value),
  complete: () => console.log("complete"),
};

// of("woo", "bun", "tu").subscribe(observer);

// const of$ = new Observable<string>((subscriber) => {
//   subscriber.next("woo");
//   subscriber.next("bun");
//   subscriber.next("tu");
//   subscriber.complete();
// });

// of$.subscribe(observer);

function of$(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    args.forEach((arg) => {
      subscriber.next(arg);
    });
    subscriber.complete();
  });
}

of$("woo", "bun", "tu").subscribe(observer);
