import { filter, Observable } from "rxjs";

interface NewsItem {
  category: "Business" | "Sports";
  content: string;
}

const newsFeed$ = new Observable<NewsItem>((subscriber) => {
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "a" });
  }, 1000);
  setTimeout(() => {
    subscriber.next({ category: "Sports", content: "b" });
  }, 3000);
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "c" });
  }, 4000);
  setTimeout(() => {
    subscriber.next({ category: "Sports", content: "d" });
  }, 6000);
  setTimeout(() => {
    subscriber.next({ category: "Business", content: "e" });
  }, 7000);
});

const sportsNewsFeed$ = newsFeed$.pipe(
  filter((item) => item.category === "Sports")
);

sportsNewsFeed$.subscribe({
  next: (item: NewsItem) => console.log(item),
});
