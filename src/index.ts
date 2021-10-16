import { Observable } from "rxjs";

// 1. 관찰 가능한 stream생성
const observable$ = new Observable<string>((subscriber) => {
  subscriber.next("woo");
  setTimeout(() => subscriber.next("bun"), 2000);
  setTimeout(() => subscriber.next("tu"), 4000);
  // 여기에서는 예시를 위해 setTimeout을 작성했지만,
  // 원래라면 구독 취소 시점에 setTimeout도 따로 취소를 시켜주어야 한다.
  // 이렇게 남긴 채로 구독만 취소해버리면 메모리 누수나 사이드 이펙트가 발생할 수 있기 때문
});

// 2. next메서드가 정의되어 있는 관찰자 생성
// const observer = {
//   next: (value: string) => console.log(value),
// };

// 3. 관찰자를 stream의 구독자로 지정
// observable$.subscribe(observer);
// 위의 두 실행문의 축약형이 아래의 형태이다.
console.log("구독 1 시작");
observable$.subscribe((value) => console.log("구독1 : ", value));

setTimeout(() => {
  console.log("구독 2 시작");
  observable$.subscribe((value) => console.log("구독2 : ", value));
}, 1000);

// 0 구독 1 시작, 구독1 : woo
// 1000 구독 2 시작, 구독2 : woo
// 2000 구독1 : bun
// 3000 구독2 : bun
// 4000 구독1 : tu
// 5000 구독2 : tu
