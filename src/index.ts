globalThis.XMLHttpRequest = require("xhr2");

import { forkJoin, Observable } from "rxjs";

const a$ = new Observable((subscriber) => {
  const timeoutId = setTimeout(() => {
    subscriber.next("a");
    subscriber.complete();
  }, 5000);
  return () => {
    clearTimeout(timeoutId);
    console.log("a teardown");
  };
});

const b$ = new Observable((subscriber) => {
  const timeoutId = setTimeout(() => {
    subscriber.error("에러");
  }, 3000);
  // b$가 에러가 나면, 남은 2초 동안 a$를 기다릴 이유가 없다.
  // 따라서 b$의 error가 forkJoin의 error로 넘어간 뒤,
  // a의 teardown과 b의 teardown이 순서대로 실행된다.
  // 역시, Promise.all과 닮았다.
  return () => {
    clearTimeout(timeoutId);
    console.log("b teardown");
  };
});

forkJoin([a$, b$]).subscribe({
  next: (values) => console.log(values),
  error: (e) => console.error("Error : ", e),
});
