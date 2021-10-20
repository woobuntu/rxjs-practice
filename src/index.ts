import { Observable } from "rxjs";

const observable$ = new Observable<number>((subscriber) => {
  let count = 0;
  const intervalId = setInterval(() => {
    subscriber.next(count++);
  }, 1000);

  // teardown
  return () => {
    console.log("teardown");

    clearInterval(intervalId);

    // HTTP요청을 보내는 Observable의 경우,
    // 아직 response가 오기 전에 teardown에 이르렀을 때,
    // 해당 요청을 취소하는 로직을 실행해야 한다.
  };
});

const subscription = observable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete!"),
  error: (e) => console.error(e.message),
});

setTimeout(() => {
  console.log("Unsubscribe");
  subscription.unsubscribe();
}, 5000);
