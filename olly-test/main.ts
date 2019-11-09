import * as Rx from "rxjs";

const z = Rx.Observable.of(1);
const foo = Rx.Observable.of(1);

const subs = foo
  .do(console.log)
  .map(x => 2 * x)
  .do(console.log)
  .switchMap(y => z)
  .subscribe(x => {
    console.log(x);
  });
