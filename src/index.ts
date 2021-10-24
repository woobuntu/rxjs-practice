import { catchError, concatMap, of } from "rxjs";
import { ajax } from "rxjs/ajax";

globalThis.XMLHttpRequest = require("xhr2");

of("none", "food")
  .pipe(
    concatMap((value) =>
      ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
        catchError((error) => of(`Error : ${error.message}`))
      )
    )
  )
  .subscribe({
    next: (value) => console.log(value),
    // error: (e) => console.error("error : ", e.message),
    // 위에서 catchError로 핸들링하기 때문에 사실상 무의미
    complete: () => console.log("complete"),
  });
