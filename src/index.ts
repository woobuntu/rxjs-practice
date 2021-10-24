import { catchError, EMPTY, Observable, of } from "rxjs";

const failingHttpRequest = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error(new Error("timeout"));
  }, 3000);
});

failingHttpRequest
  .pipe(
    // catchError((error) => of(error.message))
    catchError((error) => EMPTY)
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
