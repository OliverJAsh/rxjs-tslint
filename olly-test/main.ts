import { Option } from "funfix-core";

const z = Option.of(1);
const foo = Option.of(1);

const subs = foo
  .map(x => 2 * x)
  .chain(y => z)
  .forEach(x => {
    console.log(x);
  });
