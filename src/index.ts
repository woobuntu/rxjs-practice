import { from } from "rxjs";
import axios from "axios";

async function fetch(value: string) {
  try {
    const { data } = await axios({
      url: `https://random-data-api.com/api/${value}/random_${value}`,
    });
    return data; // next로 emit될 값
  } catch (error: any) {
    return error.message; // error로 emit될 값
  }
}

from(fetch("none")).subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log("Error : ", error),
  complete: () => console.log("complete"),
});
