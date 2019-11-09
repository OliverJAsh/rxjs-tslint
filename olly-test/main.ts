import { Option as FunfixOption } from "funfix-core";

const z: FunfixOption<number> = FunfixOption.of(1);
const foo = FunfixOption.of(1);

const subs = foo
  .map(x => 2 * x)
  .chain(y => z)
  .forEach(x => {
    console.log(x);
  });

const r = foo
  .map(x => 2 * x)
  .chain(y => z)
  .getOrElse(1);
