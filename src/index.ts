import { from } from "rxjs";

// from(["woo", "bun", "tu"]).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("complete"),
// });

const somePromise = new Promise((resolve, reject) => {
  // resolve("Resolved");
  reject(new Error("Rejected"));
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log(value), // resolve
  complete: () => console.log("complete"),
  error: (e) => console.error("Error : ", e.message), // reject
});
