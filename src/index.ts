import { filter, map, of, tap } from "rxjs";

of(1, 7, 3, 6, 2)
  .pipe(
    filter((value) => value > 5),
    tap({ next: (value) => console.log("tap", value) }),
    map((value) => value * 2)
  )
  .subscribe({
    next: (value) => console.log(value),
  });
