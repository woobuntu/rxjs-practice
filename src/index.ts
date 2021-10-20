globalThis.XMLHttpRequest = require("xhr2");

import { forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

const name$ = ajax<any>("https://random-data-api.com/api/name/random_name");

const city$ = ajax<any>(
  "https://random-data-api.com/api/address/random_address"
);

const food$ = ajax<any>("https://random-data-api.com/api/food/random_food");

forkJoin([name$, city$, food$]).subscribe({
  next: (responses) => {
    const [{ first_name }, { city }, { dish }] = responses.map(
      ({ response }) => response
    );
    console.log(`${first_name} is from ${city} and likes to eat ${dish}`);
  },
});
