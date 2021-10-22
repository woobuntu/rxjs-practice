globalThis.XMLHttpRequest = require("xhr2");

import { forkJoin, map } from "rxjs";
import { ajax } from "rxjs/ajax";

interface Name {
  first_name: string;
}

interface City {
  city: string;
}

interface Food {
  dish: string;
}

const name$ = ajax<Name>(
  "https://random-data-api.com/api/name/random_name"
).pipe(map(({ response: { first_name } }) => first_name));

const city$ = ajax<City>(
  "https://random-data-api.com/api/address/random_address"
).pipe(map(({ response: { city } }) => city));

const food$ = ajax<Food>(
  "https://random-data-api.com/api/food/random_food"
).pipe(map(({ response: { dish } }) => dish));

forkJoin([name$, city$, food$]).subscribe({
  next: ([first_name, city, dish]) =>
    console.log(`${first_name} is from ${city} and likes to eat ${dish}`),
});
