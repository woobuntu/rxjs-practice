// It needs to be available globally, before RxJS is loaded
globalThis.XMLHttpRequest = require("xhr2");

import { ajax } from "rxjs/ajax";

const ajax$ = ajax<any>("https://random-data-api.com/api/coffee/random_coffee");
// 인자로 전달된 url로 http요청을 보내는 Observable반환

ajax$.subscribe({
  next: (data) => {
    console.log("1", data.response);
  },
});

ajax$.subscribe({
  next: (data) => {
    console.log("2", data.response);
  },
});
